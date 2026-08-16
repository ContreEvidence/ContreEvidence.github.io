# Content review decisions — 2026-08-16 — batch 20

## Purpose

Resume the autonomous editorial-depth review immediately after batch 19. This batch applies human review to the pages surfaced by the corpus blind-spot heuristic and explicitly separates a real decision-quality gap from a lexical false positive.

The batch also treats source hygiene as a reader-facing editorial requirement: assistant/UI citation tokens must never appear in published HTML.

## REWRITE

### `dossiers/comparer-deux-offres-emploi.html`

**Decision: REWRITE.**

The previous page was useful but still below the current Contre-Évidence decision standard. It compared salary, contract, time and trajectory, but did not go far enough on the hidden assumptions that can reverse a choice.

The rewritten page now includes:

- non-negotiable constraints before scoring;
- missing information that can change the decision;
- the real gatekeeper behind each promise;
- disposable income rather than headline salary alone;
- total time captured by the job;
- contractual, managerial and organisational risk;
- professional capital created after 18 months;
- quality-of-life effects kept separate from an artificial average score;
- adjacent situations: unemployed, already employed, tight household budget, strong cash reserve, imminent property project, need for recovery;
- central, degraded and opportunity scenarios;
- explicit cost of waiting for a hypothetical third option;
- option C: negotiate, delay, stay put or reject both;
- threshold-based negotiation on the variable that actually changes the decision;
- reversal conditions;
- a post-entry check to verify that the hypothesis which justified the choice actually materialises.

The core question is no longer “which offer scores highest?” but “which offer remains acceptable when the favourable assumption disappears?”.

## PRESERVE — human review overrides heuristic score

### `articles/competences-transferables.html`

**Decision: PRESERVE.**

The page already develops transfer evidence, proof, reframing, market readability and the distinction between possessing a skill and proving its usefulness in another context. The heuristic mainly misses lexical markers rather than a real decision surface.

### `dossiers/creer-entreprise-sans-diplome.html`

**Decision: PRESERVE.**

Already covers regulated activities, qualification holder, experience-based routes where applicable, scope reduction, staged launch, false gatekeepers, adjacent situations and stop/reversal conditions. More generic sections would reduce density without changing a decision.

### `dossiers/finances-residence-principale.html`

**Decision: PRESERVE on substance.**

The page already covers duration, CDI/CDD/public/independent variants, sunk costs, mobility, liquidity, value of use, couple trajectories, exit routes, fallback rental, scenarios and reversal conditions. A source-hygiene correction was made, but no additional editorial expansion was justified.

### `dossiers/combien-chiffre-affaires-pour-vivre.html`

**Decision: PRESERVE on substance.**

The 26-section model already spans micro-entreprise, EI au réel, société, TVA, B2B/B2C, margin, capacity, three worked cases, associates, regulated activity, working-capital need, seasonality, protection, substitution levers, post-aid viability and reversal conditions. The blind-spot score is a lexical false positive.

### `dossiers/decider-a-deux-travail-patrimoine.html`

**Decision: PRESERVE.**

The page already deals with coupled decisions, asymmetric constraints, household robustness and situations in which one person’s professional or patrimonial choice changes the other person’s options. No missing dimension was identified that would materially alter feasibility, downside or reversibility.

### `dossiers/inflation-comprendre-histoire-pouvoir-achat.html`

**Decision: PRESERVE.**

This is primarily an explanatory and historical dossier. Forcing every operational decision motif — gatekeeper, negotiation threshold, waiting option, field test — into an explanatory page would be a category error. The right standard is explanatory completeness, not lexical conformity with decision dossiers.

### `dossiers/metiers-accessibles-sans-diplome.html`

**Decision: PRESERVE.**

The page is already substantially developed around actual accessibility, qualification constraints, progression paths, proof of competence and adjacent profiles. Additional generic decision motifs would not materially improve the reader’s actionability.

## SOURCE-HYGIENE FIXES — not editorial expansion

### Explicit source replacements

- `dossiers/finances-residence-principale.html`: replaced an internal assistant citation token with an ordinary public ANIL source link while preserving the argument and structure.
- `dossiers/combien-chiffre-affaires-pour-vivre.html`: replaced internal citation tokens with reader-visible official links to Bercy, Urssaf and Entreprendre.Service-Public; all 26 sections and examples were preserved.
- `dossiers/dependance-gros-client.html`: replaced internal legal citation tokens with public Légifrance links for the passages on abrupt termination of an established commercial relationship and B2B payment terms.

### Repository-wide cleanup

A new source-hygiene rule was added to `.github/workflows/site-integrity.yml`. It fails the integrity check if a public HTML page contains the private-use delimiters used by assistant/UI citation tokens.

The first run deliberately exposed nine remaining affected pages:

- `dossiers/acheter-logement-sans-se-fragiliser.html`
- `dossiers/finances-transmission-patrimoine.html`
- `dossiers/tresorerie-bfr-entreprise.html`
- `dossiers/finances-investissement-locatif.html`
- `dossiers/acheter-ou-louer-si-on-risque-demenager.html`
- `dossiers/passer-80-pourcent-cout-reel.html`
- `dossiers/indivision-immobiliere-sortir-sans-subir.html`
- `dossiers/audit-copropriete-avant-achat.html`
- `dossiers/patrimoine-marge-de-manoeuvre.html`

A deterministic one-shot cleanup then removed only the internal UI/citation tokens from those HTML files. It did not rewrite prose, figures, headings or page structure.

The temporary cleanup workflow was removed after use. The permanent prevention rule remains in `Site integrity`.

## Validation

- Initial source-hygiene run: `Site integrity` #221 — failed as intended and identified the nine residual pages.
- Deterministic cleanup commit: `02238e8009f83282cfd2f15e80bbc55a33865bba`.
- Independent revalidation on the cleaned repository: `Site integrity` #222 — **SUCCESS**.
- Temporary cleanup workflow removed after successful validation.

## Doctrine from batch 20

1. **A heuristic blind-spot score is a triage queue, not a writing target.** Human review decides whether a missing motif is a real missing decision dimension or only missing vocabulary.
2. **“Do not add more words” is a valid editorial decision.** A complete page should be preserved when expansion would not change feasibility, choice, downside, timing or reversibility.
3. **Expand only when the missing dimension can alter the reader’s decision.** Examples include a hidden gatekeeper, an adjacent situation that reverses the answer, an unmodelled downside, a real substitution, or an option to wait with measurable value.
4. **Public sources must be ordinary reader-visible sources.** Assistant/UI rendering tokens are forbidden in published HTML.
5. **Source hygiene is editorial quality, not cosmetic cleanup.** This is especially true in legal, financial and patrimonial passages where the reader must be able to inspect the underlying authority.
6. **Regression prevention belongs in the existing integrity pipeline.** Temporary repair machinery should be removed once the corpus is clean.
