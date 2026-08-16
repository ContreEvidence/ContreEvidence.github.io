# Décisions de revue — 16 août 2026 — lot autonome 8

Objectif de ce lot : passer d’une revue par mots-clés à une revue **promesse du titre → réponse entière**. Une page large doit traiter les situations voisines lorsque leur mécanique change réellement la décision ; une page conceptuelle ou étroite ne doit pas devenir encyclopédique pour satisfaire un classifieur.

## `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` — `REWRITE`

- Extension à : personne seule, couple, revenus asymétriques, enfants, sans enfant, famille recomposée, immobilier, SCI, transmission et actifs illiquides.
- Ajouts : patrimoine mobilisable vs net, objectif de transmission explicite, poches commune/personnelles, usage du patrimoine pour acheter du temps, regret symétrique, profils complets et stress test.
- Principe : décider d’abord ce qui doit rester protégé, puis ce qui peut être utilisé.

## `dossiers/temps-energie-qualite-vie.html` — `REWRITE`

- Extension à : salarié privé, agent public, indépendant, demandeur d’emploi, aidant/parent, fin de carrière.
- Ajouts : blocs utilisables, énergie, gatekeeper selon statut, 80 % réel vs compressé, modèle économique de l’indépendant, charge familiale invisible, retraite progressive, combinaison de petits leviers.
- Audit après modification : `COVERED_OR_NARROW`.

## `dossiers/formation-vaut-elle-le-cout.html` — `REWRITE` + `VERIFY`

- Extension à : salarié, demandeur d’emploi, public, indépendant, inaptitude/santé, senior, sans diplôme.
- Ajouts : verrou exact, marché, diplôme vs expérience, santé réelle du métier, coût économique par statut, salaire de sortie, preuve d’expérience, alternatives et conditions de renversement.
- Vérifications : France compétences, Qualiopi, règles CPF 2026.
- Audit reconversion après modification : priorité 0.

## `dossiers/acheter-sans-vider-epargne.html` — `REWRITE` + `VERIFY`

- Extension à : achat seul/à deux, revenus symétriques/asymétriques, CDD, agent public, indépendant, changement d’emploi, réserves commune/personnelles.
- Ajouts : cinq poches, première année, travaux connus/probables, apport marginal, mois de déficit, HCSF vs robustesse réelle du foyer.
- Audit principal achat/crédit : priorité 0.
- Les demandes mariage/PACS/SCI d’une famille secondaire sont considérées comme faux positifs : le dossier route vers la propriété/sortie sans devenir un traité de droit du couple.

## `articles/retrouver-emploi-apres-interruption.html` — `REWRITE`

- Huit causes d’interruption : chômage, santé/inaptitude, aidance, parentalité, expatriation, formation, indépendance, pause personnelle.
- Ajouts : retour au même métier vs retour à l’emploi, preuves par risque perçu, senior, sans diplôme, portes de retour, exemples de revenu, tunnel de candidature et plan 30/90.
- Audit : `COVERED_OR_NARROW`.

## `articles/competences-transferables.html` — `REWRITE`

- Extension à : salarié, demandeur d’emploi, public, indépendant, sans diplôme, santé/inaptitude, seconde partie de carrière.
- Ajout clé : **transférer la valeur sans transférer la contrainte**.
- Méthode : profondeur de compétence, distance de contexte, preuve, poste passerelle avec condition de sortie, exemple complet et cas de transfert surestimé.
- Le signal automatique « runway » n’est pas traité comme une obligation : ce dossier doit expliquer le transfert des compétences, pas le financement d’une transition.

## `dossiers/patrimoine-permet-il-travailler-moins.html` — `REWRITE`

- Extension à : salarié privé, public, indépendant, couple, temporaire/permanent, télétravail, retraite.
- Ajouts : quatre degrés de liberté, runway, patrimoine liquide/illiquide, modèle économique avant décapitalisation, revenus d’actifs vs vente de capital, risque de séquence, droits futurs et conditions de renversement.
- Audit : priorité 0.

## `dossiers/devenir-manager-premiere-fois.html` — `REWRITE`

- Ancienne page trop centrée sur l’après-promotion.
- Nouvelle architecture en deux problèmes : **obtenir le premier rôle** puis **réussir le rôle**.
- Extension à : promotion interne, recrutement externe, demandeur d’emploi, sans diplôme, agent public, indépendant qui embauche, santé/inaptitude, seconde partie de carrière.
- Ajouts : preuves avant le titre, salaire réel, autorité, délégation, goulot, plan 30/60/90 et critères pour refuser une mauvaise « promotion ».

## `dossiers/metiers-fonctions-organisation-entreprise.html` — `PRESERVE`

