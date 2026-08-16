# Audit de couverture des situations

Mise à jour automatique : 2026-08-16

Cet audit cherche les **variantes raisonnablement attirées par la promesse d’une page** mais non reconnues dans son contenu ou son routage. Il complète l’audit des angles morts : ici, le problème n’est pas un raisonnement absent *dans le cas*, mais un **cas voisin qui peut être invisible**.

Le score est heuristique. Une occurrence lexicale ne prouve pas un traitement suffisant ; une absence lexicale ne prouve pas un défaut. La sortie `NON_READY` signifie uniquement : **relire humainement avant d’utiliser cette page comme destination d’acquisition large**.

Pages/familles détectées : **91**. Pages `noindex` exclues : **79**. Promesses larges à relire avant acquisition : **64**.

## Priorités de relecture

| Priorité | Gate | Famille | Page | Variantes critiques non détectées |
|---:|---|---|---|---|
| 40 | NON_READY | travailler moins / qualité de vie | `dossiers/temps-energie-qualite-vie.html` | salarié privé, public, indépendant, retraite / protection |
| 30 | NON_READY | reconversion / trajectoire pro | `articles/competences-transferables.html` | demandeur emploi, santé / inaptitude, sans diplôme |
| 29 | NON_READY | travailler moins / qualité de vie | `dossiers/comparer-deux-offres-emploi.html` | public, indépendant, retraite / protection, temps réellement libéré |
| 29 | NON_READY | travailler moins / qualité de vie | `dossiers/finances-allocation-portefeuille.html` | salarié privé, public, retraite / protection, temps réellement libéré |
| 29 | NON_READY | couple / logement / séparation | `dossiers/quand-vie-change-sante-separation-revenu.html` | indivision directe, SCI, mariage, PACS |
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/accepter-emploi-plus-loin-cout-trajet.html` | salarié, demandeur emploi, santé / inaptitude, sans diplôme |
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/acheter-logement-sans-se-fragiliser.html` | salarié, demandeur emploi, santé / inaptitude, sans diplôme |
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/devenir-manager-premiere-fois.html` | demandeur emploi, santé / inaptitude, sans diplôme, revenu / runway |
| 28 | NON_READY | reconversion / trajectoire pro | `dossiers/patrimoine-marge-de-manoeuvre.html` | salarié, demandeur emploi, santé / inaptitude, sans diplôme |
| 28 | NON_READY | transmission / succession | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | mariage / conjoint, PACS / concubin, enfants / famille recomposée, SCI / parts |
| 22 | NON_READY | reconversion / trajectoire pro | `articles/retrouver-emploi-apres-interruption.html` | salarié, demandeur emploi, sans diplôme |
| 22 | NON_READY | travailler moins / qualité de vie | `dossiers/accepter-emploi-plus-loin-cout-trajet.html` | indépendant, retraite / protection, temps réellement libéré |
| 22 | NON_READY | entrepreneuriat | `dossiers/combien-chiffre-affaires-pour-vivre.html` | micro / EI / société, activité réglementée, chômage / aides |
| 22 | NON_READY | budget / dettes | `dossiers/devenir-manager-premiere-fois.html` | déficit temporaire / structurel, revenu stable / variable, dette / surendettement |
| 22 | NON_READY | transmission / succession | `dossiers/finances-retraite-decumulation.html` | PACS / concubin, enfants / famille recomposée, SCI / parts |
| 22 | NON_READY | reconversion / trajectoire pro | `dossiers/formation-vaut-elle-le-cout.html` | salarié, demandeur emploi, santé / inaptitude |
| 22 | NON_READY | reconversion / trajectoire pro | `dossiers/metiers-fonctions-organisation-entreprise.html` | santé / inaptitude, sans diplôme, revenu / runway |
| 22 | NON_READY | travailler moins / qualité de vie | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | salarié privé, public, indépendant |
| 22 | NON_READY | reconversion / trajectoire pro | `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` | salarié, demandeur emploi, sans diplôme |
| 22 | NON_READY | travailler moins / qualité de vie | `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` | salarié privé, public, temps réellement libéré |
| 21 | NON_READY | investissement locatif | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` | SCI, location nue, location meublée |
| 21 | NON_READY | reconversion / trajectoire pro | `dossiers/competences-qualification-employabilite.html` | salarié, santé / inaptitude, revenu / runway |
| 21 | NON_READY | investissement locatif | `dossiers/finances-residence-principale.html` | SCI, location nue, location meublée |
| 21 | NON_READY | budget / dettes | `dossiers/immobilier-allocation-globale-patrimoine.html` | déficit temporaire / structurel, revenu stable / variable, charges compressibles / non |
| 21 | NON_READY | investissement locatif | `dossiers/indivision-immobiliere-sortir-sans-subir.html` | SCI, location nue, location meublée |
| 21 | NON_READY | travailler moins / qualité de vie | `dossiers/patrimoine-permet-il-travailler-moins.html` | salarié privé, public, indépendant |
| 21 | NON_READY | achat immobilier / crédit | `dossiers/sci-immobiliere-acheter-gerer-transmettre-sortir.html` | CDI / stabilité, CDD / temporaire, indépendant |
| 21 | NON_READY | travailler moins / qualité de vie | `dossiers/travailler-moins-vivre-mieux.html` | public, indépendant |
| 21 | NON_READY | investissement locatif | `dossiers/valeur-option-bien-immobilier.html` | SCI, location nue, crédit / cash |
| 16 | NON_READY | reconversion / trajectoire pro | `dossiers/changer-travail-avant-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 16 | ROUTE_FIRST | transmission / succession | `dossiers/indivision-succession-heritiers-vendre-partager.html` | mariage / conjoint, PACS / concubin, enfants / famille recomposée, SCI / parts |
| 15 | NON_READY | reconversion / trajectoire pro | `articles/sans-diplome-chemins-alternatifs.html` | demandeur emploi, santé / inaptitude |
| 15 | NON_READY | achat immobilier / crédit | `dossiers/acheter-sans-vider-epargne.html` | achat seul / à deux, CDD / temporaire |
| 15 | NON_READY | achat immobilier / crédit | `dossiers/audit-copropriete-avant-achat.html` | CDD / temporaire, indépendant |
| 15 | NON_READY | reconversion / trajectoire pro | `dossiers/combien-epargne-avant-demissionner.html` | salarié, sans diplôme |
| 15 | NON_READY | budget / dettes | `dossiers/creer-entreprise-avec-peu-argent.html` | déficit temporaire / structurel, dette / surendettement |
| 15 | NON_READY | reconversion / trajectoire pro | `dossiers/decider-a-deux-travail-patrimoine.html` | demandeur emploi, sans diplôme |
| 15 | NON_READY | achat immobilier / crédit | `dossiers/indivision-immobiliere-sortir-sans-subir.html` | CDD / temporaire, indépendant |
| 15 | NON_READY | achat immobilier / crédit | `dossiers/patrimoine-permet-il-travailler-moins.html` | CDI / stabilité, indépendant |
| 15 | NON_READY | budget / dettes | `dossiers/piloter-patrimoine-selon-taille.html` | revenu stable / variable, charges compressibles / non |
| 15 | NON_READY | entrepreneuriat | `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` | micro / EI / société, activité réglementée |
| 14 | NON_READY | reconversion / trajectoire pro | `articles/accepter-nimporte-quel-poste-retour-emploi.html` | demandeur emploi, sans diplôme |
| 14 | NON_READY | reconversion / trajectoire pro | `articles/tester-metier-avant-investir.html` | salarié, santé / inaptitude |
| 14 | NON_READY | achat immobilier / crédit | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` | CDD / temporaire, indépendant |
| 14 | NON_READY | entrepreneuriat | `dossiers/creer-entreprise-avec-peu-argent.html` | micro / EI / société, activité réglementée |
| 14 | NON_READY | investissement locatif | `dossiers/immobilier-allocation-globale-patrimoine.html` | SCI, crédit / cash |
| 14 | NON_READY | budget / dettes | `dossiers/patrimoine-marge-de-manoeuvre.html` | déficit temporaire / structurel, revenu stable / variable |
| 14 | NON_READY | transmission / succession | `dossiers/patrimoine-selon-age-construire-utiliser.html` | PACS / concubin, SCI / parts |
| 14 | NON_READY | reconversion / trajectoire pro | `dossiers/quitter-cdi-avec-credit-immobilier.html` | santé / inaptitude, sans diplôme |
| 10 | NON_READY | budget / dettes | `articles/comparatif-produits-bancaires.html` | dette / surendettement |
| 10 | NON_READY | couple / logement / séparation | `dossiers/decider-a-deux-travail-patrimoine.html` | SCI |
| 10 | NON_READY | investissement locatif | `dossiers/finances-investissement-locatif.html` | SCI |
| 10 | NON_READY | transmission / succession | `dossiers/finances-transmission-patrimoine.html` | SCI / parts |
| 10 | NON_READY | transmission / succession | `dossiers/piloter-patrimoine-selon-taille.html` | PACS / concubin |
| 9 | NON_READY | budget / dettes | `dossiers/audit-copropriete-avant-achat.html` | déficit temporaire / structurel |
| 9 | NON_READY | budget / dettes | `dossiers/questions-poser-avant-prise-de-poste.html` | dette / surendettement |
| 8 | NON_READY | achat immobilier / crédit | `dossiers/acheter-logement-sans-se-fragiliser.html` | CDD / temporaire |
| 8 | ROUTE_FIRST | entrepreneuriat | `dossiers/choisir-statut-micro-ei-eurl-sasu.html` | activité principale / complément, activité réglementée |
| 8 | ROUTE_FIRST | transmission / succession | `dossiers/favoriser-un-enfant-succession-donation.html` | PACS / concubin, SCI / parts |
| 8 | NON_READY | budget / dettes | `dossiers/finances-cadre-global.html` | charges compressibles / non |

