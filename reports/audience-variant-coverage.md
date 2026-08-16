# Audit de couverture des situations

Mise à jour automatique : 2026-08-16

Cet audit cherche les **variantes raisonnablement attirées par la promesse visible d’une page** mais non reconnues dans son contenu ou son routage. La famille est déterminée uniquement par le title, le H1 et la meta description — jamais par un exemple rencontré plus loin dans le texte.

Le score est heuristique. `NON_READY` signifie : **relire humainement avant d’utiliser cette page comme destination d’acquisition large**. Une page technique volontairement étroite peut être parfaitement conforme.

Pages/familles détectées : **42**. Pages `noindex` exclues : **79**. Promesses larges à relire avant acquisition : **18**.

## Priorités de relecture

| Priorité | Gate | Famille | Page | Variantes critiques non détectées |
|---:|---|---|---|---|
| 28 | NON_READY | couple / logement / séparation | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` | indivision directe, SCI, mariage, PACS |
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/metiers-fonctions-organisation-entreprise.html` | salarié, santé / inaptitude, sans diplôme, revenu / runway |
| 21 | NON_READY | couple / logement / séparation | `dossiers/acheter-sans-vider-epargne.html` | SCI, mariage, PACS |
| 21 | NON_READY | couple / logement / séparation | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | indivision directe, mariage, PACS |
| 15 | NON_READY | reconversion / trajectoire pro | `dossiers/combien-epargne-avant-demissionner.html` | salarié, sans diplôme |
| 14 | NON_READY | entrepreneuriat | `dossiers/combien-chiffre-affaires-pour-vivre.html` | micro / EI / société, activité réglementée |
| 14 | NON_READY | couple / logement / séparation | `dossiers/patrimoine-marge-de-manoeuvre.html` | mariage, PACS |
| 14 | NON_READY | reconversion / trajectoire pro | `dossiers/quitter-cdi-avec-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 10 | ROUTE_FIRST | reconversion / trajectoire pro | `dossiers/changer-travail-avant-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 10 | NON_READY | investissement locatif | `dossiers/finances-investissement-locatif.html` | SCI |
| 10 | NON_READY | transmission / succession | `dossiers/finances-transmission-patrimoine.html` | SCI / parts |
| 8 | NON_READY | achat immobilier / crédit | `dossiers/acheter-logement-sans-se-fragiliser.html` | CDD / temporaire |
| 8 | NON_READY | achat immobilier / crédit | `dossiers/finances-residence-principale.html` | CDD / temporaire |
| 8 | NON_READY | entrepreneuriat | `dossiers/formation-vaut-elle-le-cout.html` | micro / EI / société |
| 8 | NON_READY | reconversion / trajectoire pro | `dossiers/trajectoire-professionnelle-selon-situation.html` | sans diplôme |
| 7 | NON_READY | reconversion / trajectoire pro | `articles/competences-transferables.html` | revenu / runway |
| 7 | NON_READY | entrepreneuriat | `dossiers/are-arce-acre-creation-entreprise.html` | activité réglementée |
| 7 | NON_READY | budget / dettes | `dossiers/creer-entreprise-avec-peu-argent.html` | revenu stable / variable |
| 7 | NON_READY | budget / dettes | `dossiers/patrimoine-marge-de-manoeuvre.html` | déficit temporaire / structurel |
| 5 | ROUTE_FIRST | achat immobilier / crédit | `dossiers/changer-travail-avant-credit-immobilier.html` | indépendant |
| 5 | ROUTE_FIRST | achat immobilier / crédit | `dossiers/indivision-couple-separation-rachat-soulte.html` | indépendant |
| 5 | ROUTE_FIRST | couple / logement / séparation | `dossiers/indivision-couple-separation-rachat-soulte.html` | SCI |
| 5 | ROUTE_FIRST | travailler moins / qualité de vie | `dossiers/passer-80-pourcent-cout-reel.html` | indépendant |
| 4 | ROUTE_FIRST | entrepreneuriat | `dossiers/lancer-activite-sans-quitter-emploi.html` | activité réglementée |
| 2 | COVERED_OR_NARROW | reconversion / trajectoire pro | `articles/retrouver-emploi-apres-interruption.html` | — |
| 2 | COVERED_OR_NARROW | budget / dettes | `dossiers/puis-je-me-permettre-reconversion.html` | — |
| 2 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/puis-je-me-permettre-reconversion.html` | — |
| 1 | COVERED_OR_NARROW | budget / dettes | `articles/construire-epargne-de-zero.html` | — |
| 1 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/reconversion-sans-formation-longue.html` | — |
| 1 | COVERED_OR_NARROW | travailler moins / qualité de vie | `dossiers/temps-energie-qualite-vie.html` | — |
| 0 | COVERED_OR_NARROW | achat immobilier / crédit | `dossiers/acheter-sans-vider-epargne.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/audit-budget-60-minutes.html` | — |
| 0 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/creer-entreprise-avec-peu-argent.html` | — |
| 0 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/creer-entreprise-sans-diplome.html` | — |
| 0 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/decider-a-deux-travail-patrimoine.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/decider-a-deux-travail-patrimoine.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/formation-vaut-elle-le-cout.html` | — |
| 0 | COVERED_OR_NARROW | travailler moins / qualité de vie | `dossiers/patrimoine-permet-il-travailler-moins.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/reconversion-sans-perte-salaire.html` | — |
| 0 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/separation-logement-achete-a-deux.html` | — |
| 0 | COVERED_OR_NARROW | travailler moins / qualité de vie | `dossiers/travailler-moins-vivre-mieux.html` | — |

