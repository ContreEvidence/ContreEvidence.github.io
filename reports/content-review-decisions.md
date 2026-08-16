# Journal des réécritures — ingénierie de solutions

Mise à jour : 16 août 2026

Le corpus Contre-Évidence est repris directement selon la méthode d’ingénierie de solutions, sans validation préalable page par page.

Le principe reste symétrique : **ne pas fermer une voie sans preuve ; ne pas valider une solution sans preuve.**

## 2026-08-16 — Revue humaine intégrale du corpus indexable terminée

État vérifié par `reports/corpus-solution-review.md` :

- **122 contenus indexables analysés** ;
- **122/122 validations humaines actives** ;
- **79 pages techniques `noindex` exclues** ;
- **0 validation caduque** ;
- **aucune priorité critique non relue**.

### Ce que signifie « revue intégrale »

Chaque contenu indexable courant a été relu humainement sous l’angle Solution Engineer. Une page n’a été réécrite que lorsqu’un gain réel a été identifié : faux verrou, causalité incomplète, séquence manquante, seuil, substitution, scénario adverse, valeur d’option, condition de sortie ou preuve insuffisante.

Les autres pages ont été **volontairement conservées** lorsqu’une réécriture n’aurait fait qu’ajouter du texte ou satisfaire artificiellement une heuristique.

### Mémoire de revue

Les validations humaines sont stockées par lots append-only dans `reports/corpus-solution-human-review*.json` et liées au **SHA exact du contenu**.

Toute modification future d’une page :

1. change son SHA ;
2. rend automatiquement sa validation précédente caduque ;
3. remet uniquement cette page dans la file de revue.

Le workflow expose désormais, en cas d’écart, le **SHA relu** et le **SHA courant**.

### Incident de métadonnées corrigé

Lors de la fermeture du niveau 9/9, vingt validations ont d’abord paru caduques. Le diagnostic a montré que certains appels `fetch_file` avaient fourni une métadonnée SHA mise en cache, alors que le contenu Git n’avait pas changé après la revue. Les entrées concernées ont été re-scélées avec le SHA canonique calculé par Git (`git hash-object`).

Le contrôle final confirme : **122 actives / 0 caduque**.

---

## Réécritures substantielles du 16 août 2026

### `dossiers/choisir-statut-micro-ei-eurl-sasu.html`

- **Problème corrigé :** comparatif de statuts trop statique alors que TVA, régime micro, forme juridique et gouvernance peuvent basculer à des moments différents.
- **Motifs activés :** décomposition, fenêtre temporelle, seuil stratégique, séquençage, préservation d’option.
- **Causalité :** séparer les dimensions permet de ne modifier que celle qui doit réellement changer.
- **Impact :** trajectoire de structure avec déclencheurs mesurables ; suppression du faux seuil universel de frais.

### `dossiers/cout-reel-voiture-achat-credit-loa-lld.html`

- **Problème corrigé :** optimisation du financement avant remise en cause du besoin de mobilité.
- **Motifs activés :** réduction du besoin, coût total, liquidité, sortie, stress test.
- **Causalité :** réduire le besoin ou choisir un véhicule moins coûteux agit simultanément sur capital, décote et souvent assurance/financement.
- **Impact :** architecture de mobilité au lieu d’un comparatif de mensualités.

### `dossiers/location-nue-ou-meublee-comparer.html`

- **Problème corrigé :** arbitrage trop proche d’un duel fiscal.
- **Motifs activés :** usage avant fiscalité, seuil économique, fenêtre temporelle, réversibilité.
- **Causalité :** le supplément de loyer meublé doit couvrir mobilier, rotation, vacance et temps de gestion pour créer de la valeur.
- **Impact :** seuil de surloyer, DPE, rotation, durée, réversibilité et alternatives contractuelles conditionnelles.

### `dossiers/gestion-pilotee-comparer-performances.html`

- **Problème corrigé :** comparaison de performances de fournisseurs sans isoler la valeur réelle de la délégation.
- **Motifs activés :** allocation/exécution/délégation, benchmark, coût de l’option, règle de sortie.
- **Causalité :** la gestion pilotée ne crée une valeur comportementale que si elle évite effectivement des erreurs que l’investisseur commettrait seul.
- **Impact :** prime de délégation, benchmark comparable et règle de sortie.

### `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html`

- **Problème corrigé :** bonne philosophie mais seuil de passage accumulation → usage encore trop qualitatif.
- **Motifs activés :** fonctions du capital, seuil de bascule, expérimentation réversible, coût du temps, stress test.
- **Impact :** trois poches `socle / long terme / option-usage`, prix du temps racheté et test après utilisation.

### `dossiers/prejuges-biais-monde-professionnel.html`

- **Problème corrigé :** risque de traiter toute friction comme un problème de signal ou de « personal branding ».
- **Motifs activés :** décomposition du blocage, substitution d’acteur, test causal, changement de domaine de solution.
- **Causalité :** une preuve peut réduire une incertitude professionnelle ; elle ne peut pas rendre légitime un traitement discriminatoire.
- **Impact :** trois diagnostics — `signal mal interprété / gatekeeper local / traitement potentiellement discriminatoire` —, test « même preuve, autre acteur » et seuil pour cesser d’essayer de convaincre le même système.
- **Sources sensibles :** Service-Public et Défenseur des droits revérifiés le 16/08/2026.

### `dossiers/automatiser-ou-non-processus.html`

- **Problème corrigé :** le processus existant était trop vite accepté comme une donnée fixe à automatiser.
- **Motifs activés :** réduction du besoin, suppression, simplification, standardisation, assistance partielle, rollback.
- **Causalité :** supprimer une étape agit directement sur son coût ; automatiser n’est rationnel qu’après réduction du besoin et stabilisation du processus.
- **Impact :** séquence `supprimer → simplifier → standardiser → assister → automatiser`, procédure manuelle de secours et kill switch.

### `articles/frais-fiscalite-rendement-net.html`

- **Problème corrigé :** effet des frais bien expliqué mais absence de seuil indiquant quand un changement de contrat crée réellement de la valeur ; décomposition Nalo devenue obsolète.
- **Motifs activés :** coût d’opportunité, seuil de bascule, préservation d’option, coût récurrent versus coût ponctuel.
- **Causalité :** une migration n’est rationnelle que si l’économie future dépasse les coûts du changement et la valeur des fonctions perdues.
- **Impact :** `économie annuelle ≈ capital × écart de frais`, `point mort de migration ≈ coût ponctuel / économie annuelle`, exemple chiffré et matrice des options perdues.
- **Mise à jour factuelle :** tarifs Yomoni, Nalo et Ramify revérifiés le 16/08/2026.

---

## Pages conservées après revue

Toutes les autres pages indexables ont été conservées lorsqu’elles satisfaisaient déjà leur fonction : elles nomment ou décomposent correctement le problème, relient les leviers au verrou, traitent les seuils et scénarios pertinents, préservent les options nécessaires et utilisent le niveau de preuve adapté.

**Décision éditoriale permanente :** ne jamais ajouter un bloc générique ou rallonger une page uniquement pour augmenter un score automatique.
