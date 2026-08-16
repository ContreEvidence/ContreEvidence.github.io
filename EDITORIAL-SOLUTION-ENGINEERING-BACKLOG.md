# Contre-Évidence — chantier « ingénierie de solutions »

Mise à jour : 16 août 2026

## Statut du chantier

**Le chantier de profondeur est rouvert et fonctionne en revue autonome.**

Le snapshot courant comporte plus de 120 contenus indexables ayant reçu une revue structurelle interne attachée à leur SHA. Cette revue vérifie principalement la présence de dimensions classiques de résolution : problème, causalité, options, temps/seuils, quantification, scénario adverse, séquence, sortie et preuve.

Elle ne doit plus être interprétée comme :

- une preuve que le contenu est suffisamment profond ;
- une preuve qu’aucun angle mort ne subsiste ;
- une validation éditoriale de l’utilisateur ;
- une exemption de nouvelle revue lorsque le contenu, le droit, le marché ou la promesse évoluent.

Les anciennes mentions « validations humaines », « chantier terminé » ou « maintenance continue seulement » sont donc **requalifiées comme revues structurelles héritées**.

## Pourquoi la revue est rouverte

Une page peut satisfaire les dimensions structurelles et rester insuffisante si elle ne cherche pas ce qui se trouve hors de la formulation initiale du problème.

Le standard courant ajoute une recherche active de :

- changement d’acteur ou de gatekeeper ;
- substitution de preuve, garantie, ressource, usage, marché ou contrat ;
- fenêtres temporelles ;
- ordre des opérations ;
- fractionnement et transition progressive ;
- combinaison de petits leviers ;
- valeur de l’attente et du statu quo ;
- effets de second ordre ;
- transfert de risque ;
- friction d’exécution et dépendances humaines ;
- hétérogénéité par statut, contrat, lieu ou marché ;
- condition de renversement ;
- substitution de l’objectif visible par le besoin réel ;
- valeur d’option et irréversibilité ;
- asymétrie de preuve entre fermer une voie et la recommander.

## Standard éditorial

Le corpus vise une **profondeur de résolution**, pas seulement une profondeur d’analyse :

**promesse → obstacle précis → contraintes fixes / variables modifiables → angles morts → familles de solutions → conditions de possibilité → seuils et chiffrage → ordre d’exécution → scénario adverse → effets de second ordre → condition d’abandon ou de révision.**

Une page n’est pas améliorée parce qu’elle devient plus longue. Elle l’est lorsqu’elle aide mieux le lecteur à comprendre :

- ce qui bloque réellement ;
- ce qui peut changer ;
- ce qui peut être remplacé plutôt qu’optimisé ;
- pourquoi un levier agit sur le verrou ;
- à quel seuil la décision s’inverse ;
- quelle séquence préserve le plus d’options ;
- qui supporte le risque et les coûts différés ;
- comment la solution peut échouer dans l’exécution ;
- comment sortir ou réviser si le scénario se dégrade.

## Gouvernance éditoriale actuelle

La source de vérité est `AGENTS.md` : **le mode courant est autonome**. L’utilisateur a autorisé l’application directe des améliorations substantielles justifiées sur le corpus et ne souhaite pas de validation page par page.

Flux courant :

1. lire humainement la page et son cluster proche ;
2. utiliser les scores automatiques uniquement comme détecteurs ;
3. identifier un angle mort ou un gain de couverture qui change réellement décision, coût, risque, séquence, preuve ou options ;
4. vérifier les affirmations sensibles sur sources primaires à jour ;
5. appliquer directement la correction lorsqu’elle est matériellement utile ;
6. préserver la page lorsqu’un signal est faux positif ou sans effet décisionnel ;
7. journaliser aussi bien les réécritures que les décisions de conservation ;
8. rendre compte du lot au terme de la passe.

Une instruction explicite ultérieure de l’utilisateur demandant à nouveau une validation unitaire remplacerait ce mode.

Les modifications d’infrastructure, d’audit, de méthode interne et les corrections purement techniques restent possibles de façon autonome lorsqu’elles ne changent pas le sens du contenu publié.

## Source de vérité

Le pilotage repose sur :

1. `AGENTS.md` — doctrine et gouvernance éditoriale courantes ;
2. `.github/workflows/corpus-solution-review.yml` — scan structurel des contenus indexables ;
3. `reports/corpus-solution-review.md` — état du scan structurel ;
4. `reports/corpus-solution-human-review*.json` — mémoire historique de revues internes attachées au SHA, **pas validation utilisateur** ;
5. `reports/corpus-blind-spots.md` — file de reprise selon le standard d’angles morts ;
6. `reports/audience-variant-coverage.md` — couverture des variantes d’audience ;
7. `reports/content-review-decisions.md` — décisions explicites de réécriture, routage, conservation, vérification ou report.

