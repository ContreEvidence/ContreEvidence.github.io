# Contre-Évidence — Cartographie des parcours prioritaires

Mise à jour : 16 août 2026

Complément opérationnel de `CARTOGRAPHIE-FONCTIONNELLE.md`.

La question n'est plus « avons-nous une page sur le sujet ? », mais :

> **Un visiteur qui arrive avec une situation réelle peut-il aller du problème à une décision sans devoir reconstruire seul le chemin entre les contenus ?**

## Légende

- **Couvert** : chaîne déjà cohérente.
- **À relier** : briques existantes mais parcours encore dispersé.
- **Trou produit** : une brique de décision manque réellement.
- **Persistance** : résultat utile à conserver dans le temps.

---

## 1. Reprendre le contrôle de ses finances

**Phrase d'entrée**

> « Je gagne de l'argent mais je ne sais pas où il part / je suis à découvert / je n'arrive pas à créer de marge. »

**Chaîne actuelle**

`finances-difficiles-sortir-decouvert-dettes` → `audit-budget-60-minutes` → `outil-audit-financier-personnel` → `simulateur-reserve-securite` → `mon-espace`

**Résultat attendu**

- marge mensuelle ;
- dépenses compressibles ;
- priorité dettes / réserve ;
- montant de liquidité cible ;
- photographie patrimoniale.

**État : COUVERT**

**À renforcer** : la sortie de l'audit doit conduire explicitement vers le cockpit lorsqu'un suivi dans le temps est utile.

---

## 2. Acheter un logement sans se fragiliser

**Phrase d'entrée**

> « Je peux peut-être acheter, mais combien puis-je réellement mettre sans me mettre en danger ? »

**Chaîne actuelle**

`acheter-logement-sans-se-fragiliser` / `acheter-sans-vider-epargne` → `cout-complet-achat-immobilier` → `simulateur-capacite-emprunt` → `simulateur-acheter-ou-louer` → `simulateur-reserve-securite`

**Résultat attendu**

- budget immobilier ;
- coût complet ;
- réserve après achat ;
- sensibilité à la durée de détention ;
- arbitrage apport / liquidité.

**État : COUVERT, MAIS À RELIER**

Le visiteur dispose de toutes les briques, mais doit encore comprendre seul dans quel ordre les utiliser.

**Action cartographique** : créer un parcours d'exécution unique :

**capacité → coût complet → réserve → mobilité → décision**.

---

## 3. Changer de travail alors qu'un projet immobilier existe

**Phrase d'entrée**

> « Je veux changer de travail et acheter : qu'est-ce que je dois faire d'abord ? »

**Chaîne actuelle**

`changer-travail-avant-credit-immobilier` → `quitter-cdi-avec-credit-immobilier` → `simulateur-capacite-emprunt` → `simulateur-epargne-demission` → `simulateur-reserve-securite`

**Résultat attendu**

- fenêtre temporelle ;
- ordre des opérations ;
- marge après achat ;
- runway en cas de transition ;
- condition de bascule.

**État : COUVERT ET DIFFÉRENCIANT**

Cette chaîne doit servir de **modèle de référence Travail × Patrimoine**.

---

## 4. Déménager pour un emploi

**Phrase d'entrée**

> « Le poste paie plus, mais est-ce que le déménagement ou le trajet vaut réellement le coup ? »

**Chaîne actuelle**

`accepter-emploi-plus-loin-cout-trajet` / `demenager-pour-un-emploi-salaire-minimum` → `simulateur-cout-trajet-emploi` → `simulateur-salaire-minimum-demenagement` → `outil-comparer-offres-emploi`

**Résultat attendu**

- gain net après transport / logement ;
- temps capturé ;
- salaire de compensation ;
- comparaison avec l'offre actuelle ;
- valeur des options futures.

**État : COUVERT**

**À renforcer** : relier explicitement ce parcours au logement lorsque la mobilité remet en cause acheter / louer.

---

