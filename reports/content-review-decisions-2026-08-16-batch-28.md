# Content review decisions — 2026-08-16 — batch 28

## Purpose

Extend the new cross-domain life roadmap beyond age/stage progression by adding the second temporal mechanism that changes priorities:

> **major life events that invalidate part of the previous plan.**

The site already had strong pages about couple/family economics, shocks, first management, entrepreneurship, retirement and transmission. The missing layer was not another dossier. It was a rule for knowing **when to leave the current roadmap branch, what to recalculate first, and where to go next**.

## REWRITE / ORCHESTRATE

### `parcours-de-vie.html`

**Decision: ADD A LIFE-EVENT RECALCULATION LAYER DIRECTLY AFTER THE AGE/STAGE ROADMAP.**

New section:

**“Quand la trajectoire change”**

Core framing:

> “Un anniversaire donne un repère. Un événement peut changer les priorités demain matin.”

The reader is told not to rebuild the entire plan after every event. Instead, recalculate the five axes most likely to have changed:

1. **Flux** — income, spending, savings capacity;
2. **Temps & travail** — captured time, constraints, skills and professional options;
3. **Sécurité** — emergency reserve, insurance/protection and liquidity;
4. **Engagements** — debt, housing, ownership, beneficiaries and other hard-to-reverse commitments;
5. **Horizon** — which objective should be accelerated, delayed, fractionated or abandoned over the next 90 days.

The section then routes eight common transition classes to existing deep content:

- couple / child / family;
- property purchase / move;
- new role / promotion;
- first management responsibility;
- business creation;
- unemployment / health / separation;
- inheritance / sale / large cash inflow;
- approaching retirement.

The editorial rule is explicit:

> **After an important event, ask “which assumption in my old plan has just become false?” before asking which product, investment or administrative step to choose.**

This is the missing bridge between a long-term roadmap and the messy non-linear path of real life.

Implementation commit:
- `e46674801861c67329be1571871440e48be1a8b9` — `Add life-event recalculation layer to roadmap`

## ROUTE / CONNECT

Backlinks to `parcours-de-vie.html#recalculer` were added from:

- `dossiers/quand-vie-change-sante-separation-revenu.html`;
- `dossiers/couple-famille-argent-temps.html`;
- `dossiers/devenir-manager-premiere-fois.html`;
- `dossiers/finances-transmission-patrimoine.html`.

These links do not replace the dossiers’ own logic. They allow readers who entered through a specific problem to step back and see what else in the professional/patrimonial system may need recalculation.

### `index.html`

Human review exposed a navigation defect: the homepage’s principal buttons linked directly to `#se-situer`, `#arbitrer` and `#construire`, so a user could systematically jump past the newly created roadmap.

**Decision: SURFACE THE ROADMAP DIRECTLY FROM THE HOMEPAGE WITHOUT REPLACING THE “START FROM TODAY’S PROBLEM” ENTRY MODEL.**

A compact homepage prompt now offers the alternative perspective:

- today’s problem → diagnostic / choice / execution;
- longer horizon → life-stage roadmap and event recalculation.

Implementation commit:
- `4b46151dcf21dafc3c6d114edca62e5f2e6024a9` — `Surface life roadmap from homepage`

## PRESERVE — substantive bodies

### `dossiers/quand-vie-change-sante-separation-revenu.html`

**Decision: PRESERVE.**

Already strong on:
- reducing accidental irreversibility;
- survival first, rebound capacity second;
- treating work, housing, portfolio, insurance and cash as one system;
- health/time, mobility, dependants, income volatility and family changes;
- pre-detection versus correction;
- false good solutions and recovery logic.

The missing dimension was routing back to the global trajectory, not more shock content.

### `dossiers/couple-famille-argent-temps.html`

**Decision: PRESERVE.**

Already covers:
- flows, autonomy and invisible transfers;
- 50/50, proportional contribution and equal disposable-margin rules;
- child-related career sacrifice;
- preserving individual savings capacity;
- childcare/work substitutions;
- professional mobility effects;
- payment account versus legal ownership;
- temporary and revisable contribution rules.

