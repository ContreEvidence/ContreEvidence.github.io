from pathlib import Path

REPLACEMENTS = {
    "index.html": [
        (
            "Partez de votre situation, comparez les options et mesurez ce que chacune améliore, coûte ou fragilise.",
            "Partez de votre situation, comparez les options et mesurez ce que chacune améliore, ce qu’elle coûte et les possibilités qu’elle ouvre ou ferme."
        ),
        (
            "<li>Entreprendre sans se fragiliser</li>",
            "<li>Tester puis entreprendre</li>"
        ),
        (
            '<meta name="dateModified" content="2026-08-11"/>',
            '<meta name="dateModified" content="2026-08-12"/>'
        ),
    ],
    "parcours-de-vie.html": [
        (
            "<h1>Qu’est-ce que vous voulez changer sans fragiliser le reste ?</h1>",
            "<h1>Qu’est-ce que vous voulez changer, et quelle marge de manœuvre voulez-vous garder ?</h1>"
        ),
        (
            "Choisissez la phrase la plus proche de votre problème : vous pourrez ensuite revenir aux dossiers de fond, aux sources officielles et aux outils.",
            "Choisissez la phrase la plus proche de votre situation : vous pourrez ensuite comparer les options, revenir aux dossiers de fond, aux sources officielles et aux outils."
        ),
        (
            "Quitter, se reconvertir ou réorganiser sa vie professionnelle sans décider avant d’avoir mesuré le risque et la marge de manœuvre.",
            "Quitter, se reconvertir ou réorganiser sa vie professionnelle en distinguant ce qui est contraint, ce qui peut être testé et la marge de manœuvre disponible."
        ),
        (
            "Calculer le minimum soutenable et tester une transition plus longue que prévu.",
            "Estimer le besoin de réserve et tester ce qui change avec une transition plus longue, un revenu intermédiaire ou d’autres appuis."
        ),
        (
            "Reconversion, mobilité, temps partiel, achat immobilier ou activité indépendante : le bon scénario individuel peut devenir fragile si l’on oublie le revenu, le temps, la carrière et la réversibilité du foyer.",
            "Reconversion, mobilité, temps partiel, achat immobilier ou activité indépendante : une option peut ouvrir des possibilités pour l’un tout en déplaçant revenu, temps ou risque vers l’autre. Les rendre visibles permet de chercher un scénario plus robuste pour le foyer."
        ),
    ],
    "parcours-vie-professionnelle.html": [
        (
            "<h2>Quel problème essayez-vous de résoudre ?</h2>",
            "<h2>Quelle situation voulez-vous faire évoluer ?</h2>"
        ),
        (
            "Je ne sais pas encore où ça bloque →",
            "Je veux savoir où agir d’abord →"
        ),
        (
            "Localiser le blocage entre ciblage, candidature, réponse, entretien et offre avant de recommencer à zéro.",
            "Repérer l’étape où agir entre ciblage, candidature, réponse, entretien et offre avant de recommencer à zéro."
        ),
        (
            "Reconstruire des preuves récentes, choisir une porte d’entrée et éviter le sous-positionnement durable.",
            "Reconstruire des preuves récentes, choisir une porte d’entrée et repositionner le profil au niveau que ces preuves permettent."
        ),
        (
            "Comparer le coût de rester, le risque de partir et la valeur d’une sortie préparée.",
            "Comparer rester, partir ou préparer une troisième voie, avec leurs coûts, leurs risques et les options futures qu’ils ouvrent."
        ),
        (
            "Valider la demande, la marge, le temps et la trésorerie avant de basculer hors du salariat.",
            "Valider la demande, la marge, le temps et la trésorerie pour savoir si, quand et comment basculer hors du salariat."
        ),
        (
            '<meta name="dateModified" content="2026-08-11"/>',
            '<meta name="dateModified" content="2026-08-12"/>'
        ),
    ],
    "dossiers/decider-a-deux-travail-patrimoine.html": [
        (
            "Une bonne décision pour l’un peut devenir une mauvaise décision pour le foyer si elle transfère tout le risque à l’autre.",
            "Une décision peut ouvrir une porte pour l’un et déplacer une partie du coût ou du risque vers l’autre. Le bon scénario regarde les deux."
        ),
        (
            "Reconversion, mobilité, temps partiel, entrepreneuriat ou achat immobilier : l’un peut gagner en liberté pendant que l’autre absorbe davantage de risque, de trajet, de charge mentale ou de dépendance financière. Il faut donc comparer les scénarios à deux niveaux : <strong>individuel et foyer</strong>.",
            "Reconversion, mobilité, temps partiel, entrepreneuriat ou achat immobilier : une option peut libérer du temps, du revenu ou une trajectoire pour l’un tout en déplaçant une partie du coût, du trajet ou du risque vers l’autre. Il faut donc comparer les scénarios à deux niveaux : <strong>individuel et foyer</strong>."
        ),
    ],
    "dossiers/quitter-emploi-stable-ou-rester.html": [
        (
            "Le deuxième scénario est souvent oublié alors qu’il permet de transformer le temps restant en option plutôt qu’en simple attente.",
            "Le deuxième scénario est souvent oublié alors qu’il permet de transformer le temps restant en option plutôt qu’en simple attente. Le but n’est pas de minimiser le risque à tout prix : il est de rendre les options plus nombreuses, plus lisibles et plus réversibles."
        ),
        (
            '<meta name="dateModified" content="2026-08-11"/>',
            '<meta name="dateModified" content="2026-08-12"/>'
        ),
        (
            '<meta property="article:modified_time" content="2026-08-11"/>',
            '<meta property="article:modified_time" content="2026-08-12"/>'
        ),
        (
            '"dateModified":"2026-08-11"',
            '"dateModified":"2026-08-12"'
        ),
    ],
}

for filename, replacements in REPLACEMENTS.items():
    path = Path(filename)
    text = path.read_text(encoding="utf-8")
    original = text
    for old, new in replacements:
        count = text.count(old)
        if count == 0:
            raise SystemExit(f"Missing expected text in {filename}: {old[:100]!r}")
        text = text.replace(old, new, 1)
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"updated {filename}")
