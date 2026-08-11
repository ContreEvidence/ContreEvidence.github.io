from pathlib import Path

updates = {
    Path('themes/argent.html'): [
        (
            '<a href="../dossiers/prix-attendre-finances.html">Commencer : combien coûte le fait de remettre ses finances à plus tard ? →</a><a href="../dossiers/audit-budget-60-minutes.html">Guide : faire l’audit du budget →</a>',
            '<a href="../dossiers/prix-attendre-finances.html">Commencer : combien coûte le fait de remettre ses finances à plus tard ? →</a><a href="../simulateur-prix-attendre.html">Outil : calculer ce que me coûte le fait d’attendre →</a><a href="../dossiers/audit-budget-60-minutes.html">Guide : faire l’audit du budget →</a>'
        )
    ],
    Path('themes/travail.html'): [
        (
            '<a class="btn btn-primary" href="../dossiers/quitter-travail-reconversion-sans-se-fragiliser.html">Formation & reconversion</a>',
            '<a class="btn btn-primary" href="../dossiers/quitter-travail-reconversion-sans-se-fragiliser.html">Construire ma reconversion</a>'
        )
    ],
    Path('dossiers/formation-vaut-elle-le-cout.html'): [
        (
            '<p><a class="back" href="../parcours-vie-professionnelle.html">← Retour à Formation & reconversion</a></p>',
            '<p><a class="back" href="../parcours-vie-professionnelle.html">← Retour à Vie professionnelle</a></p>'
        )
    ],
}

for path, pairs in updates.items():
    text = path.read_text(encoding='utf-8')
    for old, new in pairs:
        if old in text:
            text = text.replace(old, new, 1)
        elif new not in text:
            raise SystemExit(f'Marker not found in {path}: {old[:100]}')
    path.write_text(text, encoding='utf-8')
    print(f'Updated {path}')