## Réécritures substantielles historiques à revisiter si nécessaire

- `dossiers/choisir-statut-micro-ei-eurl-sasu.html`
- `dossiers/cout-reel-voiture-achat-credit-loa-lld.html`
- `dossiers/location-nue-ou-meublee-comparer.html`
- `dossiers/gestion-pilotee-comparer-performances.html`
- `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`
- `dossiers/prejuges-biais-monde-professionnel.html`
- `dossiers/automatiser-ou-non-processus.html`
- `articles/frais-fiscalite-rendement-net.html`
- `dossiers/indivision-couple-separation-rachat-soulte.html`
- `dossiers/indivision-rachat-progressif-parts.html`
- `dossiers/indivision-immobiliere-sortir-sans-subir.html`
- `dossiers/quitter-cdi-avec-credit-immobilier.html`
- `dossiers/changer-travail-avant-credit-immobilier.html`
- `dossiers/metiers-accessibles-sans-diplome.html`
- `dossiers/creer-entreprise-sans-diplome.html`
- `dossiers/licence-universite-sans-bac-daeu-vap-vae.html`
- `dossiers/temps-energie-qualite-vie.html`
- `dossiers/couple-famille-argent-temps.html`
- `dossiers/previsionnel-activite-12-mois.html`
- `dossiers/location-courte-duree-meuble-tourisme.html`

Ces travaux ne sont ni invalidés ni sanctuarisés : ils sont relus selon le même standard si un nouvel angle mort, une nouvelle variante d’audience ou une évolution factuelle le justifie.

## Définition de « suffisamment profond »

Une page est suffisamment profonde seulement lorsque, compte tenu de sa fonction :

- la promesse du titre est délivrée ;
- le vrai verrou est nommé ou la question correctement décomposée ;
- plusieurs familles de solutions réellement distinctes ont été testées ;
- les leviers proposés agissent causalement sur le verrou ;
- les acteurs, dépendances, fenêtres et séquences qui changent l’issue sont visibles ;
- les substitutions, fractionnements et combinaisons pertinents ont été recherchés ;
- le coût de l’attente et le coût d’agir sont comparés lorsque pertinent ;
- les effets de second ordre et transferts de risque sont visibles ;
- les conditions de possibilité sont séparées des hypothèses ;
- les seuils utiles sont chiffrés quand cela a du sens ;
- un scénario adverse est pris en compte lorsque l’enjeu le justifie ;
- la réversibilité et la valeur des options sont traitées ;
- la condition de renversement de la conclusion est explicite ;
- les affirmations sensibles disposent du niveau de preuve adapté ;
- l’ajout apporte plus qu’une compilation de résultats de recherche.

## Règles permanentes

1. Le score automatique est un détecteur, jamais une preuve de qualité.
2. Une revue structurelle héritée n’est pas une validation éditoriale finale.
3. Toute affirmation sensible modifiée doit être revérifiée contre des sources primaires à jour.
4. Un levier doit passer le test : **« Si nous faisons X, alors Y change parce que Z. »**
5. Absence de preuve d’impossibilité ≠ preuve de faisabilité.
6. Ne pas confondre politique d’un acteur, règle juridique et pratique dominante.
7. Rechercher fenêtres temporelles, séquences, fractionnements, substitutions, combinaisons et options de sortie.
8. Rechercher aussi les effets de second ordre, la friction d’exécution et le transfert de risque.
9. Ne jamais faire dépendre une solution d’une fausse déclaration, d’une dissimulation ou d’une représentation trompeuse.
10. Préserver un bon texte lorsqu’aucun gain causal, décisionnel, probatoire ou d’optionnalité réel n’est identifié.

## Prochaine logique de travail

Le chantier est piloté par la **cartographie d’angles morts et la couverture des situations**, avec traitement autonome par priorité réelle.

Ordre de priorité :

1. clusters à enjeu élevé et forte capacité de différenciation : immobilier/indivision/crédit ; carrière/reconversion ; entrepreneuriat ; patrimoine/usage ;
2. pages structurellement « conformes » mais dont le raisonnement reste trop proche des réponses standard disponibles ailleurs ;
3. pages où une dépendance tierce, une fenêtre temporelle ou une option progressive peut inverser la décision ;
4. pages dont la conclusion pourrait changer par un effet de second ordre ou un coût différé aujourd’hui absent.
