from pathlib import Path

p = Path('dossiers/travailler-moins-vivre-mieux.html')
text = p.read_text(encoding='utf-8')
if 'Parcours d’information sur la retraite progressive' in text:
    print('Official reference block already present.')
    raise SystemExit(0)

block = '''<div class="source-note"><strong>Repères officiels à vérifier avant de décider</strong><p>Les calculs de ce dossier servent à comparer des scénarios. Les droits réels dépendent du statut, du contrat, de la convention collective, de la quotité de travail et de la carrière.</p><ul><li><a href="https://www.service-public.fr/particuliers/vosdroits/F1915" rel="noopener noreferrer">Service-Public — durée minimale et règles générales du temps partiel dans le privé</a></li><li><a href="https://www.service-public.fr/particuliers/vosdroits/F486" rel="noopener noreferrer">Service-Public — travail à temps partiel d’un fonctionnaire</a></li><li><a href="https://services.info-retraite.fr/service/parcours-dinformation-sur-la-retraite-progressive/" rel="noopener noreferrer">Info Retraite — parcours d’information sur la retraite progressive</a></li><li><a href="https://www.info-retraite.fr/portail-info/sites/PortailInformationnel/home/actualites-1/estimez-votre-retraite-rapidemen.html" rel="noopener noreferrer">Info Retraite — estimation personnalisée, y compris passage à temps partiel et retraite progressive</a></li></ul><p><strong>À retenir :</strong> ne transformez jamais le ratio « salaire perdu / temps libéré » en réponse juridique ou retraite. Il mesure un arbitrage économique ; les droits doivent être vérifiés dans votre régime.</p></div>'''

marker = '<h2>10. Qualité de vie : définir des indicateurs avant le changement</h2>'
if marker not in text:
    raise SystemExit('Current section 10 marker not found')
text = text.replace(marker, block + marker, 1)
text = text.replace('2026-08-10', '2026-08-11')
text = text.replace('10/08/2026', '11/08/2026')
p.write_text(text, encoding='utf-8')
print('Updated', p)
