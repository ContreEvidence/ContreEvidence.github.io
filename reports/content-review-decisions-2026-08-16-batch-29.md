# Content review decisions — 2026-08-16 — batch 29

## Purpose

Make the new life roadmap maintainable over time.

A roadmap that only says “what tends to come next” is incomplete if the reader has no recurring mechanism for asking whether their current phase still fits. Repository search found no real annual review crossing professional capital, financial margin, debt, patrimonial allocation, retirement/protection and quality of life.

## REWRITE / ORCHESTRATE

### `parcours-de-vie.html`

**Decision: ADD A COMPACT ANNUAL REVIEW BETWEEN THE LIFE-STAGE ROADMAP AND EVENT-RESET LAYER.**

New section:

**“Le point de contrôle annuel”**

The review asks six questions:

1. **Flux** — is the system still producing margin?
2. **Security** — how long can the reader keep deciding without being forced?
3. **Patrimony** — does capital still match current horizons and roles?
4. **Professional capital** — what became more valuable and transferable on the market over the last year?
5. **Protection & long term** — which future rights, debts, dependants or retirement questions are becoming present decisions?
6. **Real life** — is the reader still financing the same life and objectives?

Each question routes to an existing deep page/tool instead of duplicating it.

The review must produce only three outputs:

- **Continue** one mechanism already working;
- **Correct** one fragility that can materially reduce options over the next 12–36 months;
- **Build** one new option: skill, reserve, mobility, investment, protection or transition preparation.

This deliberately avoids turning the roadmap into an optimization dashboard where every dimension becomes a simultaneous project.

Implementation commit:
- `c063e288e568112df610c1fd9d27ccf3638adbfe` — `Add annual checkpoints to life roadmap`

## Cadence model

The page now distinguishes three rhythms:

- **Current / frequent:** watch variables that can deteriorate quickly, such as cash flow or expensive debt;
- **Annual:** perform the broad cross-domain review and select one or two real priorities;
- **Event-driven:** after a child, separation, unemployment, health shock, property purchase, inheritance, business creation or job change, do not wait for the annual review — use the event-reset layer immediately.

## Why no “wealth target by age” table was added

A universal “you should have X at 30 / 40 / 50” table would undermine the doctrine established in batch 27:

- household structures differ;
- public and private pension paths differ;
- inherited and self-built capital are not comparable;
- housing geography changes balance-sheet values dramatically;
- a high net worth can coexist with low liquidity or low employability;
- professional capital can rationally dominate financial capital early in life;
- separation, illness, entrepreneurship or caregiving can reset one axis without implying failure.

The roadmap therefore uses **capabilities and option quality**, not status competition, as its checkpoints.

## Doctrine from batch 29

1. **A roadmap needs a review cadence, not just destinations.**
2. **The annual question is not “did every metric improve?” but “which priority changed?”**
3. **Professional capital belongs in the same annual review as financial capital.** A salary can rise while employability falls.
4. **Security is best expressed as decision time and reversibility, not just a cash balance.**
5. **Do not start six improvement projects after six diagnostics.** Continue one thing, correct one fragility, build one option.
6. **Event reviews override calendar reviews.** A state change is more informative than the date.
7. **Avoid normative wealth-by-age benchmarks.** Capability, resilience and optionality are more decision-relevant than social comparison.