### `dossiers/decider-a-deux-travail-patrimoine.html`

**Decision: PRESERVE.**

Already models the person A / person B / household system and covers income, time, employability, property, risk transfer, employment status, health, second career, mobility, part-time work, entrepreneurship, simultaneous home purchase/job change, ownership architecture and reserves.

### `dossiers/devenir-manager-premiere-fois.html`

**Decision: PRESERVE.**

Already covers the two distinct first-management problems:
- obtaining a role without an official management title;
- changing how value is produced once the role is obtained.

It already distinguishes internal promotion, external recruitment, unemployment, public sector, independent work, no-diploma situations, health constraints, second-career issues, real hourly compensation, mandate, delegation and a 30/60/90 installation logic.

### `dossiers/finances-transmission-patrimoine.html`

**Decision: PRESERVE.**

The page already contains the operational layer that initially looked potentially missing:
- inventory;
- legal ownership distinctions;
- couple/family configurations;
- donation/testament trade-offs;
- liquidity and property constraints;
- company/SCI continuity;
- surviving spouse needs;
- long-life/dependency stress tests;
- minimal family file;
- profile variants;
- reversal conditions;
- transmission summary sheet.

Adding another “how to start transmission” page would duplicate strong existing material.

### `dossiers/decision-plan-30-90-jours.html`

**Decision: PRESERVE AND USE AS EXECUTION ENDPOINT.**

Its existing model — objective → critical hypotheses → 7-day test → parallel paths → 30-day proof → intermediate decision → 90-day result → continue/combine/substitute/reduce/stop — is exactly the right execution layer after a life-event recalculation.

### `dossiers/finances-situations-de-vie.html`

**Decision: PRESERVE AS LEGACY / NOINDEX.**

It contains useful older situation-based financial routing, but promoting it again would recreate a parallel navigation system. The new `parcours-de-vie.html` now performs the broader job across finances and professional life.

## Causal model activated

The event-reset layer formalizes a simple mechanism:

**event → state variables change → one or more old assumptions become false → priority order changes → specialised decision page → 30/90-day execution plan.**

Examples:

- child → time/career asymmetry + new protection needs → budget and contribution rules change;
- property purchase → lower liquidity + lower mobility + debt → career and savings choices change;
- promotion → more income but potentially more captured time and role risk → real value of the move must be recalculated;
- business launch → household income and business capital become correlated → security/diversification need changes;
- separation/illness/unemployment → preserving cash and reversibility can dominate return optimization;
- inheritance → capital jumps without the decision architecture changing automatically → secure and stage decisions first;
- approaching retirement → work, pension rights, debt, housing and liquid capital converge into one transition.

Proof status: **framework / conditional**. The event does not prescribe the answer; it identifies which variables require new evidence.

## Doctrine from batch 28

1. **A life roadmap needs two clocks:** gradual stage progression and discontinuous life events.
2. **Age is a weak signal; a state change is a strong signal.** A birthday rarely changes the plan overnight. A child, job loss, purchase or separation can.
3. **Do not restart the roadmap after every shock. Recalculate changed axes only.** This protects useful accumulated decisions from unnecessary churn.
4. **Ask which old assumption became false.** This is more diagnostic than asking which product or administrative action is now fashionable.
5. **Events can move professional and patrimonial variables in opposite directions.** A promotion can improve income and worsen time; a home purchase can improve use value and worsen mobility.
6. **Execution follows diagnosis.** Once the changed variables are identified, the 30/90-day plan converts them into tests and decisions.
7. **Use existing deep dossiers as branches.** The central roadmap should orchestrate; it should not duplicate couple, management, shock, retirement or transmission content.
8. **A roadmap hidden behind anchor links is not a roadmap.** It must be reachable from the homepage as a first-level perspective alongside the immediate-problem route.