## Détail des promesses larges `NON_READY`

### `dossiers/acheter-ou-louer-si-on-risque-demenager.html` — couple / logement / séparation

Promesse : **acheter ou louer si vous risquez de déménager bientôt ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| indivision directe | MANQUANTE |
| SCI | MANQUANTE |
| mariage | MANQUANTE |
| PACS | MANQUANTE |
| concubinage | MANQUANTE |
| tontine | MANQUANTE |
| propriété ≠ financement | TRAITEE |
| sorties multiples | TRAITEE |

### `dossiers/metiers-fonctions-organisation-entreprise.html` — reconversion / trajectoire pro

Promesse : **métier, poste, fonction, service : comprendre l’entreprise — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | TRAITEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | MANQUANTE |

### `dossiers/acheter-sans-vider-epargne.html` — couple / logement / séparation

Promesse : **combien d’épargne garder après un achat immobilier ? apport et réserve | contre-évidence**

| Variante | Signal automatique |
|---|---|
| indivision directe | ROUTEE |
| SCI | MANQUANTE |
| mariage | MANQUANTE |
| PACS | MANQUANTE |
| concubinage | MANQUANTE |
| tontine | MANQUANTE |
| propriété ≠ financement | TRAITEE |
| sorties multiples | ROUTEE |

### `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` — couple / logement / séparation

Promesse : **quand arrêter d’optimiser et commencer à utiliser son patrimoine ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| indivision directe | MANQUANTE |
| SCI | TRAITEE |
| mariage | MANQUANTE |
| PACS | MANQUANTE |
| concubinage | MANQUANTE |
| tontine | MANQUANTE |
| propriété ≠ financement | TRAITEE |
| sorties multiples | TRAITEE |

### `dossiers/combien-epargne-avant-demissionner.html` — reconversion / trajectoire pro

