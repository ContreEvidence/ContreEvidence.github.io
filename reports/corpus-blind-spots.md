# Cartographie des angles morts du corpus

Mise à jour automatique : 2026-08-16

Cet audit complète — il ne remplace pas — la revue structurelle. Il cherche des **familles de raisonnement susceptibles de changer la décision** mais souvent absentes d’un contenu pourtant correct : acteur, substitution, fenêtre temporelle, ordre, fractionnement, combinaison, statu quo, second ordre, transfert de risque, friction, hétérogénéité, renversement, objectif réel, optionnalité et asymétrie de preuve.

Un motif absent n’est **pas** automatiquement un défaut : la file sert à provoquer une lecture humaine. Inversement, la présence d’un mot ne prouve pas que l’angle est bien traité. Les décisions humaines SHA-liées sont enregistrées séparément dans `reports/corpus-blind-spot-human-review-*.json`.

Pages indexables analysées : **124**. Pages `noindex` exclues : **79**.

## Priorité heuristique

| Priorité | Couverture | Cluster | Page | Angles critiques non détectés |
|---:|---:|---|---|---|
| 12 | 8/15 | patrimoine / investissement / retraite | `articles/comparatif-produits-bancaires.html` | attendre / statu quo, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 8/15 | emploi / carrière / qualification | `articles/sans-diplome-chemins-alternatifs.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 8/15 | emploi / carrière / qualification | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` | acteur/gatekeeper, substitution, fenêtre temporelle, objectif réel / substitution du moyen |
| 12 | 8/15 | entrepreneuriat / activité | `dossiers/calculer-prix-minimum-rentable.html` | acteur/gatekeeper, substitution, fractionnement, combinaison de leviers |
| 12 | 8/15 | patrimoine / investissement / retraite | `dossiers/combien-epargne-avant-demissionner.html` | effets de second ordre, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 8/15 | entrepreneuriat / activité | `dossiers/creer-entreprise-sans-diplome.html` | acteur/gatekeeper, effets de second ordre, attendre / statu quo, condition de renversement |
| 12 | 8/15 | entrepreneuriat / activité | `dossiers/decision-plan-30-90-jours.html` | substitution, fractionnement, combinaison de leviers, condition de renversement |
| 12 | 8/15 | immobilier / crédit / indivision | `dossiers/indivision-loyers-charges-comptes.html` | acteur/gatekeeper, effets de second ordre, valeur d’option / irréversibilité, condition de renversement |
| 12 | 8/15 | immobilier / crédit / indivision | `dossiers/location-courte-duree-meuble-tourisme.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 12 | 8/15 | patrimoine / investissement / retraite | `dossiers/rembourser-credit-ou-investir.html` | attendre / statu quo, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 9/15 | emploi / carrière / qualification | `articles/accepter-nimporte-quel-poste-retour-emploi.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 9/15 | patrimoine / investissement / retraite | `articles/construire-epargne-de-zero.html` | attendre / statu quo, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 9/15 | entrepreneuriat / activité | `dossiers/are-arce-acre-creation-entreprise.html` | acteur/gatekeeper, substitution, attendre / statu quo, condition de renversement |
| 12 | 9/15 | patrimoine / investissement / retraite | `dossiers/bien-immobilier-garder-vendre-transformer.html` | attendre / statu quo, transfert de risque, condition de renversement, fenêtre temporelle |
| 12 | 9/15 | patrimoine / investissement / retraite | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | attendre / statu quo, transfert de risque, hétérogénéité / cas local, condition de renversement |
| 12 | 9/15 | patrimoine / investissement / retraite | `dossiers/finances-transmission-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement, valeur d’option / irréversibilité |
| 12 | 9/15 | immobilier / crédit / indivision | `dossiers/indivision-succession-heritiers-vendre-partager.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 12 | 9/15 | entrepreneuriat / activité | `dossiers/trouver-premiers-clients.html` | substitution, effets de second ordre, attendre / statu quo, condition de renversement |
| 12 | 10/15 | entrepreneuriat / activité | `dossiers/creer-entreprise-avec-peu-argent.html` | acteur/gatekeeper, substitution, attendre / statu quo, condition de renversement |
| 12 | 10/15 | emploi / carrière / qualification | `dossiers/puis-je-me-permettre-reconversion.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen, condition de renversement |
| 12 | 11/15 | entrepreneuriat / activité | `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` | acteur/gatekeeper, fractionnement, effets de second ordre, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `articles/entretien-rate-ce-qui-bloque.html` | acteur/gatekeeper, substitution, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `dossiers/formation-vaut-elle-le-cout.html` | acteur/gatekeeper, substitution, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `dossiers/metiers-accessibles-sans-diplome.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 10 | 7/15 | patrimoine / investissement / retraite | `dossiers/prix-attendre-finances.html` | effets de second ordre, transfert de risque, condition de renversement |
| 10 | 7/15 | emploi / carrière / qualification | `dossiers/regles-responsabilites-fautes-travail.html` | acteur/gatekeeper, objectif réel / substitution du moyen, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/accepter-emploi-plus-loin-cout-trajet.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 9 | 8/15 | immobilier / crédit / indivision | `dossiers/assurer-ou-autoassurer-risques.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/competences-qualification-employabilite.html` | substitution, objectif réel / substitution du moyen, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/experience-devient-risque-recruteur.html` | acteur/gatekeeper, substitution, condition de renversement |
| 9 | 8/15 | immobilier / crédit / indivision | `dossiers/finances-investissement-locatif.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 8/15 | patrimoine / investissement / retraite | `dossiers/passer-80-pourcent-cout-reel.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 8/15 | emploi / carrière / qualification | `dossiers/plan-30-jours-recherche-emploi.html` | acteur/gatekeeper, substitution, objectif réel / substitution du moyen |
| 9 | 9/15 | emploi / carrière / qualification | `articles/competences-transferables.html` | substitution, objectif réel / substitution du moyen, asymétrie de preuve |
| 9 | 9/15 | emploi / carrière / qualification | `articles/premiere-chance-sans-experience.html` | acteur/gatekeeper, objectif réel / substitution du moyen, asymétrie de preuve |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/audit-budget-60-minutes.html` | effets de second ordre, transfert de risque, valeur d’option / irréversibilité |
| 9 | 9/15 | immobilier / crédit / indivision | `dossiers/audit-copropriete-avant-achat.html` | acteur/gatekeeper, valeur d’option / irréversibilité, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/automatiser-ou-non-processus.html` | attendre / statu quo, transfert de risque, hétérogénéité / cas local |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/classes-actifs-allocation-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/comparer-strategies-immobilieres.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | entrepreneuriat / activité | `dossiers/dependance-gros-client.html` | acteur/gatekeeper, attendre / statu quo, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/depenses-recurrentes-abonnements-assurances.html` | effets de second ordre, condition de renversement, valeur d’option / irréversibilité |
| 9 | 9/15 | emploi / carrière / qualification | `dossiers/devenir-manager-premiere-fois.html` | acteur/gatekeeper, substitution, condition de renversement |
| 9 | 9/15 | immobilier / crédit / indivision | `dossiers/finances-credit-endettement.html` | acteur/gatekeeper, effets de second ordre, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/immobilier-allocation-globale-patrimoine.html` | attendre / statu quo, transfert de risque, condition de renversement |
| 9 | 9/15 | immobilier / crédit / indivision | `dossiers/location-nue-ou-meublee-comparer.html` | acteur/gatekeeper, fractionnement, effets de second ordre |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/protocole-verifier-reponse-ia.html` | attendre / statu quo, effets de second ordre, transfert de risque |
| 9 | 9/15 | emploi / carrière / qualification | `dossiers/questions-poser-avant-prise-de-poste.html` | acteur/gatekeeper, substitution, condition de renversement |
| 9 | 9/15 | patrimoine / investissement / retraite | `dossiers/temps-energie-qualite-vie.html` | attendre / statu quo, transfert de risque, valeur d’option / irréversibilité |
| 9 | 10/15 | patrimoine / investissement / retraite | `articles/frais-fiscalite-rendement-net.html` | attendre / statu quo, effets de second ordre, transfert de risque |

