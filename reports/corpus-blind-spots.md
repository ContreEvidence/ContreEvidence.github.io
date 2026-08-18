# Cartographie des angles morts du corpus

Mise à jour automatique : 2026-08-18

Cet audit complète — il ne remplace pas — la revue structurelle. Il cherche des **familles de raisonnement susceptibles de changer la décision** mais souvent absentes d’un contenu pourtant correct : acteur, substitution, fenêtre temporelle, ordre, fractionnement, combinaison, statu quo, second ordre, transfert de risque, friction, hétérogénéité, renversement, objectif réel, optionnalité et asymétrie de preuve.

Un motif absent n’est **pas** automatiquement un défaut : la file sert à provoquer une lecture humaine. Inversement, la présence d’un mot ne prouve pas que l’angle est bien traité. Les décisions humaines SHA-liées sont enregistrées séparément dans `reports/corpus-blind-spot-human-review-*.json`.

Pages indexables analysées : **130**. Pages `noindex` exclues : **79**.

## Priorité heuristique

| Priorité | Couverture | Cluster | Page | Angles critiques non détectés |
|---:|---:|---|---|---|
| 17 | 6/15 | patrimoine / investissement / retraite | `articles/construire-epargne-de-zero.html` | attendre / statu quo, effets de second ordre, transfert de risque, hétérogénéité / cas local, valeur d’option / irréversibilité |
| 17 | 6/15 | patrimoine / investissement / retraite | `dossiers/temps-energie-qualite-vie.html` | attendre / statu quo, transfert de risque, hétérogénéité / cas local, condition de renversement, valeur d’option / irréversibilité |
| 15 | 8/15 | immobilier / crédit / indivision | `dossiers/assurer-ou-autoassurer-risques.html` | acteur/gatekeeper, fractionnement, effets de second ordre, valeur d’option / irréversibilité, condition de renversement |
| 15 | 8/15 | patrimoine / investissement / retraite | `dossiers/audit-budget-60-minutes.html` | attendre / statu quo, effets de second ordre, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 15 | 8/15 | patrimoine / investissement / retraite | `dossiers/depenses-recurrentes-abonnements-assurances.html` | attendre / statu quo, effets de second ordre, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 13 | 7/15 | emploi / carrière / qualification | `articles/competences-transferables.html` | substitution, objectif réel / substitution du moyen, asymétrie de preuve, condition de renversement |
| 12 | 8/15 | entrepreneuriat / activité | `dossiers/creer-entreprise-sans-diplome.html` | acteur/gatekeeper, effets de second ordre, attendre / statu quo, condition de renversement |
| 12 | 8/15 | patrimoine / investissement / retraite | `dossiers/liquidites-reserve-securite.html` | attendre / statu quo, effets de second ordre, condition de renversement, valeur d’option / irréversibilité |
| 12 | 8/15 | emploi / carrière / qualification | `dossiers/travailler-moins-vivre-mieux.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 9/15 | immobilier / crédit / indivision | `dossiers/finances-residence-principale.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 12 | 10/15 | entrepreneuriat / activité | `dossiers/combien-chiffre-affaires-pour-vivre.html` | acteur/gatekeeper, substitution, attendre / statu quo, condition de renversement |
| 12 | 11/15 | emploi / carrière / qualification | `dossiers/decider-a-deux-travail-patrimoine.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 11/15 | entrepreneuriat / activité | `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `dossiers/metiers-accessibles-sans-diplome.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 10 | 7/15 | patrimoine / investissement / retraite | `dossiers/prix-attendre-finances.html` | effets de second ordre, transfert de risque, condition de renversement |
| 9 | 8/15 | immobilier / crédit / indivision | `dossiers/acheter-logement-sans-se-fragiliser.html` | fractionnement, effets de second ordre, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/competences-qualification-employabilite.html` | substitution, objectif réel / substitution du moyen, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/plan-30-jours-recherche-emploi.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 9 | 8/15 | patrimoine / investissement / retraite | `dossiers/premier-investissement-comment-commencer.html` | attendre / statu quo, hétérogénéité / cas local, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/preparer-candidature-avant-postuler.html` | acteur/gatekeeper, substitution, condition de renversement |
| 9 | 9/15 | emploi / carrière / qualification | `articles/premiere-chance-sans-experience.html` | acteur/gatekeeper, objectif réel / substitution du moyen, asymétrie de preuve |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/automatiser-ou-non-processus.html` | attendre / statu quo, transfert de risque, hétérogénéité / cas local |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/classes-actifs-allocation-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/immobilier-allocation-globale-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/protocole-verifier-reponse-ia.html` | attendre / statu quo, effets de second ordre, transfert de risque |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | effets de second ordre, transfert de risque, condition de renversement |
| 9 | 10/15 | patrimoine / investissement / retraite | `articles/grosse-entree-argent-que-faire.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 10/15 | immobilier / crédit / indivision | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 10/15 | immobilier / crédit / indivision | `dossiers/indivision-succession-heritiers-vendre-partager.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 10/15 | patrimoine / investissement / retraite | `dossiers/seuils-maturite-patrimoniale.html` | attendre / statu quo, condition de renversement, valeur d’option / irréversibilité |
| 9 | 11/15 | patrimoine / investissement / retraite | `articles/frais-fiscalite-rendement-net.html` | attendre / statu quo, effets de second ordre, transfert de risque |
| 9 | 11/15 | entrepreneuriat / activité | `dossiers/couple-famille-argent-temps.html` | acteur/gatekeeper, substitution, attendre / statu quo |
| 9 | 11/15 | immobilier / crédit / indivision | `dossiers/indivision-immobiliere-sortir-sans-subir.html` | effets de second ordre, valeur d’option / irréversibilité, condition de renversement |
| 9 | 11/15 | patrimoine / investissement / retraite | `dossiers/piloter-patrimoine-selon-taille.html` | attendre / statu quo, transfert de risque, valeur d’option / irréversibilité |
| 9 | 11/15 | immobilier / crédit / indivision | `dossiers/separation-logement-achete-a-deux.html` | acteur/gatekeeper, effets de second ordre, condition de renversement |
| 9 | 11/15 | patrimoine / investissement / retraite | `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` | effets de second ordre, transfert de risque, condition de renversement |
| 9 | 12/15 | immobilier / crédit / indivision | `dossiers/indivision-couple-separation-rachat-soulte.html` | effets de second ordre, valeur d’option / irréversibilité, condition de renversement |
| 7 | 7/15 | emploi / carrière / qualification | `dossiers/debloquer-demarche-administrative.html` | objectif réel / substitution du moyen, condition de renversement |
| 6 | 8/15 | emploi / carrière / qualification | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` | substitution, condition de renversement |
| 6 | 9/15 | immobilier / crédit / indivision | `dossiers/cout-complet-achat-immobilier.html` | acteur/gatekeeper, condition de renversement |
| 6 | 9/15 | patrimoine / investissement / retraite | `dossiers/demenager-pour-un-emploi-salaire-minimum.html` | attendre / statu quo, transfert de risque |
| 6 | 9/15 | immobilier / crédit / indivision | `dossiers/finances-investissement-locatif.html` | acteur/gatekeeper, condition de renversement |
| 6 | 9/15 | emploi / carrière / qualification | `dossiers/reconversion-sans-formation-longue.html` | acteur/gatekeeper, substitution |
| 6 | 10/15 | immobilier / crédit / indivision | `dossiers/comparer-strategies-immobilieres.html` | acteur/gatekeeper, condition de renversement |
| 6 | 10/15 | emploi / carrière / qualification | `dossiers/emploi-chercher-accepter-negocier-evoluer.html` | substitution, objectif réel / substitution du moyen |
| 6 | 10/15 | emploi / carrière / qualification | `dossiers/formation-vaut-elle-le-cout.html` | substitution, objectif réel / substitution du moyen |
| 6 | 10/15 | immobilier / crédit / indivision | `dossiers/garages-parkings-locaux-commerciaux.html` | acteur/gatekeeper, condition de renversement |
| 6 | 10/15 | entrepreneuriat / activité | `dossiers/lancer-activite-sans-quitter-emploi.html` | substitution, condition de renversement |
| 6 | 10/15 | entrepreneuriat / activité | `dossiers/methode-analyse-complete.html` | acteur/gatekeeper, substitution |
| 6 | 10/15 | immobilier / crédit / indivision | `dossiers/patrimoine-marge-de-manoeuvre.html` | acteur/gatekeeper, valeur d’option / irréversibilité |

