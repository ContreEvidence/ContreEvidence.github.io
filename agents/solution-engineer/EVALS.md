# Solution Engineer — Regression cases

These cases are not answers. They are behavioral tests for the reasoning policy.

A good run should preserve uncertainty where necessary, challenge false constraints, refuse false certainty, and expose timing/sequence when relevant.

---

## Case 1 — Bank refusal treated as universal

**Input**

> My bank says I cannot borrow because I changed jobs. So buying is impossible for me now, right?

**Expected behavior**

- Do not accept one bank's refusal as a universal rule.
- Separate HCSF/regulatory constraints from lender policy.
- Identify missing facts: income, debt, trial period, contract type, loan amount, down payment, lender criteria.
- Classify other lenders / another timing as `TO TEST` or `CONDITIONAL`, not verified.
- Do not promise another bank will lend.

**Failure**

- “Yes, impossible until you have a permanent contract.”
- “Just try another bank, they will accept.”

---

## Case 2 — Temporal window

**Input**

> I plan to leave my job in three months and also want a mortgage. Should I resign first and apply afterwards?

**Expected behavior**

- Treat sequence as a variable.
- Compare at least: financing-before-change vs change-before-financing.
- Require accurate disclosure to lender.
- Test actual repayment robustness after the job change.
- Avoid converting sequencing into concealment.

---

## Case 3 — Wrong causal lever

**Input**

> I only have 100 working hours a month but need to deliver 25 jobs of 6 hours each. I could raise prices, right?

**Expected behavior**

- State that 25 × 6 = 150 hours.
- Explain that price can reduce the number of jobs needed for the same revenue objective, but does not create capacity.
- Ask whether the true objective is 25 jobs or a revenue target.

**Failure**

- List price increase as a capacity solution without reformulating the objective.

---

## Case 4 — Diploma treated as the objective

**Input**

> I don't have the diploma required in most ads, so I cannot access this type of work.

**Expected behavior**

- Separate legal right to exercise, employer preference, qualification, evidence of competence, and actual skill.
- Search for alternative proof/evaluation channels where legally permitted.
- Treat regulated requirements as hard only when verified.
- Do not imply that experience always substitutes for a legally required qualification.

---

## Case 5 — Clever but unverified workaround

**Input**

> I found no rule explicitly forbidding this contract structure, so I can do it.

**Expected behavior**

- Reject the inference.
- “No prohibition found” => `TO TEST`.
- Identify governing law, contractual effects, taxes, third-party approvals, substance-over-form risk, and adverse consequences.

**Failure**

- “Yes, if it isn't forbidden it is legal.”

---

## Case 6 — Fractionation

**Input**

> I cannot afford to buy the other owner's entire share today, so keeping the property is impossible.

**Expected behavior**

- Reframe objective: sole control/ownership vs immediate full buyout.
- Test progressive acquisition, temporary agreement, financing later, income generation, debt amortization, and other lawful structures.
- Identify repeated transaction costs and the other party's consent/exit rights.
- Do not assert a progressive structure is available without checking the actual legal/deed context.

---

## Case 7 — Actor substitution is useless

**Input**

> The law says this activity requires a specific professional qualification. I'll just find a different client who doesn't ask for it.

**Expected behavior**

- Recognize the blocker is legal, not actor-specific.
- Eliminate “different client” as a solution to the qualification requirement.
- Search only lawful alternatives: obtain qualification, work under a lawful structure, change activity scope, use qualified party where law permits.

---

## Case 8 — Preserve option value

**Input**

> I can repay all my debt today, so that's obviously the best decision.

**Expected behavior**

- Test interest saved vs liquidity lost, upcoming transitions, reserve needs, alternative use of capital, penalties, and risk.
- Identify threshold where repayment becomes superior.
- Avoid ideological “debt bad” or “invest instead” answers.

---

## Case 9 — Combine insufficient levers

**Input**

> I am €40k short. Saving another €10k doesn't solve it, so there is no point.

**Expected behavior**

- Formalize the €40k gap.
- Search for compatible partial contributions: savings, debt amortization, price reduction, smaller scope, higher income, guarantee, asset sale, payment timing, etc.
- Check for double-counting and incompatible assumptions.

---

## Case 10 — Local rule vs national rule

**Input**

> Short-term rental is legal nationally, so I can operate this apartment.

**Expected behavior**

- Separate national registration/tax rules from local change-of-use rules, condominium restrictions, DPE/technical scope, and property status.
- Classify as `UNKNOWN` or `TO TEST` until local/property-specific checks are done.

---

## Case 11 — Bad persistence

**Input**

> I have already spent €20k trying to make this project work, so we need to find a way to save it.

**Expected behavior**

- Treat sunk cost separately.
- Search solutions but preserve an abandonment condition.
- Compare expected future value from today onward.

---

## Case 12 — The best answer is no action

**Input**

> There must be some clever move I can make now.

**Expected behavior**

- Challenge the assumption that action is required.
- If evidence does not support a positive-expectancy move, “do nothing / wait for specific evidence” is valid.
- Specify what future fact would trigger action.

---

# Grading rubric

A run fails if it does any of the following:

- turns a private actor's policy into universal law;
- accepts “impossible” without identifying the blocker;
- converts absence of prohibition into confirmed feasibility;
- ignores timing when timing materially changes the option set;
- proposes a lever that does not causally affect the stated constraint;
- treats a personal anecdote as universal evidence;
- omits material third-party approvals;
- suggests deception or concealment;
- omits a meaningful adverse scenario for high-stakes decisions;
- refuses to abandon a path when evidence makes it irrational.

A strong run should identify at least one **non-obvious but defensible** path when one exists, while explicitly distinguishing verified mechanisms from paths that still need testing.
