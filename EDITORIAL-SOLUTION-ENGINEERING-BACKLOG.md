# Contre-Évidence — chantier « ingénierie de solutions »

Mise à jour : 16 août 2026

## Standard éditorial

Le corpus doit viser une **profondeur de résolution**, pas seulement une profondeur d’analyse :

**promesse → obstacle précis → contraintes fixes / variables modifiables → fenêtres → conditions de possibilité → seuils et chiffrage → séquence d’exécution → scénario adverse → condition d’abandon ou de révision.**

Une page n’est pas améliorée parce qu’elle devient plus longue. Elle l’est lorsqu’elle aide mieux le lecteur à comprendre **ce qui bloque, ce qui peut changer, pourquoi un levier agit, à quel seuil la décision s’inverse et comment préserver une sortie**.

## Mode de travail

Le chantier est autonome : les améliorations substantielles sont appliquées directement lorsqu’une lecture montre un gain réel. Elles sont consignées dans `reports/content-review-decisions.md` puis récapitulées à l’utilisateur.

Une page déjà forte est conservée. Aucun bloc générique n’est ajouté pour améliorer artificiellement un score.

## Source de vérité du chantier

Les anciennes vagues basées sur des scores 4/12, 5/12, 6/12 et 7/12 sont désormais **historiques** : plusieurs pages ont été enrichies depuis et leurs anciens scores ne décrivent plus correctement le corpus.

Le pilotage courant repose sur :

1. `.github/workflows/corpus-solution-review.yml` — scan transversal de tous les contenus indexables ;
2. `reports/corpus-solution-review.md` — file automatique par dimensions manquantes ;
3. `reports/corpus-solution-human-review.json` — mémoire des validations humaines attachées au SHA exact ;
4. `reports/content-review-decisions.md` — journal des réécritures et décisions humaines.

### Règle de mémoire

Une page validée humainement reste hors de la file uniquement tant que son **blob SHA Git** reste identique. Toute modification du contenu révoque automatiquement cette validation et remet la page dans la revue.

## État du passage global

Premier scan propre après exclusion des pages `noindex` :

- **122 contenus indexables analysés** ;
- **79 pages `noindex` de consolidation/redirection exclues** ;
- **11 priorités critiques** détectées par l’heuristique ;
- **11/11 relues humainement** ;
- **10 conservées** car déjà conformes malgré un score heuristique incomplet ;
- **1 réécrite** : `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`.

La prochaine passe porte sur les contenus intermédiaires du rapport, en commençant par ceux à forte conséquence pratique ou forte promesse.

## Réécritures substantielles récentes

### 16 août 2026

- ✅ `dossiers/choisir-statut-micro-ei-eurl-sasu.html`
  - forme juridique, régime micro et TVA séparés ;
  - trajectoire de structure et déclencheurs de bascule ;
  - suppression du faux seuil universel de frais.

- ✅ `dossiers/cout-reel-voiture-achat-credit-loa-lld.html`
  - besoin de mobilité avant financement ;
  - coût total, liquidité, valeur de sortie ;
  - stress tests de kilométrage et rupture anticipée.

- ✅ `dossiers/location-nue-ou-meublee-comparer.html`
  - marché et usage avant fiscalité ;
  - seuil de surloyer meublé ;
  - durée, DPE, rotation, temps de gestion et réversibilité.

- ✅ `dossiers/gestion-pilotee-comparer-performances.html`
  - séparation allocation / exécution / délégation ;
  - prime de délégation ;
  - benchmark comparable, valeur comportementale conditionnelle et règle de sortie.

- ✅ `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`
  - trois poches : socle / long terme / option-usage ;
  - prix du temps racheté ;
  - expérimentation réversible ;
  - stress test après utilisation ;
  - seuils de bascule entre construire, protéger et utiliser.

### Réécritures de référence déjà présentes

- ✅ `dossiers/indivision-couple-separation-rachat-soulte.html`
- ✅ `dossiers/indivision-rachat-progressif-parts.html`
- ✅ `dossiers/quitter-cdi-avec-credit-immobilier.html`
- ✅ `dossiers/changer-travail-avant-credit-immobilier.html`
- ✅ `dossiers/metiers-accessibles-sans-diplome.html`
- ✅ `dossiers/creer-entreprise-sans-diplome.html`
- ✅ `dossiers/licence-universite-sans-bac-daeu-vap-vae.html`
- ✅ `dossiers/temps-energie-qualite-vie.html`
- ✅ `dossiers/couple-famille-argent-temps.html`
- ✅ `dossiers/previsionnel-activite-12-mois.html`
- ✅ `dossiers/location-courte-duree-meuble-tourisme.html`

