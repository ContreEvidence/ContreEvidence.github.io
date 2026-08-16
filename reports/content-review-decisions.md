# Journal des décisions de revue

Mise à jour : 16 août 2026

## Gouvernance actuelle

Le mode de travail courant est **autonome** : l’utilisateur a explicitement demandé que les améliorations substantielles justifiées soient appliquées sans validation page par page, avec un compte rendu consolidé à la fin de la passe.

Les audits automatiques restent des détecteurs. Ils ne suffisent jamais, à eux seuls, à déclencher un ajout éditorial : chaque signal doit être interprété humainement et l’on ne modifie une page que si le changement améliore réellement le choix, le coût, le risque, la séquence, la preuve ou la couverture des situations.

## Statuts de décision

- `REWRITE` : angle mort ou variante d’audience matérielle trouvée et corrigée.
- `ROUTE` : cas voisin reconnu et envoyé vers une ressource plus adaptée.
- `PRESERVE` : alerte vérifiée, page volontairement conservée.
- `VERIFY` : affirmation sensible revérifiée sur source primaire avant modification.
- `DEFER` : hypothèse intéressante mais insuffisamment justifiée pour modifier le produit.

## Campagne profondeur / angles morts — 16 août 2026

La revue de profondeur a ajouté une seconde couche au contrôle structurel historique : acteur/gatekeeper, substitution, séquence, fractionnement, statu quo, second ordre, transfert de risque, friction d’exécution, objectif réel, optionnalité et condition de renversement.

Les décisions SHA-liées sont enregistrées dans `reports/corpus-blind-spot-human-review-2026-08-16.json` et les rapports associés.

### Reprise autonome après cartographie

#### `dossiers/contrat-travail-clauses-verifier-avant-signer.html` — `REWRITE` + `VERIFY`

- **Signal initial :** première priorité de `reports/corpus-blind-spots.md`, avec manque heuristique sur substitution, fractionnement, combinaison de leviers, second ordre, statu quo et condition de renversement.
- **Lecture humaine :** signal confirmé en partie. La page était déjà solide sur l’inventaire des clauses et le stress test, mais raisonnait trop souvent comme si chaque clause devait être acceptée, refusée ou négociée isolément.
- **Correction :** ajout d’une logique de substitution contractuelle, identification du vrai gatekeeper, combinaison des risques, valeur du délai avant signature, quatre sorties de décision et condition explicite de renversement.
- **Causalité :** si le lecteur distingue règle non modifiable, modèle standard, interlocuteur sans pouvoir et variable réellement négociable, il peut tester davantage d’architectures sans confondre refus initial et impossibilité. Si plusieurs clauses activent le même scénario adverse, l’analyse combinée révèle un risque invisible clause par clause.
- **Preuve :** cadre des informations remises au salarié revérifié sur Code du travail L1221-5-1 et R1221-34 à R1221-41 ; période d’essai et non-concurrence recoupées sur les fiches officielles Service-Public liées dans le dossier.
- **Impact lecteur attendu :** passer d’une checklist de conformité à une véritable décision de pré-signature : signer, faire préciser, substituer/négocier ou ne pas signer en l’état.
- **Incertitude résiduelle :** la négociabilité effective dépend de l’employeur, de la convention collective, des accords applicables, du poste et du pouvoir réel de l’interlocuteur ; le dossier n’en fait pas une promesse de résultat.

#### `dossiers/combien-chiffre-affaires-pour-vivre.html` — `REWRITE` + `VERIFY`

- **Signal initial :** nouvelle première priorité de la cartographie après correction du dossier contrat de travail ; manque heuristique sur acteur/gatekeeper, substitution, fractionnement, second ordre et valeur de l’attente.
- **Lecture humaine :** signal confirmé. La page calculait correctement seuils, marges et cas adverses, mais restait trop proche d’un modèle « CA cible → volume nécessaire ». Elle identifiait insuffisamment le verrou qui empêche réellement d’atteindre ce volume.
- **Correction :** ajout d’une carte des cinq verrous (demande, prix/marge, capacité, trésorerie, dépendance), substitutions d’architecture, progression fractionnée vers le revenu principal, gatekeepers économiques, marches de coûts, capacité de refus et valeur informationnelle de l’attente.
- **Causalité :** si la capacité maximale est inférieure au nombre de ventes nécessaire, davantage de prospection ne peut pas résoudre le problème ; il faut modifier prix, panier, densité, process ou architecture. Si un seul acteur contrôle le flux, la robustesse dépend aussi du temps de survie après sa disparition, pas seulement de la marge moyenne.
- **Preuve :** définition et formule du seuil de rentabilité revérifiées sur Bpifrance Création ; les taux sociaux et fiscaux restent volontairement hors du calcul générique et doivent être simulés séparément selon le statut.
- **Impact lecteur attendu :** passer de « combien de CA ? » à « quel modèle économique rend ce revenu atteignable, répétable et refusable ? ».
- **Incertitude résiduelle :** les exemples restent pédagogiques ; la fiscalité, les prélèvements, la TVA, les aides, les obligations de statut et les besoins du foyer sont propres au cas concret.

