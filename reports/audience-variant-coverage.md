# Audit de couverture des situations

Mise à jour automatique : 2026-08-18

Cet audit cherche les **variantes raisonnablement attirées par la promesse visible d’une page** mais non reconnues dans son contenu ou son routage. La famille est déterminée uniquement par le title, le H1 et la meta description — jamais par un exemple rencontré plus loin dans le texte.

Le score est heuristique. `NON_READY` signifie : **relire humainement avant d’utiliser cette page comme destination d’acquisition large**. Une page technique volontairement étroite peut être parfaitement conforme.

Pages/familles détectées : **42**. Pages `noindex` exclues : **79**. Promesses larges à relire avant acquisition : **2**.

## Priorités de relecture

| Priorité | Gate | Famille | Page | Variantes critiques non détectées |
|---:|---|---|---|---|
| 16 | ROUTE_FIRST | reconversion / trajectoire pro | `dossiers/metiers-fonctions-organisation-entreprise.html` | salarié, santé / inaptitude, sans diplôme, revenu / runway |
| 14 | NON_READY | budget / dettes | `dossiers/puis-je-me-permettre-reconversion.html` | déficit temporaire / structurel, dette / surendettement |
| 9 | ROUTE_FIRST | reconversion / trajectoire pro | `dossiers/changer-travail-avant-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 8 | ROUTE_FIRST | reconversion / trajectoire pro | `dossiers/quitter-cdi-avec-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 7 | NON_READY | investissement locatif | `dossiers/comparer-strategies-immobilieres.html` | SCI |
| 5 | ROUTE_FIRST | achat immobilier / crédit | `dossiers/indivision-couple-separation-rachat-soulte.html` | indépendant |
| 5 | ROUTE_FIRST | couple / logement / séparation | `dossiers/indivision-couple-separation-rachat-soulte.html` | SCI |
| 5 | ROUTE_FIRST | travailler moins / qualité de vie | `dossiers/passer-80-pourcent-cout-reel.html` | indépendant |
| 4 | ROUTE_FIRST | reconversion / trajectoire pro | `articles/competences-transferables.html` | revenu / runway |
| 4 | ROUTE_FIRST | budget / dettes | `articles/construire-epargne-de-zero.html` | déficit temporaire / structurel |
| 4 | ROUTE_FIRST | entrepreneuriat | `dossiers/are-arce-acre-creation-entreprise.html` | activité réglementée |
| 4 | ROUTE_FIRST | budget / dettes | `dossiers/creer-entreprise-avec-peu-argent.html` | revenu stable / variable |
| 2 | COVERED_OR_NARROW | reconversion / trajectoire pro | `articles/retrouver-emploi-apres-interruption.html` | — |
| 2 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/acheter-logement-sans-se-fragiliser.html` | — |
| 2 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/acheter-sans-vider-epargne.html` | — |
| 2 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/lancer-activite-sans-quitter-emploi.html` | — |
| 1 | COVERED_OR_NARROW | budget / dettes | `dossiers/decision-plan-30-90-jours.html` | — |
| 1 | COVERED_OR_NARROW | budget / dettes | `dossiers/finances-cadre-global.html` | — |
| 1 | COVERED_OR_NARROW | budget / dettes | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | — |
| 1 | COVERED_OR_NARROW | investissement locatif | `dossiers/finances-investissement-locatif.html` | — |
| 1 | COVERED_OR_NARROW | travailler moins / qualité de vie | `dossiers/patrimoine-permet-il-travailler-moins.html` | — |
| 1 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/reconversion-sans-formation-longue.html` | — |
| 0 | COVERED_OR_NARROW | achat immobilier / crédit | `dossiers/acheter-logement-sans-se-fragiliser.html` | — |
| 0 | COVERED_OR_NARROW | achat immobilier / crédit | `dossiers/acheter-sans-vider-epargne.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/audit-budget-60-minutes.html` | — |
| 0 | COVERED_OR_NARROW | achat immobilier / crédit | `dossiers/changer-travail-avant-credit-immobilier.html` | — |
| 0 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/combien-chiffre-affaires-pour-vivre.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/combien-epargne-avant-demissionner.html` | — |
| 0 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/creer-entreprise-avec-peu-argent.html` | — |
| 0 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/creer-entreprise-sans-diplome.html` | — |
| 0 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/decider-a-deux-travail-patrimoine.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/decider-a-deux-travail-patrimoine.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/finances-credit-endettement.html` | — |
| 0 | COVERED_OR_NARROW | achat immobilier / crédit | `dossiers/finances-residence-principale.html` | — |
| 0 | COVERED_OR_NARROW | transmission / succession | `dossiers/finances-transmission-patrimoine.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/formation-vaut-elle-le-cout.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/patrimoine-marge-de-manoeuvre.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/patrimoine-permet-il-travailler-moins.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/puis-je-me-permettre-reconversion.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/reconversion-sans-perte-salaire.html` | — |
| 0 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/separation-logement-achete-a-deux.html` | — |
| 0 | COVERED_OR_NARROW | travailler moins / qualité de vie | `dossiers/travailler-moins-vivre-mieux.html` | — |

## Détail des promesses larges `NON_READY`

### `dossiers/puis-je-me-permettre-reconversion.html` — budget / dettes

Promesse : **puis-je me permettre une reconversion ? budget, voies courtes et seuils de décision | contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MANQUANTE |
| revenu stable / variable | TRAITEE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | MANQUANTE |
| dette / surendettement | MANQUANTE |
| charges compressibles / non | TRAITEE |

### `dossiers/comparer-strategies-immobilieres.html` — investissement locatif

Promesse : **comparer les stratégies immobilières : usage, capital, revenu et sortie | contre-évidence**

| Variante | Signal automatique |
|---|---|
| détention directe | MANQUANTE |
| SCI | MANQUANTE |
| location nue | TRAITEE |
| location meublée | TRAITEE |
| courte durée | TRAITEE |
| IR / IS | MANQUANTE |
| crédit / cash | TRAITEE |
| gestion | TRAITEE |

## Lecture par famille

### couple / logement / séparation

Pages détectées : **5**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : **tontine** (4), **SCI** (1).

### achat immobilier / crédit

Pages détectées : **5**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : **indépendant** (1), **mobilité / changement emploi** (1), **public** (1).

### investissement locatif

Pages détectées : **2**. Promesses larges `NON_READY` : **1**. Variantes le plus souvent non détectées : **IR / IS** (1), **SCI** (1), **détention directe** (1).

### transmission / succession

Pages détectées : **1**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : aucune dans la grille automatique.

### reconversion / trajectoire pro

Pages détectées : **11**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : **senior / âge** (7), **public** (6), **indépendant** (4), **sans diplôme** (3), **santé / inaptitude** (3), **revenu / runway** (2).

### entrepreneuriat

Pages détectées : **5**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : **TVA** (3), **associés** (3), **activité réglementée** (1).

### budget / dettes

Pages détectées : **10**. Promesses larges `NON_READY` : **1**. Variantes le plus souvent non détectées : **logement propriétaire / locataire** (4), **déficit temporaire / structurel** (2), **dette / surendettement** (1), **revenu stable / variable** (1).

### travailler moins / qualité de vie

Pages détectées : **3**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : **indépendant** (1).

## Règle éditoriale

1. Relire la promesse avant le corps du texte.
2. Lister seulement les variantes qui changent matériellement droit, calcul, risque, séquence ou sortie.
3. Classer chaque variante : `TRAITEE`, `ROUTEE`, `HORS_PERIMETRE_EXPLICITE` ou `MANQUANTE`.
4. Préférer un aiguillage précis à une réécriture encyclopédique.
5. Auditer séparément l’accroche sociale ou SEO : elle peut être plus large que la page cible.
