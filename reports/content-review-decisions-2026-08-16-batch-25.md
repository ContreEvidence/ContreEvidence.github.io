# Content review decisions — 2026-08-16 — batch 25

## Purpose

This batch changes the review lens after a user-level observation: the corpus has become increasingly strong once a reader is already inside a problem, but some **entry surfaces remain weaker than the downstream analysis**.

The specific gaps reviewed were:

- starting to save when the reader does not yet have an established financial system;
- preparing a job application before the first real application is sent;
- preparing retirement while departure is still distant, before decumulation becomes the dominant question.

The batch therefore prioritises **zero → first action → first observable state → first real-world test → next layer**, rather than continuing to expand already mature downstream dossiers.

## TARGETED REWRITE

### `articles/construire-epargne-de-zero.html`

**Decision: TARGETED REWRITE.**

The page already had the correct economic sequence: stop a structural deficit, create a first cushion, distinguish predictable expenses from emergencies, handle expensive debt without returning to zero, build a full reserve and invest only genuinely long-horizon money.

The missing surface was more operational: a reader who agrees with the framework could still close the page without knowing what to do during the first week.

Added **`1 bis. Les sept premiers jours : installer le système avant de chercher le rendement`**:

1. inspect 60–90 days of actual account movements;
2. separate predictable annual/irregular expenses from saving;
3. choose the first ordinary incident the cushion must absorb;
4. create a separate safe and accessible pocket;
5. automate an amount below the repeatable observed surplus;
6. pre-decide how irregular inflows will be allocated;
7. write a withdrawal rule so predictable expenses do not repeatedly destroy the cushion.

The new **minimum viable savings system** is deliberately small: operating account + safety/provision pocket + one repeatable transfer + one monthly review.

A reversal branch is explicit: if day 1 shows a structurally negative month, the first action is not to force a savings transfer. Making the monthly flow non-negative becomes the real starting point.

Main cross-page/hub implementation commit:
- `a1cb76382f5cc060854d2d93dcfbf1cd368e6595` — `Strengthen first-step savings career and retirement paths`

Metadata alignment:
- `b960636c8bf2d8e1b9cb5314fb199c2d15e84533` — `Align batch 25 entry-path metadata`

## CREATE

### `dossiers/preparer-candidature-avant-postuler.html`

**Decision: CREATE A DEDICATED ENTRY PAGE.**

The existing employment corpus had strong pages for:

- running a 30-day job-search experiment;
- diagnosing many applications with no response;
- diagnosing interviews that do not convert;
- comparing offers and negotiating.

What was missing was the stage **before application #1**. Expanding `plan-30-jours-recherche-emploi.html` would have mixed setup with iteration and made its experimental function less clear.

The new page therefore covers:

- choosing one primary target and at most one adjacent target;
- reading 10–20 representative offers as market data before writing the CV;
- building an **requirement → proof → result → where to show it** matrix;
- creating a master CV before targeted versions;
- preparing five reusable evidence stories before an interview exists;
- separating the filters controlled by the channel/form, recruiter/HR, operational manager and final decision-maker;
- treating the application channel as a variable that can be tested;
- adapting preparation for first-job, interrupted-career, senior, sector-switch, missing-diploma and already-employed profiles;
- a seven-day setup ending in a real comparable first batch;
- explicit hand-offs to the 30-day pilot, zero-response diagnosis and interview diagnosis.

The page also includes an anti-procrastination rule: preparation must terminate in market exposure. It should create a clean test, not become an indefinite attempt to perfect a CV.

Creation commit:
- `20f82f23613a2f83a4b0ff206dae5f927c9b2c9b` — `Add pre-application preparation journey`

### `dossiers/preparer-retraite-droits-epargne-logement.html`

**Decision: CREATE A DEDICATED PREPARATION PAGE.**

The corpus already contained two useful but different retirement-related layers:

- `patrimoine-selon-age-construire-utiliser.html` — broad patrimonial lifecycle;
- `finances-retraite-decumulation.html` — near/at-retirement income and withdrawal mechanics.

Neither fully answered the earlier question: **what should I actually prepare when retirement is still 5, 10, 20 or 30 years away?**

The new page therefore begins before the financial product:

