# Content review decisions — 2026-08-16 — batch 27

## Purpose

Extend the entry-surface review from “how do I start?” to a broader missing question:

> **Once I have started, what normally comes next — professionally and patrimonially — and how do the two trajectories change with age, stage and life events?**

The corpus already contained strong domain-specific material. The missing layer was orchestration: readers could understand a professional trajectory or a wealth trajectory separately, but they had to reconstruct the combined life sequence themselves.

This batch therefore treats time as a first-class navigation variable without turning age into a rigid prescription.

## REWRITE / ORCHESTRATE

### `parcours-de-vie.html`

**Decision: REWRITE THE CENTRAL ROUTER INTO A CROSS-DOMAIN LIFE-STAGE ROADMAP WITHOUT REPLACING ITS EXISTING “UNDERSTAND / CHOOSE / BUILD” ENTRY LOGIC.**

A new section, **“Feuille de route · Vie professionnelle × Patrimoine”**, now sits immediately after the page hero.

It uses six deliberately approximate age bands:

1. **18–25 — poser les fondations**;
2. **25–35 — accélérer sans se verrouiller**;
3. **35–45 — consolider et diversifier**;
4. **45–55 — transformer l’expérience en options**;
5. **55–65 — préparer la bascule**;
6. **65+ — utiliser, simplifier, transmettre**.

Each phase contains three different things rather than a generic age checklist:

- the dominant **professional** priority;
- the dominant **patrimonial** priority;
- a **signal of passage / control point** showing what should become true before the next layer becomes dominant.

The page explicitly states that age is only a proxy. A reader should use the phase matching the real state of their finances, employability, debt, responsibilities, mobility and retirement horizon even when their chronological age differs.

### Why this changes the reader’s decision

The previous architecture could encourage local optimization:

- maximize salary while destroying health or employability;
- buy property while destroying professional mobility;
- invest aggressively while a career transition needs liquidity;
- keep optimizing accumulation after capital could already buy time;
- treat retirement as a financial event only instead of a simultaneous income, work, housing and time transition.

The combined roadmap exposes these interactions directly.

### Reversal and heterogeneity rules added

The roadmap also makes three exceptions explicit:

- **“late” relative to an age band:** do not skip foundations to catch up with an arbitrary age target;
- **“ahead” relative to an age band:** do not imitate older households mechanically; concentration, objectives and optionality may become the real issues;
- **life event reset:** child, separation, unemployment, illness, inheritance, business creation, property purchase or move can send one axis back a phase without erasing progress on the other axes.

This prevents the roadmap from becoming a normative “wealth by age” ladder.

Implementation commit:
- `17596926dc1f5c1ff60332bd1308aeb0e7d48d40` — `Connect career and wealth life-stage roadmap`

## ROUTE / CONNECT

### `themes/argent.html`

The Patrimoine hub now links directly from its maturity section to the combined life roadmap.

**Reason:** a reader choosing between “bases / construction / pilotage” should also be able to ask whether the next financial step is compatible with the current career and life stage.

### `parcours-vie-professionnelle.html`

The professional hub now links from its main action area to the combined life roadmap.

**Reason:** the existing trajectory page explains the professional axis well, but the financial runway, housing choices and accumulated capital can materially change what a career decision makes possible.

### `dossiers/patrimoine-selon-age-construire-utiliser.html`

The detailed age-based wealth dossier now routes back to the combined roadmap.

**Decision: PRESERVE THE DOSSIER’S EXISTING DEPTH; ADD CROSS-DOMAIN CONTEXT RATHER THAN DUPLICATE PROFESSIONAL CONTENT.**

### `dossiers/trajectoire-professionnelle-selon-situation.html`

The detailed professional trajectory dossier now routes back to the combined roadmap.

**Decision: PRESERVE THE DOSSIER’S EXISTING DEPTH; ADD CROSS-DOMAIN CONTEXT RATHER THAN DUPLICATE PATRIMONIAL CONTENT.**

## PRESERVE

### `moins-de-25-ans.html`

**Decision: PRESERVE AS A NOINDEX REDIRECT.**

The old age-specific landing page correctly avoids classifying the entire user by age. The new roadmap uses age as a loose temporal signal inside a situation-based system, so reviving a standalone “under 25” silo would recreate the fragmentation the site already removed.

### `debuter.html`

**Decision: PRESERVE AS A NOINDEX ORIENTATION PAGE ROUTING TO `parcours-de-vie.html`.**

The new roadmap strengthens the destination; it does not justify recreating another competing entry page.

### `dossiers/patrimoine-selon-age-construire-utiliser.html`

**Decision on substantive body: PRESERVE.**

The dossier already rejects simplistic age formulas, distinguishes construction / consolidation / preparation / decumulation / transmission, discusses capital human, debt, residence-principal concentration, retirement horizon and transmission, and explicitly says transitions matter more than birthdays. Its gap was not depth but isolation from the professional trajectory.

### `dossiers/trajectoire-professionnelle-selon-situation.html`

**Decision on substantive body: PRESERVE.**

The dossier already covers first employment, no-diploma access, stable-job stagnation, ceilings, employer dependence, health, unemployment/interruption, second part of career and the use of financial margin to buy options. Its gap was not an additional professional stage but the missing bridge to the wealth trajectory.

## Causal model activated

The new architecture uses an explicit cross-domain mechanism:

- **financial margin → career optionality**, because savings buy decision time and reduce forced acceptance;
- **career progression → faster wealth construction**, because durable income and skill growth can increase savings capacity;
- **property commitment → potentially lower career mobility**, because debt, location and transaction costs can make geographic or income transitions harder;
- **entrepreneurial concentration → stronger need for financial diversification**, because business income and business capital can fail together;
- **wealth accumulation → ability to optimize time rather than only salary**, once essential spending and risk buffers are sufficiently covered;
- **approaching retirement → simultaneous work/income/asset transition**, so decumulation cannot be prepared as an isolated portfolio question.

Proof status: **CONDITIONAL / framework**, not a deterministic forecast. The causal relationships are used as decision architecture; individual priorities still depend on actual income, debt, household structure, health, contracts, pension rights, geography and objectives.

## Doctrine from batch 27

1. **A roadmap is not an age benchmark.** Age is a useful proxy for changing horizons, but the state of the system determines the sequence.
2. **Professional capital and financial capital are two interacting balance sheets.** Optimizing either in isolation can destroy options in the other.
3. **Every phase needs an exit condition.** “What should become true next?” is more useful than “what should I own at 40?”.
4. **Life events are roadmap resets, not exceptions hidden in footnotes.** A shock can change the order of operations immediately.
5. **Being behind does not justify skipping foundations. Being ahead does not justify copying an older allocation.** Both errors confuse age with state.
6. **The preferred editorial fix was orchestration, not duplication.** Existing deep pages remain domain references; `parcours-de-vie.html` becomes the cross-domain spine.
7. **The site now has two complementary navigation dimensions:** enter by the problem of today, or situate that problem inside the longer trajectory.
