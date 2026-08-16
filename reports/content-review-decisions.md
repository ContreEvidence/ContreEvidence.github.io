# Journal des décisions de revue

Mise à jour : 16 août 2026

## Gouvernance actuelle

Le mode de travail courant est **autonome** : l’utilisateur a explicitement demandé que les améliorations substantielles justifiées soient appliquées sans validation page par page, avec un compte rendu consolidé à la fin de la passe.

Les audits automatiques restent des détecteurs. Ils ne suffisent jamais, à eux seuls, à déclencher un ajout éditorial : chaque signal doit être interprété humainement et l’on ne modifie une page que si le changement améliore réellement le choix, le coût, le risque, la séquence, la preuve ou la couverture des situations.

## Statuts de décision

- `REWRITE` : angle mort ou variante d’audience matérielle trouvée et corrigée.
- `ROUTE` : cas voisin reconnu et envoyé vers une ressource plus adaptée.
- `PRESERVE` : alerte vérifiée, page volontairement conservée.
- `VERIFY` : affirmation sensible revérifiée sur source primaire avant modification.
- `DEFER` : hypothèse intéressante mais insuffisamment justifiée pour modifier le produit.

## Campagne profondeur / angles morts — 16 août 2026

La revue de profondeur a ajouté une seconde couche au contrôle structurel historique : acteur/gatekeeper, substitution, séquence, fractionnement, statu quo, second ordre, transfert de risque, friction d’exécution, objectif réel, optionnalité et condition de renversement.

Les décisions SHA-liées sont enregistrées dans `reports/corpus-blind-spot-human-review-2026-08-16.json` et les rapports associés.

## Campagne couverture des situations — 16 août 2026

Une nouvelle dimension est ouverte après constat qu’une page peut être profonde sur son cas central tout en étant trop étroite pour l’audience attirée par sa promesse.

Règle : pour une promesse large, chaque variante matérielle doit être `TRAITEE`, `ROUTEE`, `HORS_PERIMETRE_EXPLICITE` ou identifiée `MANQUANTE`.

Références :

- `AUDIT-COUVERTURE-SITUATIONS.md`
- `.github/workflows/audience-variant-coverage.yml`
- `reports/audience-variant-coverage.md`

### Première correction structurante

- `dossiers/sci-immobiliere-acheter-gerer-transmettre-sortir.html` — création d’un dossier SCI de référence couvrant propriété, parts, statuts, financement, responsabilité, IR/IS, location meublée, séparation, cession, retrait, décès, transmission et sortie. Motif : les promesses larges autour de « acheter à deux / se séparer / immobilier à plusieurs » attirent notamment des personnes en SCI qui ne doivent pas être envoyées mécaniquement vers les règles de l’indivision directe.

## Travaux historiques

Les anciens fichiers `reports/corpus-solution-human-review*.json` restent utilisables comme mémoire structurelle SHA-liée. Ils ne prouvent ni l’absence d’angle mort ni la couverture de toutes les variantes d’audience.

## Règle de travail

Pour toute nouvelle campagne éditoriale :

1. identifier le gain réel ;
2. relire le cas central ;
3. tester les angles morts à l’intérieur du cas ;
4. tester les variantes raisonnablement attirées par la promesse ;
5. appliquer directement uniquement les corrections matériellement utiles ;
6. privilégier le routage lorsque développer le cas voisin diluerait la page centrale ;
7. vérifier les affirmations sensibles sur sources primaires à jour ;
8. journaliser les réécritures, routages et conservations ;
9. faire un compte rendu consolidé à l’utilisateur.