## 5. Sortir d'une indivision après séparation

**Phrase d'entrée**

> « Nous nous séparons : faut-il vendre, racheter, louer, attendre ou racheter progressivement ? »

**Chaîne actuelle**

`indivision-immobiliere-sortir-sans-subir` → `indivision-couple-separation-rachat-soulte` → `indivision-rachat-progressif-parts` → `comparer-strategies-immobilieres` / `simulateur-vendre-ou-conserver`

**Résultat attendu**

- valeur nette ;
- comptes entre indivisaires ;
- soulte ;
- capacité de financement ;
- scénarios vente / rachat / location / attente / rachat progressif ;
- risque de sortie forcée ;
- horizon et condition de révision.

**État : TROU PRODUIT IMPORTANT**

Les dossiers sont désormais très solides, mais il manque un outil unique capable de réunir :

**valeur du bien + dette restante + quotes-parts + créances entre indivisaires + mensualités + loyers éventuels + horizon + rachat progressif**.

### Outil candidat prioritaire

**Simulateur de sortie d'indivision / soulte / rachat progressif**.

Ce n'est pas un nouveau contenu : c'est la traduction calculable d'un cluster éditorial déjà mûr.

---

## 6. Recherche d'emploi qui n'aboutit pas

**Phrase d'entrée**

> « J'envoie des candidatures mais rien ne se passe. »

**Chaîne actuelle**

`plan-30-jours-recherche-emploi` → `outil-pilotage-recherche-emploi` → `outil-competences-preuves-cv` → `entretien-rate-ce-qui-bloque` / `competences-invisibles-preuves`

**Résultat attendu**

- étape du tunnel qui décroche ;
- hypothèse de blocage ;
- preuve à renforcer ;
- action de la semaine ;
- évolution du taux de conversion.

**État : COUVERT**

**Asymétrie** : le pilotage existe, mais il n'est pas encore présenté comme l'équivalent professionnel d'un cockpit longitudinal.

---

## 7. Revenir à l'emploi après une interruption

**Phrase d'entrée**

> « J'ai un trou dans mon parcours / je reviens après une interruption : comment redevenir crédible ? »

**Chaîne actuelle**

`retrouver-emploi-apres-interruption` → `competences-invisibles-preuves` → `outil-competences-preuves-cv` → `outil-pilotage-recherche-emploi`

**Résultat attendu**

- porte d'entrée réaliste ;
- preuves récentes à construire ;
- repositionnement ;
- boucle d'essai / retour marché.

**État : COUVERT**

---

## 8. Hésiter entre deux offres d'emploi

**Phrase d'entrée**

> « Laquelle est réellement meilleure pour moi ? »

**Chaîne actuelle**

`comparer-deux-offres-emploi` → `outil-comparer-offres-emploi` → `simulateur-cout-trajet-emploi` si besoin → `contrat-travail-clauses-verifier-avant-signer`

**Résultat attendu**

- revenu disponible ;
- temps ;
- contrat ;
- manager ;
- risque ;
- progression ;
- inconnues à lever avant signature.

**État : COUVERT**

---

## 9. Quitter un emploi / se reconvertir sans se fragiliser

**Phrase d'entrée**

> « Je veux partir, mais je ne veux pas détruire ma sécurité pour une hypothèse. »

**Chaîne actuelle**

`quitter-emploi-stable-ou-rester` → `quitter-travail-reconversion-sans-se-fragiliser` → `simulateur-epargne-demission` → `formation-vaut-elle-le-cout` / `simulateur-cout-formation` → `tester-metier-avant-investir`

**Résultat attendu**

- coût mensuel de transition ;
- runway ;
- validation du métier cible ;
- coût complet de formation ;
- stratégie progressive / rupture ;
- condition de départ.

**État : COUVERT ET FORT**

---

## 10. Travailler moins / vivre mieux

**Phrase d'entrée**

> « Combien me coûte réellement le fait de récupérer du temps ? »

**Chaîne actuelle**

