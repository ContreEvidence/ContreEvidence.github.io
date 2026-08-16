# Décisions de revue — 16 août 2026 — lot autonome 5

Ce lot applique explicitement les garde-fous de cohérence : réponse centrale visible, réécriture uniquement si le manque change réellement une décision, et routage plutôt que duplication.

## `dossiers/indivision-loyers-charges-comptes.html` — `PRESERVE`

- **Signal automatique :** acteur/gatekeeper, second ordre, optionnalité et renversement.
- **Lecture humaine :** l’objet de la page est volontairement plus étroit : conserver et qualifier les faits comptables d’une indivision. Elle traite déjà revenus, charges, prêt, avances, travaux, occupation, gestion, prescription et stress test à cinq ans.
- **Décision :** ne pas élargir artificiellement vers la décision de sortie. Les dossiers dédiés à la sortie, à la séparation et à la succession prennent déjà en charge cette décision.

## `dossiers/calculer-prix-minimum-rentable.html` — `REWRITE` + `VERIFY`

- **Signal automatique :** gatekeeper, substitution, fractionnement et combinaison de leviers.
- **Lecture humaine :** manque réel. L’ancien dossier calculait très bien le plancher économique mais traitait insuffisamment le cas où le marché refuse ce plancher.
- **Correction :** trois prix (plancher, accepté, stratégique), demande/concurrence/positionnement, gatekeepers du refus, sept substitutions d’architecture, combinaison de petits leviers, logique différente selon le taux d’occupation, prix de lancement comme achat d’information et conditions de renversement.
- **Causalité :** un coût élevé ne crée pas une volonté de payer. Lorsque plancher et prix accepté ne se rejoignent pas, la solution doit modifier coût, valeur, cible, périmètre ou architecture plutôt que demander au volume de sauver un modèle déficient.
- **Preuve :** méthode de fixation des prix et seuil de rentabilité revérifiée sur Bpifrance Création.
- **Impact attendu :** passer du calcul de coût à une vraie décision de design d’offre.

## `dossiers/location-courte-duree-meuble-tourisme.html` — `REWRITE` + `VERIFY`

- **Signal automatique :** gatekeeper, fractionnement, second ordre et renversement.
- **Lecture humaine :** page déjà forte sur l’architecture, mais deux corrections matérielles ont été trouvées.
- **Correction :** remplacement de l’ancien identifiant Légifrance par la version effectivement en vigueur de l’article L.324-1-1 depuis le 20 mai 2026 ; ajout du mode de détention dans le diagnostic fiscal ; cas de l’indivision explicitement routé vers le régime réel et vers le dossier comptes d’indivision.
- **Causalité :** une simulation micro-BIC peut être fausse si le logement est détenu en indivision. Le mode de détention peut donc renverser l’économie d’un même projet locatif.
- **Preuve :** Code du tourisme actuel sur Légifrance et page 2026 du ministère de l’Économie sur les meublés de tourisme.
- **Impact attendu :** éviter une erreur fiscale importante sans transformer la page en traité d’indivision.

## `dossiers/rembourser-credit-ou-investir.html` — `DEFER`

- **Signal automatique :** attente, transfert de risque, renversement et optionnalité.
- **Lecture humaine :** la page couvre déjà coût certain de la dette, rendement incertain, liquidité, niveau de dette, solution hybride, mensualité libérée et grille de décision.
- **Décision :** ne pas réécrire maintenant. Le manque est marginal face à des dossiers où une correction change réellement la réponse.

## `dossiers/finances-difficiles-sortir-decouvert-dettes.html` — `REWRITE` + `VERIFY`

- **Signal automatique :** attente/statu quo, transfert de risque, hétérogénéité et renversement.
- **Lecture humaine :** confirmé. La page utilisait un coussin de 500–1 000 € comme repère trop visible et ne distinguait pas assez choc ponctuel, déficit structurel, revenus irréguliers et spirale de dettes.
- **Correction :** suppression du seuil universalisant ; quatre types de difficulté ; frontière fonctionnelle de stabilisation ; attente utile vs aggravation ; solutions qui déplacent le problème ; seuil explicite pour passer de l’optimisation personnelle à l’accompagnement ; routage vers audit budget, réserve et plan 30/90.
- **Causalité :** deux découverts de même montant peuvent exiger des réponses opposées. Vendre un actif ou prendre un nouveau crédit peut acheter du temps sans corriger le déficit mensuel ; la mesure pertinente est donc le retour à un système soutenable.
- **Preuve :** procédure et accompagnement revérifiés sur Banque de France et ministère de l’Économie ; PCB, CCAS et travailleurs sociaux confirmés comme voies d’accompagnement.
- **Impact attendu :** mieux orienter une personne sous stress sans inventer un ordre juridique des créanciers ni un montant magique d’épargne.
