from pathlib import Path

path = Path('themes/argent.html')
s = path.read_text(encoding='utf-8')

replacements = {
    '.patrimoine-hub .maturity-head h2{margin:.25rem 0 .5rem;font-size:clamp(2rem,4vw,3.25rem);letter-spacing:-.045em;line-height:1}':
    '.patrimoine-hub .maturity-head h2{margin:.25rem 0 .5rem;font-size:clamp(1.9rem,3.6vw,2.9rem);letter-spacing:-.035em;line-height:1.08}',

    '.patrimoine-hub .maturity-card .step{font-size:.68rem;text-transform:uppercase;letter-spacing:.12em;font-weight:900;color:#7a5c19}':
    '.patrimoine-hub .maturity-card .step{font-size:.72rem;text-transform:uppercase;letter-spacing:.14em;font-weight:900;color:#7a5c19}',

    '.patrimoine-hub .maturity-card h3{margin:.55rem 0 .55rem;font-size:clamp(1.45rem,2.4vw,2rem);letter-spacing:-.035em}':
    '.patrimoine-hub .maturity-card h3{margin:.5rem 0 .45rem;font-size:1.2rem;letter-spacing:-.02em;line-height:1.2}',

    '.patrimoine-hub .maturity-card p{margin:0;color:#59646d;line-height:1.55}':
    '.patrimoine-hub .maturity-card p{margin:0;color:#59646d;font-size:.96rem;line-height:1.55}',

    '.patrimoine-hub .pillar h2{margin:.3rem 0 .55rem}':
    '.patrimoine-hub .pillar h2{margin:.3rem 0 .55rem;font-size:1.45rem;letter-spacing:-.025em}',

    '.patrimoine-hub .pillar-links a{font-weight:800;text-decoration:none}':
    '.patrimoine-hub .pillar-links a{font-weight:700;font-size:.96rem;line-height:1.45;text-decoration:none}.patrimoine-hub .pillar-links a strong{font-weight:850}',

    '.patrimoine-hub .pillar-tools strong{display:block;margin-bottom:.45rem;color:#6d5120;text-transform:uppercase;letter-spacing:.08em;font-size:.78rem}':
    '.patrimoine-hub .pillar-tools>strong{display:block;margin-bottom:.45rem;color:#6d5120;text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:900}',

    '.patrimoine-hub .foundation h2{margin:.35rem 0 .6rem;font-size:clamp(1.8rem,3vw,2.7rem);letter-spacing:-.035em}':
    '.patrimoine-hub .foundation h2{margin:.35rem 0 .6rem;font-size:clamp(1.7rem,3.2vw,2.7rem);letter-spacing:-.035em;line-height:1.1}'
}

for old, new in replacements.items():
    if old not in s:
        raise SystemExit(f'Expected typography rule not found: {old[:90]}')
    s = s.replace(old, new, 1)

s = s.replace('<meta name="dateModified" content="2026-08-17"/>', '<meta name="dateModified" content="2026-08-17"/>', 1)
path.write_text(s, encoding='utf-8')
