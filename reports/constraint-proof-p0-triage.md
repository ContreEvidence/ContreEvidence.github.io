# Triage manuel — P0 de l’audit des contraintes

Date : 15 août 2026

## Résultat

Le premier audit heuristique a produit **14 signaux P0**. Après relecture humaine :

- **2 vrais défauts éditoriaux ou de raisonnement** ont été identifiés et corrigés ;
- **12 signaux sont des faux positifs ou des usages contextuels** du vocabulaire de contrainte, qui ne ferment pas réellement une voie du lecteur.

Ce résultat confirme qu’un scanner doit servir à **rouvrir une question**, jamais à réécrire automatiquement le texte.

| Page / signal | Verdict | Action |
|---|---|---|
| `articles/clients-interesses-personne-nachete.html` — « impossible de savoir ce qui a marché » | Faux positif | Phrase épistémique sur un test multivariable, pas une impossibilité imposée au lecteur. Aucun changement. |
| `articles/competences-transferables.html` — « connaissance obligatoire » dans une matrice illustrative | Faux positif | Catégorie d’un exemple, sans prétention à une règle universelle. Aucun changement. |
| `dossiers/apprendre-developper-competences.html` — « activité réglementée / parcours reconnu obligatoire » | Faux positif de tableau | La page distingue justement réglementation, certification et preuve. Aucun changement automatique. |
| `dossiers/apprendre-developper-competences.html` — « compétence obligatoire » dans une grille | Faux positif de taxonomie | Le terme décrit une classe à vérifier, pas une obligation particulière affirmée sans preuve. |
| `dossiers/contrat-travail-clauses-verifier-avant-signer.html` — « Quel projet futur devient impossible ? » | Faux positif | Question de stress test d’une clause d’exclusivité. |
| `dossiers/contrat-travail-clauses-verifier-avant-signer.html` — période d’essai « non obligatoire » | Contrainte prouvée | La page cite Service-Public et renvoie à sa fiche sur la période d’essai. Le rapport n’avait pas détecté ce lien comme signal de preuve. |
| `dossiers/decider-sans-tourner-en-rond.html` — option « en réalité impossible » | Faux positif contextuel | Vocabulaire générique d’une matrice de décision ; la contrainte doit néanmoins être démontrée dans chaque cas réel. |
| `dossiers/etude-marche-terrain.html` — projet « impossible à contredire » | Faux positif | « Impossible » qualifie ici une hypothèse infalsifiable, pas une voie d’action. |
| `dossiers/location-courte-duree-meuble-tourisme.html` — enregistrement « doit devenir obligatoire au plus tard le 20 mai 2026 » | **Vrai défaut temporel** | **Corrigé.** Depuis le 20 mai 2026, l’obligation est en vigueur. Dossier reconstruit en séparant enregistrement, plafond, changement d’usage, copropriété, DPE, fiscalité et voies de repli. |
| `dossiers/plan-30-jours-recherche-emploi.html` — « permis obligatoire » | Faux positif d’exemple | Le mot sert à distinguer un prérequis dur d’un logiciel apprenable rapidement. Toute occurrence réelle doit évidemment être vérifiée pour le métier visé. |
| `dossiers/previsionnel-activite-12-mois.html` — « 25 missions impossibles sans hausse de prix, délégation ou productivité » | **Vrai défaut logique** | **Corrigé.** 25 × 6 h = 150 h ne tiennent pas dans 100 h. Une hausse de prix ne résout pas la capacité physique : elle peut seulement permettre le même CA avec moins de missions. |
| `fiches-metiers.html` — « diplôme obligatoire, attendu ou contournable ? » | Faux positif | Question de classification destinée précisément à vérifier le statut du diplôme. |
| `outil-ingenierie-solutions.html` — « le problème paraît impossible ? » | Faux positif méta | L’outil interroge le mot « impossible » ; il ne le pose pas comme conclusion. |
| `themes/entreprendre.html` — « qualification obligatoire » | Faux positif de taxonomie | La rubrique demande de distinguer activité réglementée, qualification, agrément, assurance et exigence commerciale. |

## Ce que ces deux vraies erreurs nous apprennent

### 1. Un levier doit agir sur le verrou qu’il prétend résoudre

Dans le prévisionnel, **le prix** était présenté aux côtés de leviers de capacité. C’était faux au niveau mécanique : le prix agit sur le chiffre d’affaires nécessaire, pas sur le nombre d’heures disponibles.

Nouvelle question obligatoire :

> **Par quelle causalité précise ce levier modifie-t-il la contrainte ?**

Si cette causalité ne peut pas être expliquée, le levier ne doit pas être présenté comme solution au verrou.

### 2. Une contrainte change de statut avec le calendrier

La page courte durée utilisait encore une formulation prospective après l’entrée en vigueur de la règle.

Nouvelle question obligatoire :

> **Le texte que nous citons décrit-il encore le futur, ou la date d’entrée en vigueur a-t-elle déjà été franchie ?**

Le contrôle de temporalité doit donc accompagner toute règle datée.

## Suite

Le travail se poursuit désormais sur les **P1**, avec priorité aux affirmations qui :

1. portent sur un droit, un financement, une qualification, un emploi ou un actif important ;
2. généralisent le comportement d’un acteur privé ;
3. présentent une contrainte comme stable alors qu’elle peut dépendre du temps ou de l’ordre des opérations ;
4. ferment une option de forte valeur pour le lecteur.

Le compteur brut n’est pas l’objectif. **L’objectif est d’identifier les vraies fermetures prématurées et les vraies fausses solutions.**