`travailler-moins-vivre-mieux` → `patrimoine-permet-il-travailler-moins` → `simulateur-80-pourcent-cout-reel` → `temps-energie-qualite-vie` → `quand-arreter-optimiser-utiliser-patrimoine`

**Résultat attendu**

- revenu réellement perdu ;
- dépenses évitées ;
- heures récupérées ;
- prix de l'heure libérée ;
- rôle du patrimoine ;
- soutenabilité à long terme.

**État : À RELIER — PRIORITÉ STRATÉGIQUE**

Le contenu existe, mais la finalité « qualité de vie » reste dispersée.

### Trou fonctionnel

Pas besoin d'un nouveau grand domaine. Il manque surtout un **parcours transversal Temps / Argent / Liberté** qui assemble les briques existantes.

---

## 11. Lancer une activité sans tout risquer

**Phrase d'entrée**

> « Je veux savoir si mon projet tient avant de quitter mon emploi ou d'y mettre beaucoup d'argent. »

**Chaîne actuelle**

`lancer-activite-sans-quitter-emploi` → `etude-marche-terrain` → `trouver-premiers-clients` → `previsionnel-activite-12-mois` → `simulateur-previsionnel-activite` → `combien-chiffre-affaires-pour-vivre`

Puis :

`creer-entreprise-avec-peu-argent` → `are-arce-acre-creation-entreprise` → `choisir-statut-micro-ei-eurl-sasu`

**Résultat attendu**

- preuve de demande ;
- CA construit par unités réelles ;
- marge ;
- cash nécessaire ;
- revenu cible ;
- condition de bascule.

**État : COUVERT ET BIEN SÉQUENCÉ**

---

## 12. Entreprise qui tourne mais devient fragile

**Phrase d'entrée**

> « J'ai des clients mais je travaille trop / manque de cash / dépends d'un seul client / dois embaucher. »

**Chaîne actuelle**

`dependance-gros-client` → `calculer-prix-minimum-rentable` / `simulateur-prix-minimum-rentable` → `tresorerie-bfr-entreprise` / `outil-tresorerie-13-semaines` → `capacite-refuser-travail-rentabilite` → `embaucher-ou-sous-traiter` → `automatiser-ou-non-processus`

**Résultat attendu**

- concentration client ;
- prix plancher ;
- runway de trésorerie ;
- capacité ;
- décision d'ajouter de la capacité ;
- automatisation seulement après simplification.

**État : COUVERT, MAIS PAS ENCORE PRÉSENTÉ COMME UN COCKPIT D'EXPLOITATION**

### Opportunité future

Un cockpit entrepreneurial ne se justifie que s'il réunit des données déjà utilisées plusieurs fois : CA, marge, encaissements, concentration, capacité, trésorerie. Ne pas le créer avant d'avoir démontré l'usage récurrent.

---

## 13. Organiser un patrimoine déjà constitué

**Phrase d'entrée**

> « J'ai plusieurs actifs mais je ne sais pas si l'ensemble est cohérent. »

**Chaîne actuelle**

`allocation-patrimoine-selon-situation` → `finances-allocation-portefeuille` → `simulateur-allocation-stress-test` → `outil-microscope-pea` → `mon-espace`

**Résultat attendu**

- patrimoine net ;
- concentrations ;
- liquidité ;
- exposition réelle ;
- stress tests ;
- marge de manœuvre.

**État : COUVERT ET LONGITUDINAL**

C'est actuellement le parcours le plus proche de la plateforme cible complète : **diagnostic → simulation → suivi**.

---

## 14. Recevoir une grosse somme

**Phrase d'entrée**

> « Je viens de recevoir 50 000 / 100 000 / 300 000 € : je fais quoi maintenant ? »

**Chaîne actuelle**

`grosse-entree-argent-que-faire` → `outil-repartir-grosse-somme` → `simulateur-capitalisation-comparateur` → `allocation-patrimoine-selon-situation` → `mon-espace`

