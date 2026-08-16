# Content review decisions — 2026-08-16 — batch 26

## Purpose

Continue the entry-surface review opened by batch 25. The question is no longer “does this topic exist?” but **can a reader who has never done the thing reach a first robust action without being dropped directly into an expert framework?**

The next candidate entry surfaces reviewed were:

- first personal-budget audit;
- first financial investment after building a safety reserve;
- first property-purchase decision;
- first entrepreneurial project.

This batch found one genuine missing layer: **the first financial investment**.

## CREATE

### `dossiers/premier-investissement-comment-commencer.html`

**Decision: CREATE A DEDICATED ENTRY JOURNEY.**

The investment corpus was already strong on allocation, wrappers, ETF selection, fees, diversification and implementation choices. However the investment hub still assumed that the reader had already crossed the boundary between “I have built some savings” and “I am now an investor”.

That boundary deserves its own decision surface because several different risks appear simultaneously:

- investing money that is still needed for the current month, safety or a dated project;
- choosing a product before defining the goal and horizon;
- selecting risk from expected return rather than from the loss the household can actually tolerate;
- multiplying products before understanding one broad exposure;
- choosing a wrapper before knowing its job;
- letting transaction costs dominate small first contributions;
- treating the first market decline as new information about a long-term plan when the underlying objective has not changed;
- confusing learning to invest with learning to trade.

The new page therefore starts with six preconditions and then builds the first-investment sequence:

1. separate current cash, emergency reserve, dated projects and true long-term capital;
2. write the objective as function + horizon + flexibility;
3. run a loss/bear-market reaction test before a return test;
4. reduce the number of decisions and understand one broad exposure before adding themes;
5. choose the wrapper after the strategy, not before it;
6. distinguish the practical issues created by €100, €500 and €1,000 starting amounts;
7. read the key product information before buying;
8. treat the first order as an operational test, not a market-timing test;
9. separate the mathematical and behavioural arguments around immediate versus progressive entry;
10. write the rule for the first market decline in advance;
11. use a 30-day sequence from investable-cash separation to a sustainable contribution/review rule;
12. define when the reader is no longer a “first-investment” reader and should move to portfolio allocation.

The factual framework is grounded in current AMF material, including its June 2026 ETF guidance. Public links are ordinary reader-visible source links.

Creation commit:
- `c968e711ce2c15e498546e28a4d11c404ef1cdf2` — `Add first-investment entry journey`

## HUB AND JOURNEY CONNECTIONS

The new page is not left as an isolated article.

### `parcours-argent.html`

The investment hub now distinguishes:

1. **Je commence : préparer mon premier investissement**;
2. **J’investis déjà : comparer 8 situations concrètes**;
3. then the deeper allocation, ETF, fee and wrapper layers.

This corrects the previous stage jump where “Construire l’allocation” was the first real entry even for a reader who had never invested.

### `themes/argent.html`

The Investment pillar now starts with:

**Commencer : placer ses premiers 100, 500 ou 1 000 € sans brûler les étapes**

before the situation-based allocation and portfolio guides.

### `articles/construire-epargne-de-zero.html`

The savings journey now hands off explicitly from section 11 — “Quand commencer à investir ?” — to the new first-investment page once current cash, reserve and near-term projects have been separated.

### Sitemap

The new page is indexable and was added to `sitemap.xml`; the investment hub last-modified date was aligned to 2026-08-16.

Connector commit:
- `7331e7332f772d656fb3994bd45f091a6fe56aaf` — `Connect first-investment entry journey`

## PRESERVE

### `dossiers/audit-budget-60-minutes.html`

**Decision: PRESERVE AS THE FIRST-BUDGET ENTRY PAGE.**

The page already behaves like an entry journey rather than an expert treatise. It gives a literal 60-minute protocol, produces five numbers, separates fixed/current/predictable/exceptional spending, calculates the true surplus, applies a −10% income stress, tests whether small savings can mathematically solve the gap, identifies transferred risks and ends with three corrections plus a J+30 review.

A separate “how to make your first budget” page would mostly duplicate this protocol.

### `parcours-achat-immobilier.html`

**Decision: PRESERVE AS THE FIRST-PURCHASE JOURNEY.**

The property corpus already has the kind of entry architecture now being built elsewhere. The journey is explicit:

**capacity → full cost → reserve after purchase → mobility/duration → buy/rent/wait/modify**.

It also stress-tests a less comfortable scenario and keeps “do not buy” as a legitimate output. A new first-purchase page would add navigation debt rather than new decision value.

### `themes/entreprendre.html`

**Decision: PRESERVE AS THE ENTREPRENEURIAL ENTRY HUB.**

The entrepreneurship hub already starts at the correct level: market evidence, first customers, forecast, useful business plan, required revenue and qualification constraints. It then moves to status, safety nets, start-up budget and finally to operating-system questions such as margin, cash, customer concentration and capacity.

Unlike the old investment hub, it does not assume the reader already knows how to begin.

## Implementation notes

A temporary one-shot connector workflow was used because the relevant hubs are minified HTML. The first run made the deterministic edits successfully in its workspace but lost a push race to an unrelated automated repository commit. No partial public edit was created by that failed push.

The workflow was updated to rebase against `main` before pushing and the second run succeeded.

Temporary workflow commits:
- `89904f06d271a07a4e4a95ddaa1f1ae23fbe7706` — initial connector workflow;
- `e2125d0e1657e1dfb8807677b6803f2939a68f10` — concurrent-commit robustness;
- `54028cb4c834edb93110b18d9d1929b9d95e7aa4` — temporary workflow removed.

No permanent workflow was added.

## Doctrine from batch 26

1. **A domain can already have a valid entry page even if the wider corpus is complex.** Do not create a “beginner page” by reflex; inspect the actual first action path.
2. **The boundary between saving and investing is a real decision boundary.** Money changes function, liquidity requirements and permissible risk at that point.
3. **The first investment should teach a system, not reward prediction.** A correct order placed for a documented reason is a better learning objective than a lucky short-term gain.
4. **The first decline is part of onboarding.** Behaviour under loss should be planned before the position exists.
5. **A strong entry journey must have an exit condition.** Once the reader understands investable capital, risk, exposure, wrapper, execution and review rules, the next page should be allocation — not more beginner content.
6. **Entry architecture should be judged across the full path, not page by page.** The savings page now hands off to first investment; first investment hands off to allocation; allocation hands off to support and wrapper selection.