Promesse : **combien d’épargne avant de démissionner ? calcul, runway et exemples | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | TRAITEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MENTIONNEE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/combien-chiffre-affaires-pour-vivre.html` — entrepreneuriat

Promesse : **combien de chiffre d’affaires faut-il pour en vivre ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| activité principale / complément | TRAITEE |
| micro / EI / société | MANQUANTE |
| activité réglementée | MANQUANTE |
| chômage / aides | TRAITEE |
| TVA | MENTIONNEE |
| financement / BFR | TRAITEE |
| associés | MENTIONNEE |

### `dossiers/patrimoine-marge-de-manoeuvre.html` — couple / logement / séparation

Promesse : **patrimoine et marge de manœuvre : combien de liberté vos actifs donnent-ils ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| indivision directe | TRAITEE |
| SCI | TRAITEE |
| mariage | MANQUANTE |
| PACS | MANQUANTE |
| concubinage | MANQUANTE |
| tontine | MANQUANTE |
| propriété ≠ financement | TRAITEE |
| sorties multiples | TRAITEE |

### `dossiers/quitter-cdi-avec-credit-immobilier.html` — reconversion / trajectoire pro

Promesse : **quitter son cdi avec un crédit : séquencer emploi, financement et transition | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | TRAITEE |
| demandeur emploi | TRAITEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/finances-investissement-locatif.html` — investissement locatif

Promesse : **investissement locatif : rendement, cash-flow et risques — contre-évidence**

| Variante | Signal automatique |
|---|---|
| détention directe | MANQUANTE |
| SCI | MANQUANTE |
| location nue | ROUTEE |
| location meublée | ROUTEE |
| courte durée | MANQUANTE |
| IR / IS | MANQUANTE |
| crédit / cash | TRAITEE |
| gestion | TRAITEE |

### `dossiers/finances-transmission-patrimoine.html` — transmission / succession

Promesse : **transmission du patrimoine : préparer sans improviser — contre-évidence**

| Variante | Signal automatique |
|---|---|
| mariage / conjoint | TRAITEE |
| PACS / concubin | TRAITEE |
| enfants / famille recomposée | TRAITEE |
| sans enfant | MANQUANTE |
| immobilier direct | TRAITEE |
| SCI / parts | MANQUANTE |
| donation | TRAITEE |
| succession | TRAITEE |
| liquidité / partage | TRAITEE |

### `dossiers/acheter-logement-sans-se-fragiliser.html` — achat immobilier / crédit

Promesse : **acheter un logement sans se fragiliser : apport, épargne et crédit | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | TRAITEE |
| CDD / temporaire | MANQUANTE |
| indépendant | MENTIONNEE |
| public | MANQUANTE |
| mobilité / changement emploi | TRAITEE |
| apport / liquidité | TRAITEE |
| dette existante | MENTIONNEE |

### `dossiers/finances-residence-principale.html` — achat immobilier / crédit

Promesse : **acheter ou louer sa résidence principale : durée, mobilité et coût de sortie | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | TRAITEE |
| CDD / temporaire | MANQUANTE |
| indépendant | MENTIONNEE |
| public | MANQUANTE |
| mobilité / changement emploi | TRAITEE |
| apport / liquidité | TRAITEE |
| dette existante | TRAITEE |

### `dossiers/formation-vaut-elle-le-cout.html` — entrepreneuriat

Promesse : **choisir une formation pour une reconversion : coût, rncp et débouchés | contre-évidence**

| Variante | Signal automatique |
|---|---|
| activité principale / complément | MENTIONNEE |
| micro / EI / société | MANQUANTE |
| activité réglementée | TRAITEE |
| chômage / aides | TRAITEE |
| TVA | MANQUANTE |
| financement / BFR | TRAITEE |
| associés | MANQUANTE |

### `dossiers/trajectoire-professionnelle-selon-situation.html` — reconversion / trajectoire pro

Promesse : **quelle stratégie professionnelle selon votre situation ? 8 trajectoires concrètes | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MENTIONNEE |
| demandeur emploi | TRAITEE |
| public | MANQUANTE |
| indépendant | TRAITEE |
| santé / inaptitude | TRAITEE |
| sans diplôme | MANQUANTE |
| senior / âge | TRAITEE |
| revenu / runway | TRAITEE |

### `articles/competences-transferables.html` — reconversion / trajectoire pro

