# Content review decisions — 2026-08-16 — batch 23

## Purpose

Review the high-priority **indivision / separation / patrimonial exit** cluster after batch 22. This cluster is especially vulnerable to apparently simple answers because ownership, financing, accounts between parties, occupation and the power to decide can belong to different legal or economic systems.

The human review asked whether the current pages still collapse those systems or whether the necessary distinctions, windows and failure modes are already explicit.

## PRESERVE

### `dossiers/indivision-succession-heritiers-vendre-partager.html`

**Decision: PRESERVE.**

The page already opens seven different exit architectures rather than reducing a succession to “keep or sell”: partition by lots, buyout, preferential allocation where legally available, whole-property sale, sale of indivision rights, temporary organisation and judicial exit.

It distinguishes an heir's objective from the asset itself, models the financing burden of a soulte, limits preferential allocation to its actual legal conditions, separates administrative majorities from sale powers, integrates the April 2026 reform, explains external sale of indivision rights and co-indivisaires' pre-emption, and treats temporary rental only when it buys a named future event.

The page also quantifies the cost of inaction by heir, models three heirs with different objectives and stress-tests each exit. The heuristic's missing “gatekeeper / option value / reversal” labels are therefore false positives at semantic level.

### `dossiers/separation-logement-achete-a-deux.html`

**Decision: PRESERVE as an orientation page.**

The page's main job is not to calculate a soulte. It prevents the reader from applying an indivision calculation to the wrong legal architecture. It explicitly routes the reader among direct indivision, SCI, marriage, PACS, tontine and sole ownership with joint financing.

It then separates **property, debt, accounts between the persons and use of the home**, identifies the documents that control each question, treats the bank as a separate gatekeeper from ownership and compares sale, buyout, temporary occupation, rental and progressive exit only after the legal branch is identified.

Adding a full second indivision treatise here would weaken the routing function and duplicate the linked specialist dossiers.

### `dossiers/indivision-immobiliere-sortir-sans-subir.html`

**Decision: PRESERVE.**

The dossier already distinguishes four maps — ownership, accounts, debt and use — and explicitly identifies the gatekeeper for valuation, transfers, bank release, sale, administration and litigation.

It compares six exit routes, including a progressive buyout and transfer of rights to a third party. It then tests the core second-order risk of a progressive buyout: one person may sell part of the asset while remaining jointly exposed to the debt. It requires a fallback if the second stage never happens, treats temporary indivision only with a dated/event-based exit, and stress-tests each route.

The missing heuristic motifs are therefore already embedded in the mechanics of the page.

### `dossiers/indivision-couple-separation-rachat-soulte.html`

**Decision: PRESERVE.**

This page already treats an impossible immediate buyout as an engineering problem rather than a binary answer. It decomposes the block into soulte, bank capacity, employment stability, savings, debt, agreement, valuation and use of the property; distinguishes what is fixed from what can move; and requires the reader to calculate what must become true at one, three and five years.

Most importantly, it already warns that waiting can make the buyout harder if the value of the property and therefore the rights to acquire rise faster than debt falls or savings accumulate. It separates ownership from the loan, tests keeping the existing loan versus refinancing the whole amount, examines additional/replacement security, uses a notarised indivision agreement as a transition contract rather than a vague truce, and requires a Plan B if financing still fails at the term.

The page is therefore already built around reversibility and the value — or cost — of time.

### `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`

**Decision: PRESERVE.**

The page already supplies the missing “why / when stop?” layer for the wider patrimonial corpus. It does not use a magic wealth threshold: it asks which capital still has a more important mission than the contemplated use.

It separates net wealth from mobilisable wealth, ring-fences capital with a date, forces an explicit transmission objective, distinguishes household wealth from each partner's autonomy, treats lifetime help to children as a possible use of capital, covers the opposite case of no desired inheritance and shows that using an illiquid property portfolio need not mean selling everything.

The heuristic's missing waiting, risk-transfer and reversal vocabulary does not reveal a missing decision surface. The whole dossier is already a stopping-rule framework.

## Cross-page finding

The separation cluster now has a coherent layered architecture:

1. **`separation-logement-achete-a-deux.html`** identifies the legal architecture and prevents category errors.
2. **`indivision-immobiliere-sortir-sans-subir.html`** maps the general exit mechanics when direct indivision is the right branch.
3. **`indivision-couple-separation-rachat-soulte.html`** handles the harder case where one person wants to keep the asset but cannot finance the exit today.
4. **`indivision-succession-heritiers-vendre-partager.html`** adapts the same reasoning to multiple heirs, succession assets and succession-specific legal mechanisms.

This layered structure is preferable to making each page repeat every rule and scenario.

## Implementation

- No public HTML was changed in batch 23.
- No legal proposition was added or altered.
- No temporary workflow or validation artifact was created.
- This report records the human PRESERVE decisions so the heuristic queue does not cause unnecessary future expansion without a new signal or content change.

## Doctrine from batch 23

1. **Ownership, loan, internal accounts and use must remain separate systems.** A solution that fixes only one may leave another person exposed.
2. **The bank can be a different gatekeeper from the notary or the co-owner.** Legal feasibility is not banking feasibility.
3. **A progressive exit is not automatically a safer exit.** It can reduce immediate cash needs while preserving debt exposure, valuation risk and future conflict.
4. **Waiting is only valuable when it buys a named change.** A date, financing milestone, end of work, contract event or tested rental economics is different from “we will see later”.
5. **Routing is an editorial function.** A strong orientation page should send the reader to the correct legal/economic branch rather than duplicate every specialist dossier.
