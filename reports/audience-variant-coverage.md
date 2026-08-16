# Audit de couverture des situations

Mise à jour automatique : 2026-08-16

Cet audit cherche les **variantes raisonnablement attirées par la promesse visible d’une page** mais non reconnues dans son contenu ou son routage. La famille est déterminée uniquement par le title, le H1 et la meta description — jamais par un exemple rencontré plus loin dans le texte.

Le score est heuristique. `NON_READY` signifie : **relire humainement avant d’utiliser cette page comme destination d’acquisition large**. Une page technique volontairement étroite peut être parfaitement conforme.

Pages/familles détectées : **42**. Pages `noindex` exclues : **79**. Promesses larges à relire avant acquisition : **27**.

## Priorités de relecture

| Priorité | Gate | Famille | Page | Variantes critiques non détectées |
|---:|---|---|---|---|
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/devenir-manager-premiere-fois.html` | demandeur emploi, santé / inaptitude, sans diplôme, revenu / runway |
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/patrimoine-marge-de-manoeuvre.html` | salarié, demandeur emploi, santé / inaptitude, sans diplôme |
| 28 | NON_READY | transmission / succession | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | mariage / conjoint, PACS / concubin, enfants / famille recomposée, SCI / parts |
| 28 | NON_READY | travailler moins / qualité de vie | `dossiers/temps-energie-qualite-vie.html` | salarié privé, public, indépendant, retraite / protection |
| 22 | NON_READY | reconversion / trajectoire pro | `articles/retrouver-emploi-apres-interruption.html` | salarié, demandeur emploi, sans diplôme |
| 22 | NON_READY | reconversion / trajectoire pro | `dossiers/formation-vaut-elle-le-cout.html` | salarié, demandeur emploi, santé / inaptitude |
| 22 | NON_READY | reconversion / trajectoire pro | `dossiers/metiers-fonctions-organisation-entreprise.html` | santé / inaptitude, sans diplôme, revenu / runway |
| 22 | NON_READY | travailler moins / qualité de vie | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | salarié privé, public, indépendant |
| 21 | NON_READY | reconversion / trajectoire pro | `articles/competences-transferables.html` | demandeur emploi, santé / inaptitude, sans diplôme |
| 21 | NON_READY | travailler moins / qualité de vie | `dossiers/patrimoine-permet-il-travailler-moins.html` | salarié privé, public, indépendant |
| 21 | NON_READY | travailler moins / qualité de vie | `dossiers/travailler-moins-vivre-mieux.html` | public, indépendant |
| 15 | NON_READY | achat immobilier / crédit | `dossiers/acheter-sans-vider-epargne.html` | achat seul / à deux, CDD / temporaire |
| 15 | NON_READY | reconversion / trajectoire pro | `dossiers/combien-epargne-avant-demissionner.html` | salarié, sans diplôme |
| 15 | NON_READY | budget / dettes | `dossiers/creer-entreprise-avec-peu-argent.html` | déficit temporaire / structurel, dette / surendettement |
| 15 | NON_READY | reconversion / trajectoire pro | `dossiers/decider-a-deux-travail-patrimoine.html` | demandeur emploi, sans diplôme |
| 14 | NON_READY | achat immobilier / crédit | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` | CDD / temporaire, indépendant |
| 14 | NON_READY | entrepreneuriat | `dossiers/combien-chiffre-affaires-pour-vivre.html` | micro / EI / société, activité réglementée |
| 14 | NON_READY | entrepreneuriat | `dossiers/creer-entreprise-avec-peu-argent.html` | micro / EI / société, activité réglementée |
| 14 | NON_READY | budget / dettes | `dossiers/patrimoine-marge-de-manoeuvre.html` | déficit temporaire / structurel, revenu stable / variable |
| 14 | NON_READY | reconversion / trajectoire pro | `dossiers/quitter-cdi-avec-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 10 | ROUTE_FIRST | reconversion / trajectoire pro | `dossiers/changer-travail-avant-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 10 | NON_READY | couple / logement / séparation | `dossiers/decider-a-deux-travail-patrimoine.html` | SCI |
| 10 | NON_READY | investissement locatif | `dossiers/finances-investissement-locatif.html` | SCI |
| 10 | NON_READY | transmission / succession | `dossiers/finances-transmission-patrimoine.html` | SCI / parts |
| 8 | NON_READY | achat immobilier / crédit | `dossiers/acheter-logement-sans-se-fragiliser.html` | CDD / temporaire |
| 8 | NON_READY | achat immobilier / crédit | `dossiers/finances-residence-principale.html` | CDD / temporaire |
| 8 | NON_READY | reconversion / trajectoire pro | `dossiers/trajectoire-professionnelle-selon-situation.html` | sans diplôme |
| 7 | NON_READY | entrepreneuriat | `dossiers/are-arce-acre-creation-entreprise.html` | activité réglementée |
| 5 | ROUTE_FIRST | achat immobilier / crédit | `dossiers/changer-travail-avant-credit-immobilier.html` | indépendant |
| 5 | ROUTE_FIRST | achat immobilier / crédit | `dossiers/indivision-couple-separation-rachat-soulte.html` | indépendant |
| 5 | ROUTE_FIRST | couple / logement / séparation | `dossiers/indivision-couple-separation-rachat-soulte.html` | SCI |
| 5 | ROUTE_FIRST | travailler moins / qualité de vie | `dossiers/passer-80-pourcent-cout-reel.html` | indépendant |
| 4 | ROUTE_FIRST | entrepreneuriat | `dossiers/lancer-activite-sans-quitter-emploi.html` | activité réglementée |
| 2 | COVERED_OR_NARROW | budget / dettes | `dossiers/puis-je-me-permettre-reconversion.html` | — |
| 2 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/puis-je-me-permettre-reconversion.html` | — |
| 1 | COVERED_OR_NARROW | budget / dettes | `articles/construire-epargne-de-zero.html` | — |
| 1 | COVERED_OR_NARROW | budget / dettes | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | — |
| 1 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/reconversion-sans-formation-longue.html` | — |
| 0 | COVERED_OR_NARROW | budget / dettes | `dossiers/audit-budget-60-minutes.html` | — |
| 0 | COVERED_OR_NARROW | entrepreneuriat | `dossiers/creer-entreprise-sans-diplome.html` | — |
| 0 | COVERED_OR_NARROW | reconversion / trajectoire pro | `dossiers/reconversion-sans-perte-salaire.html` | — |
| 0 | COVERED_OR_NARROW | couple / logement / séparation | `dossiers/separation-logement-achete-a-deux.html` | — |

## Détail des promesses larges `NON_READY`

### `dossiers/devenir-manager-premiere-fois.html` — reconversion / trajectoire pro

Promesse : **devenir manager pour la première fois : changer de métier sans devenir le goulot d’étranglement — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | TRAITEE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | MANQUANTE |

### `dossiers/patrimoine-marge-de-manoeuvre.html` — reconversion / trajectoire pro

Promesse : **patrimoine et marge de manœuvre : combien de liberté vos actifs vous donnent-ils ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` — transmission / succession