**Résultat attendu**

- argent à protéger ;
- argent à réserver aux projets ;
- capital long terme ;
- calendrier d'investissement ;
- allocation globale après décision.

**État : COUVERT**

---

## 15. Rembourser une dette ou investir

**Phrase d'entrée**

> « J'ai du cash : dois-je rembourser le crédit ou investir ? »

**Chaîne actuelle**

`finances-credit-endettement` → `simulateur-rembourser-ou-investir` → `allocation-patrimoine-selon-situation` → `simulateur-reserve-securite`

**Résultat attendu**

- rendement garanti du remboursement ;
- coût d'opportunité ;
- liquidité perdue ;
- risque ;
- décision partielle ou totale.

**État : COUVERT**

---

## 16. Préparer la retraite / commencer à utiliser son patrimoine

**Phrase d'entrée**

> « J'ai accumulé : combien puis-je maintenant utiliser sans me fragiliser ? »

**Chaîne actuelle**

`finances-retraite-decumulation` → `quand-arreter-optimiser-utiliser-patrimoine` → `patrimoine-permet-il-travailler-moins` → `mon-espace`

**Résultat attendu**

- dépenses futures ;
- poches de sécurité ;
- horizon ;
- retraits ;
- risque de séquence ;
- valeur d'usage du capital.

**État : TROU PRODUIT**

Le contenu existe, mais il manque un **simulateur de décumulation / soutenabilité d'usage du patrimoine**.

### Outil candidat

Entrées : patrimoine financier, revenus futurs, dépenses, horizon, rendement hypothétique, inflation, retraits programmés, choc défavorable.

Sortie : trajectoires de capital et seuils de dépense / travail compatibles avec le scénario.

---

## 17. Démarche ou situation « impossible »

**Phrase d'entrée**

> « On me dit que c'est impossible / le système me bloque / je ne trouve aucune voie. »

**Chaîne actuelle**

`debloquer-demarche-administrative` / `justificatif-impossible-procedure-bloquee` / dossiers spécialisés → `ingenierie-de-solutions.html` → `outil-ingenierie-solutions.html`

**Résultat attendu**

- auteur réel du verrou ;
- nature de la contrainte ;
- preuve ;
- voies de substitution ;
- séquence ;
- pistes vérifiées / conditionnelles / à tester / éliminées ;
- premier test.

**État : COUVERT MAIS SOUS-EXPOSÉ**

Le moteur existe. Il doit devenir la **porte de secours transversale** lorsqu'un visiteur ne rentre pas proprement dans une catégorie.

---

# Synthèse des trous réels

Après cartographie, les principaux manques ne sont **pas** de nouveaux articles génériques.

## P0 — relier les briques existantes

1. **Parcours achat immobilier** : capacité → coût complet → réserve → mobilité → décision.
2. **Parcours Temps / Argent / Liberté** : travailler moins, emploi moins payé, trajet, patrimoine utilisable, 80 %.
3. **Boucle après résultat des outils** : interprétation → prochain dossier → prochain outil → suivi.

## P1 — outils nouveaux avec forte justification

1. **Sortie d'indivision / soulte / rachat progressif**.
2. **Décumulation / utilisation soutenable du patrimoine**.

## P2 — continuité dans le temps

1. Faire du pilotage de recherche d'emploi un véritable parcours longitudinal visible.
2. Tester si les données entrepreneuriales sont saisies assez souvent pour justifier un cockpit d'exploitation.
3. Éviter de créer plusieurs espaces personnels indépendants si un futur `Mon espace` modulaire peut accueillir plusieurs modules.

---

# Test avant toute nouvelle brique

Pour tout nouveau contenu ou outil :

**Situation d'entrée → verrou → moteur → résultat personnel → prochaine décision → suivi éventuel.**

Une idée qui ne remplit aucun trou de cette chaîne doit être considérée comme **faible priorité**, même si son sujet est intéressant ou son volume de recherche élevé.