## Détail des promesses larges `NON_READY`

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

### `dossiers/comparer-deux-offres-emploi.html` — travailler moins / qualité de vie

Promesse : **comparer deux offres d’emploi : salaire, contrat, temps, risques et évolution | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MENTIONNEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| 80% / quatre jours | MANQUANTE |
| télétravail / autre levier | TRAITEE |
| solo / couple | TRAITEE |
| retraite / protection | MANQUANTE |
| temps réellement libéré | MANQUANTE |

### `dossiers/finances-allocation-portefeuille.html` — travailler moins / qualité de vie

Promesse : **construire une allocation patrimoniale robuste — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MANQUANTE |
| public | MANQUANTE |
| indépendant | MENTIONNEE |
| 80% / quatre jours | TRAITEE |
| télétravail / autre levier | MANQUANTE |
| solo / couple | TRAITEE |
| retraite / protection | MANQUANTE |
| temps réellement libéré | MANQUANTE |

### `dossiers/quand-vie-change-sante-separation-revenu.html` — couple / logement / séparation

Promesse : **quand la vie change brutalement : santé, séparation, revenu | contre-évidence**

| Variante | Signal automatique |
|---|---|
| indivision directe | MANQUANTE |
| SCI | MANQUANTE |
| mariage | MANQUANTE |
| PACS | MANQUANTE |
| concubinage | MANQUANTE |
| tontine | MANQUANTE |
| propriété ≠ financement | MENTIONNEE |
| sorties multiples | TRAITEE |

