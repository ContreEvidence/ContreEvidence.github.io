from pathlib import Path

pages = {
    Path('simulateur-prix-attendre.html'): (
        'https://contreevidence.github.io/dossiers/prix-attendre-finances.html',
        'https://contreevidence.github.io/simulateur-prix-attendre.html',
    ),
    Path('simulateur-acheter-ou-louer.html'): (
        'https://contreevidence.github.io/dossiers/finances-residence-principale.html',
        'https://contreevidence.github.io/simulateur-acheter-ou-louer.html',
    ),
}

for path, (old_canonical, self_canonical) in pages.items():
    text = path.read_text(encoding='utf-8')
    text = text.replace('<meta name="robots" content="noindex,follow">', '', 1)
    text = text.replace(f'<link rel="canonical" href="{old_canonical}">', f'<link rel="canonical" href="{self_canonical}">', 1)
    text = text.replace('<meta name="dateModified" content="2026-08-10"/>', '<meta name="dateModified" content="2026-08-11"/>', 1)
    text = text.replace('<meta name="dateModified" content="2026-08-10">', '<meta name="dateModified" content="2026-08-11">', 1)
    if 'name="robots" content="noindex' in text:
        raise SystemExit(f'noindex still present in {path}')
    if f'rel="canonical" href="{self_canonical}"' not in text:
        raise SystemExit(f'self canonical missing in {path}')
    path.write_text(text, encoding='utf-8')
    print(f'Promoted {path}')
