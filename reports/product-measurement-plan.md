# Plan de mesure produit — Contre-Évidence

Revue : 2026-08-18

## Objectif

Passer de « nous pensons que l’orientation fonctionne » à « nous savons quelles portes aident réellement les visiteurs à trouver une réponse » sans transformer Contre-Évidence en outil de profilage.

Le besoin n’est pas de collecter davantage de données pour le principe. Il est de répondre à quelques questions produit précises :

1. quelle porte d’entrée de l’accueil est réellement choisie ?
2. les visiteurs qui passent par un parcours atteignent-ils ensuite un dossier ou un outil ?
3. la Bibliothèque retrouve-t-elle ce que les visiteurs cherchent ?
4. quels outils sont réellement ouverts et utilisés ?
5. quelles pages servent de bonnes portes d’entrée mais n’offrent pas de suite claire ?

## Ce que le dispositif actuel permet déjà

Le site charge Cloudflare Web Analytics via `assets/analytics-loader.js`. Cette couche convient pour les vues de pages et les signaux de performance, mais elle ne suffit pas à distinguer proprement les clics sur deux boutons d’une même page, une recherche interne, un filtre ou l’utilisation d’un outil.

La Bibliothèque fonctionne localement dans le navigateur : la recherche, les filtres, le classement et le nombre de résultats sont calculés dans `assets/library.js`. La requête est également reflétée dans l’URL pour conserver l’état de recherche. Cela ne justifie pas de stocker le texte libre de la requête dans une future couche événementielle.

## Questions et événements minimaux

| Question produit | Événement minimal | Propriétés autorisées | À ne pas collecter |
|---|---|---|---|
| Quelle porte de l’accueil est choisie ? | `home_route_click` | `route`: `comprendre`, `choisir`, `construire`, `bibliotheque` | texte libre, identité |
| Un parcours mène-t-il à une réponse ? | `journey_exit` | `journey`, `destination_type`: dossier/outil/hub | URL externe complète, données personnelles |
| La Bibliothèque trouve-t-elle quelque chose ? | `library_search_result` | `domain`, `type`, `result_bucket`: 0 / 1–3 / 4–10 / 11+ | requête brute par défaut |
| Les filtres sont-ils utiles ? | `library_filter_change` | `domain`, `type` | historique individuel |
| Quel outil est réellement ouvert ? | `tool_open` | identifiant stable de l’outil, page source | contenu saisi dans l’outil |
| Un outil arrive-t-il jusqu’au résultat ? | `tool_result_shown` | identifiant stable de l’outil | montants, salaires, patrimoine ou autres données saisies |
| Les suites proposées servent-elles ? | `next_step_click` | page source, type de destination | profil du lecteur |

## Principe de confidentialité

La règle par défaut est : **mesurer le comportement du produit, pas la situation personnelle de la personne**.

Exemples :

- utile : savoir qu’une recherche Bibliothèque a renvoyé zéro résultat ;
- inutilement intrusif : enregistrer la phrase exacte recherchée ;
- utile : savoir qu’un simulateur a affiché un résultat ;
- inutilement intrusif : enregistrer le salaire, l’épargne ou la dette saisis dans ce simulateur ;
- utile : savoir que la porte « je dois faire un choix » a été utilisée ;
- inutile : essayer d’en déduire un profil personnel persistant.

Si les recherches sans résultat deviennent un enjeu éditorial majeur, une seconde phase pourra prévoir une collecte volontaire ou une agrégation plus fine. Elle devra être décidée séparément plutôt qu’activée par défaut.

## Tableau de bord produit à viser

Un rapport hebdomadaire ou mensuel peut rester très court :

| Indicateur | Ce qu’il permet de décider |
|---|---|
| Répartition des 4 sorties du hero | savoir si l’orientation est comprise ou si une porte écrase les autres |
| Taux parcours → dossier/outil | voir si les parcours orientent réellement |
| Recherches Bibliothèque avec 0 résultat | identifier les trous de couverture ou problèmes de vocabulaire |
| Répartition 0 / 1–3 / 4–10 / 11+ résultats | détecter recherche trop pauvre ou trop large |
| Outils ouverts / résultats affichés | distinguer curiosité et usage réel |
| Clics « à lire ensuite » | mesurer la capacité des dossiers à prolonger utilement le parcours |
| Pages d’entrée sans sortie mesurée | repérer les cul-de-sac ou les pages qui répondent suffisamment sans suite — à interpréter, pas à pénaliser automatiquement |

## Seuils de décision, pas vanity metrics

Les chiffres doivent déclencher une question ou une action. Exemples de règles à tester après assez de trafic :

- si une porte du hero reçoit très peu de clics malgré une exposition comparable, revoir son libellé ou sa nécessité ;
- si une part importante des recherches Bibliothèque retourne zéro résultat, enrichir synonymes/routage avant de créer de nouvelles pages ;
- si une recherche renvoie presque toujours plus de dix résultats, améliorer le classement ou les filtres plutôt qu’ajouter du contenu ;
- si un outil est beaucoup ouvert mais rarement mené au résultat, auditer sa friction avant d’en créer un nouveau ;
- si une page d’acquisition attire mais ne mène jamais vers une action pertinente, vérifier d’abord si elle répond entièrement au besoin avant de forcer un CTA.

Aucun seuil numérique universel n’est fixé maintenant : il faut d’abord observer la distribution réelle du trafic et la taille des échantillons.

## Architecture de mise en œuvre

### Phase 1 — maintenant

- conserver Cloudflare Web Analytics pour les pages et la performance ;
- ne pas ajouter de faux événements sous forme d’URLs artificielles ;
- stabiliser les identifiants d’événements et leurs propriétés dans ce document ;
- ne collecter aucune donnée saisie dans les simulateurs.

### Phase 2 — instrumentation événementielle

Ajouter une couche événementielle distincte, first-party ou autre solution explicitement choisie, capable de recevoir les événements minimaux ci-dessus. Le choix doit être évalué sur : confidentialité, absence de profilage publicitaire, hébergement/traitement, rétention, coût, simplicité de maintenance et compatibilité avec les obligations d’information/consentement applicables.

### Phase 3 — décisions éditoriales

Après un volume suffisant :

1. supprimer ou reformuler les portes inutilisées ;
2. corriger les recherches qui échouent ;
3. renforcer les parcours qui convertissent bien vers une réponse ;
4. traiter les outils avec beaucoup d’abandon ;
5. créer du contenu seulement quand les données révèlent un manque réel et qu’aucune URL existante ne peut raisonnablement répondre.

## Définition du succès

Le succès n’est pas « plus de pages vues ». C’est une baisse du nombre de visiteurs qui doivent explorer plusieurs niveaux avant de trouver la bonne réponse, accompagnée d’une hausse de l’utilisation des routes, dossiers et outils qui correspondent réellement à leur intention.