### `dossiers/accepter-emploi-plus-loin-cout-trajet.html` — reconversion / trajectoire pro

Promesse : **accepter un emploi plus loin : combien le trajet coûte vraiment ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | MANQUANTE |
| public | MENTIONNEE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/acheter-logement-sans-se-fragiliser.html` — reconversion / trajectoire pro

Promesse : **acheter un logement sans se fragiliser : apport, épargne et crédit | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MENTIONNEE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

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

### `dossiers/accepter-emploi-plus-loin-cout-trajet.html` — travailler moins / qualité de vie

Promesse : **accepter un emploi plus loin : combien le trajet coûte vraiment ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | TRAITEE |
| public | MENTIONNEE |
| indépendant | MANQUANTE |
| 80% / quatre jours | MANQUANTE |
| télétravail / autre levier | TRAITEE |
| solo / couple | TRAITEE |
| retraite / protection | MANQUANTE |
| temps réellement libéré | MANQUANTE |

### `dossiers/combien-chiffre-affaires-pour-vivre.html` — entrepreneuriat

Promesse : **combien de chiffre d’affaires faut-il pour en vivre ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| activité principale / complément | MENTIONNEE |
| micro / EI / société | MANQUANTE |
| activité réglementée | MANQUANTE |
| chômage / aides | MANQUANTE |
| TVA | MENTIONNEE |
| financement / BFR | TRAITEE |
| associés | MANQUANTE |

### `dossiers/devenir-manager-premiere-fois.html` — budget / dettes

Promesse : **devenir manager pour la première fois : changer de métier sans devenir le goulot d’étranglement — contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MANQUANTE |
| revenu stable / variable | MANQUANTE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | MANQUANTE |
| dette / surendettement | MANQUANTE |
| charges compressibles / non | MENTIONNEE |

### `dossiers/finances-retraite-decumulation.html` — transmission / succession

Promesse : **retraite et décumulation : transformer un patrimoine en revenus — contre-évidence**

| Variante | Signal automatique |
|---|---|
| mariage / conjoint | MENTIONNEE |
| PACS / concubin | MANQUANTE |
| enfants / famille recomposée | MANQUANTE |
| sans enfant | MANQUANTE |
| immobilier direct | MENTIONNEE |
| SCI / parts | MANQUANTE |
| donation | MANQUANTE |
| succession | TRAITEE |
| liquidité / partage | TRAITEE |

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

### `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` — reconversion / trajectoire pro

Promesse : **tout ça pour quoi ? objectifs, besoins et décisions | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MENTIONNEE |
| santé / inaptitude | MENTIONNEE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` — travailler moins / qualité de vie

