#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATE_ISO = "2026-08-12"
DATE_FR = "12/08/2026"


def load(rel):
    path = ROOT / rel
    return path, path.read_text(encoding="utf-8")


def save(path, text):
    path.write_text(text, encoding="utf-8")


def insert_before(text, marker, block):
    if block in text:
        return text
    if marker not in text:
        raise RuntimeError(f"Marker not found: {marker}")
    return text.replace(marker, block + marker, 1)


# 1) The audit must recognize the official domains already used by the site.
path, text = load("scripts/audit_content_freshness.py")
text = text.replace(
    '"service-public.fr", "economie.gouv.fr", "impots.gouv.fr", "urssaf.fr",',
    '"service-public.fr", "service-public.gouv.fr", "economie.gouv.fr", "impots.gouv.fr", "urssaf.fr",'
)
text = text.replace(
    '"francetravail.fr", "france-travail.fr", "banque-france.fr", "hcsf.gouv.fr",',
    '"francetravail.fr", "france-travail.fr", "banque-france.fr", "hcsf.gouv.fr",\n    "amf-france.org", "garantiedesdepots.fr", "demission-reconversion.gouv.fr",'
)
save(path, text)

# 2) Patrimoine × temps de travail: add actual retirement sources and revalidation date.
path, text = load("dossiers/patrimoine-permet-il-travailler-moins.html")
text = text.replace('2026-08-11', DATE_ISO)
text = text.replace('11/08/2026', DATE_FR)
source_block = (
    '<h2>Sources officielles</h2><ul>'
    '<li><a href="https://www.info-retraite.fr/portail-info/sites/PortailInformationnel/home/mes-droits-a-la-retraite/ma-vie-professionnelle-1/travail/part-time-employment.html" rel="noopener noreferrer">Info Retraite — travail à temps partiel et droits à la retraite</a>.</li>'
    '<li><a href="https://www.service-public.fr/particuliers/actualites/A18039" rel="noopener noreferrer">Service-Public — retraite progressive et estimation via le compte retraite</a>.</li>'
    '</ul><p class="small">Les effets d’un temps partiel sur la retraite dépendent du régime, du statut et des modalités de cotisation. Vérification des repères officiels : 12/08/2026.</p>'
)
text = insert_before(text, '<section class="ce-related"', source_block)
save(path, text)

# 3) Reconversion: anchor the unemployment-rights caveat to current official sources.
path, text = load("dossiers/quitter-travail-reconversion-sans-se-fragiliser.html")
text = text.replace('2026-08-11', DATE_ISO)
text = text.replace('11/08/2026', DATE_FR)
source_block = (
    '<h2>Sources officielles à vérifier avant toute rupture</h2><ul>'
    '<li><a href="https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/a-chaque-situation-son-allocatio/quelle-est-ma-situation-professi/je-perds-ou-je-quitte-un-emploi/je-veux-demissionner-et-jai-un-p.html" rel="noopener noreferrer">France Travail — démission et projet de reconversion professionnelle</a>.</li>'
    '<li><a href="https://www.demission-reconversion.gouv.fr/etape1_remplir-les-conditions" rel="noopener noreferrer">Démission-reconversion — conditions et étapes avant la démission</a>.</li>'
    '</ul><p class="small">Les droits à l’ARE après démission ne sont pas automatiques : ils dépendent du motif, du statut et du respect des démarches avant la rupture. Vérification : 12/08/2026.</p>'
)
text = insert_before(text, '</article>', source_block)
save(path, text)

# 4) Comparison of envelopes: rules were rechecked, make the review date machine-readable.
path, text = load("articles/comparatif-enveloppes-pea-assurance-vie-cto-per.html")
if 'name="dateModified"' not in text:
    meta = f'<meta name="dateModified" content="{DATE_ISO}"/><meta property="article:modified_time" content="{DATE_ISO}"/>'
    text = text.replace('</head>', meta + '</head>', 1)
if '"dateModified"' not in text:
    text = text.replace('"publisher":', f'"dateModified": "{DATE_ISO}", "publisher":', 1)
if 'Mis à jour le ' not in text:
    text = text.replace('</div></section>\n<article', f'<div class="ce-update-meta" data-ce-review="1"><span>Mis à jour le {DATE_FR} · Règles des enveloppes revalidées sur sources officielles</span></div></div></section>\n<article', 1)
save(path, text)

# 5) Side activity while employed: official sources were already present; make review date explicit in metadata.
path, text = load("dossiers/lancer-activite-sans-quitter-emploi.html")
if 'name="dateModified"' not in text:
    meta = f'<meta name="dateModified" content="{DATE_ISO}"><meta property="article:modified_time" content="{DATE_ISO}">'
    text = text.replace('</head>', meta + '</head>', 1)
text = text.replace('11/08/2026', DATE_FR)
save(path, text)

print("Targeted freshness fixes applied.")
