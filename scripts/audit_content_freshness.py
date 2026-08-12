#!/usr/bin/env python3
"""Audit non bloquant de fraîcheur éditoriale pour Contre-Évidence.

Le script repère les pages dont la décision dépend de règles, barèmes, aides,
fiscalité, crédit ou données susceptibles de changer. Il contrôle la dateModified,
la présence d'au moins une source officielle pour les sujets les plus sensibles et
produit un rapport Markdown + JSON exploitable par GitHub Actions.
"""
from __future__ import annotations

import argparse
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

RULE_PATTERNS = re.compile(
    r"\b(service[- ]public|france travail|urssaf|imp[oô]t|fiscal|taxe|bar[eè]me|smic|"
    r"droit du travail|code du travail|licenciement|d[eé]mission|ch[oô]mage|allocation|"
    r"aide|caf|retraite|hcsf|taux d.endettement|pr[eê]t|cr[eé]dit immobilier|"
    r"p[eé]riode d.essai|contrat de travail|cdi|cdd|micro-entreprise|cotisation)\b",
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


def page_title(html: str, fallback: str) -> str:
    m = TITLE_RE.search(html)
    if not m:
        return fallback
    return re.sub(r"\s+", " ", TAG_RE.sub("", m.group(1))).strip()


def classify(text: str) -> tuple[str, int, bool]:
    if RULE_PATTERNS.search(text):
        return "règles / aides / fiscalité / emploi", 120, True
    if MARKET_PATTERNS.search(text):
        return "taux / marchés / immobilier", 180, False
    if SENSITIVE_PATTERNS.search(text):
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
        plain = TAG_RE.sub(" ", html)
        category, threshold, needs_official = classify(plain)
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

        sources = official_count(html)
        if needs_official and sources == 0:
            reasons.append("aucune source officielle détectée sur un sujet réglementaire")
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
        "Les seuils sont volontairement plus courts pour les règles, aides, fiscalité et emploi (120 jours), puis taux/marchés/immobilier (180 jours). L'audit signale une page ; il ne remplace pas la relecture humaine des sources.",
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