- Audit automatique très défavorable car la page est classée comme une grande page de trajectoire professionnelle.
- Lecture humaine : faux positif. L’objet de la page est volontairement conceptuel : distinguer métier, poste, fonction, service, flux, décisions, interfaces et gatekeepers.
- Elle traite déjà transfert, substitution, autonomie, attentes et conditions de renversement.
- Décision : ne pas ajouter santé, diplôme, revenu ou runway seulement pour satisfaire la taxonomie.

## `dossiers/travailler-moins-vivre-mieux.html` — `REWRITE`

- Extension à : salarié privé, agent public, indépendant, aidant/parent, santé, fin de carrière, couple.
- Ajouts : sept besoins réels derrière « travailler moins », télétravail et mobilité comme substituts, charges fixes, patrimoine, réduction temporaire/permanente, carrière, retraite, scénarios et conditions de renversement.
- Audit après propagation : priorité 0.

## `dossiers/creer-entreprise-avec-peu-argent.html` — `REWRITE` + `VERIFY`

- Extension à : activité principale/complémentaire, micro/EI/société, activité réglementée, TVA, associés, dette personnelle, déficit temporaire/structurel.
- Ajouts : quatre poches de financement, double runway pro/perso, BFR, stock, local, matériel, coûts déplacés vers le temps, seuils avant dépenses irréversibles.
- Vérifications : Bpifrance financement initial/trésorerie/épargne personnelle et Entreprendre.Service-Public activité réglementée/choix de structure.
- Audit principal entrepreneuriat : priorité 0.

## `dossiers/decider-a-deux-travail-patrimoine.html` — `REWRITE`

- Extension à : deux salariés, chômage, indépendant, public/contractuel, sans diplôme, santé/inaptitude, seconde partie de carrière, mobilité, entrepreneuriat, immobilier.
- Ajouts : trois comptes A/B/foyer, transfert de risque, propriété ≠ financement, indivision vs SCI vs statut du couple, marges personnelles, runway, double choc, réversibilité de chacun.
- Audit principal couple et trajectoire : priorité 0.

## `dossiers/patrimoine-marge-de-manoeuvre.html` — `REWRITE` + `VERIFY`

- Extension à : revenus stables/variables, locataire/propriétaire, solo/couple, charges compressibles/incompressibles, SCI/indivision, dette.
- Ajouts : quatre poches de liquidité, runway exécutable, gatekeepers des fausses réserves, « patrimoine invisible » créé par la baisse durable de charges, cinq profils complets.
- Vérifications : AMF sur objectif, horizon et liquidité.

## `dossiers/acheter-ou-louer-si-on-risque-demenager.html` — `REWRITE` + `VERIFY`

- Extension à : CDI, CDD, agent public contractuel/titulaire, indépendant, dette existante, achat à deux.
- Ajouts : probabilité de départ, double logement, apport comme capital de mobilité, location de repli, revente, changement de bien comme substitution et stress test combiné.
- Vérifications : HCSF, ministère de l’Économie, Service-Public et ANIL.
- Les signaux « mariage/PACS/SCI » de la famille secondaire sont considérés comme hors périmètre du titre : la page traite la mobilité et l’économie acheter/louer, pas la liquidation du couple.

## `dossiers/finances-investissement-locatif.html` — `REWRITE` + `VERIFY`

- Extension à : profils d’investisseurs, achat seul/à deux, indivision, SCI IR, SCI IS, location nue/meublée.
- Ajouts : structure après économie du bien, SCI + meublé, sortie immeuble vs parts, réserve du projet, concentration patrimoniale, profils complets.
- Vérifications : ANIL, impots.gouv.fr sur location meublée et SCI, plus-values SCI IR.
- Audit après première propagation : `COVERED_OR_NARROW`.

## `dossiers/finances-transmission-patrimoine.html` — `REWRITE` + `VERIFY`

- Extension à : mariage/Pacs/concubinage, enfants, sans enfant, famille recomposée, donation/testament, donation-partage, assurance-vie, immobilier, SCI, parts, comptes courants d’associé.
- Ajout central : séparer **valeur, contrôle et liquidité** dans une transmission.
- Vérifications : Service-Public/impots.gouv.fr pour les repères fiscaux 2026, Légifrance pour la donation-partage.

## Évolution de l’audit

- Départ de cette séquence : **26** promesses larges `NON_READY`.
- Après une partie de la passe, avant propagation des dernières réécritures : **17**.
- Ne pas viser zéro mécaniquement : les faux positifs documentés restent acceptables lorsque le titre n’attire pas raisonnablement la variante réclamée.

## Règle renforcée

Une page est « complète » si elle :
1. répond immédiatement à la question du titre ;
2. traite les principales situations voisines qui changent la mécanique ;
3. contient des exemples central/adverse ou des profils contrastés ;
4. distingue règle générale et gatekeeper ;
5. propose des substitutions quand le moyen évident n’est pas le seul ;
6. indique ce qui ferait changer la conclusion ;
7. route les sous-problèmes réellement distincts au lieu de tout dupliquer.
