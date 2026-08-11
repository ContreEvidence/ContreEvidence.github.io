from pathlib import Path

layers = "['assets/library-catalog.js','assets/library-daily-money.js','assets/library-work-foundations.js','assets/library-transitions.js','assets/library-acquisition.js']"
old_layers = "['assets/library-catalog.js','assets/library-daily-money.js','assets/library-work-foundations.js']"

files = [
    Path('scripts/add-related-content.cjs'),
    Path('.github/workflows/catalog-integrity.yml'),
    Path('.github/workflows/library-coverage-audit.yml'),
    Path('.github/workflows/related-content-audit.yml'),
]
changed=[]
for p in files:
    text=p.read_text(encoding='utf-8')
    new=text.replace(old_layers,layers)
    if new!=text:
        p.write_text(new,encoding='utf-8')
        changed.append(str(p))

p=Path('scripts/generate-rss.cjs')
text=p.read_text(encoding='utf-8')
needle="runCatalog('assets/library-work-foundations.js');\nrunCatalog('assets/tools-catalog.js');"
replacement="runCatalog('assets/library-work-foundations.js');\nrunCatalog('assets/library-transitions.js');\nrunCatalog('assets/library-acquisition.js');\nrunCatalog('assets/tools-catalog.js');"
if needle in text:
    p.write_text(text.replace(needle,replacement,1),encoding='utf-8')
    changed.append(str(p))
elif "runCatalog('assets/library-transitions.js');" not in text:
    raise SystemExit('RSS catalog insertion point not found')

print('Changed:', ', '.join(changed) if changed else 'none')
