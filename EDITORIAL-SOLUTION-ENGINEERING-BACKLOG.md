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
3. `reports/corpus-solution-human-review.json` + `reports/corpus-solution-human-review-*.json` — mémoire append-only des validations humaines attachées au SHA exact ;
4. `reports/content-review-decisions.md` — journal des réécritures et décisions humaines.

### Règle de mémoire

Une page validée humainement reste hors de la file uniquement tant que son **blob SHA Git** reste identique. Toute modification du contenu révoque automatiquement cette validation et remet la page dans la revue.

Les nouvelles validations sont enregistrées par lots append-only. Le workflow fusionne le fichier historique et les lots successifs ; un lot plus récent peut remplacer l’entrée d’une même page après réécriture. Cette architecture évite de réécrire un gros registre à chaque passe.

## État du passage global

État confirmé par le rapport du 16 août 2026 :

- **122 contenus indexables analysés** ;
- **79 pages `noindex` de consolidation/redirection exclues** ;
- **48 validations humaines actives** ;
- **0 validation caduque** ;
- **aucune priorité critique non relue**.

Le niveau 6/9 critique et le niveau 7/9 ont été absorbés par revue humaine. La passe 8/9 est en cours : elle privilégie les pages à forte promesse et les pages conceptuelles où un raisonnement peut encore rester descriptif sans déboucher sur une architecture d’action.

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

- ✅ `dossiers/prejuges-biais-monde-professionnel.html`
  - séparation signal mal interprété / gatekeeper local / traitement potentiellement discriminatoire ;
  - test « même preuve, autre acteur » ;
  - substitution d’acteur plutôt que modification infinie du profil ;
  - seuil de sortie du registre de persuasion vers la conservation des faits et l’orientation adaptée.

- ✅ `dossiers/automatiser-ou-non-processus.html`
  - nouvelle séquence supprimer → simplifier → standardiser → assister → automatiser ;
  - test causal avant choix d’outil ;
  - procédure manuelle de secours et rollback ;
  - kill switch si maintenance, exceptions, dépendance ou baisse de volume détruisent le ROI.

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

## Revue humaine mémorisée

Le détail et le SHA exact de chaque validation figurent dans le registre historique et les lots `reports/corpus-solution-human-review-*.json`.

Le rapport automatique est la source de vérité pour savoir si une validation reste active. Une liste statique de pages relues n’est donc plus maintenue ici : elle deviendrait obsolète dès qu’un fichier change.

## Règles de chantier

1. Le score automatique est un détecteur, jamais une preuve de qualité.
2. Toute page sensible modifiée doit être revérifiée contre des sources primaires à jour.
3. Un levier doit passer le test : **« Si nous faisons X, alors Y change parce que Z. »**
4. Absence de preuve d’impossibilité ≠ preuve de faisabilité.
5. Ne pas confondre politique d’un acteur, règle juridique et pratique dominante.
6. Rechercher les fenêtres temporelles, séquences, fractionnements, substitutions, combinaisons et options de sortie.
7. Ne jamais faire dépendre une solution d’une fausse déclaration, d’une dissimulation ou d’une représentation trompeuse.
8. Préserver un bon texte lorsqu’aucun gain causal, décisionnel ou probatoire réel n’est identifié.
9. Lorsque le registre humain grossit, préférer des lots append-only plutôt qu’une réécriture monolithique qui augmente le risque de conflit.

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
