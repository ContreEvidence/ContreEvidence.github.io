# Contre-Évidence — chantier « ingénierie de solutions »

Mise à jour : 16 août 2026

## Statut du chantier

**Revue humaine intégrale du corpus indexable terminée sur le snapshot courant.**

État confirmé par `reports/corpus-solution-review.md` le 16 août 2026 :

- **122 contenus indexables analysés** ;
- **122/122 validations humaines actives** ;
- **79 pages `noindex` de consolidation/redirection exclues** ;
- **0 validation caduque** ;
- **aucune priorité critique non relue**.

Ce statut n’est pas définitif au sens éditorial : toute modification d’un contenu HTML invalide automatiquement la validation humaine liée à son ancien SHA et remet uniquement cette page dans la file de revue.

## Standard éditorial

Le corpus vise une **profondeur de résolution**, pas seulement une profondeur d’analyse :

**promesse → obstacle précis → contraintes fixes / variables modifiables → fenêtres → conditions de possibilité → seuils et chiffrage → séquence d’exécution → scénario adverse → condition d’abandon ou de révision.**

Une page n’est pas améliorée parce qu’elle devient plus longue. Elle l’est lorsqu’elle aide mieux le lecteur à comprendre :

- ce qui bloque réellement ;
- ce qui peut changer ;
- pourquoi un levier agit sur le verrou ;
- à quel seuil la décision s’inverse ;
- quelles options doivent être préservées ;
- comment sortir ou réviser si le scénario se dégrade.

## Mode de travail permanent

Le chantier reste **autonome** : une amélioration substantielle est appliquée directement lorsqu’une lecture humaine identifie un gain réel. Elle est ensuite consignée dans `reports/content-review-decisions.md` et récapitulée à l’utilisateur.

Une page déjà forte est conservée. Aucun bloc générique n’est ajouté pour améliorer artificiellement un score.

## Source de vérité

Le pilotage repose sur :

1. `.github/workflows/corpus-solution-review.yml` — scan transversal des contenus indexables ;
2. `reports/corpus-solution-review.md` — état courant et file de reprise ;
3. `reports/corpus-solution-human-review.json` + `reports/corpus-solution-human-review-*.json` — mémoire append-only des validations humaines attachées au SHA exact ;
4. `reports/content-review-decisions.md` — journal des réécritures substantielles et décisions humaines.

Les anciennes vagues fondées sur des scores 4/12, 5/12, 6/12 ou 7/12 sont désormais historiques et ne pilotent plus le chantier.

## Règle de mémoire

Une validation humaine reste active uniquement tant que le **blob SHA Git** du contenu reste identique.

- contenu inchangé → validation conservée ;
- contenu modifié → validation automatiquement caduque ;
- page modifiée → retour automatique dans la revue ;
- nouvelle validation → enregistrée dans un lot append-only plus récent.

Le workflow affiche aussi désormais le **SHA relu** et le **SHA courant** lorsqu’une validation devient caduque. Cela permet de distinguer immédiatement une vraie modification éditoriale d’un problème de métadonnées ou de cache.

## Réécritures substantielles du 16 août 2026

### `dossiers/choisir-statut-micro-ei-eurl-sasu.html`

- forme juridique, régime micro et TVA séparés ;
- trajectoire de structure au lieu d’un classement statique ;
- déclencheurs de bascule mesurables ;
- suppression du faux seuil universel de frais.

### `dossiers/cout-reel-voiture-achat-credit-loa-lld.html`

- besoin de mobilité placé avant le financement ;
- coût total, liquidité et valeur de sortie ;
- stress tests kilométrage / rupture anticipée ;
- réduction du besoin testée avant optimisation du financement.

### `dossiers/location-nue-ou-meublee-comparer.html`

- usage et marché avant fiscalité ;
- seuil de surloyer nécessaire pour justifier le meublé ;
- rotation, mobilier, vacance, temps de gestion et DPE ;
- réversibilité et options contractuelles conditionnelles.

