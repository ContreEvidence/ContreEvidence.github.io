# Décisions de revue — 16 août 2026 — lot autonome 4

Ce lot commence par un contrôle de cohérence avec les décisions produit antérieures. Le principe ajouté est : **profondeur oui, complexité visible non**. Un audit automatique ne justifie pas une réécriture lorsque la page traite déjà réellement l’angle sous une autre formulation.

Référence : `reports/editorial-coherence-guardrails-2026-08-16.md`.

## `dossiers/combien-epargne-avant-demissionner.html` — `PRESERVE`

- **Signal automatique :** effets de second ordre, transfert de risque, renversement et optionnalité supposés manquants.
- **Lecture humaine :** faux positif matériel. La page distingue déjà épargne totale et épargne mobilisable, protège une réserve minimale, traite la qualité de la liquidité, le scénario adverse, l’incertitude du marché, l’attente productive, le seuil de départ et le seuil de révision.
- **Décision :** ne pas rallonger. Le gain marginal serait surtout lexical et augmenterait la complexité visible.
- **Routage existant :** simulateur runway, quitter/rester, reconversion et crédit immobilier prennent en charge les cas voisins.

## `dossiers/creer-entreprise-sans-diplome.html` — `PRESERVE` + `VERIFY`

- **Signal automatique :** effets de second ordre, attente/statu quo et condition de renversement supposés insuffisants.
- **Lecture humaine :** page déjà structurée autour des vrais verrous : droit d’exercer, qualification, personne qui exerce ou contrôle, expérience, assurance, demande, périmètre, organisation des rôles, séquençage et abandon de la fenêtre lorsqu’elle ne tient plus.
- **Vérification juridique :** Code de l’artisanat L.121-1 et R.121-3 revérifiés le 16/08/2026 sur Légifrance : contrôle effectif et permanent par une personne qualifiée et voie des trois années effectives d’expérience restent en vigueur.
- **Décision :** préserver ; une section supplémentaire sur l’attente ou le renversement dupliquerait les sections 5, 11 et 12.

## `dossiers/decision-plan-30-90-jours.html` — `PRESERVE`

- **Signal automatique :** substitution, fractionnement, combinaison de leviers et condition de renversement.
- **Lecture humaine :** faux positif partiel. La page sépare déjà décision/trajectoire/action, privilégie le test avant engagement lourd, distingue contrôle/influence/dépendance, prévoit plan B, attente conditionnelle, preuve à 30 jours, résultat testable à 90 jours, indicateur/contre-indicateur et critère explicite de révision.
- **Décision :** préserver. Les ajouts demandés par l’heuristique n’amélioreraient pas le choix du lecteur ; ils alourdiraient un dossier qui doit rester un outil d’exécution simple.

## Règle issue de ce lot

À partir de maintenant, lorsqu’une page prioritaire est déjà décisionnellement complète :

1. enregistrer `PRESERVE` ;
2. ne pas ajouter de synonymes pour satisfaire l’heuristique ;
3. privilégier le routage vers une page spécialisée si un cas voisin mérite plus de détail ;
4. réserver `REWRITE` aux manques qui changent effectivement choix, coût, risque, séquence ou preuve.