#### `dossiers/capacite-refuser-travail-rentabilite.html` — `REWRITE` + `VERIFY`

- **Signal initial :** priorité heuristique 16 après les deux corrections précédentes ; angles non détectés : acteur/gatekeeper, substitution, combinaison de leviers, attente/statu quo et condition de renversement.
- **Lecture humaine :** signal partiellement confirmé. La page traitait déjà réellement la substitution (prix, délai, périmètre, délégation) et plusieurs conditions de renversement. Les gains matériels se situaient surtout dans la combinaison de leviers, l’identification de la source réelle de la contrainte et la valeur d’une réponse intermédiaire entre oui et non.
- **Correction :** ajout de combinaisons prix + créneau/tournée, périmètre + délai et sous-traitance + liste d’attente ; identification du gatekeeper qui impose réellement prix, créneau ou organisation ; ajout de l’option « pas maintenant » avec report, démarrage ultérieur, périmètre réduit ou liste d’attente ; explicitation de la condition où attendre cesse d’avoir de la valeur.
- **Causalité :** plusieurs petits leviers peuvent ensemble franchir un seuil de marge ou de capacité alors qu’aucun ne suffit seul. Identifier l’acteur qui impose la contrainte évite de négocier la mauvaise variable. Une liste d’attente préserve l’option commerciale sans consommer la capacité actuelle uniquement lorsqu’un état pertinent peut réellement changer.
- **Preuve :** principes de fixation des prix et arbitrage embauche/externalisation revérifiés sur Bpifrance Création ; les exemples de combinaisons restent des scénarios économiques à tester, pas des promesses de réaction client.
- **Impact lecteur attendu :** passer d’un arbitrage binaire accepter/refuser à une gestion de portefeuille de capacité : accepter maintenant, reconfigurer, reporter, mettre en attente ou refuser.
- **Incertitude résiduelle :** élasticité au prix, tolérance au délai, qualité de sous-traitance, saisonnalité et pouvoir réel des différents interlocuteurs varient selon le marché et le contrat.

#### `articles/checklist-avant-placement-conseiller.html` — `REWRITE` + `VERIFY`

- **Signal initial :** priorité heuristique 16 ; angles non détectés : attente/statu quo, effets de second ordre, transfert de risque, condition de renversement et valeur d’option.
- **Lecture humaine :** signal confirmé. La page était forte sur la lutte contre l’usurpation et les fraudes mais pouvait encore laisser entendre qu’un acteur autorisé et un produit réel suffisent à valider la décision patrimoniale.
- **Correction :** séparation entre autorisation, existence du produit, adéquation et timing ; ajout de l’horizon, capacité à subir une perte, frais et rémunération du conseil, allocation globale, fractionnement de la décision, coût de l’attente, valeur de liquidité et conditions explicites de renversement.
- **Causalité :** vérifier un registre réduit le risque d’interlocuteur illégitime mais ne prouve ni l’adéquation du produit ni celle du montant. Si un besoin de liquidité proche domine, le même produit peut passer de pertinent à inadapté sans que sa qualité intrinsèque change.
- **Preuve :** obligations et bonnes pratiques revérifiées sur AMF : autorisations/REGAFI-ORIAS, obligations des CIF, information sur les frais, horizon de placement et diversification.
- **Impact lecteur attendu :** passer de « est-ce une arnaque ? » à « l’acteur est-il légitime, le produit réel, le conseil adapté et l’investissement opportun maintenant ? ».
- **Incertitude résiduelle :** la page ne recommande aucun produit ni allocation universelle ; horizon, risque, fiscalité, liquidité et concentration doivent rester spécifiques au lecteur.

#### `dossiers/choisir-statut-micro-ei-eurl-sasu.html` — `REWRITE` + `VERIFY`

