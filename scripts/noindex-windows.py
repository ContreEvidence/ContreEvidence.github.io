from pathlib import Path

pages = [
    Path('hors-cadre.html'),
    Path('hors-cadre-cuisine.html'),
    Path('hors-cadre-decouvertes.html'),
    Path('hors-cadre-images.html'),
]

changed=[]
for p in pages:
    text=p.read_text(encoding='utf-8')
    if 'name="robots"' in text or "name='robots'" in text:
        continue
    marker='<meta name="viewport" content="width=device-width,initial-scale=1"/>'
    if marker not in text:
        marker='<meta name="viewport" content="width=device-width,initial-scale=1">'
    if marker not in text:
        raise SystemExit(f'Viewport marker not found in {p}')
    text=text.replace(marker, marker+'\n<meta name="robots" content="noindex,follow"/>',1)
    p.write_text(text,encoding='utf-8')
    changed.append(str(p))
print('Changed:', ', '.join(changed) if changed else 'none')