## Lecture par cluster

### emploi / carrière / qualification

Pages : **39**. Angles le plus souvent non détectés : **transfert de risque** (29), **valeur d’option / irréversibilité** (25), **effets de second ordre** (21), **substitution** (20), **objectif réel / substitution du moyen** (17), **attendre / statu quo** (16), **condition de renversement** (14).

### entrepreneuriat / activité

Pages : **23**. Angles le plus souvent non détectés : **valeur d’option / irréversibilité** (14), **transfert de risque** (13), **objectif réel / substitution du moyen** (11), **condition de renversement** (11), **acteur/gatekeeper** (8), **substitution** (7), **attendre / statu quo** (6).

### immobilier / crédit / indivision

Pages : **27**. Angles le plus souvent non détectés : **objectif réel / substitution du moyen** (19), **acteur/gatekeeper** (16), **substitution** (16), **transfert de risque** (16), **condition de renversement** (13), **attendre / statu quo** (10), **effets de second ordre** (10).

### patrimoine / investissement / retraite

Pages : **41**. Angles le plus souvent non détectés : **substitution** (36), **condition de renversement** (28), **objectif réel / substitution du moyen** (25), **transfert de risque** (23), **acteur/gatekeeper** (22), **attendre / statu quo** (18), **effets de second ordre** (11).

## Règle de reprise éditoriale

1. Lire humainement la page prioritaire et son cluster proche.
2. Ne retenir que les angles qui changent réellement le choix, le coût, le risque, la séquence, les options ou la charge de preuve.
3. Si le manque est réel, réécrire directement et journaliser la causalité ; si le signal est un faux positif, conserver le texte et enregistrer la décision humaine.
4. Les affirmations sensibles sont revérifiées sur des sources primaires à jour avant toute modification factuelle.
5. L’heuristique reste un détecteur : une décision humaine attachée au SHA exact prime jusqu’à modification du contenu.