- **Signal initial :** priorité heuristique 16 ; manque sur acteur/gatekeeper, substitution, combinaison de leviers, second ordre et attente/statu quo.
- **Lecture humaine :** signal confirmé, avec un angle juridique matériel : le texte laissait encore parfois la société apparaître comme la voie naturelle pour l’IS, la protection patrimoniale ou le bénéfice conservé.
- **Correction :** ajout de l’EI avec option IS comme substitution à tester, rappel de la séparation patrimoniale de principe en EI, rôle de la clientèle B2B/B2C dans le coût réel de la TVA, combinaison assurance/contrat/régime fiscal avant changement de forme, effets de second ordre et déclencheurs de bascule.
- **Causalité :** si le besoin réel est fiscal, assurantiel ou commercial, changer uniquement cette dimension peut résoudre le verrou avec moins de coûts et davantage de réversibilité. La société reprend l’avantage lorsque titres, associés ou gouvernance deviennent réellement nécessaires.
- **Preuve :** seuils micro 2026 et TVA revérifiés sur economie.gouv.fr, impots.gouv.fr et BOFiP ; possibilité d’option IS de l’EI et comparaison EI/EURL/SASU revérifiées sur Entreprendre.Service-Public et Ministère de l’Économie ; séparation patrimoniale recoupée sur la réforme des indépendants.
- **Impact lecteur attendu :** remplacer la logique « micro puis société » par une architecture modulaire : TVA, réel, IR/IS, assurance, gouvernance et société ne changent que lorsqu’un besoin précis le justifie.
- **Incertitude résiduelle :** choix IR/IS, coût social, garanties exigées par financeurs et contrats, exceptions à la protection patrimoniale et conséquences d’une transformation exigent un chiffrage professionnel lorsque les montants deviennent significatifs.

#### `dossiers/previsionnel-activite-12-mois.html` — `REWRITE` + `VERIFY`

- **Signal initial :** priorité heuristique 16 ; manque sur acteur/gatekeeper, substitution, combinaison de leviers, effets de second ordre et attente/statu quo.
- **Lecture humaine :** signal confirmé. Le dossier stress-testait déjà correctement les hypothèses mais ne faisait pas assez apparaître les dépendances tierces ni le risque qu’un scénario favorable dégrade la trésorerie par croissance du BFR.
- **Correction :** ajout de la carte trafic/conversion/panier/récurrence/capacité, colonne gatekeeper, croissance et BFR, substitutions avant coûts fixes, scénario de transition, chocs combinés, preuves préalables aux engagements irréversibles et conditions de renversement.
- **Causalité :** une hypothèse de financement, d’acompte, de délai fournisseur ou de gros contrat ne doit pas être comptée comme acquise tant que l’acteur concerné n’a pas coopéré. Une hausse de CA peut accroître stocks, créances et coûts avant encaissement ; elle peut donc diminuer la trésorerie même quand le résultat futur s’améliore.
- **Preuve :** méthode du prévisionnel, plan de trésorerie, BFR et risque de trésorerie lié à une croissance trop rapide revérifiés sur Bpifrance Création.
- **Impact lecteur attendu :** transformer le prévisionnel en système de preuves, de dépendances et de déclencheurs : savoir quoi tester avant d’embaucher, louer, acheter ou quitter une source de revenu stable.
- **Incertitude résiduelle :** les seuils d’alerte restent illustratifs et doivent être recalibrés selon secteur, saisonnalité, pouvoir de négociation, statut, fiscalité et besoins personnels.

## Campagne couverture des situations — 16 août 2026

Une nouvelle dimension est ouverte après constat qu’une page peut être profonde sur son cas central tout en étant trop étroite pour l’audience attirée par sa promesse.

Règle : pour une promesse large, chaque variante matérielle doit être `TRAITEE`, `ROUTEE`, `HORS_PERIMETRE_EXPLICITE` ou identifiée `MANQUANTE`.

Références :

- `AUDIT-COUVERTURE-SITUATIONS.md`
- `.github/workflows/audience-variant-coverage.yml`
- `reports/audience-variant-coverage.md`

### Première correction structurante

- `dossiers/sci-immobiliere-acheter-gerer-transmettre-sortir.html` — création d’un dossier SCI de référence couvrant propriété, parts, statuts, financement, responsabilité, IR/IS, location meublée, séparation, cession, retrait, décès, transmission et sortie. Motif : les promesses larges autour de « acheter à deux / se séparer / immobilier à plusieurs » attirent notamment des personnes en SCI qui ne doivent pas être envoyées mécaniquement vers les règles de l’indivision directe.

## Travaux historiques

Les anciens fichiers `reports/corpus-solution-human-review*.json` restent utilisables comme mémoire structurelle SHA-liée. Ils ne prouvent ni l’absence d’angle mort ni la couverture de toutes les variantes d’audience.

## Règle de travail

Pour toute nouvelle campagne éditoriale :

1. identifier le gain réel ;
2. relire le cas central ;
3. tester les angles morts à l’intérieur du cas ;
4. tester les variantes raisonnablement attirées par la promesse ;
5. appliquer directement uniquement les corrections matériellement utiles ;
6. privilégier le routage lorsque développer le cas voisin diluerait la page centrale ;
7. vérifier les affirmations sensibles sur sources primaires à jour ;
8. journaliser les réécritures, routages et conservations ;
9. faire un compte rendu consolidé à l’utilisateur.
