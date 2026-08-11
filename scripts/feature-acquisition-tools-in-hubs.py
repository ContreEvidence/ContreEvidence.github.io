from pathlib import Path

# Entrepreneuriat: expose the price floor calculator next to its companion guide.
p = Path('themes/entreprendre.html')
text = p.read_text(encoding='utf-8')
old = '<a href="../dossiers/calculer-prix-minimum-rentable.html">Guide : calculer un prix minimum rentable →</a><a href="../dossiers/tresorerie-bfr-entreprise.html">Guide : rentabilité, trésorerie et BFR →</a>'
new = '<a href="../dossiers/calculer-prix-minimum-rentable.html">Guide : calculer un prix minimum rentable →</a><a href="../simulateur-prix-minimum-rentable.html">Outil : calculer mon prix plancher →</a><a href="../dossiers/tresorerie-bfr-entreprise.html">Guide : rentabilité, trésorerie et BFR →</a>'
if old in text:
    text = text.replace(old, new, 1)
elif new not in text:
    raise SystemExit('Entrepreneuriat price pillar marker not found')
p.write_text(text, encoding='utf-8')

# Emploi & carrière: expose only the two tools that directly support the hub's main decisions.
p = Path('themes/travail.html')
text = p.read_text(encoding='utf-8')
marker = '<div class="start-here" style="margin-top:1.3rem"><div><div class="kicker">Changer de métier</div>'
block = '<div class="start-here" style="margin-top:1.3rem"><div><div class="kicker">Passer à l’action</div><h2>Vous voulez suivre ou comparer plutôt que continuer à lire ?</h2><p>Deux outils restent volontairement simples : suivre l’entonnoir réel de vos candidatures, ou comparer deux offres sur le salaire, le temps, le contrat et les risques.</p></div><div class="btns"><a class="btn btn-primary" href="../outil-pilotage-recherche-emploi.html">Suivre mes candidatures</a><a class="btn btn-ghost" href="../outil-comparer-offres-emploi.html">Comparer deux offres</a></div></div>'
if block not in text:
    if marker not in text:
        raise SystemExit('Emploi hub reconversion marker not found')
    text = text.replace(marker, block + marker, 1)
p.write_text(text, encoding='utf-8')

print('Featured acquisition tools in Entrepreneuriat and Emploi hubs.')
