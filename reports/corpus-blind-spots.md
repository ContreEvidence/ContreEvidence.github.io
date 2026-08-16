# Cartographie des angles morts du corpus

Mise à jour automatique : 2026-08-16

Cet audit complète — il ne remplace pas — la revue structurelle. Il cherche des **familles de raisonnement susceptibles de changer la décision** mais souvent absentes d’un contenu pourtant correct : acteur, substitution, fenêtre temporelle, ordre, fractionnement, combinaison, statu quo, second ordre, transfert de risque, friction, hétérogénéité, renversement, objectif réel, optionnalité et asymétrie de preuve.

Un motif absent n’est **pas** automatiquement un défaut : la file sert à provoquer une lecture humaine. Inversement, la présence d’un mot ne prouve pas que l’angle est bien traité. Les décisions humaines SHA-liées sont enregistrées séparément dans `reports/corpus-blind-spot-human-review-*.json`.

Pages indexables analysées : **125**. Pages `noindex` exclues : **79**.

## Priorité heuristique

| Priorité | Couverture | Cluster | Page | Angles critiques non détectés |
|---:|---:|---|---|---|
| 15 | 10/15 | entrepreneuriat / activité | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` | substitution, fractionnement, effets de second ordre, attendre / statu quo, condition de renversement |
| 13 | 7/15 | emploi / carrière / qualification | `articles/competences-transferables.html` | substitution, objectif réel / substitution du moyen, asymétrie de preuve, condition de renversement |
| 12 | 8/15 | patrimoine / investissement / retraite | `dossiers/combien-epargne-avant-demissionner.html` | effets de second ordre, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 8/15 | entrepreneuriat / activité | `dossiers/creer-entreprise-sans-diplome.html` | acteur/gatekeeper, effets de second ordre, attendre / statu quo, condition de renversement |
| 12 | 8/15 | entrepreneuriat / activité | `dossiers/decision-plan-30-90-jours.html` | substitution, fractionnement, combinaison de leviers, condition de renversement |
| 12 | 8/15 | immobilier / crédit / indivision | `dossiers/indivision-loyers-charges-comptes.html` | acteur/gatekeeper, effets de second ordre, valeur d’option / irréversibilité, condition de renversement |
| 12 | 8/15 | immobilier / crédit / indivision | `dossiers/location-courte-duree-meuble-tourisme.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 12 | 8/15 | patrimoine / investissement / retraite | `dossiers/rembourser-credit-ou-investir.html` | attendre / statu quo, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 9/15 | emploi / carrière / qualification | `articles/accepter-nimporte-quel-poste-retour-emploi.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 9/15 | patrimoine / investissement / retraite | `articles/construire-epargne-de-zero.html` | attendre / statu quo, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 9/15 | patrimoine / investissement / retraite | `dossiers/bien-immobilier-garder-vendre-transformer.html` | attendre / statu quo, transfert de risque, condition de renversement, fenêtre temporelle |
| 12 | 9/15 | entrepreneuriat / activité | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | acteur/gatekeeper, substitution, effets de second ordre, condition de renversement |
| 12 | 9/15 | immobilier / crédit / indivision | `dossiers/finances-residence-principale.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 12 | 9/15 | immobilier / crédit / indivision | `dossiers/indivision-succession-heritiers-vendre-partager.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 12 | 9/15 | entrepreneuriat / activité | `dossiers/trouver-premiers-clients.html` | substitution, effets de second ordre, attendre / statu quo, condition de renversement |
| 12 | 10/15 | emploi / carrière / qualification | `dossiers/puis-je-me-permettre-reconversion.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 11/15 | emploi / carrière / qualification | `dossiers/decider-a-deux-travail-patrimoine.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 11/15 | entrepreneuriat / activité | `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `articles/entretien-rate-ce-qui-bloque.html` | acteur/gatekeeper, substitution, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `dossiers/metiers-accessibles-sans-diplome.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 10 | 7/15 | patrimoine / investissement / retraite | `dossiers/prix-attendre-finances.html` | effets de second ordre, transfert de risque, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `dossiers/regles-responsabilites-fautes-travail.html` | acteur/gatekeeper, objectif réel / substitution du moyen, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/accepter-emploi-plus-loin-cout-trajet.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 9 | 8/15 | immobilier / crédit / indivision | `dossiers/acheter-logement-sans-se-fragiliser.html` | fractionnement, effets de second ordre, condition de renversement |
| 9 | 8/15 | immobilier / crédit / indivision | `dossiers/assurer-ou-autoassurer-risques.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/competences-qualification-employabilite.html` | substitution, objectif réel / substitution du moyen, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/experience-devient-risque-recruteur.html` | acteur/gatekeeper, substitution, condition de renversement |
| 9 | 8/15 | patrimoine / investissement / retraite | `dossiers/passer-80-pourcent-cout-reel.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/plan-30-jours-recherche-emploi.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 9 | 9/15 | emploi / carrière / qualification | `articles/premiere-chance-sans-experience.html` | acteur/gatekeeper, objectif réel / substitution du moyen, asymétrie de preuve |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/audit-budget-60-minutes.html` | effets de second ordre, transfert de risque, valeur d’option / irréversibilité |
| 9 | 9/15 | immobilier / crédit / indivision | `dossiers/audit-copropriete-avant-achat.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/automatiser-ou-non-processus.html` | attendre / statu quo, transfert de risque, hétérogénéité / cas local |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/classes-actifs-allocation-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/comparer-strategies-immobilieres.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | entrepreneuriat / activité | `dossiers/dependance-gros-client.html` | acteur/gatekeeper, attendre / statu quo, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/depenses-recurrentes-abonnements-assurances.html` | effets de second ordre, condition de renversement, valeur d’option / irréversibilité |
| 9 | 9/15 | immobilier / crédit / indivision | `dossiers/finances-credit-endettement.html` | acteur/gatekeeper, effets de second ordre, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/immobilier-allocation-globale-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | immobilier / crédit / indivision | `dossiers/location-nue-ou-meublee-comparer.html` | acteur/gatekeeper, fractionnement, effets de second ordre |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/protocole-verifier-reponse-ia.html` | attendre / statu quo, effets de second ordre, transfert de risque |
| 9 | 9/15 | emploi / carrière / qualification | `dossiers/questions-poser-avant-prise-de-poste.html` | acteur/gatekeeper, substitution, condition de renversement |
| 9 | 10/15 | patrimoine / investissement / retraite | `articles/frais-fiscalite-rendement-net.html` | attendre / statu quo, effets de second ordre, transfert de risque |
| 9 | 10/15 | patrimoine / investissement / retraite | `articles/grosse-entree-argent-que-faire.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 10/15 | entrepreneuriat / activité | `articles/travailler-beaucoup-gagner-peu-prix.html` | acteur/gatekeeper, combinaison de leviers, attendre / statu quo |
| 9 | 10/15 | entrepreneuriat / activité | `dossiers/allocation-patrimoine-selon-situation.html` | acteur/gatekeeper, substitution, attendre / statu quo |
| 9 | 10/15 | entrepreneuriat / activité | `dossiers/are-arce-acre-creation-entreprise.html` | substitution, effets de second ordre, attendre / statu quo |
| 9 | 10/15 | entrepreneuriat / activité | `dossiers/etude-marche-terrain.html` | substitution, fractionnement, attendre / statu quo |
| 9 | 10/15 | patrimoine / investissement / retraite | `dossiers/finances-allocation-portefeuille.html` | attendre / statu quo, condition de renversement, valeur d’option / irréversibilité |
| 9 | 10/15 | patrimoine / investissement / retraite | `dossiers/finances-enveloppes-fiscalite.html` | attendre / statu quo, transfert de risque, condition de renversement |

## Lecture par cluster

### emploi / carrière / qualification

Pages : **36**. Angles le plus souvent non détectés : **transfert de risque** (24), **substitution** (22), **valeur d’option / irréversibilité** (21), **attendre / statu quo** (18), **effets de second ordre** (17), **objectif réel / substitution du moyen** (16), **condition de renversement** (16).

### entrepreneuriat / activité

Pages : **27**. Angles le plus souvent non détectés : **attendre / statu quo** (15), **valeur d’option / irréversibilité** (15), **substitution** (14), **transfert de risque** (14), **acteur/gatekeeper** (13), **condition de renversement** (11), **objectif réel / substitution du moyen** (10).

### immobilier / crédit / indivision

Pages : **23**. Angles le plus souvent non détectés : **acteur/gatekeeper** (17), **attendre / statu quo** (15), **condition de renversement** (15), **substitution** (15), **objectif réel / substitution du moyen** (14), **transfert de risque** (14), **effets de second ordre** (11).

### patrimoine / investissement / retraite

Pages : **39**. Angles le plus souvent non détectés : **substitution** (31), **condition de renversement** (27), **objectif réel / substitution du moyen** (26), **transfert de risque** (26), **attendre / statu quo** (21), **acteur/gatekeeper** (20), **valeur d’option / irréversibilité** (11).

## Règle de reprise éditoriale

1. Lire humainement la page prioritaire et son cluster proche.
2. Ne retenir que les angles qui changent réellement le choix, le coût, le risque, la séquence, les options ou la charge de preuve.
3. Si le manque est réel, réécrire directement et journaliser la causalité ; si le signal est un faux positif, conserver le texte et enregistrer la décision humaine.
4. Les affirmations sensibles sont revérifiées sur des sources primaires à jour avant toute modification factuelle.
5. L’heuristique reste un détecteur : une décision humaine attachée au SHA exact prime jusqu’à modification du contenu.

