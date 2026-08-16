# Content review decisions — 2026-08-16 — batch 22

## Purpose

Continue the autonomous editorial-depth review after batch 21. This batch deliberately tests a harder question: when the heuristic reports a missing decision motif, is that motif actually missing from the reader's decision surface, or is the page already complete for its specific editorial function?

The answer for this batch is unusually consistent: **no public page required expansion**. The review therefore records PRESERVE decisions rather than adding generic paragraphs for lexical conformity.

## PRESERVE — human review overrides heuristic score

### `dossiers/audit-budget-60-minutes.html`

**Decision: PRESERVE.**

The page already contains the dimension the heuristic appears to miss. It explicitly distinguishes a normal budget correction from a structural deficit, tests a 10% income fall, compares realistic savings with the size of the deficit, maps the delay and cost of reducing fixed commitments, models risk transfers and ends with explicit reversal conditions.

The important decision threshold is already present: if realistic and sustainable savings are smaller than the deficit, the reader must stop optimising minor expenses and move to income, housing, transport, debt or household organisation. More gatekeeper or timing vocabulary would not change the diagnosis.

### `dossiers/automatiser-ou-non-processus.html`

**Decision: PRESERVE.**

The page already applies the sequence **delete → simplify → standardise → assist → automate**, measures the ROI by actual volume, includes maintenance and failure costs, distinguishes full automation from human-assisted execution, tests the system on a sample before deployment and requires a rollback plan before generalisation.

It also defines abandonment conditions when maintenance rises, exceptions multiply, a high-impact error appears, a supplier becomes critical or the underlying volume falls. The heuristic's missing “wait / statu quo” and “risk transfer” labels are therefore semantic false positives.

### `dossiers/classes-actifs-allocation-patrimoine.html`

**Decision: PRESERVE as a reference map.**

This page has a deliberately different function from a portfolio-decision dossier. Its job is to separate **economic exposure, vehicle and wrapper**, classify the main asset families, reveal double counting and show why apparent product diversification can hide the same underlying risk.

It already states that a complete allocation does **not** mean owning every class, asks what role a class fills, what risk and illiquidity it adds, and hands the reader to `finances-allocation-portefeuille.html` for capacity of risk, drawdown, stress scenarios and rebalancing.

Adding a second full allocation framework here would create duplication rather than depth. The correct architecture is **reference map here; decision model in the linked dossier**.

### `dossiers/depenses-recurrentes-abonnements-assurances.html`

**Decision: PRESERVE.**

The page does more than hunt subscriptions. It annualises recurring costs, models a worked household example, separates comfort subscriptions from insurance and essential services, checks for coverage gaps as well as duplicates, requires comparison of guarantees, deductibles, commitment, exit fees and service level before cancellation, and calculates replacement cost rather than gross savings.

The central risk-transfer question — especially for insurance — is already explicit. A generic “second-order effects” section would repeat the existing logic without changing an action.

### `dossiers/immobilier-allocation-globale-patrimoine.html`

**Decision: PRESERVE.**

The dossier already prevents the main local optimisation error: judging a property without the rest of the household balance sheet. It integrates residence, rental property, indirect real estate, debt, liquidity and financial assets; distinguishes gross exposure from net wealth; treats the main home as a hybrid asset; models concentration, workload and illiquidity; values alternative uses; and requires a multi-shock stress test before the favourable scenario.

Its key robustness question is already explicit: **can the household keep the asset without a forced sale?** No additional generic waiting or reversal section is needed.

### `dossiers/protocole-verifier-reponse-ia.html`

**Decision: PRESERVE.**

The page already scales verification to the cost of error, separates facts, calculations, interpretations and recommendations, checks dates and source scope, requires primary sources for material claims, independently recomputes important calculations, tests hidden assumptions and actively searches for counter-evidence.

Crucially, it also defines **when to stop verifying**: when the remaining uncertainty can no longer eliminate an option, change the ranking, alter the timing or materially increase potential harm. This is already the relevant stopping and reversal logic for this subject.

### `articles/frais-fiscalite-rendement-net.html`

**Decision: PRESERVE.**

The article already goes beyond “fees are bad”. It reconstructs every cost layer, compares gross/net/real/useful return, treats tax as a path-dependent scenario, distinguishes a cheaper product from a better system and calculates a migration break-even point.

It explicitly includes one-off transfer costs, tax triggered by a move, spreads, administrative time, temporary unavailability and the possible loss of age or useful contractual functions. The reader is therefore already asked whether a fee saving is large enough and long-lived enough to compensate for the option destroyed by changing.

