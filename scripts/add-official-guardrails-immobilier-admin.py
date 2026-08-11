from pathlib import Path

changed=[]

# Immobilier: tax and transformation sources before threshold section.
p=Path('dossiers/bien-immobilier-garder-vendre-transformer.html')
text=p.read_text(encoding='utf-8')
if 'Repères officiels pour la vente et la transformation' not in text:
    marker='<h2>16. Les seuils de bascule</h2>'
    block='''<div class="source-note"><strong>Repères officiels pour la vente et la transformation</strong><p>Les exemples ci-dessus utilisent une fiscalité et des coûts simplifiés. Avant une décision réelle, vérifiez au minimum la nature du bien, l’usage, le régime de location et la faisabilité du projet.</p><ul><li><a href="https://www.impots.gouv.fr/particulier/je-vends-un-bien-immobilier" rel="noopener noreferrer">Impots.gouv.fr — vendre un bien immobilier et vérifier la fiscalité de la plus-value</a></li><li><a href="https://www.impots.gouv.fr/particulier/questions/je-vends-mon-bien-immobilier-vais-je-payer-de-la-plus-value-immobiliere" rel="noopener noreferrer">Impots.gouv.fr — plus-value immobilière : exonérations et cas imposables</a></li><li><a href="https://www.service-public.fr/particuliers/vosdroits/F17578" rel="noopener noreferrer">Service-Public — déclaration préalable de travaux, changement de destination et division</a></li><li><a href="https://www.service-public.fr/particuliers/vosdroits/F2416" rel="noopener noreferrer">Service-Public — transformer un local en logement : urbanisme, fiscalité et copropriété</a></li></ul><p><strong>Limite :</strong> ces ressources donnent les règles générales. Un projet peut dépendre du PLU local, du règlement de copropriété, de la destination du lot, de la situation fiscale du propriétaire et de la date de la cession.</p></div>'''
    if marker not in text: raise SystemExit('Immobilier threshold marker not found')
    text=text.replace(marker,block+marker,1)
    p.write_text(text,encoding='utf-8'); changed.append(str(p))

# Administrative dossier: distinguish practical escalation from legal recourse.
p=Path('dossiers/debloquer-demarche-administrative.html')
text=p.read_text(encoding='utf-8')
if 'Repères officiels avant une réclamation ou un recours' not in text:
    marker='<h2>Le tableau de suivi à recopier</h2>'
    block='''<div class="source-note"><strong>Repères officiels avant une réclamation ou un recours</strong><p>« Changer de niveau » est une méthode d’organisation, pas une voie de recours universelle. Le recours compétent, son destinataire et son délai dépendent de la décision et de l’organisme.</p><ul><li><a href="https://www.service-public.fr/particuliers/vosdroits/N559" rel="noopener noreferrer">Service-Public — obligations de l’administration vis-à-vis des usagers</a></li><li><a href="https://orientation.defenseurdesdroits.fr/" rel="noopener noreferrer">Défenseur des droits — vérifier si votre difficulté avec une administration entre dans ses missions</a></li><li><a href="https://www.defenseurdesdroits.fr/defendre-les-droits-des-usagers-des-services-publics-194" rel="noopener noreferrer">Défenseur des droits — difficultés avec une administration ou un service public</a></li></ul><p><strong>Attention aux délais :</strong> si une décision indique des voies et délais de recours, traitez-les comme une contrainte prioritaire. La méthode de ce dossier ne les suspend pas et ne remplace pas un conseil adapté lorsque l’enjeu juridique est important.</p></div>'''
    if marker not in text: raise SystemExit('Administrative tracking-table marker not found')
    text=text.replace(marker,block+marker,1)
    text=text.replace('2026-08-10','2026-08-11').replace('10/08/2026','11/08/2026').replace('09/08/2026','11/08/2026')
    p.write_text(text,encoding='utf-8'); changed.append(str(p))

print('Changed:', ', '.join(changed) if changed else 'none')
