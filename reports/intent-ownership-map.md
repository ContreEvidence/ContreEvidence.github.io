# Carte de propriété des intentions SEO

Revue humaine : 2026-08-18

Cette carte complète l’audit automatique `reports/intent-overlap-audit.md`. Un score de proximité lexicale ne signifie pas qu’il faut fusionner deux pages. L’objectif est de savoir **quelle URL doit être la réponse principale pour quelle intention**, et quelle autre URL joue un rôle de hub, de parcours ou de spécialisation.

## Intentions revues

| Intention principale | URL propriétaire | URL proche | Relation | Décision |
|---|---|---|---|---|
| Acheter un logement sans se fragiliser : robustesse globale, apport, crédit, revenu, mobilité | `dossiers/acheter-logement-sans-se-fragiliser.html` | `dossiers/acheter-sans-vider-epargne.html` | maître → satellite | Conserver les deux. Le premier répond à la décision d’achat globale ; le second possède l’intention « combien d’épargne garder / quel apport ». Routage croisé explicite. |
| Combien d’épargne garder après un achat / arbitrer apport et réserve | `dossiers/acheter-sans-vider-epargne.html` | `dossiers/acheter-logement-sans-se-fragiliser.html` | satellite spécialisé | Ne pas élargir davantage la promesse. La structure juridique de l’achat à deux est routée vers les dossiers dédiés. |
| Parcours avant achat : dans quel ordre tester capacité, coût, réserve, mobilité et décision | `parcours-achat-immobilier.html` | `dossiers/acheter-logement-sans-se-fragiliser.html` | parcours → dossier décisionnel | Collision corrigée le 18/08 : title/H1 du parcours recentrés sur la séquence en cinq étapes. |
| Vie professionnelle au sens large : se situer puis choisir où agir | `parcours-vie-professionnelle.html` | `themes/travail.html` | hub domaine → sous-hub | Conserver le hub domaine comme porte d’entrée générale. `themes/travail.html` est limité à Emploi & carrière et aux problèmes concrets du moment. |
| Recherche d’emploi, offres, contrat, salaire, management et évolution | `themes/travail.html` | `parcours-vie-professionnelle.html` | sous-hub spécialisé | Collision réduite le 18/08 : retrait de « trajectoire » de la promesse SEO principale. Le diagnostic de trajectoire est routé vers son dossier spécialisé. |
| Comparer deux offres d’emploi | `dossiers/comparer-deux-offres-emploi.html` | `themes/travail.html` | dossier spécialisé depuis un hub | Conserver les deux. Le dossier possède la requête comparative ; le hub ne fait qu’aiguiller vers cette décision parmi d’autres. |
| Quelle stratégie professionnelle selon ma situation / mes 12–24 prochains mois | `dossiers/trajectoire-professionnelle-selon-situation.html` | `parcours-vie-professionnelle.html` | dossier diagnostic depuis un hub | Conserver les deux. Le hub possède « vie professionnelle » ; le dossier possède le diagnostic de trajectoire par situation. |
| Sortir d’une indivision immobilière | `dossiers/indivision-immobiliere-sortir-sans-subir.html` | `dossiers/indivision-succession-heritiers-vendre-partager.html` | général → cas successoral | Conserver les deux. Le dossier successoral reste propriétaire des requêtes où l’indivision provient d’un héritage. |
| Sortir d’une indivision successorale entre héritiers | `dossiers/indivision-succession-heritiers-vendre-partager.html` | `dossiers/indivision-immobiliere-sortir-sans-subir.html` | spécialisation juridique | Ne pas fusionner avec l’indivision générique : cause, acteurs et questions de partage sont suffisamment spécifiques. |

## Règles pour les prochaines publications

1. Avant de créer une page, chercher si une URL possède déjà l’intention principale.
2. Une nouvelle page n’est justifiée que si elle répond à une **décision, un public, un cadre juridique ou un niveau de détail réellement distinct**.
3. Un hub peut partager le vocabulaire de ses satellites, mais il ne doit pas reprendre leur promesse exacte dans son title/H1/meta.
4. Une page satellite doit router vers le dossier maître quand le lecteur a besoin de revenir à la décision globale.
5. Une proximité lexicale élevée n’est pas une raison suffisante pour fusionner ; une promesse identique l’est beaucoup plus.

## État après revue

Les chevauchements actuellement au-dessus du seuil automatique restant sont considérés comme **relations intentionnelles et documentées**, sauf évolution future des titles, H1 ou metas. Le prochain signal utile n’est donc plus le nombre brut de paires proches, mais l’apparition d’une nouvelle paire non prévue ou d’une requête pour laquelle deux URL revendiquent explicitement la même réponse principale.
