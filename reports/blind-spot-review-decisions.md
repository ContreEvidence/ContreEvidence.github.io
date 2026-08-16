# Revue profondeur et angles morts — décisions humaines

Mise à jour : 16 août 2026

## Résultat

La campagne ne cherche pas à ajouter du texte partout. Elle complète la revue Solution Engineer par une grille spécifique de **15 familles d’angles morts** susceptibles de changer une décision : acteur/gatekeeper, substitution, fenêtre temporelle, ordre des opérations, fractionnement, combinaison, attente/statu quo, effets de second ordre, transfert de risque, friction d’exécution, hétérogénéité locale, condition de renversement, objectif réel, valeur d’option/irréversibilité et asymétrie de preuve.

État du snapshot courant :

- **122 contenus indexables** scannés par le détecteur d’angles morts ;
- **79 pages `noindex`** exclues ;
- **55 contenus relus intégralement** sous cette nouvelle grille : l’intégralité de la file heuristique haute + pages voisines nécessaires au diagnostic ;
- **6 réécritures substantielles** ;
- **49 pages relues et volontairement conservées** ;
- **67 pages restantes** croisées avec leur revue humaine structurelle antérieure et le nouveau scan, sans signal suffisamment prioritaire pour déclencher une seconde relecture intégrale immédiate ;
- audit structurel final : **122/122 validations SHA-actives, 0 caduque** après re-scellement des six pages modifiées.

La mémoire exacte des 55 décisions se trouve dans `reports/corpus-blind-spot-human-review-2026-08-16.json`. Toute modification future du contenu change le SHA et rouvre la décision.

## Pourquoi le premier audit était insuffisant

L’audit structurel initial savait repérer neuf dimensions utiles : problème, causalité, options, temps/seuils, quantification, scénario adverse, séquence, sortie/réversibilité et preuve. Mais une page pouvait satisfaire ces neuf dimensions tout en restant trop convenue.

Exemples d’angles qui pouvaient rester invisibles :

- le problème vient d’un mauvais **acteur** plutôt que d’un mauvais produit ;
- une économie de cash déplace le coût vers le **temps** ;
- une assurance réduit la perte finale sans fournir la **liquidité immédiate** ;
- un plan correct dépend d’un tiers qui peut le bloquer ;
- une preuve professionnelle est bonne mais le **filtre local** ne la valorise pas ;
- le déficit budgétaire est trop grand pour être résolu par les petites dépenses ;
- attendre une échéance peut être supérieur à modifier l’offre ou baisser le prix.

Le nouvel audit reste lui-même un détecteur lexical : un motif absent ne constitue jamais une preuve d’insuffisance. La décision humaine prévaut.

---

# Les 6 réécritures retenues

## 1. `articles/clients-interesses-personne-nachete.html`

### Angle mort corrigé

La page diagnostiquait bien problème, offre, confiance, prix et timing, mais pouvait encore faire croire que zéro achat signifie principalement que l’offre ou sa valeur doivent être modifiées.

### Ce qui change

Ajout de l’architecture :

**qui utilise ? → qui paie ? → qui peut décider ? → quel coût de changement ? → quand la décision redevient-elle ouverte ?**

Un utilisateur peut vouloir la solution sans pouvoir déclencher la transaction. En B2B, un contrat en cours, un budget fermé ou un décideur absent peuvent rendre une baisse de prix inutile.

### Test causal

**Si l’on identifie utilisateur, payeur, décideur et coût de changement, certains « zéro achat » deviennent explicables sans modifier l’offre, parce que le verrou se trouve dans l’architecture de la transaction.**

### Condition de renversement

Si le bon décideur est atteint, la fenêtre ouverte, le coût de changement acceptable et que l’achat ne se produit toujours pas, retour au diagnostic problème/offre/prix/confiance.

---

## 2. `dossiers/decision-plan-30-90-jours.html`

### Angle mort corrigé

Le plan supposait encore trop facilement que l’exécution dépend de la personne qui l’a construit.

### Ce qui change

Nouvelle distinction :

**je contrôle / j’influence / je dépends de**.

Une dépendance bancaire, administrative, contractuelle, familiale ou professionnelle doit désormais avoir :

- un délai limite ;
- une voie parallèle ;
- une solution de repli ;
- une séquence qui préserve les options importantes.

L’attente devient elle-même une action seulement si elle précise : **jusqu’à quand, pour quelle information, et que fait-on sinon ?**

