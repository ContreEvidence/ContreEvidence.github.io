from pathlib import Path

p = Path('index.html')
text = p.read_text(encoding='utf-8')

old = '''<h2>Construire, prouver, faire évoluer ses compétences.</h2><p>Formation, emploi, rémunération, management et activité indépendante : raisonner en portefeuille de compétences et d’options.</p><ul><li>Formation & reconversion</li><li>Salariat & carrière</li><li>Entrepreneuriat</li></ul>'''
new = '''<h2>Trouver, changer, négocier, entreprendre.</h2><p>Premier emploi, retour à l’emploi, reconversion, offre, contrat, salaire, management ou activité indépendante : partez de la situation qui doit réellement changer.</p><ul><li>Trouver ou retrouver un emploi</li><li>Changer, accepter ou négocier</li><li>Entreprendre sans se fragiliser</li></ul>'''

if old not in text:
    if new in text:
        print('Homepage already aligned.')
        raise SystemExit(0)
    raise SystemExit('Current Vie professionnelle homepage card not found')

p.write_text(text.replace(old, new, 1), encoding='utf-8')
print('Updated homepage Vie professionnelle card.')
