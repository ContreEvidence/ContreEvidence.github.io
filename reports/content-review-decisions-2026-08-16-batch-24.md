# Content review decisions — 2026-08-16 — batch 24

## Purpose

Move below the priority-9 blind-spot queue and test the next recruitment, administrative, mobility and real-estate signals. Unlike batches 22 and 23, this batch found one genuine decision gap.

## REWRITE

### `articles/50-candidatures-zero-reponse.html`

**Decision: TARGETED REWRITE.**

The article already located the stage where the employment funnel breaks, used comparable cohorts and discouraged changing several variables at once. The remaining gap was causal: **which actor or channel controls the failing stage?**

That distinction can change the correct action. A candidate receiving no human response may have a visibility/routing/prescreening problem; a candidate stopped after an HR call may face salary, availability, stability or project-readability concerns; a candidate rejected after a job interview needs different proof; repeated final-round losses call for comparison of the residual decision factors rather than another generic CV rewrite.

Added:

1. **`2 bis. Localiser aussi qui contrôle l’étape qui casse`**
   - maps funnel failure to the actor/channel to identify;
   - separates initial routing/prescreening, HR/recruiter, operational manager and final decision;
   - gives a different test for each failure point;
   - explicitly warns against correcting the document when the real lock is elsewhere.

2. **`6 bis. Même preuve, autre canal : le test qui évite de surcorriger le CV`**
   - keeps target, level and evidence as constant as possible;
   - changes the application channel on a small comparable series;
   - explains how different response rates can reveal visibility/routing rather than a sudden change in competence;
   - preserves the rule: do not change CV, job, salary, geography and channel at the same time.

Metadata and visible update date were aligned to **2026-08-16** after the rewrite.

Main content commit produced by the one-shot workflow:
- `3f77a24561f8ff1d9b3c7d9dbf1fbde0d4ec570f` — `Deepen zero-response recruitment gatekeeper diagnosis`

Metadata alignment commit:
- `9b2dbd6f69ff2c40c73e56bec6e8f338a621750b` — `Align zero-response article update metadata`

Temporary patch workflows were removed after use.

## PRESERVE

### `dossiers/debloquer-demarche-administrative.html`

**Decision: PRESERVE.**

The heuristic reports missing real-objective/substitution and reversal motifs, but the page already contains both explicitly. It asks what the requested document is intended to prove, proposes equivalent evidence rather than falsifying or bypassing a rule, distinguishes technical/procedural/substantive blocks, escalates to the level that can actually decide, treats legal deadlines as priority constraints, tests a legitimate parallel route to the same objective and includes a dedicated **“Quand arrêter d’insister”** section.

No expansion is justified.

### `dossiers/demenager-pour-un-emploi-salaire-minimum.html`

**Decision: PRESERVE.**

The page already converts mobility into a full economic threshold: salary, housing, transport, transition, time, household liquidity and job risk. It treats the trial-period downside, separates confirmed aid from assumed aid, models reversibility and explicitly advises that renting first can buy information when an employment move would otherwise be coupled with an immediate property purchase.

Its final decision test includes money, time, liquidity under job loss and the durable option created by the move. The missing “wait / risk transfer” lexical signals are therefore not missing decision dimensions.

### `dossiers/cout-complet-achat-immobilier.html`

**Decision: PRESERVE.**

The page already separates purchase price from total capital mobilised, monthly payment from economic cost, capital repayment from interest, deposit from free money, and bank capacity from household capacity. It includes the bank/HCSF layer, copropriété risk, opportunity cost, resale, duration and a multi-shock stress test including early resale, works, income loss and lower resale price.

The reader already receives the relevant gatekeepers and the conditions under which the purchase ceases to be robust.

### `dossiers/reconversion-sans-formation-longue.html`

**Decision: PRESERVE.**

The dossier already begins with real job offers rather than training catalogues, identifies the actual lock — legal qualification, technical skill, recent evidence, sector experience or HR signal — and compares long training, targeted certification, VAE, bridge role, immersion and direct application.

It includes worked economic examples, opportunity cost, a market test before buying training, explicit reversal conditions and a 30-day path ending in “enrol, defer or change route”. The heuristic's missing gatekeeper/substitution motifs are already represented by the diagnostic itself.

## Implementation notes

- The first one-shot patch workflow successfully created the content commit.
- A later metadata-only workflow run failed at the commit step because the metadata alignment had already been produced by the earlier updated workflow; the Python step itself found no remaining change. No public content was lost.
- Both temporary workflow files were then deleted.
- No permanent workflow was added.

## Doctrine from batch 24

1. **Funnel stage is not enough; identify the gatekeeper or channel controlling that stage.**
2. **A channel can be a causal variable.** When possible, keep the evidence stable and change the route before concluding that the candidate is the problem.
3. **Controlled variation creates information.** Changing five dimensions at once may increase activity while reducing diagnostic value.
4. **Preserve explicit stopping rules even if the heuristic misses their wording.**
5. **After a targeted HTML rewrite, metadata consistency is part of editorial correctness, not cosmetic cleanup.**
