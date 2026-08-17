from pathlib import Path
import re

items = [
    (
        'dossiers/patrimoine-selon-age-construire-utiliser.html',
        '<h2>4. 30–45 ans : les engagements deviennent structurants</h2>',
        '''<figure class="ce-visual ce-visual-wide"><img src="../assets/visuals/commencer-jeune-effet-temps.svg" alt="Courbe comparant l'effet de versements mensuels de 200 euros commencés à 20, 30 ou 40 ans jusqu'à 65 ans" loading="lazy"><figcaption>Illustration mathématique : avec le même effort mensuel, le temps passé investi produit un écart considérable. Ce n’est pas une prévision de rendement.</figcaption></figure>'''
    ),
    (
        'dossiers/finances-enveloppes-fiscalite.html',
        '<h2>2. Tableau de comparaison 2026</h2>',
        '''<figure class="ce-visual ce-visual-wide"><img src="../assets/visuals/enveloppes-ordre-decision.svg" alt="Schéma montrant l'ordre objectif, horizon, actif, enveloppe puis support concret" loading="lazy"><figcaption>Choisir d’abord le rôle de l’argent évite de construire une stratégie autour d’un avantage fiscal ou d’un produit.</figcaption></figure>'''
    ),
    (
        'dossiers/premier-investissement-comment-commencer.html',
        '<h2>2. Ne choisissez pas encore un produit : écrivez l’objectif en une phrase</h2>',
        '''<figure class="ce-visual"><img src="../assets/visuals/capital-investissable.svg" alt="Exemple visuel distinguant l’épargne totale du capital réellement disponible pour investir" loading="lazy"><figcaption>Avant le premier ordre, séparez l’argent qui doit rester disponible de celui qui peut réellement rester investi longtemps.</figcaption></figure>'''
    ),
]

for path, anchor, figure in items:
    p = Path(path)
    s = p.read_text(encoding='utf-8')
    if figure not in s:
        if anchor not in s:
            raise SystemExit(f'Anchor not found: {path}')
        s = s.replace(anchor, figure + '\n' + anchor, 1)
    head, tail = s.split('</head>', 1)
    if '<meta name="dateModified"' in head:
        head = re.sub(r'<meta name="dateModified" content="[^"]+"\s*/?>', '<meta name="dateModified" content="2026-08-17"/>', head, count=1)
    else:
        head += '<meta name="dateModified" content="2026-08-17"/>'
    head = re.sub(r'article:modified_time" content="[^"]+"', 'article:modified_time" content="2026-08-17"', head, count=1)
    p.write_text(head + '</head>' + tail, encoding='utf-8')

# Trigger marker batch 39
