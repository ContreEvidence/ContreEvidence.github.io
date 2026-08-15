# Revue corpus — Solution Engineer

Mise à jour automatique : 2026-08-15

Cet audit couvre tous les HTML de `dossiers/` et `articles/`. Il sert de **détecteur de profondeur de résolution**, pas de juge éditorial. Une page peut être excellente avec un score imparfait ; une page peut aussi contenir les mots attendus sans véritable raisonnement.

Dimensions détectées : problème/contrainte, causalité, options, temps/seuils, quantification, scénario adverse, séquence, sortie/réversibilité, preuve.

Pages analysées : **201**.

## Priorité humaine

| Score | Mots | Page | Dimensions manquantes |
|---:|---:|---|---|
| 0/9 | 19 | `dossiers/vendre-ou-conserver-bien-immobilier.html` | probleme, causalite, options, temps_seuil, quantification, adverse, sequence, sortie, preuve |
| 1/9 | 43 | `dossiers/finances-immobilier-patrimoine.html` | probleme, causalite, options, temps_seuil, quantification, adverse, sequence, sortie |
| 1/9 | 45 | `articles/incitations-gouvernent.html` | probleme, causalite, options, quantification, adverse, sequence, sortie, preuve |
| 1/9 | 45 | `articles/taux-de-base.html` | probleme, causalite, options, quantification, adverse, sequence, sortie, preuve |
| 1/9 | 48 | `dossiers/finances-immobilier-indirect.html` | probleme, causalite, options, quantification, adverse, sequence, sortie, preuve |
| 1/9 | 49 | `articles/information-comprehension.html` | probleme, causalite, options, quantification, adverse, sequence, sortie, preuve |
| 1/9 | 51 | `articles/mesure-devient-cible.html` | probleme, causalite, options, quantification, adverse, sequence, sortie, preuve |
| 1/9 | 56 | `dossiers/analyse-fondamentale.html` | probleme, causalite, options, quantification, adverse, sequence, sortie, preuve |
| 2/9 | 46 | `articles/majorite-peut-se-tromper.html` | probleme, causalite, options, quantification, adverse, sequence, sortie |
| 2/9 | 48 | `articles/effets-second-ordre.html` | probleme, causalite, options, quantification, adverse, sortie, preuve |
| 2/9 | 49 | `articles/couts-irrecuperables.html` | probleme, causalite, options, adverse, sequence, sortie, preuve |
| 2/9 | 50 | `articles/effet-de-levier.html` | causalite, options, quantification, adverse, sequence, sortie, preuve |
| 2/9 | 52 | `articles/contraintes-innovation.html` | causalite, options, quantification, adverse, sequence, sortie, preuve |
| 2/9 | 52 | `articles/rendements-decroissants.html` | probleme, causalite, options, adverse, sequence, sortie, preuve |
| 2/9 | 53 | `articles/marge-de-securite.html` | probleme, causalite, options, quantification, sequence, sortie, preuve |
| 2/9 | 57 | `dossiers/allocation-risque-portefeuille.html` | probleme, causalite, options, quantification, sequence, sortie, preuve |
| 2/9 | 59 | `dossiers/valorisation-entreprise.html` | probleme, causalite, quantification, adverse, sequence, sortie, preuve |
| 2/9 | 61 | `dossiers/analyse-technique-marche.html` | probleme, causalite, quantification, adverse, sequence, sortie, preuve |
| 2/9 | 82 | `articles/transition-temporaire-sans-abandonner-projet.html` | probleme, causalite, options, quantification, adverse, sortie, preuve |
| 2/9 | 94 | `articles/expliquer-parcours-accidente.html` | probleme, causalite, options, quantification, adverse, sequence, sortie |
| 3/9 | 44 | `articles/asymetrie.html` | probleme, causalite, options, sequence, sortie, preuve |
| 3/9 | 47 | `articles/cout-opportunite.html` | probleme, causalite, adverse, sequence, sortie, preuve |
| 3/9 | 48 | `articles/valeur-des-options.html` | probleme, causalite, quantification, adverse, sequence, preuve |
| 3/9 | 49 | `articles/biais-confirmation.html` | probleme, causalite, options, adverse, sequence, sortie |
| 3/9 | 53 | `articles/boucles-retroaction.html` | options, quantification, adverse, sequence, sortie, preuve |
| 3/9 | 62 | `dossiers/analyse-macro-regimes.html` | probleme, causalite, options, quantification, sequence, sortie |
| 3/9 | 68 | `articles/portes-fermees.html` | probleme, causalite, quantification, adverse, sequence, sortie |
| 3/9 | 80 | `articles/surqualification-rassurer-employeur.html` | probleme, causalite, options, quantification, sortie, preuve |
| 3/9 | 81 | `articles/reconversion-apres-50-ans.html` | causalite, options, quantification, sequence, sortie, preuve |
| 3/9 | 83 | `articles/lancer-activite-probleme-client.html` | causalite, options, quantification, adverse, sequence, sortie |
| 3/9 | 84 | `dossiers/finances-classes-actifs.html` | probleme, causalite, options, quantification, sequence, sortie |
| 3/9 | 86 | `articles/regle-absurde-logique-cachee.html` | probleme, causalite, options, quantification, adverse, sortie |
| 3/9 | 93 | `articles/automatiser-tache-5-minutes-perdre-30.html` | probleme, causalite, options, adverse, sequence, sortie |
| 4/9 | 51 | `articles/probleme-symptome-cause.html` | options, quantification, adverse, sortie, preuve |
| 4/9 | 52 | `articles/dependance-au-sentier.html` | probleme, causalite, adverse, sortie, preuve |
| 4/9 | 53 | `articles/modeles-mentaux.html` | probleme, causalite, quantification, sequence, sortie |
| 4/9 | 54 | `articles/decisions-reversibles-irreversibles.html` | probleme, causalite, adverse, sequence, preuve |
| 4/9 | 83 | `articles/indicateur-monte-service-se-degrade.html` | causalite, options, quantification, adverse, sequence |
| 4/9 | 184 | `articles/50000-euros-livret-peur-investir.html` | causalite, options, quantification, sortie, preuve |
| 4/9 | 330 | `articles/premiers-contrats-abonnements-credit.html` | probleme, causalite, options, adverse, sequence |
| 4/9 | 457 | `articles/travailler-plus-avancer-moins.html` | causalite, options, quantification, adverse, sortie |
| 5/9 | 91 | `articles/accepter-nimporte-quel-premier-emploi.html` | causalite, options, adverse, preuve |
| 5/9 | 366 | `articles/bonne-entreprise-mauvais-investissement.html` | probleme, causalite, sequence, preuve |
| 5/9 | 416 | `articles/optimisation-locale.html` | causalite, options, adverse, sortie |
| 5/9 | 429 | `articles/strategie-barbell.html` | probleme, causalite, temps_seuil, sortie |
| 5/9 | 439 | `articles/applications-captent-attention.html` | options, temps_seuil, quantification, adverse |
| 5/9 | 448 | `articles/simplifier-sans-trahir.html` | probleme, options, quantification, sortie |
| 5/9 | 469 | `articles/effets-de-reseau.html` | probleme, causalite, options, quantification |
| 6/9 | 55 | `articles/risque-incertitude.html` | probleme, causalite, preuve |
| 6/9 | 317 | `articles/premier-logement-autonomie.html` | causalite, options, sortie |
| 6/9 | 353 | `articles/ia-remplace-t-elle-le-codage.html` | causalite, options, adverse |
| 6/9 | 357 | `articles/reseaux-sociaux-comparaison-pression.html` | quantification, adverse, sequence |
| 6/9 | 446 | `articles/justificatif-impossible-procedure-bloquee.html` | causalite, adverse, sortie |
| 6/9 | 447 | `articles/demarche-bloquee.html` | causalite, temps_seuil, sortie |
| 6/9 | 471 | `articles/changer-metier-sans-zero.html` | causalite, temps_seuil, quantification |
| 6/9 | 488 | `articles/penser-en-probabilites.html` | probleme, causalite, quantification |
| 6/9 | 615 | `articles/gagner-plus-epargner-moins.html` | causalite, adverse, preuve |
| 6/9 | 650 | `articles/sante-oblige-changer-metier.html` | causalite, options, quantification |
| 6/9 | 1019 | `dossiers/trouver-premiers-clients.html` | causalite, options, adverse |
| 6/9 | 1108 | `articles/competences-invisibles-preuves.html` | causalite, options, sortie |
| 6/9 | 1115 | `articles/entretien-rate-ce-qui-bloque.html` | causalite, options, sortie |
| 6/9 | 1246 | `dossiers/combien-chiffre-affaires-pour-vivre.html` | probleme, causalite, sortie |
| 6/9 | 1353 | `dossiers/etre-riche-revenu-patrimoine-liberte.html` | probleme, causalite, options |
| 6/9 | 1485 | `dossiers/experience-devient-risque-recruteur.html` | causalite, options, sortie |
| 6/9 | 1489 | `dossiers/finances-residence-principale.html` | probleme, causalite, sequence |
| 6/9 | 1596 | `dossiers/puis-je-me-permettre-reconversion.html` | probleme, causalite, sequence |
| 6/9 | 1629 | `dossiers/finances-transmission-patrimoine.html` | causalite, options, sortie |
| 7/9 | 146 | `articles/reconversion-ne-commence-pas-formation.html` | causalite, adverse |
| 7/9 | 399 | `articles/choisir-orientation-sans-se-fermer.html` | causalite, adverse |
| 7/9 | 431 | `articles/reconnaitre-bonne-affaire.html` | options, adverse |
| 7/9 | 436 | `articles/ia-gagner-temps-jugement.html` | causalite, adverse |
| 7/9 | 444 | `articles/biais-du-survivant.html` | quantification, adverse |
| 7/9 | 447 | `articles/promotion-bonne-affaire.html` | adverse, sortie |
| 7/9 | 479 | `articles/dire-oui-coute-cher.html` | causalite, options |
| 7/9 | 491 | `articles/bonnes-questions.html` | adverse, sortie |
| 7/9 | 491 | `articles/comprendre-avant-agir.html` | causalite, options |
| 7/9 | 548 | `articles/hesiter-trois-semaines-deux-options.html` | adverse, preuve |
| 7/9 | 592 | `dossiers/finances-situations-de-vie.html` | probleme, sortie |
| 7/9 | 688 | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | causalite, options |
| 8/9 | 392 | `dossiers/education-financiere-consommation.html` | options |
| 8/9 | 441 | `articles/effet-de-cadrage.html` | probleme |
| 8/9 | 542 | `articles/ia-reponse-convaincante-fausse.html` | causalite |
| 8/9 | 597 | `articles/continuer-parce-quon-a-deja-trop-investi.html` | preuve |
| 8/9 | 693 | `dossiers/quand-vie-change-sante-separation-revenu.html` | causalite |
| 9/9 | 430 | `articles/decision-difficile-options-imparfaites.html` | — |