Promesse : **quand arrêter d’optimiser et commencer à utiliser son patrimoine ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| mariage / conjoint | MANQUANTE |
| PACS / concubin | MANQUANTE |
| enfants / famille recomposée | MANQUANTE |
| sans enfant | MANQUANTE |
| immobilier direct | MANQUANTE |
| SCI / parts | MANQUANTE |
| donation | MANQUANTE |
| succession | MANQUANTE |
| liquidité / partage | ROUTEE |

### `dossiers/temps-energie-qualite-vie.html` — travailler moins / qualité de vie

Promesse : **manque de temps : comment récupérer des heures de vie ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| 80% / quatre jours | TRAITEE |
| télétravail / autre levier | TRAITEE |
| solo / couple | TRAITEE |
| retraite / protection | MANQUANTE |
| temps réellement libéré | TRAITEE |

### `articles/retrouver-emploi-apres-interruption.html` — reconversion / trajectoire pro

Promesse : **retrouver un emploi après une longue interruption : reconstruire sa crédibilité — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MENTIONNEE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/formation-vaut-elle-le-cout.html` — reconversion / trajectoire pro

Promesse : **choisir une formation pour une reconversion : coût, rncp et débouchés | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MENTIONNEE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/metiers-fonctions-organisation-entreprise.html` — reconversion / trajectoire pro