Promesse : **changer de métier sans repartir de zéro : compétences transférables | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | TRAITEE |
| demandeur emploi | TRAITEE |
| public | MENTIONNEE |
| indépendant | TRAITEE |
| santé / inaptitude | TRAITEE |
| sans diplôme | TRAITEE |
| senior / âge | MANQUANTE |
| revenu / runway | MANQUANTE |

### `dossiers/are-arce-acre-creation-entreprise.html` — entrepreneuriat

Promesse : **are, arce, acre : choisir pour créer son entreprise en 2026 | contre-évidence**

| Variante | Signal automatique |
|---|---|
| activité principale / complément | TRAITEE |
| micro / EI / société | ROUTEE |
| activité réglementée | MANQUANTE |
| chômage / aides | TRAITEE |
| TVA | MANQUANTE |
| financement / BFR | TRAITEE |
| associés | MANQUANTE |

### `dossiers/creer-entreprise-avec-peu-argent.html` — budget / dettes

Promesse : **créer une entreprise avec peu d’argent : budget de départ réaliste | contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | TRAITEE |
| revenu stable / variable | MANQUANTE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | MENTIONNEE |
| dette / surendettement | TRAITEE |
| charges compressibles / non | TRAITEE |

### `dossiers/patrimoine-marge-de-manoeuvre.html` — budget / dettes

Promesse : **patrimoine et marge de manœuvre : combien de liberté vos actifs donnent-ils ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MANQUANTE |
| revenu stable / variable | TRAITEE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | TRAITEE |
| dette / surendettement | TRAITEE |
| charges compressibles / non | TRAITEE |

## Lecture par famille

### couple / logement / séparation

Pages détectées : **7**. Promesses larges `NON_READY` : **4**. Variantes le plus souvent non détectées : **tontine** (6), **PACS** (4), **concubinage** (4), **mariage** (4), **SCI** (3), **indivision directe** (2).

### achat immobilier / crédit

Pages détectées : **5**. Promesses larges `NON_READY` : **2**. Variantes le plus souvent non détectées : **public** (4), **CDD / temporaire** (2), **indépendant** (2), **mobilité / changement emploi** (1).

### investissement locatif

Pages détectées : **1**. Promesses larges `NON_READY` : **1**. Variantes le plus souvent non détectées : **IR / IS** (1), **SCI** (1), **courte durée** (1), **détention directe** (1).

### transmission / succession

Pages détectées : **1**. Promesses larges `NON_READY` : **1**. Variantes le plus souvent non détectées : **SCI / parts** (1), **sans enfant** (1).

### reconversion / trajectoire pro

Pages détectées : **12**. Promesses larges `NON_READY` : **5**. Variantes le plus souvent non détectées : **public** (9), **senior / âge** (8), **indépendant** (7), **sans diplôme** (5), **santé / inaptitude** (3), **revenu / runway** (2).

### entrepreneuriat

Pages détectées : **6**. Promesses larges `NON_READY` : **3**. Variantes le plus souvent non détectées : **TVA** (4), **associés** (4), **activité réglementée** (3), **micro / EI / société** (2).

### budget / dettes

Pages détectées : **6**. Promesses larges `NON_READY` : **2**. Variantes le plus souvent non détectées : **logement propriétaire / locataire** (2), **déficit temporaire / structurel** (1), **revenu stable / variable** (1).

### travailler moins / qualité de vie

Pages détectées : **4**. Promesses larges `NON_READY` : **0**. Variantes le plus souvent non détectées : **indépendant** (1).

## Règle éditoriale

1. Relire la promesse avant le corps du texte.
2. Lister seulement les variantes qui changent matériellement droit, calcul, risque, séquence ou sortie.
3. Classer chaque variante : `TRAITEE`, `ROUTEE`, `HORS_PERIMETRE_EXPLICITE` ou `MANQUANTE`.
4. Préférer un aiguillage précis à une réécriture encyclopédique.
5. Auditer séparément l’accroche sociale ou SEO : elle peut être plus large que la page cible.
