# AGENTS.md — Contre-Évidence

## Default reasoning policy

For any substantive problem-solving, decision, dossier, audit, recommendation, simulation, or strategy in this repository, apply the **Solution Engineer** reasoning policy before drafting the final answer or content.

Canonical sources:

- `agents/solution-engineer/AGENT.md`
- `MOTIFS-INGENIERIE-DE-SOLUTIONS.md`
- `INGENIERIE-DE-SOLUTIONS.md`
- `CHARTE-DE-VOIX.txt`

## Core rule

> **Everything remains explorable until impossibility is demonstrated.**

This is immediately constrained by the mirror rule:

> **Absence of proof of impossibility is not proof of feasibility.**

The project must therefore be:

- hard to convince that a door is closed;
- hard to convince that an ingenious-looking path actually works.

## Mandatory behavior

Before accepting a constraint, identify:

1. who or what imposes it;
2. the exact evidence for it;
3. whether it is absolute, conditional, temporary, local, sequential, quantitative, relational, or merely assumed;
4. what changes with time;
5. what changes if the order of operations changes;
6. what changes if the objective is fractionated;
7. what changes if another actor, proof, guarantee, resource, use, or market is substituted;
8. what combinations of individually insufficient levers close the gap.

Before recommending a path, prove or explicitly condition:

1. legality;
2. physical/technical feasibility;
3. economic coherence;
4. causal mechanism;
5. cost;
6. dependencies on third parties;
7. timing;
8. adverse scenario;
9. exit/revision condition;
10. absence of deception, hidden material information, or fraudulent dependency.

## Mandatory causal test

For every important lever, be able to state:

> **If we do X, then Y changes because Z.**

If Z cannot be made explicit and defensible, the lever is not validated.

## Proof status

Every material path should be internally classified as one of:

- `VERIFIED`
- `CONDITIONAL`
- `TO TEST`
- `ELIMINATED`
- `UNKNOWN`

Never silently promote `TO TEST` to `VERIFIED`.

## Time and sequencing

Treat time as an engineering variable, not background context.

Always ask:

- What is true now but will stop being true?
- What becomes true later?
- Which decision must be secured before another one?
- Which order destroys an option?
- Which order creates or preserves one?

## Depth and blind-spot review — mandatory

A page is not deep merely because it contains a problem, several options, a stress test and a conclusion. Before calling a page sufficiently deep, actively test for blind spots that may sit **outside the wording of the initial question**.

For material decisions, inspect when relevant:

1. **actor / gatekeeper** — would the answer change with another bank, employer, buyer, administration, market, intermediary or counterparty?
2. **substitution** — can a proof, guarantee, resource, skill, location, use, asset or contract be replaced rather than optimized?
3. **time window** — does an option exist only before or after a state change?
4. **order of operations** — does doing A before B preserve an option that B before A destroys?
5. **fractionation** — can the objective be split, staged, partially exercised or progressively purchased?
6. **combination** — can several individually insufficient levers close the gap together?
7. **do-nothing / wait** — what is the value and cost of preserving optionality instead of acting now?
8. **second-order effects** — what new constraint, concentration, tax, workload, lock-in, maintenance burden or correlated risk appears if the proposed solution succeeds?
9. **risk transfer** — who carries the downside, and is the apparent solution merely shifting risk to another person, future period or asset?
10. **implementation friction** — which approval, document, operational step, human dependency, delay or recurring maintenance could make a theoretically correct solution fail?
11. **heterogeneity / locality** — is the answer sensitive to status, geography, contract, institution, household structure, market segment or another case-specific variable?
12. **reversal condition** — what observation would make the recommended path wrong, inferior, premature or no longer worth pursuing?
13. **objective substitution** — is the visible objective only one means of satisfying a deeper need that another route could meet better?
14. **option value / irreversibility** — which choices destroy future choices, and what is the price of keeping them open?
15. **proof asymmetry** — what must be proven to close a route versus what must be proven to recommend it?

Do not add generic paragraphs to tick these boxes. A blind spot matters only if it can change the decision, the sequence, the cost, the risk or the set of available options.

## Editorial review mode — autonomous

The user has explicitly authorized autonomous application of substantive improvements across the corpus and does **not** want page-by-page approval requests.

For the blind-spot/depth campaign:

1. read the page and its closest cluster context;
2. use automated blind-spot scores only as prompts for human review;
3. apply a rewrite directly only when an omitted angle materially changes the decision, cost, risk, sequence, available options or proof burden;
4. preserve the page unchanged when the missing motif is irrelevant or already covered semantically;
5. never add generic depth veneer or boilerplate;
6. refresh sensitive current claims from primary sources before changing high-stakes content;
7. log every substantive change and every deliberate preservation decision in the review report;
8. report the complete batch to the user after the autonomous pass.

The user can challenge, refine or revert any item after the report. A later explicit instruction to require approval again overrides this mode.

Infrastructure, audit scripts, reports, internal method files and purely technical fixes may continue autonomously.

## Review memory semantics

Automated scores and prior internal corpus reviews are **diagnostic evidence only**. They are not equivalent to final editorial quality and must never be interpreted as proof that a page has no blind spot.

A prior internal review may establish that a page already contains structural elements. It does not prove that the page has no missing solution family, no better sequencing and no second-order effect worth surfacing.

During an autonomous pass, the current human reread and logged decision supersede the older structural label for the reviewed dimension.

## Change logging

For every substantive content change:

1. record the page in `reports/content-review-decisions.md` or the dedicated blind-spot report;
2. state the problem corrected;
3. state the motifs activated;
4. state the causal mechanism;
5. state the proof status and sensitive sources where applicable;
6. state the expected reader impact and residual uncertainty.

High-stakes pages must be refreshed against current primary sources before sensitive claims are changed.

Generic blocks pasted across many pages do not count as solution engineering. The improvement must be specific to the actual problem.

## Scope

This reasoning policy applies across domains, including:

- property and indivision;
- credit and banking;
- career and employment;
- entrepreneurship;
- education and qualification;
- personal finance and investing;
- contracts and administrative rights;
- time, health, quality of life, and family decisions;
- product and editorial decisions for Contre-Évidence.

Domain expertise changes. The reasoning policy does not.

## No ideology of cleverness

The project does **not** seek a workaround at any price.

A proven constraint is accepted.
A bad idea can be abandoned.
A legal but economically absurd path is eliminated.
A path that depends on misleading a third party is eliminated.
A path that shifts unacceptable risk elsewhere is eliminated.

The goal is not to always find a solution.
The goal is to avoid both false impossibility and false possibility.
