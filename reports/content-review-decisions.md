# Journal des décisions de revue

Mise à jour : 16 août 2026

## Correction de gouvernance

À compter de cette mise à jour, les réécritures substantielles d’un contenu publié sont soumises au **gate éditorial unitaire** défini dans `AGENTS.md`.

Les mentions antérieures « revue humaine intégrale », « 122/122 validations humaines » et « reprise directe sans validation préalable » désignent désormais des **revues structurelles internes historiques**. Elles ne valent ni validation explicite de l’utilisateur, ni preuve d’absence d’angle mort.

Le chantier de profondeur est donc rouvert sous le standard : structure + angles morts + validation éditoriale explicite.

## Statuts de décision

- `VALIDE` : proposition explicitement approuvée par l’utilisateur ; elle peut être appliquée.
- `APPLIQUEE` : proposition validée, déployée et auditée.
- `REFUSE` : proposition rejetée ; contenu actuel conservé.
- `A_REVOIR` : proposition à retravailler avant toute modification.
- `PASSE` : proposition reportée.
- `LEGACY_PRE_GATE` : modification ou revue antérieure au gate actuel ; ne vaut pas validation utilisateur.

## Décisions explicites sous le gate actuel

_Aucune décision explicite enregistrée pour le moment._

## Travaux historiques — `LEGACY_PRE_GATE`

Les travaux ci-dessous ont été réalisés avant la restauration du gate actuel. Ils doivent être considérés comme des états de contenu à revisiter, pas comme des décisions définitivement approuvées :

- `dossiers/choisir-statut-micro-ei-eurl-sasu.html` — séparation forme juridique / micro / TVA ; trajectoire et seuils de bascule.
- `dossiers/cout-reel-voiture-achat-credit-loa-lld.html` — besoin de mobilité, coût complet, liquidité, sortie et stress tests.
- `dossiers/location-nue-ou-meublee-comparer.html` — usage avant fiscalité, seuil économique, DPE, rotation et réversibilité.
- `dossiers/gestion-pilotee-comparer-performances.html` — allocation / exécution / délégation, benchmark et règle de sortie.
- `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` — poches de capital, prix du temps et expérimentation réversible.
- `dossiers/prejuges-biais-monde-professionnel.html` — signal / gatekeeper / discrimination potentielle et substitution d’acteur.
- `dossiers/automatiser-ou-non-processus.html` — supprimer → simplifier → standardiser → assister → automatiser ; rollback.
- `articles/frais-fiscalite-rendement-net.html` — coût récurrent / coût ponctuel, point mort de migration et options perdues.

Les autres « validations humaines » stockées dans `reports/corpus-solution-human-review*.json` restent utilisables uniquement comme **mémoire de revue structurelle SHA-liée**.

## Règle de travail

Pour toute nouvelle proposition substantielle :

1. identifier le gain réel et l’angle mort ;
2. présenter une seule carte de validation ;
3. attendre `valide`, `refuse`, `à revoir` ou `passe` ;
4. n’appliquer que la proposition validée ;
5. enregistrer ici la décision et l’état de déploiement ;
6. présenter ensuite la proposition suivante.
