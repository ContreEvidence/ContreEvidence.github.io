# CONTRE-ÉVIDENCE — MOTIFS RÉCURRENTS D’INGÉNIERIE DE SOLUTIONS

Ce document n’est pas une liste d’astuces. Il sert à reconnaître des **formes de problèmes** qui reviennent dans des domaines différents.

Chaque motif comporte trois tests :

1. **Ce qu’il conteste** — la contrainte supposée.
2. **Ce qu’il faut vérifier** — la mécanique qui pourrait ouvrir la voie.
3. **Ce qui le réfute** — le fait qui oblige à abandonner le motif.

Le but est de raisonner plus vite sans raisonner plus superficiellement.

---

## MOTIF 1 — LA FENÊTRE TEMPORELLE

### Ce qu’il conteste
« Ma situation est ce qu’elle est. »

### Principe
Une condition utile peut exister aujourd’hui et disparaître après une décision ; inversement une condition bloquante peut disparaître plus tard.

### Questions
- Qu’est-ce qui est vrai aujourd’hui mais ne le sera plus dans 1, 6 ou 12 mois ?
- Quelle décision doit être sécurisée avant ce changement ?
- Quelle décision doit au contraire attendre qu’une nouvelle condition soit remplie ?

### Exemples abstraits
- financement à tester avant changement de statut professionnel ;
- droit ou dispositif à sécuriser avant rupture d’un contrat ;
- remboursement de dette qui améliore une capacité future ;
- ancienneté ou date fiscale qui fait basculer un régime.

### Réfutation
Le motif tombe si le calendrier n’a aucun effet réel sur le droit, la décision du tiers ou l’économie du projet.

---

## MOTIF 2 — INVERSER L’ORDRE DES OPÉRATIONS

### Ce qu’il conteste
« On fait forcément A, puis B. »

### Principe
Le même projet peut être fragile dans un ordre et robuste dans un autre.

### Questions
- Quelle étape détruit une option ?
- Peut-on sécuriser la ressource avant de renoncer à celle qui la rend possible ?
- Peut-on tester avant d’investir ?
- Peut-on obtenir la preuve avant de demander la décision finale ?

### Réfutation
L’ordre alternatif est inutile si les étapes sont juridiquement ou matériellement indissociables.

---

## MOTIF 3 — FRACTIONNER CE QUI PARAÎT INDIVISIBLE

### Ce qu’il conteste
« Il faut tout acheter, tout apprendre, tout financer ou tout changer d’un coup. »

### Principe
Chercher si l’objectif peut être atteint par tranches, blocs, phases ou droits successifs.

### Applications
- acquisition progressive ;
- formation par blocs manquants ;
- déploiement commercial par petite série ;
- investissement en plusieurs étapes ;
- réduction partielle du temps de travail ;
- sortie progressive d’une relation économique.

### Vérifications
- chaque tranche produit-elle un vrai droit ou une vraie avancée ?
- les coûts fixes répétés annulent-ils l’intérêt ?
- une première tranche franchit-elle un seuil stratégique ?

### Réfutation
Le fractionnement est mauvais si les coûts de répétition, la fiscalité, le risque ou la dépendance prolongée dépassent le bénéfice de la progressivité.

---

## MOTIF 4 — DÉCOMPOSER LES OBJETS QUE LE LANGAGE MÉLANGE

### Ce qu’il conteste
« Propriétaire = payeur = occupant = débiteur = bénéficiaire. »

### Principe
Dans de nombreux systèmes, plusieurs dimensions évoluent séparément.

### Décompositions fréquentes
- propriété / dette / créance / usage / revenus ;
- salaire / revenu disponible / temps / risque ;
- diplôme / compétence / droit d’exercer / preuve ;
- chiffre d’affaires / marge / trésorerie / capacité physique ;
- prix / coût / valeur d’usage / coût de sortie.

### Réfutation
Aucune : la décomposition est un outil d’analyse. Elle devient fautive seulement si elle suggère que les dimensions sont juridiquement indépendantes alors qu’un texte les lie.

---

## MOTIF 5 — GARDER UNE PISTE PARALLÈLE PENDANT LE TEST

### Ce qu’il conteste
« Pour essayer B, je dois abandonner A. »

### Principe
Préserver le revenu, le contrat, la clientèle, l’usage ou une autre ressource pendant qu’on teste la nouvelle voie.

### Applications
- tester une activité avant de quitter l’emploi ;
- chercher un autre poste en restant en poste ;
- conserver un usage rentable pendant une transformation ;
- prototyper avant d’investir lourdement.

