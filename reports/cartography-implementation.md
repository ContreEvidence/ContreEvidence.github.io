# Mise en œuvre de la cartographie fonctionnelle

Mise à jour : 16 août 2026

Références :
- `CARTOGRAPHIE-FONCTIONNELLE.md`
- `CARTOGRAPHIE-PARCOURS-PRIORITAIRES.md`
- `reports/corpus-blind-spots.md`

## État des trous identifiés

| Priorité | Trou cartographique | État | Mise en œuvre |
|---|---|---|---|
| P0 | Outil → résultat → interprétation → prochaine décision | **MIS EN ŒUVRE** | `assets/decision-next.js` ajoute des sorties contextualisées aux outils/simulateurs existants ; les nouveaux simulateurs possèdent aussi leurs sorties natives. |
| P0 | Ressaisir les mêmes données au moteur suivant | **PREMIÈRE MISE EN ŒUVRE** | `assets/tool-handoff.js` transmet uniquement dans `sessionStorage`, jamais dans l’URL. Premières chaînes : audit financier → réserve ; capacité d’emprunt → parcours achat ; 80 % → Temps · Argent · Liberté ; décumulation → Temps · Argent · Liberté. |
| P0 | Les outils restent une catégorie trop large | **MIS EN ŒUVRE** | `outils.html` organise les moteurs par fonction : diagnostiquer, comparer, calculer un seuil, tester un scénario, construire un plan, piloter. |
| P0 | Parcours achat immobilier dispersé | **MIS EN ŒUVRE** | `parcours-achat-immobilier.html` : capacité → coût complet → réserve → mobilité → décision. |
| P0 | Temps / argent / qualité de vie dispersés | **MIS EN ŒUVRE** | `parcours-temps-argent-liberte.html` relie travail, trajet, 80 %, patrimoine, temps et condition de retour. |
| P0 | Ingénierie de solutions trop périphérique | **PARTIELLEMENT MIS EN ŒUVRE** | Porte « Situation bloquée ? » dans la navigation mobile, dans `outils.html` et dans les carrefours de `parcours-de-vie.html`. À mesurer avant de la rendre plus dominante. |
| P0 | Profondeur structurelle confondue avec absence d’angles morts | **NOUVEAU CHANTIER ACTIF** | `corpus-blind-spots.yml` complète le scan classique avec 15 familles : acteur, substitution, fenêtre, ordre, fractionnement, combinaison, statu quo, second ordre, transfert de risque, friction, hétérogénéité, renversement, objectif réel, optionnalité, asymétrie de preuve. |
| P1 | Pas d’outil de sortie d’indivision | **MIS EN ŒUVRE** | `simulateur-sortie-indivision.html` : vente, rachat immédiat, horizon et fractionnement avec valeur, dette, quotes-parts, créances et liquidités. |
| P1 | Pas de simulation de décumulation / usage soutenable du patrimoine | **MIS EN ŒUVRE** | `simulateur-decumulation-patrimoine.html` : dépenses, revenus présents/futurs, horizon, rendement réel, choc adverse et capital à préserver. |
| P2 | Continuité professionnelle moins visible que la continuité patrimoniale | **MIS EN ŒUVRE SANS NOUVEAU COCKPIT** | `parcours-pilotage-professionnel.html` relie capital pro → preuves → test marché → revue 30/90 jours et est exposé depuis le hub Vie professionnelle. |
| P2 | Catalogue Outils incomplet | **MIS EN ŒUVRE** | `assets/tools-catalog.js` remis à niveau : les 30 outils/simulateurs actuels sont indexés dans la Bibliothèque. |
| P2 | Cockpit entrepreneurial éventuel | **À TESTER, PAS À CONSTRUIRE ENCORE** | Le site possède déjà prévisionnel 12 mois, prix plancher, trésorerie 13 semaines, dépendance client et capacité. Un cockpit ne se justifie que si l’usage répété des mêmes données est démontré. |

## Changements d’architecture visibles

