from pathlib import Path

FIG = {
    'salary': '''<figure class="ce-visual"><img src="../assets/visuals/premier-salaire-repartition.svg" alt="Exemple visuel de répartition d’un premier salaire de 1 600 euros entre dépenses, autonomie et investissement long terme" loading="lazy"><figcaption>Exemple pédagogique : la part investie augmente seulement quand la réserve et les projets proches sont déjà financés.</figcaption></figure>''',
    'budget': '''<figure class="ce-visual"><img src="../assets/visuals/budget-avant-apres.svg" alt="Comparaison visuelle d’un budget de 2 100 euros avant et après rééquilibrage" loading="lazy"><figcaption>Un budget se rééquilibre souvent par plusieurs arbitrages modestes plutôt que par une coupe spectaculaire.</figcaption></figure>''',
    'capital': '''<figure class="ce-visual"><img src="../assets/visuals/capital-investissable.svg" alt="Exemple de calcul du capital réellement investissable à partir de 25 000 euros de liquidités" loading="lazy"><figcaption>Le capital investissable est ce qui reste après la réserve, les projets proches et les dépenses déjà identifiées.</figcaption></figure>''',
    'allocation': '''<figure class="ce-visual ce-visual-wide"><img src="../assets/visuals/allocation-meme-capital-trois-situations.svg" alt="Même patrimoine financier de 100 000 euros réparti différemment selon trois situations" loading="lazy"><figcaption>Même capital, décisions différentes : l’horizon, les projets et le patrimoine déjà détenu modifient l’allocation.</figcaption></figure>''',
    'windfall': '''<figure class="ce-visual"><img src="../assets/visuals/grosse-somme-90-jours.svg" alt="Chronologie visuelle des 90 premiers jours après une grosse entrée d’argent" loading="lazy"><figcaption>La première décision utile n’est pas « quoi acheter ? », mais « quelle partie de cette somme a déjà une autre fonction ? ».</figcaption></figure>'''
}

def patch(path, anchor, insert, date_old=None, date_new='2026-08-17'):
    p = Path(path)
    s = p.read_text(encoding='utf-8')
    if insert in s:
        return False
    if anchor not in s:
        raise SystemExit(f'Anchor not found in {path}: {anchor[:90]}')
    s = s.replace(anchor, insert + '\n' + anchor, 1)
    if date_old:
        s = s.replace(date_old, date_new)
    p.write_text(s, encoding='utf-8')
    return True

# Global rendering style
css = Path('assets/finance.css')
s = css.read_text(encoding='utf-8')
marker = '/* ===== Visuels pédagogiques intégrés ===== */'
if marker not in s:
    s += '''\n\n/* ===== Visuels pédagogiques intégrés ===== */\n.ce-visual{margin:1.65rem 0 2rem;font-family:Inter,system-ui,sans-serif}\n.ce-visual img{display:block;width:100%;height:auto;border-radius:18px;background:#101820;border:1px solid rgba(16,24,32,.13);box-shadow:0 12px 28px rgba(16,24,32,.10)}\n.ce-visual figcaption{margin:.65rem .15rem 0;color:#5a6570;font-size:.86rem;line-height:1.5}\n.ce-visual-wide{width:min(980px,calc(100vw - 8vw));margin-left:50%;transform:translateX(-50%)}\n@media(max-width:820px){.ce-visual-wide{width:100%;margin-left:0;transform:none}.ce-visual img{border-radius:13px}.ce-visual figcaption{font-size:.82rem}}\n'''
    css.write_text(s, encoding='utf-8')

patch(
    'dossiers/premier-salaire-18-ans-chez-parents.html',
    '<div class="compare-wrap"><table class="compare-table"><thead><tr><th>Période</th>',
    FIG['salary'],
    '<meta name="dateModified" content="2026-08-16">'
)

patch(
    'dossiers/audit-budget-60-minutes.html',
    '<h2>6. Les dépenses qui collent valent souvent plus que les petites dépenses visibles</h2>',
    FIG['budget'],
    '<meta name="dateModified" content="2026-08-16"/>'
)

patch(
    'dossiers/seuils-maturite-patrimoniale.html',
    '<h2>2. Niveau 0 — Stabiliser : le premier seuil est un flux, pas un montant</h2>',
    FIG['capital'],
    '<meta name="dateModified" content="2026-08-16">'
)

patch(
    'dossiers/allocation-patrimoine-selon-situation.html',
    '<section class="allocation-case" id="stable">',
    FIG['allocation'],
    '<meta name="dateModified" content="2026-08-15"/>'
)

patch(
    'articles/grosse-entree-argent-que-faire.html',
    '<div class="warning-box"><strong>Important :</strong>',
    FIG['windfall'],
    '<meta name="dateModified" content="2026-08-12"/>'
)

# Trigger marker: batch 38