## Lecture par cluster

### emploi / carrière / qualification

Pages : **35**. Angles le plus souvent non détectés : **transfert de risque** (26), **substitution** (25), **attendre / statu quo** (21), **valeur d’option / irréversibilité** (21), **acteur/gatekeeper** (17), **objectif réel / substitution du moyen** (17), **effets de second ordre** (17).

### entrepreneuriat / activité

Pages : **25**. Angles le plus souvent non détectés : **acteur/gatekeeper** (15), **valeur d’option / irréversibilité** (15), **attendre / statu quo** (14), **substitution** (14), **transfert de risque** (12), **objectif réel / substitution du moyen** (11), **condition de renversement** (10).

### immobilier / crédit / indivision

Pages : **25**. Angles le plus souvent non détectés : **acteur/gatekeeper** (17), **attendre / statu quo** (17), **condition de renversement** (17), **substitution** (17), **objectif réel / substitution du moyen** (14), **transfert de risque** (14), **effets de second ordre** (10).

### patrimoine / investissement / retraite

Pages : **39**. Angles le plus souvent non détectés : **substitution** (32), **objectif réel / substitution du moyen** (28), **transfert de risque** (27), **acteur/gatekeeper** (25), **condition de renversement** (25), **attendre / statu quo** (24), **valeur d’option / irréversibilité** (14).

## Règle de reprise éditoriale

1. Lire humainement la page prioritaire et son cluster proche.
2. Ne retenir que les angles qui changent réellement le choix, le coût, le risque, la séquence, les options ou la charge de preuve.
3. Si le manque est réel, réécrire directement et journaliser la causalité ; si le signal est un faux positif, conserver le texte et enregistrer la décision humaine.
4. Les affirmations sensibles sont revérifiées sur des sources primaires à jour avant toute modification factuelle.
5. L’heuristique reste un détecteur : une décision humaine attachée au SHA exact prime jusqu’à modification du contenu.