1. **Outils** devient une destination autonome dans la navigation, et non un simple filtre de Bibliothèque.
2. Les situations transversales disposent de parcours dédiés au lieu d’être renvoyées vers un domaine unique.
3. Les résultats des outils commencent à ouvrir une **prochaine décision** plutôt qu’à constituer une fin de parcours.
4. Certaines transitions conservent désormais localement le contexte du moteur précédent : le visiteur n’est plus obligé de repartir de zéro, sans que les montants passent dans l’URL.
5. Deux clusters éditoriaux mûrs ont produit de nouveaux moteurs interactifs : **indivision** et **décumulation**.
6. Vie professionnelle acquiert une boucle longitudinale comparable dans son principe au pilotage patrimonial, sans dupliquer `Mon espace`.
7. La Bibliothèque et le hub Outils reposent désormais sur le même inventaire réel des moteurs disponibles.
8. L’accueil montre explicitement la nouvelle architecture : parcours, outils par fonction et porte de secours pour une situation bloquée.

## Ce que la cartographie n’avait pas encore résolu

La première passe a surtout amélioré **où aller et quoi faire ensuite**. Elle ne garantissait pas que chaque contenu cherchait assez loin autour du problème.

Le nouveau chantier de profondeur recherche donc systématiquement les situations où :

- le bon levier appartient à un autre acteur que celui auquel le lecteur pense spontanément ;
- une substitution vaut mieux qu’une optimisation ;
- l’ordre ou la fenêtre temporelle change l’issue ;
- un objectif peut être fractionné ou plusieurs petits leviers combinés ;
- attendre crée ou détruit de la valeur ;
- une solution déplace le risque ou crée un effet de second ordre ;
- la théorie échoue à cause d’une friction d’exécution ;
- la conclusion dépend fortement du statut, du contrat, du marché ou du lieu ;
- une option irréversible est prise trop tôt ;
- le problème visible n’est qu’un moyen de satisfaire un besoin plus profond.

Le rapport courant est `reports/corpus-blind-spots.md`. Il sert à choisir les lectures humaines, jamais à déclencher des ajouts automatiques.

## Règle de poursuite

Le prochain développement ne doit pas être choisi parce qu’un sujet est intéressant. Il doit satisfaire au moins une des conditions suivantes :

- fermer un trou dans un parcours existant ;
- transformer un contenu mûr en calcul ou en décision ;
- éviter au visiteur de ressaisir/reconstruire une information déjà produite ;
- créer une boucle de suivi réellement utile ;
- faire apparaître une option ou un seuil aujourd’hui invisible ;
- révéler un angle mort susceptible de changer la décision, le risque, le coût ou la séquence.

## Règle éditoriale de la passe profondeur

La passe profondeur n’est pas une réécriture massive. Pour chaque page :

1. lire la page et les contenus voisins ;
2. identifier un angle mort réel, pas un mot absent ;
3. démontrer qu’il peut changer la décision ;
4. préparer une seule proposition ;
5. obtenir la validation explicite de l’utilisateur avant modification du contenu publié.

## Prochaines questions produit à tester

### 1. Continuité entre outils

Le mécanisme de transmission locale existe maintenant. L’étendre uniquement lorsque les champs ont **la même signification économique**, ou lorsqu’une valeur est présentée comme simple contexte. Ne jamais préremplir silencieusement une variable différente sous prétexte qu’elle est proche.

### 2. Profondeur du corpus

La cartographie d’angles morts montre déjà des motifs transversaux récurrents : acteur/gatekeeper, substitution, statu quo, transfert de risque, condition de renversement et valeur d’option. Ils doivent maintenant être examinés page par page, sans les transformer en blocs génériques.

### 3. Entrepreneuriat longitudinal

Ne pas créer de cockpit par analogie. Vérifier d’abord si les mêmes utilisateurs reviennent réellement sur : prévisionnel, trésorerie, prix minimum, capacité et dépendance client.

### 4. Qualité de vie

Le parcours transversal existe. Vérifier maintenant si le visiteur comprend que temps, énergie et liberté de choix sont des **critères d’évaluation de toutes les stratégies**, pas une rubrique lifestyle séparée.

### 5. Acquisition / SEO

La cartographie produit ne remplace pas les pages d’entrée SEO. Les futures pages d’acquisition doivent déboucher sur un parcours ou un moteur existant, pas créer un cul-de-sac éditorial.