### `dossiers/gestion-pilotee-comparer-performances.html`

- allocation / exécution / délégation séparées ;
- prime de délégation ;
- benchmark réellement comparable ;
- valeur comportementale admise seulement si elle résout un problème observé ;
- règle de sortie définie avant l’entrée.

### `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`

- trois poches : socle / long terme / option-usage ;
- prix du temps racheté ;
- expérimentation réversible ;
- stress test après utilisation du capital ;
- seuils de bascule entre construire, protéger et utiliser.

### `dossiers/prejuges-biais-monde-professionnel.html`

- séparation **signal mal interprété / gatekeeper local / traitement potentiellement discriminatoire** ;
- test « même preuve, autre acteur » ;
- substitution d’acteur plutôt que modification infinie du profil ;
- seuil de sortie du registre de persuasion vers la conservation des faits et l’orientation adaptée.

### `dossiers/automatiser-ou-non-processus.html`

- nouvelle séquence **supprimer → simplifier → standardiser → assister → automatiser** ;
- test causal avant choix d’un outil ;
- procédure manuelle de secours ;
- rollback ;
- kill switch si maintenance, exceptions, dépendance ou baisse de volume détruisent le ROI.

### `articles/frais-fiscalite-rendement-net.html`

- frais fournisseurs rafraîchis ;
- coût récurrent distingué du coût ponctuel d’une migration ;
- `économie annuelle ≈ capital × écart de frais` ;
- `point mort de migration ≈ coût ponctuel / économie annuelle` ;
- valeur des options perdues intégrée avant de recommander un transfert.

## Réécritures de référence déjà présentes

Le corpus comporte également les architectures de référence suivantes, désormais toutes couvertes par une validation humaine SHA-active :

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

## Règles permanentes

1. Le score automatique est un détecteur, jamais une preuve de qualité.
2. Toute affirmation sensible modifiée doit être revérifiée contre des sources primaires à jour.
3. Un levier doit passer le test : **« Si nous faisons X, alors Y change parce que Z. »**
4. Absence de preuve d’impossibilité ≠ preuve de faisabilité.
5. Ne pas confondre politique d’un acteur, règle juridique et pratique dominante.
6. Rechercher fenêtres temporelles, séquences, fractionnements, substitutions, combinaisons et options de sortie.
7. Ne jamais faire dépendre une solution d’une fausse déclaration, d’une dissimulation ou d’une représentation trompeuse.
8. Préserver un bon texte lorsqu’aucun gain causal, décisionnel ou probatoire réel n’est identifié.
9. Utiliser des lots de revue append-only pour éviter une mémoire monolithique fragile.
10. Une page validée aujourd’hui n’acquiert aucun droit à rester validée demain : toute modification la rouvre.

## Définition de terminé pour une page

Une page est suffisamment profonde lorsque, compte tenu de sa fonction :

- la promesse du titre est délivrée ;
- le vrai verrou est nommé ou la question correctement décomposée ;
- les leviers proposés agissent réellement sur ce verrou ;
- les conditions de possibilité et dépendances sont visibles ;
- les seuils utiles sont chiffrés quand cela a du sens ;
- un scénario adverse est pris en compte lorsque l’enjeu le justifie ;
- la séquence et la réversibilité sont traitées lorsque pertinentes ;
- les affirmations sensibles disposent du niveau de preuve adapté ;
- une lecture humaine conclut que l’ajout apporte plus qu’une compilation de résultats de recherche.

## Prochaine logique de travail

Le chantier n’a plus de backlog de réécriture globale. Il devient un **système de maintenance continue** :

- toute page modifiée est automatiquement rouverte ;
- toute nouvelle page entre automatiquement dans l’audit ;
- une évolution réglementaire ou factuelle peut déclencher une reprise ciblée ;
- une nouvelle solution réellement distincte peut enrichir une page ;
- aucune création ou réécriture n’est justifiée uniquement pour augmenter le volume du site.
