from pathlib import Path

updates = {
    Path('dossiers/calculer-prix-minimum-rentable.html'): {
        'marker': '<p><a class="back" href="../parcours-vie-professionnelle.html">← Retour à Vie professionnelle</a></p>',
        'block': '<div class="decision-box"><h3>Passer au calcul</h3><p>Le dossier pose la logique économique. Le simulateur applique ensuite cette logique à une mission précise : revenu à couvrir, capacité réellement mobilisable, temps sur place, trajet, préparation, administratif et coûts directs.</p><p><a href="../simulateur-prix-minimum-rentable.html"><strong>Calculer le prix minimum rentable d’une mission →</strong></a></p></div>',
        'visible_old': 'Mis à jour le 09/08/2026 · Sources et hypothèses précisées dans le dossier',
        'visible_new': 'Mis à jour le 11/08/2026 · Méthode, exemples et outil de calcul vérifiés',
    },
    Path('dossiers/formation-vaut-elle-le-cout.html'): {
        'marker': '<p><a class="back" href="../parcours-vie-professionnelle.html">← Retour à Formation & reconversion</a></p>',
        'block': '<div class="decision-box"><h3>Chiffrer le coût économique</h3><p>Le dossier sert à décider si la formation mérite d’être envisagée. Le simulateur additionne ensuite prix net, frais, revenu sacrifié et mois de transition, puis compare vos propres hypothèses de revenu après formation.</p><p><a href="../simulateur-cout-formation.html"><strong>Calculer le coût réel de la formation →</strong></a></p></div>',
        'visible_old': 'Repères de vérification mis à jour le 8 août 2026',
        'visible_new': 'Repères, règles 2026 et outil de calcul vérifiés le 11 août 2026',
    },
    Path('dossiers/plan-30-jours-recherche-emploi.html'): {
        'marker': '<p><a class="back" href="../parcours-vie-professionnelle.html">← Retour à Vie professionnelle</a></p>',
        'block': '<div class="decision-box"><h3>Passer du plan au suivi réel</h3><p>Le plan explique quoi tester pendant 30 jours. Le tableau de suivi enregistre ensuite chaque candidature, réponse, entretien et offre, afin de comparer des séries cohérentes sans appliquer de taux cible universel.</p><p><a href="../outil-pilotage-recherche-emploi.html"><strong>Ouvrir le tableau de suivi de recherche d’emploi →</strong></a></p></div>',
        'visible_old': 'Mis à jour le 09/08/2026 · Sources et hypothèses précisées dans le dossier',
        'visible_new': 'Mis à jour le 11/08/2026 · Méthode et outil de pilotage vérifiés',
    },
}

for path, cfg in updates.items():
    text = path.read_text(encoding='utf-8')
    if cfg['block'] not in text:
        if cfg['marker'] not in text:
            raise SystemExit(f'Back marker not found in {path}')
        text = text.replace(cfg['marker'], cfg['block'] + cfg['marker'], 1)
    text = text.replace(cfg['visible_old'], cfg['visible_new'], 1)
    text = text.replace('<meta name="dateModified" content="2026-08-10"/>', '<meta name="dateModified" content="2026-08-11"/>', 1)
    text = text.replace('<meta property="article:modified_time" content="2026-08-10"/>', '<meta property="article:modified_time" content="2026-08-11"/>', 1)
    text = text.replace('"dateModified":"2026-08-10"', '"dateModified":"2026-08-11"', 1)
    path.write_text(text, encoding='utf-8')
    print(f'Linked {path}')