Promesse : **métier, poste, fonction, service : comprendre l’entreprise — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MENTIONNEE |
| demandeur emploi | TRAITEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | MANQUANTE |

### `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` — travailler moins / qualité de vie

Promesse : **quand arrêter d’optimiser et commencer à utiliser son patrimoine ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| 80% / quatre jours | TRAITEE |
| télétravail / autre levier | TRAITEE |
| solo / couple | TRAITEE |
| retraite / protection | TRAITEE |
| temps réellement libéré | MENTIONNEE |

### `articles/competences-transferables.html` — reconversion / trajectoire pro

Promesse : **changer de métier sans repartir de zéro : compétences transférables | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | TRAITEE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | ROUTEE |

### `dossiers/patrimoine-permet-il-travailler-moins.html` — travailler moins / qualité de vie

Promesse : **travailler moins grâce à son patrimoine : combien faut-il ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| 80% / quatre jours | TRAITEE |
| télétravail / autre levier | MANQUANTE |
| solo / couple | TRAITEE |
| retraite / protection | TRAITEE |
| temps réellement libéré | TRAITEE |

### `dossiers/travailler-moins-vivre-mieux.html` — travailler moins / qualité de vie

Promesse : **travailler moins pour vivre mieux : salaire, temps, santé et patrimoine | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MENTIONNEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| 80% / quatre jours | TRAITEE |
| télétravail / autre levier | TRAITEE |
| solo / couple | TRAITEE |
| retraite / protection | TRAITEE |
| temps réellement libéré | TRAITEE |

### `dossiers/acheter-sans-vider-epargne.html` — achat immobilier / crédit

Promesse : **combien d’épargne garder après un achat immobilier ? apport et réserve | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | MANQUANTE |
| CDI / stabilité | TRAITEE |
| CDD / temporaire | MANQUANTE |
| indépendant | MENTIONNEE |
| public | MANQUANTE |
| mobilité / changement emploi | TRAITEE |
| apport / liquidité | TRAITEE |
| dette existante | TRAITEE |

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

### `dossiers/creer-entreprise-avec-peu-argent.html` — budget / dettes

Promesse : **créer une entreprise avec peu d’argent : budget de départ réaliste | contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MANQUANTE |
| revenu stable / variable | MENTIONNEE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | MENTIONNEE |
| dette / surendettement | MANQUANTE |
| charges compressibles / non | TRAITEE |

### `dossiers/decider-a-deux-travail-patrimoine.html` — reconversion / trajectoire pro

