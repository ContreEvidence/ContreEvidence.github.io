# Content review decisions — 2026-08-16 — batch 21

## Purpose

Continue the autonomous human review after batch 20. The blind-spot report remains a triage device only: this batch reviews the next high-priority items and expands only the page where a missing dimension materially changes diagnosis and action.

## REWRITE

### `dossiers/experience-devient-risque-recruteur.html`

**Decision: REWRITE / targeted deepening.**

The existing page was already strong on the content of the objections associated with an experienced or apparently overqualified profile: salary, stability, hierarchy, adaptation and reasons for accepting a lower-level role.

The real missing dimension was **where the filtering happens and who controls the next step**. Without that distinction, a reader could repeatedly rewrite a CV to solve a problem that actually appears only at the HR screen, the hiring-manager interview, the final decision, or in the economics of the target role itself.

Sections 13–19 were added without rewriting the strong first twelve sections. They now cover:

- localisation of the filter in the recruitment funnel;
- gatekeeper-specific diagnosis: initial screening, HR/recruiter, future manager, final decision;
- why pre-emptively answering every possible objection can weaken the profile;
- a controlled test strategy rather than changing target, CV, salary and narrative simultaneously;
- substitutions when the problem is economic or structural rather than editorial;
- second-order effects of over-correcting an experienced profile;
- when waiting or repositioning can dominate accepting immediately;
- explicit conditions of reversal: when to stop trying to “reassure” the same market and change the target, level, channel or evidence instead.

The original proof table becomes section 20.

**Core improvement:** the page now distinguishes **an objection to the profile** from **a filter at a particular stage**, and therefore connects each problem to the actor who can actually change the outcome.

## PRESERVE

### `dossiers/prix-attendre-finances.html`

**Decision: PRESERVE.**

This is a clear heuristic false positive. The page already contains:

- recurring-cost, inflation, debt, fees and delayed-investment examples;
- the opposite case where acting too early is more costly;
- a dedicated “when waiting is rational” section;
- a stress test in which early action destroys optionality;
- explicit reversal conditions;
- a decision threshold;
- a protocol that compares the cost of waiting with the cost of acting too early.

Adding generic gatekeeper or substitution vocabulary would not improve the financial decision.

### `dossiers/plan-30-jours-recherche-emploi.html`

**Decision: PRESERVE.**

The page already uses a funnel diagnostic, controlled iterations, comparable application batches, evidence mapping, atypical-path reframing, interview debriefs and a 30-day decision cycle. Its purpose is operational execution, and the existing structure is already materially deeper than its heuristic score suggests.

### `articles/premiere-chance-sans-experience.html`

**Decision: PRESERVE.**

The article already distinguishes the employer risks hidden behind “no experience”, compares multiple entry routes, quantifies the trade-off between immediate income and future credibility, requires an exit condition for imperfect first jobs, models downside cases and evaluates what each route leaves after six to twelve months.

The key adjacent decision — “take the easiest door or buy the most useful credibility?” — is already explicit.

## IMPLEMENTATION AND VALIDATION

- Editorial patch commit: `236f811db38f9d7be84b2a46c9b782fd2e221117` — `Deepen experienced-candidate risk diagnosis`.
- The page metadata and `dateModified` were updated to 2026-08-16.
- A temporary one-shot workflow was used only to patch the minified HTML safely, then removed.
- A temporary noindex HTML trigger was used to force an independent integrity check after the bot commit, then removed.
- `Site integrity` #223 passed on the enriched page.
- `Site integrity` #224 passed again on the **final repository state after both temporary artifacts were removed**.

## Doctrine from batch 21

1. **The stage of failure is part of the diagnosis.** “My profile is rejected” is too coarse if screening, HR, manager and final decision respond to different risks.
2. **The gatekeeper determines the useful proof.** A salary objection, a hierarchy objection and an initial readability problem should not produce the same rewrite.
3. **Do not create objections pre-emptively.** A candidate can make a credible profile look defensive by trying to neutralise every hypothetical concern before it appears.
4. **Change one main variable when testing a hypothesis.** Otherwise more activity produces less information.
5. **Some recruitment problems are economic, not editorial.** If salary, role design or market structure is the real incompatibility, better wording cannot solve it.
6. **A correction can create a new risk.** Hiding responsibility, accepting an unsustainable salary or moving too far down-market can strengthen the very stability concern the candidate was trying to remove.
7. **Preserve pages whose existing structure already contains the real counter-scenario.** A missing keyword is not a missing decision dimension.