### Test causal

**Si une étape dépend d’un tiers ou d’un état temporaire, rendre cette dépendance explicite peut changer l’ordre du plan, parce que préserver une possibilité future peut être plus urgent qu’avancer visiblement vers l’objectif.**

---

## 3. `dossiers/creer-entreprise-avec-peu-argent.html`

### Angle mort corrigé

La page traitait le risque de sous-capitalisation mais pas assez le cas inverse : remplacer chaque dépense par le travail gratuit du fondateur.

### Ce qui change

Une économie de cash est maintenant évaluée avec la ressource qui la remplace :

- temps fondateur ;
- fiabilité ;
- qualité ;
- maintenance ;
- dette technique ;
- capacité commerciale abandonnée.

Un site « gratuit » qui consomme 30 heures, un processus manuel qui coûte 4 heures par mois ou un équipement trop fragile peuvent être de mauvaises économies même si la facture initiale est faible.

### Test causal

**Si l’économie de cash augmente davantage le temps non vendu ou le risque qu’elle ne protège la trésorerie, elle déplace le goulot du capital vers l’exécution et peut ralentir la validation du projet.**

---

## 4. `articles/competences-invisibles-preuves.html`

### Angle mort corrigé

Le mécanisme « compétence invisible → preuve » était fort, mais pouvait provoquer une spirale : refus → produire encore une preuve → suivre encore une formation.

### Ce qui change

Ajout du test :

**même preuve → autre recruteur / autre canal / autre marché adjacent**.

Si la même preuve devient convaincante ailleurs, le problème n’était pas nécessairement la compétence ni sa démonstration : il peut être local au filtre initial.

### Test causal

**Si la même preuve produit une réaction différente avec un autre évaluateur, améliorer encore la preuve ne traite pas forcément le verrou, parce que la méthode d’évaluation varie.**

### Condition de renversement

Si la preuve échoue de manière convergente auprès d’acteurs comparables et que les retours précisent ce qui manque, il faut revenir à la preuve, à la compétence ou au niveau visé.

---

## 5. `dossiers/liquidites-reserve-securite.html`

### Angle mort corrigé

Une ressource de secours pouvait être implicitement traitée comme un substitut au cash sans vérifier sa disponibilité au moment du choc.

### Ce qui change

Chaque ressource de secours est désormais testée sur :

- certitude ;
- délai d’accès ;
- dépendance à un tiers ;
- corrélation avec le choc.

Une assurance peut réduire la perte finale mais laisser plusieurs milliers d’euros à financer avant indemnisation. Une autorisation de crédit peut être réduite au mauvais moment. Une vente immobilière est rarement une liquidité d’urgence.

### Test causal

**Si une ressource n’arrive qu’après un délai, une validation ou une vente, elle peut réduire la perte finale sans remplacer le cash immédiat, parce que le besoin de financement existe avant son encaissement.**

---

## 6. `dossiers/audit-budget-60-minutes.html`

### Angle mort corrigé

Le budget pouvait continuer à pousser vers les économies alors que l’arithmétique avait déjà montré que les petites dépenses ne pouvaient plus résoudre le problème.

### Ce qui change

Nouvelle comparaison :

**déficit mensuel réel vs économies réalistes et soutenables**.

Exemple : déficit de 520 €/mois, économies réalistes de 180 € → même une exécution parfaite laisse −340 €. Le diagnostic bascule alors vers :

- revenu ;
- logement / transport ;
- engagements fixes ;
- dette ;
- organisation du foyer.

### Test causal

**Si le déficit est supérieur aux économies réellement mobilisables, de nouvelles micro-coupes ne peuvent pas rétablir l’équilibre parce que le levier « dépenses ajustables » est mathématiquement trop petit.**

---

# 49 pages relues et conservées

La conservation est une décision éditoriale, pas une absence de travail. Ces pages ont été relues parce que le détecteur leur attribuait un angle manquant ; la lecture a montré que l’angle était déjà présent sémantiquement, non pertinent pour la fonction de la page, ou suffisamment traité par une architecture équivalente.

Principales familles de faux positifs :

## Emploi / carrière

Les pages sur formation, métiers sans diplôme, retour à l’emploi, emploi moins payé, expérience, qualification, trajet et entretien contiennent déjà les éléments importants : changement d’évaluateur, voie passerelle, test avant formation, valeur de carrière, seuil de sortie et alternatives au moyen initial.