Promesse : **tout ça pour quoi ? objectifs, besoins et décisions | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié privé | MANQUANTE |
| public | MANQUANTE |
| indépendant | MENTIONNEE |
| 80% / quatre jours | MENTIONNEE |
| télétravail / autre levier | TRAITEE |
| solo / couple | TRAITEE |
| retraite / protection | TRAITEE |
| temps réellement libéré | MANQUANTE |

### `dossiers/acheter-ou-louer-si-on-risque-demenager.html` — investissement locatif

Promesse : **acheter ou louer si vous risquez de déménager bientôt ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| détention directe | MANQUANTE |
| SCI | MANQUANTE |
| location nue | MANQUANTE |
| location meublée | MANQUANTE |
| courte durée | MANQUANTE |
| IR / IS | MANQUANTE |
| crédit / cash | TRAITEE |
| gestion | TRAITEE |

### `dossiers/competences-qualification-employabilite.html` — reconversion / trajectoire pro

Promesse : **compétence, qualification, diplôme et employabilité — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MANQUANTE |
| demandeur emploi | ROUTEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | TRAITEE |
| senior / âge | MANQUANTE |
| revenu / runway | MANQUANTE |

### `dossiers/finances-residence-principale.html` — investissement locatif

Promesse : **acheter ou louer sa résidence principale : durée, mobilité et coût de sortie | contre-évidence**

| Variante | Signal automatique |
|---|---|
| détention directe | MANQUANTE |
| SCI | MANQUANTE |
| location nue | MANQUANTE |
| location meublée | MANQUANTE |
| courte durée | MANQUANTE |
| IR / IS | MANQUANTE |
| crédit / cash | TRAITEE |
| gestion | MANQUANTE |

