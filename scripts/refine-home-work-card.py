from pathlib import Path
p=Path('index.html')
text=p.read_text(encoding='utf-8')
old='<ul><li>Formation &amp; reconversion</li><li>Salariat &amp; carrière</li><li>Entrepreneuriat</li></ul>'
new='<ul><li>Trouver ou retrouver un emploi</li><li>Changer, accepter ou négocier</li><li>Entreprendre sans se fragiliser</li></ul>'
if old not in text:
    if new in text:
        print('Homepage already aligned.')
        raise SystemExit(0)
    raise SystemExit('Old Vie professionnelle bullets not found')
p.write_text(text.replace(old,new,1),encoding='utf-8')
print('Updated homepage Vie professionnelle card.')