1. retrieve and inspect recorded career rights;
2. compare personalised pension estimates at several potential departure dates;
3. estimate future normal and essential spending;
4. map housing costs and debt end-dates;
5. distinguish actually mobilisable capital from assets that merely exist on the balance sheet;
6. calculate a retirement-income gap rather than choosing an arbitrary target capital;
7. change priorities according to horizon: 20–30+, 10–20, 5–10 and under 5 years;
8. distinguish employee, public-sector, independent, mixed-career, part-time/interrupted and expatriation situations;
9. integrate housing, couple asymmetry and the budget of the survivor;
10. treat the PER as a tool that may serve the plan, not as the plan itself;
11. provide a concrete first 30-day preparation sequence;
12. model both the cost of waiting and the cost of locking into the wrong solution too early;
13. define events that force a recalculation;
14. hand off to the decumulation dossier once withdrawals become the dominant problem.

Current factual points were grounded in official retirement-service and AMF sources. The page deliberately avoids hard-coding a supposedly universal legal retirement age; the correct answer depends on personal career data and rules that can change.

Creation commit:
- `6665fcb6103d6342d61908ed9cce6366d2227f92` — `Add practical retirement preparation journey`

## PRESERVE AS DOWNSTREAM LAYERS

### `dossiers/plan-30-jours-recherche-emploi.html`

**Decision: PRESERVE.**

Its job is no longer to teach the initial setup. It is the **test-and-iteration layer** after a first candidature system exists: comparable batches, funnel metrics, one-variable changes, evidence mapping, interview debrief and a 30-day decision cycle.

### `dossiers/finances-retraite-decumulation.html`

**Decision: PRESERVE.**

It remains the correct page once retirement is close enough that withdrawal order, sequence risk, liquid reserves, couple income, longevity and decumulation become the central variables.

### `dossiers/patrimoine-selon-age-construire-utiliser.html`

**Decision: PRESERVE.**

It keeps its wider lifecycle function. The new retirement-preparation dossier supplies the specialised operational layer without forcing the age-based page to become a second retirement manual.

## Hub architecture changed

Batch 25 does not merely create two pages; it changes how readers enter the corpus.

### Patrimoine

`themes/argent.html` now starts the “Argent au quotidien” pillar with:

**Commencer : construire sa première épargne à partir de zéro**

The former first entry, the cost of waiting, remains useful but moves into an explanatory role rather than acting as the first instruction for a novice saver.

The “Retraite & transmission” pillar now separates:

1. **Commencer : préparer sa retraite 5, 10, 20 ou 30 ans avant**;
2. **Retraite proche : transformer le patrimoine en revenus**.

That distinction removes a major stage error: preparation and decumulation are related but are not the same decision problem.

### Vie professionnelle

`parcours-vie-professionnelle.html` now separates:

1. **Je commence ma recherche — Je veux préparer mes premières candidatures**;
2. **Ma recherche est lancée — Elle n’aboutit pas assez**.

The search path therefore becomes:

**prepare → send a controlled first batch → pilot for 30 days → diagnose zero response / interviews → decide on offers and negotiation**.

## Implementation

Public-content commits:

- `6665fcb6103d6342d61908ed9cce6366d2227f92` — new retirement-preparation journey;
- `20f82f23613a2f83a4b0ff206dae5f927c9b2c9b` — new pre-application journey;
- `a1cb76382f5cc060854d2d93dcfbf1cd368e6595` — savings first-week protocol + hub routing + sitemap;
- `b960636c8bf2d8e1b9cb5314fb199c2d15e84533` — metadata and sitemap alignment.

A temporary one-shot workflow was used for deterministic changes in minified hub HTML. Its first definition was invalid and produced no content job or public modification. The corrected run succeeded. The temporary workflow was then removed at:

- `e4c35b54d7eee455a4b4907994f0e1f580d1b2fb` — `Remove batch 25 temporary entry-path workflow`.

No permanent workflow was added.

## Doctrine from batch 25

1. **Starting is its own decision surface.** A page can explain the right model and still fail a beginner if it does not supply the first executable sequence.
2. **Entry pages should reduce initial cognitive load.** They should produce one observable state, one small decision and one next layer rather than expose the full expert corpus immediately.
3. **Preparation must terminate in reality.** A candidature setup ends in a real batch; a savings setup ends in real separated cash flow; retirement preparation ends in actual rights, estimates and a measurable gap.
4. **Retirement begins with rights and future spending, not a product.** The savings vehicle is downstream of the retirement problem.
5. **Saving begins with flow, provisions and resilience, not yield.** The first euros have a different mission from long-term investment capital.
6. **A candidature begins with target and evidence, not layout.** Presentation is downstream of the market question and the proof available.
7. **Prepare and troubleshoot must remain separate layers.** A clean corpus distinguishes configuration before action from diagnosis after action.
8. **The next review should explicitly search for other missing entry surfaces** — first budget, first investment, first property purchase, first business project, first management role, first transmission conversation — without assuming every topic needs a new page.