Promesse : **décider à deux : travail, mobilité et patrimoine sans fragiliser le foyer | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | TRAITEE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | TRAITEE |
| santé / inaptitude | MENTIONNEE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/acheter-ou-louer-si-on-risque-demenager.html` — achat immobilier / crédit

Promesse : **acheter ou louer si vous risquez de déménager bientôt ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | TRAITEE |
| CDD / temporaire | MANQUANTE |
| indépendant | MANQUANTE |
| public | MANQUANTE |
| mobilité / changement emploi | TRAITEE |
| apport / liquidité | TRAITEE |
| dette existante | MANQUANTE |

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

### `dossiers/creer-entreprise-avec-peu-argent.html` — entrepreneuriat

Promesse : **créer une entreprise avec peu d’argent : budget de départ réaliste | contre-évidence**

| Variante | Signal automatique |
|---|---|
| activité principale / complément | TRAITEE |
| micro / EI / société | MANQUANTE |
| activité réglementée | MANQUANTE |
| chômage / aides | TRAITEE |
| TVA | MANQUANTE |
| financement / BFR | TRAITEE |
| associés | MANQUANTE |

### `dossiers/patrimoine-marge-de-manoeuvre.html` — budget / dettes

Promesse : **patrimoine et marge de manœuvre : combien de liberté vos actifs vous donnent-ils ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MANQUANTE |
| revenu stable / variable | MANQUANTE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | MANQUANTE |
| dette / surendettement | TRAITEE |
| charges compressibles / non | TRAITEE |

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

### `dossiers/decider-a-deux-travail-patrimoine.html` — couple / logement / séparation

Promesse : **décider à deux : travail, mobilité et patrimoine sans fragiliser le foyer | contre-évidence**

| Variante | Signal automatique |
|---|---|
| indivision directe | MENTIONNEE |
| SCI | MANQUANTE |
| mariage | MENTIONNEE |
| PACS | MENTIONNEE |
| concubinage | MANQUANTE |
| tontine | MANQUANTE |
| propriété ≠ financement | TRAITEE |
| sorties multiples | TRAITEE |

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

## Lecture par famille

### couple / logement / séparation

Pages détectées : **3**. Promesses larges `NON_READY` : **1**. Variantes le plus souvent non détectées : **SCI** (2), **tontine** (2), **concubinage** (1).

### achat immobilier / crédit

Pages détectées : **6**. Promesses larges `NON_READY` : **4**. Variantes le plus souvent non détectées : **public** (6), **CDD / temporaire** (4), **indépendant** (3), **achat seul / à deux** (1), **dette existante** (1), **mobilité / changement emploi** (1).

### investissement locatif

Pages détectées : **1**. Promesses larges `NON_READY` : **1**. Variantes le plus souvent non détectées : **IR / IS** (1), **SCI** (1), **courte durée** (1), **détention directe** (1).

### transmission / succession

Pages détectées : **2**. Promesses larges `NON_READY` : **2**. Variantes le plus souvent non détectées : **SCI / parts** (2), **sans enfant** (2), **PACS / concubin** (1), **donation** (1), **enfants / famille recomposée** (1), **immobilier direct** (1).

### reconversion / trajectoire pro

Pages détectées : **14**. Promesses larges `NON_READY` : **10**. Variantes le plus souvent non détectées : **public** (14), **senior / âge** (13), **indépendant** (12), **sans diplôme** (10), **santé / inaptitude** (7), **demandeur emploi** (6).

### entrepreneuriat

Pages détectées : **5**. Promesses larges `NON_READY` : **3**. Variantes le plus souvent non détectées : **TVA** (4), **activité réglementée** (4), **associés** (4), **micro / EI / société** (2).

### budget / dettes

Pages détectées : **6**. Promesses larges `NON_READY` : **2**. Variantes le plus souvent non détectées : **logement propriétaire / locataire** (3), **déficit temporaire / structurel** (2), **dette / surendettement** (1), **revenu stable / variable** (1).

### travailler moins / qualité de vie

Pages détectées : **5**. Promesses larges `NON_READY` : **4**. Variantes le plus souvent non détectées : **indépendant** (5), **public** (4), **salarié privé** (3), **retraite / protection** (1), **télétravail / autre levier** (1).

## Règle éditoriale

1. Relire la promesse avant le corps du texte.
2. Lister seulement les variantes qui changent matériellement droit, calcul, risque, séquence ou sortie.
3. Classer chaque variante : `TRAITEE`, `ROUTEE`, `HORS_PERIMETRE_EXPLICITE` ou `MANQUANTE`.
4. Préférer un aiguillage précis à une réécriture encyclopédique.
5. Auditer séparément l’accroche sociale ou SEO : elle peut être plus large que la page cible.
