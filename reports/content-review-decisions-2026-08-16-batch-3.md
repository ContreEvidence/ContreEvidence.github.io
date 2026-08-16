# Décisions de revue — 16 août 2026 — lot autonome 3

Ce fichier complète les journaux précédents. Les scores automatiques restent des détecteurs ; chaque réécriture ci-dessous résulte d’une relecture humaine du gain décisionnel réel.

## `articles/comparatif-produits-bancaires.html` — `REWRITE` + `VERIFY`

- **Signal initial :** attente/statu quo, transfert de risque, condition de renversement et valeur d’option insuffisamment visibles.
- **Lecture humaine :** confirmé. La page comparait correctement taux, garantie et horizon mais traitait encore la liquidité surtout comme une caractéristique du produit, pas comme une option économique qui peut justifier un rendement inférieur.
- **Correction :** prix de la liquidité ; transfert de risque entre rendement, indisponibilité et pouvoir d’achat ; attente uniquement lorsqu’une variable de projet doit devenir plus claire ; échelle d’échéances ; gatekeepers contractuels ; garantie FGDR explicitée ; conditions de renversement.
- **Causalité :** sécuriser un taux peut transférer le risque vers l’indisponibilité ; conserver du cash peut sacrifier du rendement mais préserver une option de projet ou éviter un crédit imprévu. Le bon produit dépend donc de la fonction de l’argent et du coût d’une erreur de calendrier.
- **Preuve :** Livret A/LDDS 1,7 % et LEP 2,5 % au 1er août 2026 vérifiés sur le Ministère de l’Économie ; dépôts à terme ménages ≤2 ans 2,23 % en mai 2026 sur Banque de France ; fonds euros individuels 2,63 % en moyenne en 2025 sur ACPR ; PEL 2026 2 % sur Ministère/Service-Public ; garantie des dépôts 100 000 € par client et établissement sur FGDR.
- **Impact attendu :** passer de « quel support rapporte le plus ? » à « quelle indisponibilité puis-je réellement acheter avec cette somme ? ».
- **Incertitude résiduelle :** offres de comptes à terme, bonifications d’assurance-vie, fiscalité et conditions contractuelles varient selon établissement et date.

## `articles/sans-diplome-chemins-alternatifs.html` — `REWRITE` + `VERIFY`

- **Signal initial :** acteur/gatekeeper, substitution, objectif réel et renversement insuffisamment visibles.
- **Lecture humaine :** confirmé. Le dossier distinguait obligation réglementaire et préférence RH mais n’allait pas assez loin dans l’identification de celui qui ferme la porte et de la preuve qu’il accepterait réellement.
- **Correction :** gatekeepers réglementation/recruteur/manager/client/certificateur ; test de la preuve manquante ; cinq architectures comparées (diplôme, VAE, certification, alternance, poste passerelle) ; objectif réel et fonctions voisines ; attente conditionnelle ; critères de renversement.
- **Causalité :** l’absence d’un diplôme peut être absolue face à la réglementation, dominante face à un filtre RH ou presque secondaire face à un client qui achète un résultat démontré. La solution doit donc changer avec le gatekeeper.
- **Preuve :** rôle du ROME vérifié sur France Travail ; régime actuel de la VAE vérifié sur France VAE ; apprentissage 2026 vérifié sur Ministère du Travail.
- **Impact attendu :** ne plus prescrire une formation longue avant de savoir quel filtre elle est censée lever.
- **Incertitude résiduelle :** pratiques de recrutement, certifications reconnues et conditions d’alternance restent propres au métier, au marché et au profil.

## `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` — `REWRITE`

- **Signal initial :** acteur/gatekeeper, substitution, fenêtre temporelle et objectif réel insuffisamment visibles.
- **Lecture humaine :** confirmé. La page calculait déjà bien revenu disponible et temps récupéré, mais traitait encore trop facilement la baisse de salaire comme le prix naturel d’une meilleure qualité de vie.
- **Correction :** besoin réel derrière la baisse ; substitutions avant sacrifice salarial ; gatekeepers des promesses de télétravail/évolution/charge ; distinction baisse durable / poste-pont ; date de revue ; stress tests et conditions de renversement.
- **Causalité :** une baisse de salaire n’est rationnelle que si elle achète un bénéfice réellement contrôlable et non disponible à moindre coût par une autre variable. Une baisse temporaire peut acheter une compétence ou une option ; une baisse indéfinie peut devenir une nouvelle référence sans produire l’avantage attendu.
- **Impact attendu :** transformer le dilemme « argent ou qualité de vie » en comparaison d’architectures de travail.
- **Incertitude résiduelle :** promesses d’évolution, pratiques de télétravail, charge réelle et progression salariale dépendent fortement de l’employeur et doivent être vérifiées dans le cas concret.

## `dossiers/calculer-prix-minimum-rentable.html` — `DEFER` temporaire

- **Signal initial :** acteur/gatekeeper, substitution, fractionnement et combinaison de leviers.
- **Lecture humaine :** signal confirmé ; une réécriture a été préparée autour de trois niveaux — plancher économique, prix accepté, architecture de l’offre — avec gatekeeper et combinaisons de leviers.
- **État :** le fichier a changé sur le dépôt entre la lecture et l’écriture ; l’API a correctement refusé une mise à jour sur SHA obsolète. Aucun écrasement forcé n’a été effectué.
- **Décision :** reprendre ce dossier sur sa version courante lors du prochain passage plutôt que forcer une réécriture potentiellement concurrente.