## Entrepreneuriat

Les pages sur chiffre d’affaires, prix rentable, capacité, statut, prévisionnel, business plan et premiers clients traitent déjà capacité, BFR, seuils, canaux, alternatives, scénarios et critères d’abandon. Les six réécritures n’ont donc pas été généralisées artificiellement à ce cluster.

## Patrimoine / investissement

Les pages ETF, grosse somme, remboursement/investissement, produits bancaires, assurance et marge de manœuvre traitent déjà liquidité, concentration, réversibilité, coût d’opportunité, alternatives et scénarios défavorables.

## Immobilier / indivision

Les dossiers locatif, transformation d’un bien, indivision, courte durée et succession traitent déjà dette, coûts complets, copropriété, usages alternatifs, comptes entre parties, délais et sorties possibles. Aucun paragraphe générique « optionnalité » n’a été ajouté pour satisfaire le score.

La liste exhaustive et les SHA sont dans `reports/corpus-blind-spot-human-review-2026-08-16.json`.

---

# Vérifications factuelles sensibles réalisées

Pendant cette campagne, les pages à forte dépendance réglementaire n’ont pas été modifiées sur simple intuition. Les règles 2026 ont été revérifiées avant de confirmer leur conservation :

- ARE / ARCE / ACRE : mécanique de l’ARCE, maintien ARE et demande d’ACRE 2026 ;
- indivision : réforme d’avril 2026 et nouvelles possibilités judiciaires prévues par les textes ;
- transmission : abattements et exonération temporaire applicable à certains dons familiaux de sommes d’argent en 2026.

Ces vérifications servent à distinguer une vraie lacune de profondeur d’un texte déjà correctement conditionné juridiquement.

---

# Ce que cette campagne change dans la méthode du site

## 1. Un score élevé n’est plus synonyme de profondeur

Une page peut posséder options, chiffres, stress test et conclusion tout en ratant le vrai acteur, la fenêtre ou le transfert de risque.

## 2. Un score faible n’est plus synonyme de réécriture

Le détecteur a produit de nombreux faux positifs. Les 49 conservations empêchent l’audit de pousser le corpus vers une inflation de paragraphes génériques.

## 3. Le second ordre devient central

Désormais, une solution doit aussi répondre à :

> **Si elle fonctionne, quel nouveau problème crée-t-elle ?**

Exemples : cash économisé → temps perdu ; assurance → délai de trésorerie ; retour à l’emploi → enfermement dans une mauvaise trajectoire ; crédit remboursé → liquidité détruite.

## 4. La substitution devient un réflexe

Avant d’optimiser un moyen, on teste s’il peut être remplacé : autre acteur, autre preuve, autre ressource, autre usage, autre calendrier, autre contrat.

## 5. Toute solution importante doit pouvoir être renversée

La question n’est plus seulement « pourquoi cette voie fonctionne ? » mais :

> **Quelle observation me prouverait que cette voie n’est plus la bonne ?**

---

# Maintenance

Sources de vérité après cette campagne :

1. `.github/workflows/corpus-blind-spots.yml` — détecteur heuristique des 15 familles ;
2. `reports/corpus-blind-spots.md` — carte brute des signaux ;
3. `reports/corpus-blind-spot-human-review-2026-08-16.json` — 55 décisions humaines attachées aux SHA exacts ;
4. `reports/corpus-solution-review.md` — contrôle structurel du corpus ;
5. ce document — journal interprétable des décisions de profondeur.

Règle permanente :

- page inchangée → décision humaine conservée ;
- page modifiée → SHA différent → réouverture de la revue ;
- nouveau contenu → scan structurel + scan angles morts ;
- score automatique seul → jamais une justification suffisante pour réécrire.

## Limite explicitement conservée

Cette campagne ne prétend pas que les **122 pages ont été relues une deuxième fois intégralement** sous la nouvelle grille. Les 122 ont été scannées ; les 55 pages prioritaires ont fait l’objet d’une lecture humaine complète ; les 67 autres ont été croisées avec leur revue humaine structurelle précédente et n’ont pas été escaladées.

C’est volontaire : une relecture exhaustive identique de pages déjà fortes aurait consommé du travail sans information nouvelle. Une page de cette moitié basse sera automatiquement priorisée si son contenu change, si une règle externe évolue ou si un nouveau signal d’angle mort apparaît.