### Réfutation
La piste parallèle tombe si elle est contractuellement interdite, matériellement incompatible ou si son coût rend le test sans valeur.

---

## MOTIF 6 — SUBSTITUER UNE RESSOURCE MANQUANTE

### Ce qu’il conteste
« Il me manque X, donc le projet s’arrête. »

### Ressources parfois substituables
- diplôme → expérience reconnue / preuve / qualification d’un autre acteur lorsque le droit le permet ;
- apport → garantie / temps / baisse du besoin / autre financement ;
- argent → temps / compétence / partenariat ;
- temps → délégation / argent / simplification ;
- confiance d’un tiers → preuve / résultat / référence / engagement progressif.

### Question
Quelle fonction X devait-il remplir ? Une autre ressource peut-elle remplir cette fonction ?

### Réfutation
La substitution est impossible lorsqu’un texte exige précisément X ou lorsque la ressource alternative ne produit pas la même fonction.

---

## MOTIF 7 — CHANGER D’ACTEUR SANS CONFONDRE POLITIQUE ET RÈGLE

### Ce qu’il conteste
« On m’a dit non, donc c’est non. »

### Principe
Un acteur privé peut avoir une politique plus restrictive que le droit ou qu’un concurrent.

### Applications
- banque ;
- assureur ;
- recruteur ;
- organisme de formation ;
- fournisseur ;
- client ;
- intermédiaire.

### Vérification
Avant de changer d’acteur, déterminer si le refus vient :
- d’une loi ;
- d’une donnée objective ;
- d’une politique interne ;
- d’une mauvaise présentation ;
- d’une mauvaise cible.

### Réfutation
Changer d’acteur ne sert à rien lorsque tous sont soumis au même verrou dur.

---

## MOTIF 8 — CHANGER LE MODE D’ÉVALUATION

### Ce qu’il conteste
« Je ne passe pas le filtre, donc je n’ai pas la compétence ou la valeur. »

### Principe
Le problème peut venir du canal de preuve plutôt que de la capacité réelle.

### Alternatives
- CV → essai / portfolio / recommandation / réalisation ;
- diplôme → validation d’acquis lorsque le cadre le permet ;
- discours commercial → mission pilote ;
- promesse → acompte / précommande / contrat test ;
- projet financier → simulation / preuve de cash-flow / historique.

### Réfutation
Le mode alternatif n’a aucune valeur si le décideur n’est pas autorisé ou disposé à le reconnaître.

---

## MOTIF 9 — RÉDUIRE LE BESOIN AVANT D’AUGMENTER LES MOYENS

### Ce qu’il conteste
« Il me faut plus d’argent, de revenu, de temps ou de capacité. »

### Questions
- Peut-on atteindre 80 % du résultat avec 50 % du besoin ?
- Quelle partie de l’objectif produit réellement la valeur ?
- Quelle dépense, surface, fonctionnalité ou exigence peut disparaître ?

### Applications
- moins de capital au lancement ;
- logement plus petit mais mieux situé ;
- certification ciblée plutôt que cursus entier ;
- offre minimale avant infrastructure complète ;
- objectif de revenu atteint avec moins de volume grâce au prix ou à la marge.

### Réfutation
Réduire le besoin échoue si la partie retirée est précisément celle qui produit la valeur ou satisfait l’obligation.

---

## MOTIF 10 — TRANSFORMER UN COÛT FIXE EN COÛT VARIABLE

### Ce qu’il conteste
« Il faut posséder l’infrastructure avant de produire. »

### Applications
- sous-traiter avant d’embaucher ;
- louer avant d’acheter une machine ;
- partager un local ;
- vendre avant de constituer un stock complet ;
- utiliser un prestataire à la demande avant d’internaliser.

### Vérification
Comparer coût unitaire supérieur et option de sortie créée.

### Réfutation
Le coût variable devient mauvais lorsqu’un volume stable et élevé rend l’internalisation nettement supérieure ou lorsque la dépendance au tiers détruit la qualité/fiabilité.

---

## MOTIF 11 — FRANCHIR D’ABORD LE SEUIL QUI CHANGE LE SYSTÈME

### Ce qu’il conteste
« Toutes les unités de progression se valent. »

### Principe
Certains pourcentages, montants, dates ou preuves changent qualitativement les droits ou la décision d’un tiers.

### Exemples
- majorité ou seuil juridique ;
- apport qui fait passer le dossier bancaire ;
- ancienneté qui ouvre un droit ;
- volume qui couvre les coûts fixes ;
- chiffre d’affaires qui rend une embauche soutenable ;
- niveau de réserve qui permet une transition.

