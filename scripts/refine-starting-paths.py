from pathlib import Path

p=Path('parcours-de-vie.html')
text=p.read_text(encoding='utf-8')
if 'Je pose les premières briques' in text:
    print('Starting paths already refined.')
    raise SystemExit(0)
start_marker='<section><div class="container"><div class="section-head"><div class="kicker">Trois parcours</div>'
start=text.find(start_marker)
if start<0:
    raise SystemExit('Old starting-path section not found')
end=text.find('</section>',start)
if end<0:
    raise SystemExit('Starting-path section end not found')
end+=len('</section>')
new='''<section><div class="container"><div class="section-head"><div class="kicker">Votre point de départ</div><h2>Vous n’avez pas besoin d’avoir le même niveau pour entrer ici.</h2><p>Premières bases, retour à l’emploi, transition ou patrimoine déjà constitué : choisissez simplement la situation qui ressemble le plus à la vôtre aujourd’hui.</p></div><div class="situation-grid"><a class="situation-card" href="themes/argent.html#budget"><span class="number">A</span><h3>Je pose les premières briques</h3><p>Budget, dépenses, dettes, réserve de sécurité et première épargne — sans avoir besoin de connaître le vocabulaire de l’investissement.</p></a><a class="situation-card" href="dossiers/emploi-chercher-accepter-negocier-evoluer.html"><span class="number">B</span><h3>Je cherche un emploi ou je veux retravailler</h3><p>Premier poste, reprise après interruption, candidatures, entretiens, offre, contrat et progression.</p></a><a class="situation-card" href="dossiers/quitter-travail-reconversion-sans-se-fragiliser.html"><span class="number">C</span><h3>Je veux changer quelque chose d’important</h3><p>Quitter, se reconvertir ou réorganiser sa vie professionnelle sans décider avant d’avoir mesuré le risque et la marge de manœuvre.</p></a><a class="situation-card" href="themes/argent.html"><span class="number">D</span><h3>J’ai déjà un patrimoine à piloter</h3><p>Allocation, immobilier, dette, liquidités, concentration, retraite et arbitrages : lire l’ensemble avant de modifier une ligne.</p></a></div></div></section>'''
text=text[:start]+new+text[end:]
p.write_text(text,encoding='utf-8')
print('Updated',p)