## Corpus complet

| Score | Mots | Page |
|---:|---:|---|
| 0/9 | 19 | `dossiers/vendre-ou-conserver-bien-immobilier.html` |
| 1/9 | 43 | `dossiers/finances-immobilier-patrimoine.html` |
| 1/9 | 45 | `articles/incitations-gouvernent.html` |
| 1/9 | 45 | `articles/taux-de-base.html` |
| 1/9 | 48 | `dossiers/finances-immobilier-indirect.html` |
| 1/9 | 49 | `articles/information-comprehension.html` |
| 1/9 | 51 | `articles/mesure-devient-cible.html` |
| 1/9 | 56 | `dossiers/analyse-fondamentale.html` |
| 2/9 | 46 | `articles/majorite-peut-se-tromper.html` |
| 2/9 | 48 | `articles/effets-second-ordre.html` |
| 2/9 | 49 | `articles/couts-irrecuperables.html` |
| 2/9 | 50 | `articles/effet-de-levier.html` |
| 2/9 | 52 | `articles/contraintes-innovation.html` |
| 2/9 | 52 | `articles/rendements-decroissants.html` |
| 2/9 | 53 | `articles/marge-de-securite.html` |
| 2/9 | 57 | `dossiers/allocation-risque-portefeuille.html` |
| 2/9 | 59 | `dossiers/valorisation-entreprise.html` |
| 2/9 | 61 | `dossiers/analyse-technique-marche.html` |
| 2/9 | 82 | `articles/transition-temporaire-sans-abandonner-projet.html` |
| 2/9 | 94 | `articles/expliquer-parcours-accidente.html` |
| 3/9 | 44 | `articles/asymetrie.html` |
| 3/9 | 47 | `articles/cout-opportunite.html` |
| 3/9 | 48 | `articles/valeur-des-options.html` |
| 3/9 | 49 | `articles/biais-confirmation.html` |
| 3/9 | 53 | `articles/boucles-retroaction.html` |
| 3/9 | 62 | `dossiers/analyse-macro-regimes.html` |
| 3/9 | 68 | `articles/portes-fermees.html` |
| 3/9 | 80 | `articles/surqualification-rassurer-employeur.html` |
| 3/9 | 81 | `articles/reconversion-apres-50-ans.html` |
| 3/9 | 83 | `articles/lancer-activite-probleme-client.html` |
| 3/9 | 84 | `dossiers/finances-classes-actifs.html` |
| 3/9 | 86 | `articles/regle-absurde-logique-cachee.html` |
| 3/9 | 93 | `articles/automatiser-tache-5-minutes-perdre-30.html` |
| 4/9 | 51 | `articles/probleme-symptome-cause.html` |
| 4/9 | 52 | `articles/dependance-au-sentier.html` |
| 4/9 | 53 | `articles/modeles-mentaux.html` |
| 4/9 | 54 | `articles/decisions-reversibles-irreversibles.html` |
| 4/9 | 83 | `articles/indicateur-monte-service-se-degrade.html` |
| 4/9 | 184 | `articles/50000-euros-livret-peur-investir.html` |
| 4/9 | 330 | `articles/premiers-contrats-abonnements-credit.html` |
| 4/9 | 457 | `articles/travailler-plus-avancer-moins.html` |
| 5/9 | 91 | `articles/accepter-nimporte-quel-premier-emploi.html` |
| 5/9 | 366 | `articles/bonne-entreprise-mauvais-investissement.html` |
| 5/9 | 416 | `articles/optimisation-locale.html` |
| 5/9 | 429 | `articles/strategie-barbell.html` |
| 5/9 | 439 | `articles/applications-captent-attention.html` |
| 5/9 | 448 | `articles/simplifier-sans-trahir.html` |
| 5/9 | 469 | `articles/effets-de-reseau.html` |
| 6/9 | 55 | `articles/risque-incertitude.html` |
| 6/9 | 317 | `articles/premier-logement-autonomie.html` |
| 6/9 | 353 | `articles/ia-remplace-t-elle-le-codage.html` |
| 6/9 | 357 | `articles/reseaux-sociaux-comparaison-pression.html` |
| 6/9 | 446 | `articles/justificatif-impossible-procedure-bloquee.html` |
| 6/9 | 447 | `articles/demarche-bloquee.html` |
| 6/9 | 471 | `articles/changer-metier-sans-zero.html` |
| 6/9 | 488 | `articles/penser-en-probabilites.html` |
| 6/9 | 615 | `articles/gagner-plus-epargner-moins.html` |
| 6/9 | 650 | `articles/sante-oblige-changer-metier.html` |
| 6/9 | 1019 | `dossiers/trouver-premiers-clients.html` |
| 6/9 | 1108 | `articles/competences-invisibles-preuves.html` |
| 6/9 | 1115 | `articles/entretien-rate-ce-qui-bloque.html` |
| 6/9 | 1246 | `dossiers/combien-chiffre-affaires-pour-vivre.html` |
| 6/9 | 1353 | `dossiers/etre-riche-revenu-patrimoine-liberte.html` |
| 6/9 | 1485 | `dossiers/experience-devient-risque-recruteur.html` |
| 6/9 | 1489 | `dossiers/finances-residence-principale.html` |
| 6/9 | 1596 | `dossiers/puis-je-me-permettre-reconversion.html` |
| 6/9 | 1629 | `dossiers/finances-transmission-patrimoine.html` |
| 7/9 | 146 | `articles/reconversion-ne-commence-pas-formation.html` |
| 7/9 | 399 | `articles/choisir-orientation-sans-se-fermer.html` |
| 7/9 | 431 | `articles/reconnaitre-bonne-affaire.html` |
| 7/9 | 436 | `articles/ia-gagner-temps-jugement.html` |
| 7/9 | 444 | `articles/biais-du-survivant.html` |
| 7/9 | 447 | `articles/promotion-bonne-affaire.html` |
| 7/9 | 479 | `articles/dire-oui-coute-cher.html` |
| 7/9 | 491 | `articles/bonnes-questions.html` |
| 7/9 | 491 | `articles/comprendre-avant-agir.html` |
| 7/9 | 548 | `articles/hesiter-trois-semaines-deux-options.html` |
| 7/9 | 592 | `dossiers/finances-situations-de-vie.html` |
| 7/9 | 688 | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` |
| 7/9 | 861 | `dossiers/decision-plan-30-90-jours.html` |
| 7/9 | 1010 | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` |
| 7/9 | 1064 | `articles/checklist-avant-placement-conseiller.html` |
| 7/9 | 1157 | `articles/50-candidatures-zero-reponse.html` |
| 7/9 | 1244 | `dossiers/rembourser-credit-ou-investir.html` |
| 7/9 | 1247 | `articles/choisir-etf-mondial-debutant.html` |
| 7/9 | 1248 | `dossiers/apprendre-developper-competences.html` |
| 7/9 | 1268 | `dossiers/contrat-travail-clauses-verifier-avant-signer.html` |
| 7/9 | 1270 | `dossiers/patrimoine-permet-il-travailler-moins.html` |
| 7/9 | 1285 | `dossiers/competences-qualification-employabilite.html` |
| 7/9 | 1301 | `dossiers/finances-cadre-global.html` |
| 7/9 | 1303 | `dossiers/garages-parkings-locaux-commerciaux.html` |
| 7/9 | 1344 | `dossiers/finances-credit-endettement.html` |
| 7/9 | 1390 | `dossiers/assurer-ou-autoassurer-risques.html` |
| 7/9 | 1390 | `dossiers/patrimoine-marge-de-manoeuvre.html` |
| 7/9 | 1393 | `articles/exemples-allocation-250000-500000-1000000.html` |
| 7/9 | 1407 | `dossiers/acheter-sans-vider-epargne.html` |
| 7/9 | 1408 | `dossiers/questions-poser-avant-prise-de-poste.html` |
| 7/9 | 1410 | `dossiers/accepter-emploi-plus-loin-cout-trajet.html` |
| 7/9 | 1455 | `articles/investir-grosse-somme-dun-coup-ou-progressivement.html` |
| 7/9 | 1462 | `dossiers/cout-complet-achat-immobilier.html` |
| 7/9 | 1463 | `dossiers/classes-actifs-allocation-patrimoine.html` |
| 7/9 | 1486 | `dossiers/location-nue-ou-meublee-comparer.html` |
| 7/9 | 1487 | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` |
| 7/9 | 1546 | `dossiers/debloquer-demarche-administrative.html` |
| 7/9 | 1578 | `dossiers/patrimoine-selon-age-construire-utiliser.html` |
| 7/9 | 2401 | `dossiers/demenager-pour-un-emploi-salaire-minimum.html` |
| 8/9 | 392 | `dossiers/education-financiere-consommation.html` |
| 8/9 | 441 | `articles/effet-de-cadrage.html` |
| 8/9 | 542 | `articles/ia-reponse-convaincante-fausse.html` |
| 8/9 | 597 | `articles/continuer-parce-quon-a-deja-trop-investi.html` |
| 8/9 | 693 | `dossiers/quand-vie-change-sante-separation-revenu.html` |
| 8/9 | 854 | `articles/repartir-sans-recommencer-zero.html` |
| 8/9 | 1008 | `dossiers/immobilier-allocation-globale-patrimoine.html` |
| 8/9 | 1074 | `dossiers/etude-marche-terrain.html` |
| 8/9 | 1077 | `dossiers/reconversion-sans-perte-salaire.html` |
| 8/9 | 1090 | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` |
| 8/9 | 1116 | `dossiers/business-plan-utile.html` |
| 8/9 | 1164 | `dossiers/automatiser-ou-non-processus.html` |
| 8/9 | 1170 | `articles/sans-diplome-chemins-alternatifs.html` |
| 8/9 | 1185 | `dossiers/acheter-logement-sans-se-fragiliser.html` |
| 8/9 | 1189 | `dossiers/creer-entreprise-avec-peu-argent.html` |
| 8/9 | 1194 | `dossiers/comparer-strategies-immobilieres.html` |
| 8/9 | 1201 | `dossiers/are-arce-acre-creation-entreprise.html` |
| 8/9 | 1208 | `dossiers/metiers-fonctions-organisation-entreprise.html` |
| 8/9 | 1227 | `dossiers/protocole-verifier-reponse-ia.html` |
| 8/9 | 1229 | `dossiers/previsionnel-activite-12-mois.html` |
| 8/9 | 1229 | `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` |
| 8/9 | 1237 | `dossiers/prejuges-biais-monde-professionnel.html` |
| 8/9 | 1280 | `articles/frais-fiscalite-rendement-net.html` |
| 8/9 | 1281 | `dossiers/sante-travail-equilibre-vie-pro-perso.html` |
| 8/9 | 1286 | `dossiers/reconversion-sans-formation-longue.html` |
| 8/9 | 1317 | `dossiers/emploi-chercher-accepter-negocier-evoluer.html` |
| 8/9 | 1324 | `articles/comparatif-enveloppes-pea-assurance-vie-cto-per.html` |
| 8/9 | 1337 | `dossiers/competent-mais-invisible-travail.html` |
| 8/9 | 1345 | `dossiers/capacite-refuser-travail-rentabilite.html` |
| 8/9 | 1351 | `dossiers/tresorerie-bfr-entreprise.html` |
| 8/9 | 1352 | `articles/construire-epargne-de-zero.html` |
| 8/9 | 1360 | `articles/grosse-entree-argent-que-faire.html` |
| 8/9 | 1360 | `dossiers/quitter-travail-reconversion-sans-se-fragiliser.html` |
| 8/9 | 1364 | `articles/premiere-chance-sans-experience.html` |
| 8/9 | 1369 | `dossiers/management-relations-conflits.html` |
| 8/9 | 1390 | `dossiers/prix-attendre-finances.html` |
| 8/9 | 1405 | `dossiers/choisir-statut-micro-ei-eurl-sasu.html` |
| 8/9 | 1410 | `dossiers/combien-epargne-avant-demissionner.html` |
| 8/9 | 1411 | `dossiers/piloter-patrimoine-selon-taille.html` |
| 8/9 | 1414 | `dossiers/dependance-gros-client.html` |
| 8/9 | 1421 | `articles/tester-metier-avant-investir.html` |
| 8/9 | 1425 | `dossiers/lancer-activite-sans-quitter-emploi.html` |
| 8/9 | 1435 | `dossiers/audit-copropriete-avant-achat.html` |
| 8/9 | 1435 | `dossiers/negocier-salaire-responsabilites.html` |
| 8/9 | 1490 | `dossiers/temps-energie-qualite-vie.html` |
| 8/9 | 1549 | `dossiers/favoriser-un-enfant-succession-donation.html` |
| 8/9 | 1554 | `dossiers/indivision-loyers-charges-comptes.html` |
| 8/9 | 1599 | `dossiers/comparer-deux-offres-emploi.html` |
| 8/9 | 1652 | `dossiers/audit-budget-60-minutes.html` |
| 8/9 | 1754 | `dossiers/location-courte-duree-meuble-tourisme.html` |
| 8/9 | 1788 | `dossiers/finances-allocation-portefeuille.html` |
| 8/9 | 1799 | `dossiers/decider-sans-tourner-en-rond.html` |
| 8/9 | 2123 | `dossiers/plan-30-jours-recherche-emploi.html` |
| 8/9 | 2197 | `dossiers/allocation-patrimoine-selon-situation.html` |
| 8/9 | 2320 | `dossiers/methode-analyse-complete.html` |
| 8/9 | 2533 | `dossiers/metiers-accessibles-sans-diplome.html` |
| 8/9 | 2722 | `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` |
| 9/9 | 430 | `articles/decision-difficile-options-imparfaites.html` |
| 9/9 | 1038 | `articles/clients-interesses-personne-nachete.html` |
| 9/9 | 1188 | `articles/competences-transferables.html` |
| 9/9 | 1193 | `dossiers/passer-80-pourcent-cout-reel.html` |
| 9/9 | 1215 | `dossiers/depenses-recurrentes-abonnements-assurances.html` |
| 9/9 | 1277 | `articles/retrouver-emploi-apres-interruption.html` |
| 9/9 | 1280 | `articles/comparatif-supports-epargne-investissement.html` |
| 9/9 | 1297 | `dossiers/finances-retraite-decumulation.html` |
| 9/9 | 1314 | `dossiers/regles-responsabilites-fautes-travail.html` |
| 9/9 | 1315 | `dossiers/liquidites-reserve-securite.html` |
| 9/9 | 1323 | `dossiers/cout-reel-voiture-achat-credit-loa-lld.html` |
| 9/9 | 1324 | `dossiers/gestion-pilotee-comparer-performances.html` |
| 9/9 | 1392 | `dossiers/finances-investissement-locatif.html` |
| 9/9 | 1405 | `dossiers/devenir-manager-premiere-fois.html` |
| 9/9 | 1417 | `articles/construire-allocation-debutant.html` |
| 9/9 | 1419 | `dossiers/decider-a-deux-travail-patrimoine.html` |
| 9/9 | 1439 | `dossiers/valeur-option-bien-immobilier.html` |
| 9/9 | 1469 | `dossiers/embaucher-ou-sous-traiter.html` |
| 9/9 | 1474 | `articles/accepter-nimporte-quel-poste-retour-emploi.html` |
| 9/9 | 1494 | `dossiers/quitter-emploi-stable-ou-rester.html` |
| 9/9 | 1557 | `articles/comparatif-produits-bancaires.html` |
| 9/9 | 1610 | `dossiers/travailler-moins-vivre-mieux.html` |
| 9/9 | 1704 | `dossiers/indivision-succession-heritiers-vendre-partager.html` |
| 9/9 | 1707 | `dossiers/ameliorer-processus-sans-degrader-service.html` |
| 9/9 | 1760 | `articles/travailler-beaucoup-gagner-peu-prix.html` |
| 9/9 | 1777 | `dossiers/calculer-prix-minimum-rentable.html` |
| 9/9 | 1894 | `dossiers/finances-enveloppes-fiscalite.html` |
| 9/9 | 1923 | `dossiers/couple-famille-argent-temps.html` |
| 9/9 | 1995 | `dossiers/formation-vaut-elle-le-cout.html` |
| 9/9 | 2013 | `dossiers/creer-entreprise-sans-diplome.html` |
| 9/9 | 2015 | `dossiers/quitter-cdi-avec-credit-immobilier.html` |
| 9/9 | 2018 | `dossiers/bien-immobilier-garder-vendre-transformer.html` |
| 9/9 | 2071 | `dossiers/trajectoire-professionnelle-selon-situation.html` |
| 9/9 | 2215 | `dossiers/indivision-immobiliere-sortir-sans-subir.html` |
| 9/9 | 2472 | `dossiers/changer-travail-avant-credit-immobilier.html` |
| 9/9 | 2694 | `dossiers/licence-universite-sans-bac-daeu-vap-vae.html` |
| 9/9 | 3065 | `dossiers/indivision-rachat-progressif-parts.html` |
| 9/9 | 3821 | `dossiers/indivision-couple-separation-rachat-soulte.html` |

## Règle de reprise

Une page signalée n’est réécrite que si une lecture humaine identifie un gain réel : faux verrou, levier causal manquant, seuil, séquence, combinaison, scénario adverse, preuve ou condition de sortie. Aucun bloc générique ne doit être ajouté uniquement pour augmenter le score.

