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
