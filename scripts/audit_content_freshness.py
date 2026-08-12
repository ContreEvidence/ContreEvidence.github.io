#!/usr/bin/env python3
"""Audit non bloquant de fraîcheur éditoriale pour Contre-Évidence.

Le script repère les pages dont la décision dépend réellement de règles, barèmes,
aides, fiscalité, crédit ou données susceptibles de changer. Il analyse en priorité
le titre, les headings et le contenu principal, en excluant navigation, footer,
éléments cachés et scripts afin de limiter les faux positifs.
"""
from __future__ import annotations

import argparse
import html as html_lib
import json
import re
from dataclasses import asdict, dataclass
from datetime import date, datetime
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]

OFFICIAL_DOMAINS = {
    "service-public.fr", "economie.gouv.fr", "impots.gouv.fr", "urssaf.fr",
    "francetravail.fr", "france-travail.fr", "banque-france.fr", "hcsf.gouv.fr",
    "anil.org", "insee.fr", "legifrance.gouv.fr", "travail-emploi.gouv.fr",
    "ameli.fr", "caf.fr", "info-retraite.fr", "lassuranceretraite.fr",
    "ecologie.gouv.fr", "entreprises.gouv.fr", "education.gouv.fr",
}

# Termes très discriminants : une seule occurrence dans le contenu principal peut suffire.
STRONG_RULE_PATTERNS = re.compile(
    r"\b(service[- ]public|france travail|urssaf|imp[oô]t(?:s)?|fiscalit[eé]|bar[eè]me|"
    r"smic|code du travail|licenciement|allocation ch[oô]mage|caf|hcsf|"
    r"taux d.endettement|micro-entreprise|cotisations? sociales?|"
    r"assurance ch[oô]mage|droit au ch[oô]mage|indemnit[eé]s? de rupture|"
    r"pr[eê]t [àa] taux z[eé]ro|ptz|plafond r[eé]glementaire|"
    r"d[eé]duction fiscale|abattement fiscal|plus-value immobili[eè]re)\b",
    re.I,
)

# Termes ambigus : ils ne classent une page en réglementaire que s'ils sont répétés
# ou accompagnés d'un vocabulaire explicitement normatif.
WEAK_RULE_PATTERNS = re.compile(
    r"\b(droit du travail|d[eé]mission|retraite|aide|cr[eé]dit immobilier|"
    r"p[eé]riode d.essai|contrat de travail|cdi|cdd|pr[eê]t|cotisation)\b",
    re.I,
)
NORMATIVE_PATTERNS = re.compile(
    r"\b(r[eè]gle|l[eé]gal|l[eé]gale|loi|plafond|seuil|condition d.[eé]ligibilit[eé]|"
    r"taux maximum|obligation|interdit|autorise|droit [àa]|d[eé]lai l[eé]gal|"
    r"indemnit[eé]|pr[eé]avis|bar[eè]me|exon[eé]ration|d[eé]duction|taxation)\b",
    re.I,
)
MARKET_PATTERNS = re.compile(
    r"\b(taux|inflation|rendement|assurance-vie|livret|pea|per|etf|march[eé]|"
    r"prix immobilier|loyer|cr[eé]dit|emprunt|valorisation)\b",
    re.I,
)
SENSITIVE_PATTERNS = re.compile(
    r"\b(emploi|reconversion|salaire|immobilier|patrimoine|investissement|assurance|"
    r"retraite|entreprendre|formation|dette|budget|transmission)\b",
    re.I,
)

DATE_RE = re.compile(r'<meta\s+name=["\']dateModified["\']\s+content=["\'](\d{4}-\d{2}-\d{2})["\']', re.I)
HREF_RE = re.compile(r'href=["\'](https?://[^"\']+)["\']', re.I)
TITLE_RE = re.compile(r'<title>(.*?)</title>', re.I | re.S)
HEADING_RE = re.compile(r'<h[1-3][^>]*>(.*?)</h[1-3]>', re.I | re.S)
MAIN_RE = re.compile(r'<main\b[^>]*>(.*?)</main>', re.I | re.S)
ARTICLE_RE = re.compile(r'<article\b[^>]*>(.*?)</article>', re.I | re.S)
BODY_RE = re.compile(r'<body\b[^>]*>(.*?)</body>', re.I | re.S)
STRIP_BLOCKS_RE = re.compile(r'<(script|style|nav|footer|aside|template|noscript)\b[^>]*>.*?</\1>', re.I | re.S)
TAG_RE = re.compile(r"<[^>]+>")


@dataclass
class Finding:
    path: str
    title: str
    category: str
    modified: str | None
    age_days: int | None
    threshold_days: int
    official_sources: int
    status: str
    reasons: list[str]


def normalize_host(url: str) -> str:
    host = (urlparse(url).hostname or "").lower()
    return host[4:] if host.startswith("www.") else host


def official_count(html: str) -> int:
    hosts = {normalize_host(url) for url in HREF_RE.findall(html)}
    return sum(1 for host in hosts if any(host == d or host.endswith("." + d) for d in OFFICIAL_DOMAINS))


def clean_text(fragment: str) -> str:
    fragment = STRIP_BLOCKS_RE.sub(" ", fragment)
    text = TAG_RE.sub(" ", fragment)
    text = html_lib.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def main_fragment(html: str) -> str:
    for regex in (MAIN_RE, ARTICLE_RE, BODY_RE):
        match = regex.search(html)
        if match:
            return match.group(1)
    return html