### `dossiers/immobilier-allocation-globale-patrimoine.html` — budget / dettes

Promesse : **immobilier et allocation globale — contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MANQUANTE |
| revenu stable / variable | MANQUANTE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | TRAITEE |
| dette / surendettement | TRAITEE |
| charges compressibles / non | MANQUANTE |

### `dossiers/indivision-immobiliere-sortir-sans-subir.html` — investissement locatif

Promesse : **sortir d’une indivision immobilière : vendre, racheter, louer ou partager ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| détention directe | MANQUANTE |
| SCI | MANQUANTE |
| location nue | MANQUANTE |
| location meublée | MANQUANTE |
| courte durée | MANQUANTE |
| IR / IS | MANQUANTE |
| crédit / cash | TRAITEE |
| gestion | TRAITEE |

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

### `dossiers/sci-immobiliere-acheter-gerer-transmettre-sortir.html` — achat immobilier / crédit

Promesse : **sci immobilière : avantages, risques, ir/is, séparation et sortie | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | MANQUANTE |
| CDD / temporaire | MANQUANTE |
| indépendant | MANQUANTE |
| public | MANQUANTE |
| mobilité / changement emploi | MANQUANTE |
| apport / liquidité | TRAITEE |
| dette existante | TRAITEE |

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

### `dossiers/valeur-option-bien-immobilier.html` — investissement locatif

Promesse : **valeur d’option d’un bien immobilier — contre-évidence**

| Variante | Signal automatique |
|---|---|
| détention directe | MANQUANTE |
| SCI | MANQUANTE |
| location nue | MANQUANTE |
| location meublée | TRAITEE |
| courte durée | MANQUANTE |
| IR / IS | MANQUANTE |
| crédit / cash | MANQUANTE |
| gestion | TRAITEE |

### `dossiers/changer-travail-avant-credit-immobilier.html` — reconversion / trajectoire pro

Promesse : **changer de travail avant un crédit immobilier : acheter avant ou après ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MENTIONNEE |
| demandeur emploi | MENTIONNEE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | MANQUANTE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

### `articles/sans-diplome-chemins-alternatifs.html` — reconversion / trajectoire pro

Promesse : **travailler sans le diplôme demandé : vae, certification, expérience ou passerelle ? — contre-évidence**

| Variante | Signal automatique |
|---|---|
| salarié | MENTIONNEE |
| demandeur emploi | MANQUANTE |
| public | MANQUANTE |
| indépendant | MANQUANTE |
| santé / inaptitude | MANQUANTE |
| sans diplôme | TRAITEE |
| senior / âge | MANQUANTE |
| revenu / runway | TRAITEE |

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

### `dossiers/audit-copropriete-avant-achat.html` — achat immobilier / crédit

Promesse : **acheter en copropriété : l’audit à faire avant de signer — contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | MENTIONNEE |
| CDD / temporaire | MANQUANTE |
| indépendant | MANQUANTE |
| public | MANQUANTE |
| mobilité / changement emploi | MANQUANTE |
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

### `dossiers/indivision-immobiliere-sortir-sans-subir.html` — achat immobilier / crédit

Promesse : **sortir d’une indivision immobilière : vendre, racheter, louer ou partager ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | MENTIONNEE |
| CDD / temporaire | MANQUANTE |
| indépendant | MANQUANTE |
| public | MANQUANTE |
| mobilité / changement emploi | MANQUANTE |
| apport / liquidité | TRAITEE |
| dette existante | TRAITEE |

### `dossiers/patrimoine-permet-il-travailler-moins.html` — achat immobilier / crédit

Promesse : **travailler moins grâce à son patrimoine : combien faut-il ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| achat seul / à deux | TRAITEE |
| CDI / stabilité | MANQUANTE |
| CDD / temporaire | MENTIONNEE |
| indépendant | MANQUANTE |
| public | MANQUANTE |
| mobilité / changement emploi | MANQUANTE |
| apport / liquidité | TRAITEE |
| dette existante | TRAITEE |

