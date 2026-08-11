from pathlib import Path

replacements = {
    Path('simulateur-prix-minimum-rentable.html'): [
        ('<title>Prix minimum rentable | Outil Contre-évidence</title>', '<title>Calculer son prix minimum rentable : temps, coûts et tarif plancher | Contre-Évidence</title>'),
        ('<meta name="description" content="Après le dossier prix, calculez votre plancher économique à partir de votre capacité mensuelle réellement mobilisable, du temps consommé par la mission et des coûts directs."/>', '<meta name="description" content="Calculez le prix minimum rentable d’une mission à partir du revenu à couvrir, des heures réellement mobilisables, du trajet, de la préparation et des coûts directs."/>'),
        ('<meta name="robots" content="noindex,follow"/>', ''),
        ('<link rel="canonical" href="https://contreevidence.github.io/dossiers/calculer-prix-minimum-rentable.html"/>', '<link rel="canonical" href="https://contreevidence.github.io/simulateur-prix-minimum-rentable.html"/>'),
        ('<meta name="dateModified" content="2026-08-10"/>', '<meta name="dateModified" content="2026-08-11"/>'),
    ],
    Path('simulateur-cout-formation.html'): [
        ('<title>Coût réel d’une formation | Outil Contre-évidence</title>', '<title>Calculer le coût réel d’une formation : prix, salaire perdu et retour | Contre-Évidence</title>'),
        ('<meta name="description" content="Après le dossier formation, calculez le coût économique et testez vos propres hypothèses de revenu futur sans salaire prérempli."/>', '<meta name="description" content="Calculez le coût économique d’une formation : prix net, frais, revenu sacrifié, mois de transition et délai de récupération selon vos hypothèses de revenu."/>'),
        ('<meta name="robots" content="noindex,follow"/>', ''),
        ('<link rel="canonical" href="https://contreevidence.github.io/dossiers/formation-vaut-elle-le-cout.html"/>', '<link rel="canonical" href="https://contreevidence.github.io/simulateur-cout-formation.html"/>'),
        ('<meta name="dateModified" content="2026-08-10"/>', '<meta name="dateModified" content="2026-08-11"/>'),
        ('<div class="start-here"><div><div class="kicker">Après le calcul</div>', '<div class="tool-panel"><h2>Rémunération et aides pendant la formation</h2><p>Ce simulateur mesure votre <strong>coût économique</strong> ; il ne calcule pas vos droits. Pour estimer les rémunérations, allocations et aides mobilisables pendant une formation, utilisez le service officiel <a href="https://candidat.francetravail.fr/portail-simulateurs/accueil-formation" rel="noopener noreferrer">Mes Ressources Formation de France Travail</a>, puis reportez ici uniquement les financements réellement confirmés.</p></div><div class="start-here"><div><div class="kicker">Après le calcul</div>'),
    ],
    Path('outil-pilotage-recherche-emploi.html'): [
        ('<title>Pilotage recherche d’emploi | Outil Contre-évidence</title>', '<title>Tableau de suivi de recherche d’emploi : candidatures, entretiens et offres | Contre-Évidence</title>'),
        ('<meta name="description" content="Après le plan 30 jours, suivez candidatures, réponses, entretiens et offres pour observer où se situe le goulot sans seuil universel."/>', '<meta name="description" content="Suivez candidatures, réponses, entretiens et offres dans un tableau local, puis comparez des séries cohérentes pour identifier où votre recherche d’emploi bloque."/>'),
        ('<meta name="robots" content="noindex,follow"/>', ''),
        ('<link rel="canonical" href="https://contreevidence.github.io/dossiers/plan-30-jours-recherche-emploi.html"/>', '<link rel="canonical" href="https://contreevidence.github.io/outil-pilotage-recherche-emploi.html"/>'),
        ('<meta name="dateModified" content="2026-08-10"/>', '<meta name="dateModified" content="2026-08-11"/>'),
    ],
}

for path, pairs in replacements.items():
    text = path.read_text(encoding='utf-8')
    for old, new in pairs:
        if old not in text:
            if new and new in text:
                continue
            raise SystemExit(f'Replacement marker not found in {path}: {old[:100]}')
        text = text.replace(old, new, 1)
    if 'name="robots" content="noindex' in text:
        raise SystemExit(f'noindex remains in {path}')
    expected = f'https://contreevidence.github.io/{path.as_posix()}'
    if f'rel="canonical" href="{expected}"' not in text:
        raise SystemExit(f'self canonical missing in {path}')
    path.write_text(text, encoding='utf-8')
    print(f'Promoted {path}')
