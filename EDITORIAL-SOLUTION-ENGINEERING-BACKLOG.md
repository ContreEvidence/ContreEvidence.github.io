# Contre-Évidence — chantier « ingénierie de solutions »

Mise à jour : 16 août 2026

## Pourquoi ce chantier existe

Le corpus est riche et souvent correctement sourcé, mais une partie importante des dossiers atteint davantage une **profondeur d’analyse** qu’une **profondeur de résolution**.

Le standard est désormais :

**promesse → obstacle précis → contraintes fixes / variables modifiables → fenêtres → conditions de possibilité → seuils et chiffrage → séquence d’exécution → condition d’abandon ou de révision.**

Une page n’est pas terminée parce qu’elle explique correctement la règle. Elle doit répondre à la question du titre et aider le lecteur à construire ou tester une solution.

## Mode de travail

Le chantier est désormais **autonome** : les améliorations substantielles sont appliquées directement lorsqu’elles apportent une vraie profondeur de résolution. Elles sont ensuite consignées dans `reports/content-review-decisions.md` et récapitulées à l’utilisateur par lot.

Une page déjà forte peut être auditée puis laissée intacte. Le but n’est pas de réécrire tout le texte : c’est de revisiter tout le raisonnement.

## État du chantier

Réécritures étalon ou substantielles déjà réalisées :

- ✅ `dossiers/indivision-couple-separation-rachat-soulte.html`
- ✅ `dossiers/metiers-accessibles-sans-diplome.html`
- ✅ `dossiers/quitter-cdi-avec-credit-immobilier.html`
- ✅ `dossiers/choisir-statut-micro-ei-eurl-sasu.html`
- ✅ `dossiers/cout-reel-voiture-achat-credit-loa-lld.html`
- ✅ `dossiers/gestion-pilotee-comparer-performances.html`
- ✅ `dossiers/location-nue-ou-meublee-comparer.html`

Le bloc générique « Avant de refermer ce dossier » reste supprimé : la profondeur doit être écrite dans chaque dossier, pas simulée par un encadré commun.

## Règles de chantier

1. **Gel de l’expansion éditoriale** sur les domaines déjà bien couverts tant que les pages à forte promesse ci-dessous ne sont pas reprises, sauf nécessité légale, factuelle ou SEO réellement distincte.
2. L’audit automatique `solution-engineering-audit.yml` sert de détecteur, jamais de substitut à une lecture humaine.
3. Toute page réécrite doit viser une vraie profondeur de résolution ; le score automatique n’est qu’un signal.
4. Une page réussie doit apporter au moins un élément difficile à obtenir par simple compilation de résultats de recherche : seuil, montage, séquence, combinaison de leviers, condition de possibilité ou démonstration d’une fausse impossibilité.
5. Les solutions restent licites et vérifiables. « Contre-évidence » ne signifie jamais contourner illégalement une règle.
6. Ne pas coller un bloc générique d’ingénierie partout. Le levier doit être spécifique au problème et passer le test causal.
7. Pour les sujets sensibles, rafraîchir les sources primaires avant toute modification factuelle substantielle.

## Vague A — promesse forte, ancien audit 4–5/12

- [x] `dossiers/choisir-statut-micro-ei-eurl-sasu.html` — réécrit le 16/08 : trajectoire de structure, TVA séparée du régime micro, seuils de bascule
- [x] `dossiers/cout-reel-voiture-achat-credit-loa-lld.html` — réécrit le 16/08 : besoin de mobilité, option de sortie, liquidité, stress tests
- [x] `dossiers/gestion-pilotee-comparer-performances.html` — réécrit le 16/08 : valeur de délégation, benchmark, frais, règle de sortie
- [x] `dossiers/location-nue-ou-meublee-comparer.html` — réécrit le 16/08 : architecture d’usage, seuil de surloyer, DPE, réversibilité
- [x] `dossiers/quitter-cdi-avec-credit-immobilier.html` — réécrit
- [x] `dossiers/temps-energie-qualite-vie.html` — réécrit précédemment
- [~] `dossiers/apprendre-developper-competences.html` — relu le 16/08 : déjà très proche du nouveau standard, pas de réécriture artificielle
- [~] `dossiers/audit-budget-60-minutes.html` — relu le 16/08 : structure déjà opérationnelle ; approfondissement à cibler seulement si un levier réel manque
- [ ] `dossiers/creer-entreprise-avec-peu-argent.html`
- [~] `dossiers/dependance-gros-client.html` — relu le 16/08 : stress test, mois de rupture et diversification causale déjà présents
- [ ] `dossiers/finances-retraite-decumulation.html`
- [ ] `dossiers/indivision-loyers-charges-comptes.html`
- [x] `dossiers/metiers-accessibles-sans-diplome.html` — réécrit
- [ ] `dossiers/passer-80-pourcent-cout-reel.html`