### `dossiers/piloter-patrimoine-selon-taille.html` — budget / dettes

Promesse : **comment piloter un patrimoine selon sa taille ? | contre-évidence**

| Variante | Signal automatique |
|---|---|
| déficit temporaire / structurel | MENTIONNEE |
| revenu stable / variable | MANQUANTE |
| solo / couple | TRAITEE |
| logement propriétaire / locataire | MANQUANTE |
| dette / surendettement | TRAITEE |
| charges compressibles / non | MANQUANTE |

### `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` — entrepreneuriat

Promesse : **tout ça pour quoi ? objectifs, besoins et décisions | contre-évidence**

| Variante | Signal automatique |
|---|---|
| activité principale / complément | MENTIONNEE |
| micro / EI / société | MANQUANTE |
| activité réglementée | MANQUANTE |
| chômage / aides | TRAITEE |
| TVA | MANQUANTE |
| financement / BFR | TRAITEE |
| associés | MANQUANTE |

## Lecture par famille

### couple / logement / séparation

Pages détectées : **6**. Promesses larges `NON_READY` : **3**. Variantes le plus souvent non détectées : **SCI** (5), **tontine** (5), **concubinage** (3), **mariage** (2), **PACS** (1), **indivision directe** (1).

### achat immobilier / crédit

Pages détectées : **10**. Promesses larges `NON_READY` : **9**. Variantes le plus souvent non détectées : **public** (10), **CDD / temporaire** (7), **indépendant** (7), **mobilité / changement emploi** (5), **CDI / stabilité** (2), **achat seul / à deux** (1).

### investissement locatif

Pages détectées : **9**. Promesses larges `NON_READY` : **7**. Variantes le plus souvent non détectées : **IR / IS** (8), **SCI** (8), **courte durée** (7), **détention directe** (6), **location nue** (4), **crédit / cash** (3).

### transmission / succession

Pages détectées : **8**. Promesses larges `NON_READY` : **5**. Variantes le plus souvent non détectées : **sans enfant** (8), **PACS / concubin** (6), **SCI / parts** (6), **donation** (4), **enfants / famille recomposée** (3), **immobilier direct** (2).

### reconversion / trajectoire pro

Pages détectées : **22**. Promesses larges `NON_READY` : **18**. Variantes le plus souvent non détectées : **public** (21), **senior / âge** (21), **indépendant** (18), **sans diplôme** (14), **santé / inaptitude** (13), **demandeur emploi** (11).

### entrepreneuriat

Pages détectées : **7**. Promesses larges `NON_READY` : **4**. Variantes le plus souvent non détectées : **activité réglementée** (6), **associés** (6), **TVA** (5), **micro / EI / société** (3), **activité principale / complément** (1), **chômage / aides** (1).

### budget / dettes

Pages détectées : **20**. Promesses larges `NON_READY` : **10**. Variantes le plus souvent non détectées : **logement propriétaire / locataire** (13), **déficit temporaire / structurel** (6), **dette / surendettement** (4), **revenu stable / variable** (4), **charges compressibles / non** (3).

### travailler moins / qualité de vie

Pages détectées : **9**. Promesses larges `NON_READY` : **8**. Variantes le plus souvent non détectées : **indépendant** (7), **public** (7), **salarié privé** (5), **retraite / protection** (4), **temps réellement libéré** (4), **80% / quatre jours** (2).

## Règle éditoriale

1. Relire d’abord la **promesse** de la page, pas seulement son corps.
2. Lister les variantes qui changent matériellement le droit, le calcul, le risque, la séquence ou la sortie.
3. Pour chaque variante importante : `TRAITEE`, `ROUTEE`, `HORS_PERIMETRE_EXPLICITE` ou `MANQUANTE`.
4. Corriger en priorité par un **aiguillage précis** lorsque développer la variante sur la même page diluerait la réponse centrale.
5. Avant une publication d’acquisition, auditer aussi son accroche : elle peut être plus large que la page cible.