### `articles/grosse-entree-argent-que-faire.html`

**Decision: PRESERVE.**

The article already makes waiting a deliberate strategy rather than inertia: the 90-day sequence is explicitly adaptable, early steps protect access and documentation, obligations and near-term projects are removed before any investment decision, the new cash is re-read inside the total balance sheet, family requests receive a written rule and long-term investment is delayed until the capital's actual function is known.

The core reversal is already built into the architecture: receiving cash does not create an obligation to deploy it, and a sum ceases to be “investable” as soon as another function has priority.

### `dossiers/allocation-patrimoine-selon-situation.html`

**Decision: PRESERVE.**

This is the correct downstream decision page for the reference taxonomy above. It starts from purpose, horizon, income stability and the loss the household can absorb without selling, then changes the allocation across concrete situations: stable income, near-term property purchase, already-high real-estate exposure, unstable income, unemployment/separation, inheritance and retirement/transmission contexts.

Each scenario includes a trigger that would change the allocation. The page therefore already supplies the heterogeneity and reversal logic that should not be duplicated into every asset-class reference page.

### `dossiers/piloter-patrimoine-selon-taille.html`

**Decision: PRESERVE.**

The page correctly rejects a mechanical “wealth threshold = product” doctrine. It distinguishes statistical wealth levels from decision rules, separates **size** from **structural complexity**, introduces a complexity budget, shows that €300k can be harder to manage than €2m depending on assets and leverage, and identifies the real threshold for professional or structural complexity: when the expected cost of bad coordination exceeds the cost of the advice or structure.

This is already an explicit condition of reversal rather than a generic high-net-worth prescription.

### `dossiers/tresorerie-bfr-entreprise.html`

**Decision: PRESERVE.**

The BFR dossier already localises the cash gatekeepers from purchase order to payment, distinguishes contractual from observed payment delay, tests seven substitutions before external financing, shows why growth can destroy cash, gives the firm the explicit right to slow sales, models a 13-week cash trough and links waiting to a concrete future cash event rather than hope.

It ends with explicit conditions of reversal for worsening DSO, marginal BFR, customer concentration, deposits and adverse-scenario liquidity. The page is already at the current decision standard.

### `dossiers/choisir-statut-micro-ei-eurl-sasu.html`

**Decision: PRESERVE.**

The page already decomposes the false single question “which status?” into separate clocks for micro-regime eligibility, VAT, actual costs, tax on profit, governance, social protection and the need for a company. It identifies the actual gatekeeper behind a constraint — law, administration, client, bank, insurer or belief — and tests the smallest change before creating a more complex legal structure.

The trajectory logic and measurable next trigger are already explicit. Adding more generic status-comparison prose would reduce the value of the page's strongest idea: **complexify only when the complexity buys something measurable**.

## Cross-page architectural finding

Batch 22 confirms an important corpus-level rule: **depth can be distributed across a deliberate path without being duplicated on every page**.

Examples:

- `classes-actifs-allocation-patrimoine.html` is the economic taxonomy; `finances-allocation-portefeuille.html` and `allocation-patrimoine-selon-situation.html` carry the portfolio decision and scenario work.
- `depenses-recurrentes-abonnements-assurances.html` identifies and triages recurring commitments; the insurance-specific risk-transfer dossier carries the deeper insure/self-insure decision.
- `grosse-entree-argent-que-faire.html` sequences the first decisions; the dedicated lump-sum article handles immediate versus progressive market entry.

A page should therefore not be penalised for linking to the next layer when the hand-off is explicit and the local page has already completed its own job.

## Implementation and validation

- No public HTML was changed in this batch.
- No current legal, tax or financial fact was altered.
- The only repository change is this review log, which records human PRESERVE decisions and the reason for them.
- No temporary workflow or repair artifact was introduced.

## Doctrine from batch 22

1. **Editorial function comes before motif coverage.** A reference map, calculator guide, operational protocol and decision dossier should not all contain the same sections.
2. **Cross-page architecture is part of depth.** A precise hand-off to the correct next dossier is better than copying a second decision framework into the current page.
3. **Semantic coverage beats lexical coverage.** “Wait”, “risk transfer” or “reversal” do not need to appear as headings when the decision mechanism is already explicit.
4. **A preserve-only batch is a positive result.** It means the triage system is still challenging pages without forcing inflation when the reader would learn nothing new.
5. **Do not convert every useful article into a universal framework.** Depth is the ability to change the right decision, not the number of decision motifs present on the page.
6. **The next review should move down the queue rather than re-open these pages without a new signal, content change or external rule change.**
