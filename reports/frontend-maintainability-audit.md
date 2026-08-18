# Audit de maintenabilité front-end

Mise à jour automatique : 2026-08-18

Pages HTML analysées : **279**. Pages avec CSS local `<style>` : **49**. Candidats `EXTRACT` (≥ 2 000 caractères de CSS local) : **14**. Candidats `REVIEW` : **26**.

Cet audit mesure la **surface de maintenance**, pas la qualité visuelle. Un style local peut être légitime ; la priorité augmente lorsqu’un gros bloc local recrée des composants déjà présents ailleurs.

## Pages avec le plus de CSS local

| Gate | Page | Blocs `<style>` | Caractères CSS local | Attributs `style=` | CSS partagés référencés |
|---|---|---:|---:|---:|---:|
| EXTRACT | `parcours-de-vie.html` | 1 | 7717 | 1 | 7 |
| EXTRACT | `hors-cadre.html` | 1 | 5195 | 0 | 6 |
| EXTRACT | `themes/argent.html` | 1 | 4909 | 5 | 8 |
| EXTRACT | `hors-cadre-decouvertes.html` | 1 | 4386 | 0 | 6 |
| EXTRACT | `hors-cadre-cuisine.html` | 1 | 3516 | 0 | 6 |
| EXTRACT | `parcours-vie-professionnelle.html` | 1 | 3037 | 0 | 7 |
| EXTRACT | `dossiers/depenses-recurrentes-abonnements-assurances.html` | 1 | 2995 | 0 | 8 |
| EXTRACT | `dossiers/assurer-ou-autoassurer-risques.html` | 1 | 2341 | 0 | 8 |
| EXTRACT | `articles/construire-epargne-de-zero.html` | 1 | 2199 | 0 | 8 |
| EXTRACT | `dossiers/liquidites-reserve-securite.html` | 1 | 2181 | 0 | 8 |
| EXTRACT | `simulateur-decumulation-patrimoine.html` | 1 | 2115 | 2 | 8 |
| EXTRACT | `dossiers/audit-budget-60-minutes.html` | 1 | 2093 | 0 | 8 |
| EXTRACT | `simulateur-sortie-indivision.html` | 1 | 2069 | 1 | 8 |
| EXTRACT | `parcours-pilotage-professionnel.html` | 1 | 2063 | 2 | 7 |
| REVIEW | `dossiers/allocation-patrimoine-selon-situation.html` | 1 | 1967 | 0 | 9 |
| REVIEW | `outils.html` | 1 | 1828 | 0 | 7 |
| REVIEW | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` | 1 | 1703 | 0 | 8 |
| REVIEW | `outil-capital-professionnel.html` | 3 | 1607 | 5 | 7 |
| REVIEW | `dossiers/patrimoine-marge-de-manoeuvre.html` | 1 | 1514 | 0 | 8 |
| REVIEW | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | 1 | 1486 | 0 | 8 |
| REVIEW | `outil-repartir-grosse-somme.html` | 2 | 1485 | 2 | 9 |
| REVIEW | `outil-ingenierie-solutions.html` | 1 | 1474 | 1 | 5 |
| REVIEW | `parcours-temps-argent-liberte.html` | 1 | 1457 | 1 | 7 |
| REVIEW | `simulateur-capacite-emprunt.html` | 1 | 1427 | 3 | 8 |
| REVIEW | `dossiers/premier-investissement-comment-commencer.html` | 1 | 1411 | 0 | 8 |
| REVIEW | `dossiers/education-financiere-consommation.html` | 1 | 1396 | 0 | 8 |
| REVIEW | `contact.html` | 1 | 1381 | 0 | 5 |
| REVIEW | `dossiers/sante-travail-equilibre-vie-pro-perso.html` | 1 | 1367 | 0 | 7 |
| REVIEW | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | 1 | 1353 | 0 | 8 |
| REVIEW | `outil-microscope-pea.html` | 1 | 1313 | 5 | 8 |
| REVIEW | `themes/entreprendre.html` | 1 | 1305 | 1 | 7 |
| REVIEW | `parcours-achat-immobilier.html` | 1 | 1272 | 0 | 7 |
| REVIEW | `outil-plan-30-90-jours.html` | 1 | 1222 | 0 | 6 |
| REVIEW | `fiches-metiers.html` | 1 | 1079 | 0 | 7 |
| REVIEW | `simulateur-capitalisation-comparateur.html` | 1 | 981 | 2 | 9 |
| REVIEW | `simulateur-previsionnel-activite.html` | 1 | 977 | 0 | 5 |
| REVIEW | `outil-comparer-offres-emploi.html` | 1 | 953 | 1 | 8 |
| REVIEW | `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` | 1 | 794 | 0 | 8 |
| REVIEW | `dossiers/separation-logement-achete-a-deux.html` | 1 | 738 | 0 | 9 |
| REVIEW | `simulateur-comparer-strategies-immobilieres.html` | 1 | 700 | 0 | 9 |
| OK | `themes/travail.html` | 1 | 460 | 2 | 7 |
| OK | `parcours-argent.html` | 1 | 390 | 1 | 8 |
| OK | `merci.html` | 1 | 360 | 0 | 5 |
| OK | `plan-du-site.html` | 1 | 332 | 0 | 0 |
| OK | `dossiers/management-relations-conflits.html` | 1 | 325 | 0 | 8 |
| OK | `simulateur-investissement-locatif.html` | 2 | 156 | 1 | 9 |
| OK | `articles/contraintes-innovation.html` | 1 | 26 | 0 | 4 |
| OK | `articles/investir-grosse-somme-dun-coup-ou-progressivement.html` | 1 | 26 | 0 | 9 |
| OK | `dossiers/competent-mais-invisible-travail.html` | 1 | 26 | 0 | 8 |
| OK | `simulateur-salaire-minimum-demenagement.html` | 0 | 0 | 6 | 8 |

## Fichiers CSS partagés les plus lourds

| Fichier | Taille source |
|---|---:|
| `assets/ux-retention.css` | 14 726 caractères |
| `assets/finance.css` | 10 767 caractères |
| `assets/brand.css` | 10 582 caractères |
| `assets/finance-cockpit.css` | 10 013 caractères |
| `assets/style.css` | 9 913 caractères |
| `assets/personal-space.css` | 9 893 caractères |
| `assets/navigation.css` | 8 497 caractères |
| `assets/home.css` | 7 677 caractères |
| `assets/hors-cadre.css` | 6 651 caractères |
| `assets/navigation-tabs.css` | 6 356 caractères |
| `assets/site-evolution.css` | 5 540 caractères |
| `assets/young.css` | 5 523 caractères |
| `assets/finance-architecture.css` | 5 106 caractères |
| `assets/tools.css` | 4 101 caractères |
| `assets/property-cockpit.css` | 3 868 caractères |
| `assets/portfolio-cockpit.css` | 3 835 caractères |
| `assets/video.css` | 3 608 caractères |
| `assets/editorial-standard.css` | 2 440 caractères |
| `assets/pro.css` | 2 263 caractères |
| `assets/hors-cadre-downloads.css` | 1 711 caractères |
| `assets/voice.css` | 1 065 caractères |
| `assets/cockpit-progressive.css` | 915 caractères |
| `assets/editorial-components.css` | 409 caractères |

## Références CSS les plus fréquentes

| Référence telle qu’utilisée dans les pages | Pages |
|---|---:|
| `../assets/style.css` | 218 |
| `../assets/navigation.css` | 206 |
| `../assets/ux-retention.css` | 204 |
| `../assets/personal-space.css` | 201 |
| `../assets/pro.css` | 165 |
| `../assets/brand.css` | 160 |
| `../assets/voice.css` | 145 |
| `../assets/editorial-standard.css` | 118 |
| `../assets/finance.css` | 89 |
| `assets/style.css` | 57 |
| `assets/brand.css` | 56 |
| `assets/ux-retention.css` | 56 |
| `assets/navigation.css` | 56 |
| `assets/personal-space.css` | 54 |
| `assets/pro.css` | 44 |
| `assets/voice.css` | 39 |
| `assets/tools.css` | 26 |
| `assets/finance.css` | 23 |
| `../assets/video.css` | 4 |
| `assets/hors-cadre.css` | 4 |
| `assets/hors-cadre-downloads.css` | 1 |
| `assets/young.css` | 1 |
| `assets/home.css` | 1 |
| `assets/finance-cockpit.css` | 1 |
| `assets/finance-architecture.css` | 1 |

## Blocs locaux exactement dupliqués

**Groupe 1 — 5 pages** : `articles/contraintes-innovation.html`, `articles/investir-grosse-somme-dun-coup-ou-progressivement.html`, `dossiers/competent-mais-invisible-travail.html`, `outil-capital-professionnel.html`, `simulateur-investissement-locatif.html`

## Candidats de composants strictement stables

Sélecteurs présents sur au moins trois pages avec **une seule variante exacte de déclarations**. Ce sont les meilleurs candidats à une extraction sans changement de rendu.

Aucun candidat strictement stable selon ce critère.

## Sélecteurs locaux répétés entre blocs

| Occurrences | Variantes | Sélecteur | Pages |
|---:|---:|---|---|
| 12 | 2 | `.ce-card-grid` | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`, `dossiers/finances-difficiles-sortir-decouvert-dettes.html`, `dossiers/patrimoine-marge-de-manoeuvre.html`, `dossiers/premier-investissement-comment-commencer.html`, `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`, `dossiers/sante-travail-equilibre-vie-pro-perso.html` |
| 7 | 2 | `.ce-card b` | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`, `dossiers/finances-difficiles-sortir-decouvert-dettes.html`, `dossiers/liquidites-reserve-securite.html`, `dossiers/patrimoine-marge-de-manoeuvre.html`, `dossiers/premier-investissement-comment-commencer.html`, `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`, `dossiers/sante-travail-equilibre-vie-pro-perso.html` |
| 7 | 2 | `.ce-card` | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`, `dossiers/finances-difficiles-sortir-decouvert-dettes.html`, `dossiers/liquidites-reserve-securite.html`, `dossiers/patrimoine-marge-de-manoeuvre.html`, `dossiers/premier-investissement-comment-commencer.html`, `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`, `dossiers/sante-travail-equilibre-vie-pro-perso.html` |
| 6 | 2 | `.ce-flow>div` | `articles/construire-epargne-de-zero.html`, `dossiers/patrimoine-marge-de-manoeuvre.html`, `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` |
| 6 | 2 | `.ce-flow i` | `articles/construire-epargne-de-zero.html`, `dossiers/patrimoine-marge-de-manoeuvre.html`, `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` |
| 4 | 3 | `.sim-grid` | `simulateur-capacite-emprunt.html`, `simulateur-previsionnel-activite.html` |
| 4 | 3 | `.ce-decision-flow>div` | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`, `dossiers/liquidites-reserve-securite.html` |
| 4 | 2 | `.ce-decision-flow i` | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html`, `dossiers/liquidites-reserve-securite.html` |
| 3 | 3 | `.scenario-grid` | `simulateur-capitalisation-comparateur.html` |
| 3 | 3 | `.reset-protocol` | `parcours-de-vie.html` |
| 3 | 3 | `.pro-pilot .loop` | `parcours-pilotage-professionnel.html` |
| 3 | 3 | `.photo-credit` | `hors-cadre-decouvertes.html` |
| 3 | 3 | `.person-series` | `hors-cadre-decouvertes.html` |
| 3 | 3 | `.person-head p` | `hors-cadre-decouvertes.html` |
| 3 | 3 | `.person-head h2` | `hors-cadre-decouvertes.html` |
| 3 | 3 | `.pause-window` | `hors-cadre.html` |
| 3 | 2 | `.ce-flow` | `articles/construire-epargne-de-zero.html`, `dossiers/patrimoine-marge-de-manoeuvre.html`, `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` |
| 3 | 3 | `.ce-check` | `dossiers/liquidites-reserve-securite.html`, `dossiers/premier-investissement-comment-commencer.html` |
| 3 | 3 | `.alloc-table` | `outil-repartir-grosse-somme.html` |
| 2 | 2 | `.warn` | `outil-repartir-grosse-somme.html`, `simulateur-previsionnel-activite.html` |
| 2 | 2 | `.tool-hub .tool-grid` | `outils.html` |
| 2 | 2 | `.tool-hub .rescue .btns` | `outils.html` |
| 2 | 2 | `.tool-hub .rescue` | `outils.html` |
| 2 | 2 | `.tool-hub .function-nav` | `outils.html` |
| 2 | 2 | `.terrain-grid` | `parcours-de-vie.html` |
| 2 | 2 | `.strategy-grid` | `simulateur-comparer-strategies-immobilieres.html` |
| 2 | 2 | `.sim-wrap` | `simulateur-capacite-emprunt.html` |
| 2 | 2 | `.se-proof-grid textarea` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.se-proof-grid` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.se-output dl` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.se-output dd` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.se-lenses` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.se-grid` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.se-card textarea` | `outil-ingenierie-solutions.html` |
| 2 | 2 | `.roadmap-rules` | `parcours-de-vie.html` |
| 2 | 2 | `.roadmap-grid` | `parcours-de-vie.html` |
| 2 | 2 | `.result-cards` | `simulateur-previsionnel-activite.html` |
| 2 | 2 | `.reset-grid` | `parcours-de-vie.html` |
| 2 | 2 | `.recipe-top` | `hors-cadre-cuisine.html` |
| 2 | 2 | `.recipe-grid` | `hors-cadre-cuisine.html` |

## Règle de consolidation

1. Extraire d’abord les composants locaux réutilisés ou répliqués, pas les exceptions de mise en page réellement uniques.
2. Ne pas déplacer un bloc uniquement pour faire baisser un compteur : un composant partagé doit avoir un nom et une responsabilité stables.
3. Après chaque extraction, comparer le rendu desktop/mobile avant et après.
4. Éviter les nouvelles couches correctives globales lorsque la règle peut vivre dans le composant concerné.
5. Les attributs `style=` répétés sont des candidats à une classe ; un attribut isolé peut rester local si son intention est réellement unique.