def page_title(html: str, fallback: str) -> str:
    m = TITLE_RE.search(html)
    if not m:
        return fallback
    return clean_text(m.group(1))


def decision_text(html: str) -> tuple[str, str]:
    title = page_title(html, "")
    headings = " ".join(clean_text(h) for h in HEADING_RE.findall(html))
    body = clean_text(main_fragment(html))
    # Le texte de décision sert à détecter le thème; le corps est plafonné pour éviter
    # qu'une longue zone de recommandations annexes ne domine la classification.
    focus = " ".join(part for part in (title, headings, body[:24000]) if part)
    return focus, body


def classify(focus: str, body: str) -> tuple[str, int, bool]:
    strong_hits = len(STRONG_RULE_PATTERNS.findall(focus))
    weak_hits = len(WEAK_RULE_PATTERNS.findall(focus))
    normative_hits = len(NORMATIVE_PATTERNS.findall(focus))

    # Réglementaire seulement si le sujet en dépend vraiment : terme fort, ou plusieurs
    # termes ambigus accompagnés d'un vocabulaire normatif.
    if strong_hits >= 1 or (weak_hits >= 2 and normative_hits >= 1):
        return "règles / aides / fiscalité / emploi", 120, True

    market_hits = len(MARKET_PATTERNS.findall(focus))
    if market_hits >= 2:
        return "taux / marchés / immobilier", 180, False

    sensitive_hits = len(SENSITIVE_PATTERNS.findall(focus))
    if sensitive_hits >= 2:
        return "décision sensible", 270, False

    return "stable", 365, False


def iter_html() -> list[Path]:
    files: list[Path] = []
    for folder in (ROOT / "dossiers", ROOT / "articles"):
        if folder.exists():
            files.extend(folder.rglob("*.html"))
    return sorted(files)


def audit(today: date) -> list[Finding]:
    findings: list[Finding] = []
    for path in iter_html():
        html = path.read_text(encoding="utf-8", errors="replace")
        focus, body = decision_text(html)
        category, threshold, needs_official = classify(focus, body)
        if category == "stable":
            continue

        m = DATE_RE.search(html)
        modified = m.group(1) if m else None
        age = None
        reasons: list[str] = []
        status = "ok"
        if modified:
            try:
                age = (today - datetime.strptime(modified, "%Y-%m-%d").date()).days
            except ValueError:
                reasons.append("dateModified invalide")
                status = "critical"
        else:
            reasons.append("dateModified absente")
            status = "critical"

        if age is not None and age > threshold:
            reasons.append(f"mise à jour vieille de {age} j (seuil {threshold} j)")
            status = "critical" if age > threshold * 2 else "review"

        sources = official_count(main_fragment(html))
        if needs_official and sources == 0:
            reasons.append("aucune source officielle détectée sur un sujet réellement réglementaire")
            status = "critical"

        findings.append(Finding(
            path=str(path.relative_to(ROOT)).replace("\\", "/"),
            title=page_title(html, path.stem), category=category,
            modified=modified, age_days=age, threshold_days=threshold,
            official_sources=sources, status=status, reasons=reasons,
        ))
    return findings


def render_md(findings: list[Finding], today: date) -> str:
    counts = {s: sum(1 for f in findings if f.status == s) for s in ("critical", "review", "ok")}
    lines = [
        "# Audit de fraîcheur éditoriale",
        "",
        f"Date : **{today.isoformat()}**",
        "",
        f"- 🔴 À traiter : **{counts['critical']}**",
        f"- 🟠 À revalider : **{counts['review']}**",
        f"- 🟢 Dans la fenêtre de fraîcheur : **{counts['ok']}**",
        "",
        "La détection s'appuie sur le titre, les intertitres et le contenu principal. Les mentions de navigation, footer, scripts et recommandations annexes ne doivent plus suffire à classer une page en réglementaire.",
        "",
    ]
    actionable = [f for f in findings if f.status != "ok"]
    if not actionable:
        lines += ["## Aucun contenu sensible à revalider", "", "Tous les contenus détectés sont dans leur fenêtre de fraîcheur."]
        return "\n".join(lines) + "\n"

    lines += ["## Pages à vérifier", "", "| Priorité | Page | Catégorie | Dernière mise à jour | Sources officielles | Motif |", "|---|---|---|---:|---:|---|"]
    for f in sorted(actionable, key=lambda x: (0 if x.status == "critical" else 1, -(x.age_days or 0), x.path)):
        icon = "🔴" if f.status == "critical" else "🟠"
        reason = "; ".join(f.reasons).replace("|", "\\|")
        title = f.title.replace("|", "\\|")
        lines.append(f"| {icon} | `{f.path}` — {title} | {f.category} | {f.modified or '—'} | {f.official_sources} | {reason} |")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--today", help="YYYY-MM-DD, utile pour les tests")
    parser.add_argument("--markdown", default="freshness-report.md")
    parser.add_argument("--json", default="freshness-report.json")
    args = parser.parse_args()
    today = datetime.strptime(args.today, "%Y-%m-%d").date() if args.today else date.today()
    findings = audit(today)
    Path(args.markdown).write_text(render_md(findings, today), encoding="utf-8")
    Path(args.json).write_text(json.dumps([asdict(f) for f in findings], ensure_ascii=False, indent=2), encoding="utf-8")
    critical = sum(1 for f in findings if f.status == "critical")
    review = sum(1 for f in findings if f.status == "review")
    print(f"freshness: {critical} critical, {review} review, {len(findings)-critical-review} ok")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