### Question
Quel est le **premier seuil utile**, pas seulement le prochain chiffre rond ?

### Réfutation
Le seuil n’a de valeur que s’il produit réellement un changement de droit, de coût, de risque ou de décision.

---

## MOTIF 12 — COMBINER PLUSIEURS LEVIERS INSUFFISANTS

### Ce qu’il conteste
« Aucun levier ne suffit, donc le problème n’a pas de solution. »

### Principe
Formaliser l’écart, puis additionner les contributions compatibles.

### Exemple abstrait
Écart de 40 :
- temps : +10 ;
- réduction du besoin : +8 ;
- revenu : +7 ;
- garantie : +5 ;
- négociation : +10.

Aucun levier ne ferme 40 seul. Ensemble, ils peuvent le faire.

### Réfutation
Les leviers ne s’additionnent pas s’ils utilisent deux fois la même ressource ou se rendent mutuellement incompatibles.

---

## MOTIF 13 — CONSTRUIRE LA PREUVE AVANT DE DEMANDER LE « OUI »

### Ce qu’il conteste
« Je dois convaincre le décideur avec une promesse. »

### Principe
Créer d’abord un fait observable qui réduit l’incertitude du tiers.

### Applications
- premières ventes avant financement ;
- mission pilote avant contrat long ;
- portfolio avant candidature atypique ;
- historique de revenus avant nouveau prêt ;
- certification ou attestation ciblée avant nouvelle demande.

### Réfutation
La preuve ne sert pas si elle ne porte pas sur le critère que le décideur utilise réellement.

---

## MOTIF 14 — PRÉSERVER L’OPTION AVANT D’OPTIMISER LE RENDEMENT

### Ce qu’il conteste
« La meilleure décision est celle qui maximise immédiatement le rendement ou minimise immédiatement le coût. »

### Principe
Une option future peut valoir plus que l’optimisation immédiate : réserve de cash, possibilité de retour, mobilité, sortie contractuelle, bien transformable, période de test.

### Questions
- Quel choix est irréversible ?
- Que coûte le droit de revenir en arrière ?
- Quelle petite dépense achète une grande option ?

### Réfutation
L’option est surpayée lorsqu’elle est très improbable d’être utilisée ou que son coût dépasse clairement sa valeur stratégique.

---

## MOTIF 15 — CHANGER DE DOMAINE POUR TROUVER LE LEVIER

### Ce qu’il conteste
« Le problème est bancaire, donc la solution est bancaire. »

### Principe
Chercher le levier dans un domaine adjacent.

### Exemples abstraits
- problème financier → contrat / usage / temps ;
- problème de diplôme → preuve / expérience / réglementation ;
- problème de temps → logement / argent / organisation ;
- problème immobilier → revenus / propriété / convention ;
- problème professionnel → patrimoine / mobilité / formation.

### Réfutation
Le détour de domaine est inutile s’il ne modifie aucune variable du verrou réel.

---

# TEST TRANSVERSAL — LE LEVIER AGIT-IL VRAIMENT SUR LE VERROU ?

Avant de retenir une piste, écrire une phrase causale :

> **« Si nous faisons X, alors Y change parce que Z. »**

Exemple :

- correct : « si le prix augmente, le nombre de ventes nécessaire pour atteindre le même chiffre d’affaires diminue » ;
- incorrect : « si le prix augmente, 150 heures de travail tiennent dans une capacité de 100 heures ».

Si la relation causale ne peut pas être formulée proprement, le levier doit être retiré ou reclassé.

---

# DOUBLE RED TEAM

Pour chaque architecture survivante :

## Attaque de l’impossibilité
- Quelle contrainte avons-nous accepté trop vite ?
- Quel autre ordre, acteur, seuil, fractionnement ou substitut n’a pas été testé ?

## Attaque de la solution
- Qu’est-ce qui prouve que le mécanisme fonctionne ?
- Quel tiers doit encore dire oui ?
- Quelle information doit lui être déclarée ?
- Quel coût caché ou risque est déplacé ailleurs ?
- Quel fait ferait classer la piste **ÉLIMINÉE** ?

**L’identité de Contre-Évidence n’est pas : « trouver toujours une solution ».**

Elle est :

> **Ne déclarer aucune porte fermée avant d’avoir vérifié la serrure — et ne franchir aucune fenêtre avant d’avoir vérifié qu’elle donne réellement quelque part.**
