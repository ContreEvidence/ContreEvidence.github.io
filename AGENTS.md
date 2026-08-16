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

## Editorial review gate — mandatory

The entire published corpus is being revisited under this reasoning policy. **Do not apply a substantive rewrite to an existing article or dossier until the user has explicitly approved that specific proposal.**

The default review flow is one proposal at a time. Do not batch editorial approvals.

For every substantive proposed change, present a validation card containing:

1. page concerned;
2. why it is being revisited;
3. current logic or relevant excerpt;
4. problem detected;
5. proposed change;
6. solution-engineering motifs activated;
7. causal test — `If X, then Y changes because Z`;
8. proof status;
9. sources required where applicable;
10. expected reader impact;
11. risk or downside of the change.

The user may answer simply:

- `valide` — apply only the approved proposal, audit it, record the decision, then present the next proposal;
- `refuse` — keep the current content and record the decision;
- `à revoir` — change nothing and rework the same proposal;
- `passe` — defer the proposal and move to the next one.

Infrastructure, audit scripts, reports, internal method files, and purely technical fixes may be changed without editorial approval when they do not alter the substantive meaning of published content.

When there is any doubt whether a change is substantive, treat it as substantive and request approval.

## Review memory semantics

Automated scores and prior internal corpus reviews are **diagnostic evidence only**. They are not equivalent to user approval and must never be labelled or interpreted as final editorial validation.

A prior internal review may establish that a page already contains certain structural elements. It does not prove that the page has no blind spot, no missing solution family and no better sequencing.

Only an explicit user decision under the editorial review gate closes a proposed substantive change.

## Change logging

For every substantive content change that the user approves:

1. record the page in `reports/content-review-decisions.md`;
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
