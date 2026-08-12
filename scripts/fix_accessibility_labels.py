from pathlib import Path


def patch(path, replacements):
    p = Path(path)
    s = p.read_text(encoding='utf-8')
    for old, new in replacements:
        count = s.count(old)
        if count != 1:
            raise RuntimeError(f'{path}: expected 1 occurrence for {old!r}, found {count}')
        s = s.replace(old, new, 1)
    p.write_text(s, encoding='utf-8')

patch('outil-microscope-pea.html', [
    ('<input data-k="name" value="${esc(d.name)}" placeholder="Nom ou repère">', '<input data-k="name" aria-label="Nom de la ligne" value="${esc(d.name)}" placeholder="Nom ou repère">'),
    ('<input data-k="amount" type="number" min="0" step="100" value="${d.amount||\'\'}">', '<input data-k="amount" aria-label="Montant de la ligne" type="number" min="0" step="100" value="${d.amount||\'\'}">'),
    ('<input data-k="lookthrough" value="${esc(d.lookthrough)}" style="min-width:230px" placeholder="Entreprise A:5; Entreprise B:3,5">', '<input data-k="lookthrough" aria-label="Sous-jacents principaux de la ligne" value="${esc(d.lookthrough)}" style="min-width:230px" placeholder="Entreprise A:5; Entreprise B:3,5">'),
])

patch('outil-pilotage-recherche-emploi.html', [
    ('<input class="compact" type="date" data-f="date" value="${esc(r.date)}">', '<input class="compact" type="date" data-f="date" aria-label="Date de candidature" value="${esc(r.date)}">'),
    ('<input data-f="employer" value="${esc(r.employer)}">', '<input data-f="employer" aria-label="Employeur" value="${esc(r.employer)}">'),
    ('<input data-f="role" value="${esc(r.role)}">', '<input data-f="role" aria-label="Poste visé" value="${esc(r.role)}">'),
    ('<input data-f="segment" value="${esc(r.segment)}">', '<input data-f="segment" aria-label="Segment de recherche" value="${esc(r.segment)}">'),
    ('<input data-f="cv" value="${esc(r.cv)}">', '<input data-f="cv" aria-label="Version du CV" value="${esc(r.cv)}">'),
])

patch('simulateur-acheter-ou-louer.html', [
    ('<input id="appA" type="number"', '<input id="appA" aria-label="Évolution annuelle du prix du logement — scénario A" type="number"'),
    ('<input id="rentA" type="number"', '<input id="rentA" aria-label="Évolution annuelle du loyer — scénario A" type="number"'),
    ('<input id="altA" type="number"', '<input id="altA" aria-label="Rendement net du capital alternatif — scénario A" type="number"'),
    ('<input id="appB" type="number"', '<input id="appB" aria-label="Évolution annuelle du prix du logement — scénario B" type="number"'),
    ('<input id="rentB" type="number"', '<input id="rentB" aria-label="Évolution annuelle du loyer — scénario B" type="number"'),
    ('<input id="altB" type="number"', '<input id="altB" aria-label="Rendement net du capital alternatif — scénario B" type="number"'),
    ('<input id="appC" type="number"', '<input id="appC" aria-label="Évolution annuelle du prix du logement — scénario C" type="number"'),
    ('<input id="rentC" type="number"', '<input id="rentC" aria-label="Évolution annuelle du loyer — scénario C" type="number"'),
    ('<input id="altC" type="number"', '<input id="altC" aria-label="Rendement net du capital alternatif — scénario C" type="number"'),
])

patch('simulateur-cout-formation.html', [
    ('<input id="s1" type="number" min="0" step="50" placeholder="À saisir"/>', '<input id="s1" aria-label="Revenu net mensuel après formation — scénario A" type="number" min="0" step="50" placeholder="À saisir"/>'),
    ('<input id="s2" type="number" min="0" step="50" placeholder="À saisir"/>', '<input id="s2" aria-label="Revenu net mensuel après formation — scénario B" type="number" min="0" step="50" placeholder="À saisir"/>'),
    ('<input id="s3" type="number" min="0" step="50" placeholder="À saisir"/>', '<input id="s3" aria-label="Revenu net mensuel après formation — scénario C" type="number" min="0" step="50" placeholder="À saisir"/>'),
])

print('Accessible labels applied.')