`[~]` signifie : page revisitée humainement, contenu conservé car déjà substantiellement conforme ; elle peut encore recevoir une amélioration ciblée plus tard.

## Vague B — promesse forte, ancien audit 6/12

- [ ] `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`
- [ ] `dossiers/acheter-logement-sans-se-fragiliser.html`
- [ ] `dossiers/assurer-ou-autoassurer-risques.html`
- [ ] `dossiers/automatiser-ou-non-processus.html`
- [ ] `dossiers/competent-mais-invisible-travail.html`
- [ ] `dossiers/embaucher-ou-sous-traiter.html`
- [ ] `dossiers/etre-riche-revenu-patrimoine-liberte.html`
- [ ] `dossiers/lancer-activite-sans-quitter-emploi.html`
- [ ] `dossiers/liquidites-reserve-securite.html`
- [ ] `dossiers/reconversion-sans-perte-salaire.html`
- [ ] `dossiers/regles-responsabilites-fautes-travail.html`

## Vague C — promesse forte, ancien audit 7/12

- [ ] `dossiers/ameliorer-processus-sans-degrader-service.html`
- [ ] `dossiers/audit-copropriete-avant-achat.html`
- [ ] `dossiers/calculer-prix-minimum-rentable.html`
- [ ] `dossiers/combien-chiffre-affaires-pour-vivre.html`
- [ ] `dossiers/combien-epargne-avant-demissionner.html`
- [x] `dossiers/creer-entreprise-sans-diplome.html`
- [ ] `dossiers/emploi-chercher-accepter-negocier-evoluer.html`
- [ ] `dossiers/favoriser-un-enfant-succession-donation.html`
- [ ] `dossiers/finances-residence-principale.html`
- [ ] `dossiers/indivision-succession-heritiers-vendre-partager.html`
- [x] `dossiers/previsionnel-activite-12-mois.html` — causalité capacité/prix corrigée précédemment
- [ ] `dossiers/prix-attendre-finances.html`
- [ ] `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`
- [ ] `dossiers/reconversion-sans-formation-longue.html`
- [ ] `dossiers/rembourser-credit-ou-investir.html`

## Pages faibles sans nécessairement avoir un titre « solution »

- [x] `dossiers/couple-famille-argent-temps.html` — réécrit précédemment
- [ ] `dossiers/quand-vie-change-sante-separation-revenu.html`
- [ ] `dossiers/trouver-premiers-clients.html`
- [ ] `dossiers/immobilier-allocation-globale-patrimoine.html`
- [ ] `dossiers/classes-actifs-allocation-patrimoine.html`
- [ ] `dossiers/finances-difficiles-sortir-decouvert-dettes.html`
- et toutes les autres pages signalées par les audits.

## Ordre de reprise

Le classement par ancien score ne suffit pas. À score égal, priorité à :

1. une promesse forte dans le titre ;
2. un sujet à forte intention de recherche ou forte conséquence pratique ;
3. un sujet central à l’identité Contre-Évidence ;
4. une page vers laquelle de nombreux parcours internes convergent ;
5. un sujet où plusieurs domaines peuvent être recombinés pour faire apparaître une solution non évidente.

Prochain noyau :

1. `creer-entreprise-avec-peu-argent.html` — séparer coût de lancement, besoin en fonds de roulement et runway personnel ;
2. `indivision-loyers-charges-comptes.html` — transformer la comptabilité de l’indivision en architecture de preuve et de décision ;
3. `finances-retraite-decumulation.html` — passer du taux de retrait à une politique conditionnelle de décumulation ;
4. `passer-80-pourcent-cout-reel.html` — calculer le prix réel du temps libéré et les seuils où l’arbitrage s’inverse ;
5. puis la vague B.

## Définition de terminé

Une case n’est cochée que si :

- le titre et la promesse sont délivrés ;
- le verrou est nommé ;
- plusieurs fenêtres sont réellement explorées ;
- les conditions de possibilité sont explicites ;
- les seuils pertinents sont chiffrés ;
- le lecteur dispose d’une séquence d’action ;
- une condition d’abandon ou de révision existe ;
- les affirmations sensibles sont adossées aux sources adéquates ;
- la page passe les audits techniques ;
- une lecture humaine conclut qu’elle apporte réellement quelque chose de difficile à trouver ailleurs.