## Pages relues dans la file critique et conservées

Le détail et le SHA de validation sont stockés dans `reports/corpus-solution-human-review.json`.

- `dossiers/trouver-premiers-clients.html`
- `articles/competences-invisibles-preuves.html`
- `articles/entretien-rate-ce-qui-bloque.html`
- `dossiers/combien-chiffre-affaires-pour-vivre.html`
- `dossiers/etre-riche-revenu-patrimoine-liberte.html`
- `dossiers/experience-devient-risque-recruteur.html`
- `dossiers/finances-residence-principale.html`
- `dossiers/puis-je-me-permettre-reconversion.html`
- `dossiers/finances-transmission-patrimoine.html`
- `dossiers/quand-vie-change-sante-separation-revenu.html`

## Pages déjà relues auparavant et conservées

- `dossiers/apprendre-developper-competences.html`
- `dossiers/audit-budget-60-minutes.html`
- `dossiers/dependance-gros-client.html`
- `dossiers/creer-entreprise-avec-peu-argent.html`
- `dossiers/indivision-loyers-charges-comptes.html`
- `dossiers/finances-retraite-decumulation.html`
- `dossiers/passer-80-pourcent-cout-reel.html`
- `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`
- `dossiers/acheter-logement-sans-se-fragiliser.html`
- `dossiers/assurer-ou-autoassurer-risques.html`
- `dossiers/automatiser-ou-non-processus.html`
- `dossiers/competent-mais-invisible-travail.html`
- `dossiers/embaucher-ou-sous-traiter.html`
- `dossiers/lancer-activite-sans-quitter-emploi.html`
- `dossiers/liquidites-reserve-securite.html`
- `dossiers/reconversion-sans-perte-salaire.html`
- `dossiers/regles-responsabilites-fautes-travail.html`
- `dossiers/ameliorer-processus-sans-degrader-service.html`
- `dossiers/audit-copropriete-avant-achat.html`
- `dossiers/calculer-prix-minimum-rentable.html`
- `dossiers/immobilier-allocation-globale-patrimoine.html`
- `dossiers/classes-actifs-allocation-patrimoine.html`
- `dossiers/finances-difficiles-sortir-decouvert-dettes.html`

Ces relectures antérieures sont documentées dans le chantier mais ne bénéficient pas encore toutes d’un snapshot SHA dans la mémoire automatisée. Elles pourront être revalidées au fil des passes du rapport global.

## Règles de chantier

1. Le score automatique est un détecteur, jamais une preuve de qualité.
2. Toute page sensible modifiée doit être revérifiée contre des sources primaires à jour.
3. Un levier doit passer le test : **« Si nous faisons X, alors Y change parce que Z. »**
4. Absence de preuve d’impossibilité ≠ preuve de faisabilité.
5. Ne pas confondre politique d’un acteur, règle juridique et pratique dominante.
6. Rechercher les fenêtres temporelles, séquences, fractionnements, substitutions, combinaisons et options de sortie.
7. Ne jamais faire dépendre une solution d’une fausse déclaration, d’une dissimulation ou d’une représentation trompeuse.
8. Préserver un bon texte lorsqu’aucun gain causal, décisionnel ou probatoire réel n’est identifié.

## Définition de terminé pour une page

Une page est considérée suffisamment profonde lorsque, compte tenu de son objectif :

- la promesse du titre est délivrée ;
- le vrai verrou est nommé ou la question est correctement décomposée ;
- les leviers proposés agissent réellement sur ce verrou ;
- les conditions de possibilité et dépendances sont visibles ;
- les seuils utiles sont chiffrés quand cela a du sens ;
- un scénario adverse est pris en compte lorsque l’enjeu le justifie ;
- la séquence et la réversibilité sont traitées lorsque pertinentes ;
- les affirmations sensibles disposent du niveau de preuve adapté ;
- une lecture humaine conclut que l’ajout apporte plus qu’une compilation de résultats de recherche.
