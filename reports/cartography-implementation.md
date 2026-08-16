# Mise en œuvre de la cartographie fonctionnelle

Mise à jour : 16 août 2026

Références :
- `CARTOGRAPHIE-FONCTIONNELLE.md`
- `CARTOGRAPHIE-PARCOURS-PRIORITAIRES.md`

## État des trous identifiés

| Priorité | Trou cartographique | État | Mise en œuvre |
|---|---|---|---|
| P0 | Outil → résultat → interprétation → prochaine décision | **MIS EN ŒUVRE** | `assets/decision-next.js` ajoute des sorties contextualisées aux outils/simulateurs existants ; les nouveaux simulateurs possèdent aussi leurs sorties natives. |
| P0 | Les outils restent une catégorie trop large | **MIS EN ŒUVRE** | `outils.html` organise les moteurs par fonction : diagnostiquer, comparer, calculer un seuil, tester un scénario, construire un plan, piloter. |
| P0 | Parcours achat immobilier dispersé | **MIS EN ŒUVRE** | `parcours-achat-immobilier.html` : capacité → coût complet → réserve → mobilité → décision. |
| P0 | Temps / argent / qualité de vie dispersés | **MIS EN ŒUVRE** | `parcours-temps-argent-liberte.html` relie travail, trajet, 80 %, patrimoine, temps et condition de retour. |
| P0 | Ingénierie de solutions trop périphérique | **PARTIELLEMENT MIS EN ŒUVRE** | Porte « Situation bloquée ? » dans la navigation mobile, dans `outils.html` et dans les carrefours de `parcours-de-vie.html`. À mesurer avant de la rendre plus dominante. |
| P1 | Pas d’outil de sortie d’indivision | **MIS EN ŒUVRE** | `simulateur-sortie-indivision.html` : vente, rachat immédiat, horizon et fractionnement avec valeur, dette, quotes-parts, créances et liquidités. |
| P1 | Pas de simulation de décumulation / usage soutenable du patrimoine | **MIS EN ŒUVRE** | `simulateur-decumulation-patrimoine.html` : dépenses, revenus présents/futurs, horizon, rendement réel, choc adverse et capital à préserver. |
| P2 | Continuité professionnelle moins visible que la continuité patrimoniale | **MIS EN ŒUVRE SANS NOUVEAU COCKPIT** | `parcours-pilotage-professionnel.html` relie capital pro → preuves → test marché → revue 30/90 jours et est exposé depuis le hub Vie professionnelle. |
| P2 | Catalogue Outils incomplet | **MIS EN ŒUVRE** | `assets/tools-catalog.js` remis à niveau : les 30 outils/simulateurs actuels sont indexés dans la Bibliothèque. |
| P2 | Cockpit entrepreneurial éventuel | **À TESTER, PAS À CONSTRUIRE ENCORE** | Le site possède déjà prévisionnel 12 mois, prix plancher, trésorerie 13 semaines, dépendance client et capacité. Un cockpit ne se justifie que si l’usage répété des mêmes données est démontré. |

## Changements d’architecture visibles

1. **Outils** devient une destination autonome dans la navigation, et non un simple filtre de Bibliothèque.
2. Les situations transversales disposent de parcours dédiés au lieu d’être renvoyées vers un domaine unique.
3. Les résultats des outils commencent à ouvrir une **prochaine décision** plutôt qu’à constituer une fin de parcours.
4. Deux clusters éditoriaux mûrs ont produit de nouveaux moteurs interactifs : **indivision** et **décumulation**.
5. Vie professionnelle acquiert une boucle longitudinale comparable dans son principe au pilotage patrimonial, sans dupliquer `Mon espace`.
6. La Bibliothèque et le hub Outils reposent désormais sur le même inventaire réel des moteurs disponibles.

## Règle de poursuite

Le prochain développement ne doit pas être choisi parce qu’un sujet est intéressant. Il doit satisfaire au moins une des conditions suivantes :

- fermer un trou dans un parcours existant ;
- transformer un contenu mûr en calcul ou en décision ;
- éviter au visiteur de ressaisir/reconstruire une information déjà produite ;
- créer une boucle de suivi réellement utile ;
- faire apparaître une option ou un seuil aujourd’hui invisible.

## Prochaines questions produit à tester

### 1. Continuité entre outils

La couche « Et maintenant ? » existe. Il faut maintenant vérifier si certaines sorties pourraient **transmettre directement quelques données** au moteur suivant sans compte utilisateur, plutôt que demander une nouvelle saisie.

### 2. Page d’accueil

L’accueil doit montrer assez vite que Contre-Évidence n’est plus seulement composé de dossiers. Mesurer si les nouvelles portes « Outils », « parcours transversaux » et « situation bloquée » sont suffisamment visibles avant de modifier encore le hero.

### 3. Entrepreneuriat longitudinal

Ne pas créer de cockpit par analogie. Vérifier d’abord si les mêmes utilisateurs reviennent réellement sur : prévisionnel, trésorerie, prix minimum, capacité et dépendance client.

### 4. Qualité de vie

Le parcours transversal existe. Vérifier maintenant si le visiteur comprend que temps, énergie et liberté de choix sont des **critères d’évaluation de toutes les stratégies**, pas une rubrique lifestyle séparée.

### 5. Acquisition / SEO

La cartographie produit ne remplace pas les pages d’entrée SEO. Les futures pages d’acquisition doivent déboucher sur un parcours ou un moteur existant, pas créer un cul-de-sac éditorial.
