#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DATE_ISO = "2026-08-12"
DATE_FR = "12/08/2026"


def edit(path, pairs=(), regex_pairs=()):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    original = s
    for old, new in pairs:
        if old not in s:
            raise SystemExit(f"Missing expected text in {path}: {old[:100]!r}")
        s = s.replace(old, new, 1)
    for pattern, repl in regex_pairs:
        s2, n = re.subn(pattern, repl, s, count=1, flags=re.S)
        if n != 1:
            raise SystemExit(f"Regex replacement count={n} in {path}: {pattern[:100]!r}")
        s = s2
    if s != original:
        p.write_text(s, encoding="utf-8")
        print(f"updated {path}")

# 1) Définir explicitement une « grosse somme » de manière relative.
edit("articles/grosse-entree-argent-que-faire.html", pairs=[
    ('<meta name="dateModified" content="2026-08-10"/>', '<meta name="dateModified" content="2026-08-12"/>'),
    ('<meta property="article:modified_time" content="2026-08-10"/>', '<meta property="article:modified_time" content="2026-08-12"/>'),
    ('"dateModified":"2026-08-10"', '"dateModified":"2026-08-12"'),
    ('Mis à jour le 09/08/2026 · Sources et hypothèses précisées dans le dossier', 'Mis à jour le 12/08/2026 · Notion de « grosse somme » définie relativement à la situation'),
    ('<article class="prose novice-prose">', '<article class="prose novice-prose"><div class="decision-box"><h2>« Grosse somme » ne désigne pas un montant précis</h2><p>Ici, il n’existe aucun seuil universel en euros. Une somme devient importante lorsqu’elle <strong>modifie suffisamment votre situation pour changer vos options</strong>. Comparez-la à quatre repères personnels : votre patrimoine financier existant, vos liquidités disponibles, le revenu net annuel du foyer et les grands projets déjà engagés.</p><p>Recevoir 15 000 € peut transformer la situation d’une personne qui possède 3 000 € d’épargne. Les mêmes 15 000 € peuvent avoir un effet marginal dans un patrimoine déjà très important. À l’inverse, 100 000 € ne sont pas automatiquement une « grosse somme » si ce montant ne change ni la liquidité, ni les projets, ni l’allocation globale.</p><p><strong>La bonne unité n’est donc pas seulement l’euro : c’est le changement de proportion.</strong> Le simulateur associé calcule désormais ces rapports à partir de vos propres données.</p></div>'),
])

# 2) Outil grosse somme : ratios relatifs + correction des duplications de classe d'actifs.
edit("outil-repartir-grosse-somme.html", pairs=[
    ('<meta name="dateModified" content="2026-08-11"/>', '<meta name="dateModified" content="2026-08-12"/>'),
    ('<p>Commencez par isoler l’argent qui a déjà une fonction. Puis regardez comment le capital réellement disponible modifie votre patrimoine global avant de choisir où l’investir.</p>', '<p>Commencez par isoler l’argent qui a déjà une fonction. Puis regardez comment le capital réellement disponible modifie votre patrimoine global avant de choisir où l’investir.</p><div class="tool-alert" style="margin-top:1rem"><strong>Pas de seuil universel.</strong> L’outil ne décide pas si 10 000 €, 50 000 € ou 500 000 € sont « gros ». Il mesure ce que la somme représente par rapport à votre patrimoine, vos liquidités, vos revenus et vos dépenses.</div>'),
    ('<div class="tool-field"><label for="medium">Projets ou besoins à 3–8 ans</label><input id="medium" type="number" min="0" step="500" value="0"/></div>', '<div class="tool-field"><label for="medium">Projets ou besoins à 3–8 ans</label><input id="medium" type="number" min="0" step="500" value="0"/></div><div class="tool-field"><label for="annualIncome">Revenu net annuel du foyer <span class="tool-muted">(optionnel)</span></label><input id="annualIncome" type="number" min="0" step="1000" placeholder="À saisir"/></div><div class="tool-field"><label for="essentialSpend">Dépenses essentielles mensuelles <span class="tool-muted">(optionnel)</span></label><input id="essentialSpend" type="number" min="0" step="100" placeholder="À saisir"/></div>'),
    ('<div class="tool-kpi"><span>Part du montant reçu encore libre</span><strong id="freePct">—</strong></div><div class="tool-kpi"><span>Allocation saisie restant à affecter</span><strong id="unallocated">—</strong></div>', '<div class="tool-kpi"><span>Part du montant reçu encore libre</span><strong id="freePct">—</strong></div><div class="tool-kpi"><span>Somme reçue / patrimoine actuel saisi</span><strong id="relativeWealth">—</strong></div><div class="tool-kpi"><span>Somme reçue / liquidités actuelles</span><strong id="relativeLiquidity">—</strong></div><div class="tool-kpi"><span>Équivalent de revenu net</span><strong id="relativeIncome">—</strong></div><div class="tool-kpi"><span>Équivalent de dépenses essentielles</span><strong id="relativeExpenses">—</strong></div><div class="tool-kpi"><span>Allocation saisie restant à affecter</span><strong id="unallocated">—</strong></div>'),
    ("ids=['received','taxes','debts','reserve','short','medium','q1','q2','q3']", "ids=['received','taxes','debts','reserve','short','medium','annualIncome','essentialSpend','q1','q2','q3']"),
    ("'allocated','investable','freePct','unallocated','beforeTotal'", "'allocated','investable','freePct','relativeWealth','relativeLiquidity','relativeIncome','relativeExpenses','unallocated','beforeTotal'"),
    ("const received=n('received'),affected=", "const received=n('received'),annualIncome=n('annualIncome'),essentialSpend=n('essentialSpend'),affected="),
    ("after=before+added,remaining=investable-added;els.allocated.textContent", "after=before+added,remaining=investable-added,liquidBefore=n('before-cash')+n('before-euro');els.allocated.textContent"),
    ("els.freePct.textContent=received?fmtPct(investable/received):'—';els.unallocated.textContent", "els.freePct.textContent=received?fmtPct(investable/received):'—';els.relativeWealth.textContent=before&&received?fmtPct(received/before):'—';els.relativeLiquidity.textContent=liquidBefore&&received?`${(received/liquidBefore).toFixed(1).replace('.',',')} ×`:'—';els.relativeIncome.textContent=annualIncome&&received?`${(received/annualIncome*12).toFixed(1).replace('.',',')} mois`:'—';els.relativeExpenses.textContent=essentialSpend&&received?`${(received/essentialSpend).toFixed(1).replace('.',',')} mois`:'—';els.unallocated.textContent"),
    ("const msgs=[];if(remaining>0)", "const msgs=[];if(before&&received)msgs.push(`La somme reçue représente ${fmtPct(received/before)} du patrimoine actuel que vous avez saisi. Ce rapport décrit son poids relatif ; il ne fixe aucun seuil de décision.`);if(annualIncome&&received)msgs.push(`Elle équivaut à environ ${(received/annualIncome*12).toFixed(1).replace('.',',')} mois de revenu net du foyer.`);if(essentialSpend&&received)msgs.push(`Elle équivaut à environ ${(received/essentialSpend).toFixed(1).replace('.',',')} mois de dépenses essentielles.`);if(remaining>0)"),
    ("['Capital','Somme reçue',document.getElementById('received').value],['Capital','Impôts / frais'", "['Capital','Somme reçue',document.getElementById('received').value],['Repères relatifs','Revenu net annuel du foyer',document.getElementById('annualIncome').value],['Repères relatifs','Dépenses essentielles mensuelles',document.getElementById('essentialSpend').value],['Capital','Impôts / frais'"),
], regex_pairs=[
    (r"(?:\['privateCredit','Crédit privé / dette non cotée'\],){2,}", "['privateCredit','Crédit privé / dette non cotée'],"),
])

# 3) Achat immobilier : stress test proportionné au foyer.
edit("dossiers/acheter-logement-sans-se-fragiliser.html", pairs=[
    ('<h2>5. Stress test : ce qui se passe six mois après la signature</h2><p>Testez au minimum trois chocs séparément puis ensemble :</p><ul><li>8 000 € de travaux non prévus ;</li><li>3 à 6 mois de baisse de revenu ;</li><li>hausse durable de 200 € à 300 € des dépenses mensuelles du foyer.</li></ul>', '<h2>5. Stress test : dimensionnez le choc à votre foyer</h2><p>Testez au moins trois familles de chocs séparément puis ensemble, mais <strong>ne reprenez pas un montant standard</strong> :</p><ul><li><strong>Travaux imprévus :</strong> utilisez le plus gros poste plausible au regard du bien, de la copropriété, des diagnostics et de vos équipements ;</li><li><strong>Baisse de revenu :</strong> retenez une durée cohérente avec votre statut, votre secteur, le second revenu du foyer et le délai réaliste de retour à l’emploi ;</li><li><strong>Hausse des dépenses :</strong> testez une augmentation significative de vos dépenses essentielles, plutôt qu’un montant identique pour tous les foyers.</li></ul><p>Vous pouvez ajouter des chiffres illustratifs pour comparer plusieurs scénarios, mais le test doit être calibré sur ce qui pourrait réellement fragiliser <em>votre</em> foyer.</p>'),
    ('<meta name="dateModified" content="2026-08-11">', '<meta name="dateModified" content="2026-08-12">'),
    ('<meta property="article:modified_time" content="2026-08-11">', '<meta property="article:modified_time" content="2026-08-12">'),
    ('"dateModified":"2026-08-11"', '"dateModified":"2026-08-12"'),
    ('Mis à jour le 11/08/2026 · Sources officielles vérifiées', 'Mis à jour le 12/08/2026 · Stress tests recalibrés selon la situation du foyer'),
])

# 4) Dossier apport : remplacer le choc absolu par un choc personnel.
edit("dossiers/acheter-sans-vider-epargne.html", pairs=[
    ('<h2>5. Le test qui révèle la fragilité</h2><p>Ajoutez, six mois après l’achat, <strong>8 000 € de travaux imprévus</strong> et deux mois de revenu en moins. Avec 5 000 € de réserve, le foyer doit emprunter, vendre un placement au mauvais moment ou réduire brutalement ses dépenses. Avec 25 000 €, l’événement reste absorbable. La valeur de la réserve apparaît surtout dans le scénario qui n’était pas prévu.</p>', '<h2>5. Le test qui révèle la fragilité</h2><p>Ajoutez un choc qui soit <strong>grand pour votre foyer</strong> : le plus gros travaux imprévu plausible sur le logement, combiné à une baisse de revenu pendant une durée réaliste pour votre situation professionnelle. Comparez ensuite plusieurs niveaux de réserve. La valeur de la liquidité apparaît lorsque l’un des scénarios impose de s’endetter, de vendre un actif au mauvais moment ou de renoncer à une dépense essentielle.</p><p>Un exemple à 8 000 € ou deux mois sans revenu peut être utile pour illustrer un calcul, mais ce n’est ni un seuil de sécurité ni un scénario universel.</p>'),
    ('<meta name="dateModified" content="2026-08-11"/>', '<meta name="dateModified" content="2026-08-12"/>'),
    ('<meta property="article:modified_time" content="2026-08-11"/>', '<meta property="article:modified_time" content="2026-08-12"/>'),
    ('"dateModified":"2026-08-11"', '"dateModified":"2026-08-12"'),
    ('Mis à jour le 11/08/2026 · Repère Banque de France et méthode marginale', 'Mis à jour le 12/08/2026 · Stress tests rendus relatifs à la situation du foyer'),
])

# 5) Bien immobilier : stress tests relatifs.
edit("dossiers/bien-immobilier-garder-vendre-transformer.html", pairs=[
    ('<h2>11. Stress test : garder</h2><p>Testez six mois sans loyer, 15 000 € de travaux imprévus, loyer stagnant cinq ans, charges en hausse et valeur du bien en baisse de 15 %. Ajoutez ensuite un choc personnel : baisse de revenu du foyer au même moment. Si la stratégie ne fonctionne que dans le scénario parfait, sa marge de sécurité est faible.</p>', '<h2>11. Stress test : garder</h2><p>Construisez des chocs proportionnés au bien et à votre situation : une vacance correspondant à un délai de relocation réellement plausible, un gros travaux cohérent avec l’état du bien ou de la copropriété, une période de stagnation des loyers adaptée à votre horizon, une baisse de valeur suffisamment forte pour tester votre décision, puis un choc personnel simultané sur les revenus du foyer.</p><p>Six mois sans loyer, 15 000 € de travaux ou −15 % de valeur peuvent servir d’illustrations dans certains cas ; <strong>ils ne constituent pas des seuils universels</strong>. Si la stratégie ne fonctionne que dans le scénario parfait, sa marge de sécurité est faible.</p>'),
    ('<h2>12. Stress test : transformer</h2><p>Ajoutez 20 % au budget de travaux, plusieurs mois de retard, un gain de loyer inférieur à l’hypothèse et une contrainte non anticipée.', '<h2>12. Stress test : transformer</h2><p>Ajoutez une marge de dépassement adaptée à l’incertitude du chantier — 20 % peut être une hypothèse illustrative, pas une règle —, un retard plausible, un gain de loyer inférieur à l’hypothèse et une contrainte non anticipée.'),
    ('<meta name="dateModified" content="2026-08-11">', '<meta name="dateModified" content="2026-08-12">'),
    ('<meta property="article:modified_time" content="2026-08-11">', '<meta property="article:modified_time" content="2026-08-12">'),
    ('"dateModified":"2026-08-11"', '"dateModified":"2026-08-12"'),
    ('Mis à jour le 11/08/2026 · Dossier fusionné et approfondi', 'Mis à jour le 12/08/2026 · Stress tests recalibrés selon le bien et le foyer'),
])

# 6) Réserve de sécurité : supprimer le faux plancher universel et corriger la logique du stress test.
edit("dossiers/liquidites-reserve-securite.html", pairs=[
    ('<p>Partez d’un socle de <strong>trois mois</strong>, puis ajoutez des mois lorsque le risque est structurel.</p>', '<p>Partez d’abord de la <strong>durée du choc que vous devez réellement pouvoir absorber</strong>. Si vous manquez totalement de repère, trois mois peuvent servir d’hypothèse de départ pour lancer le calcul, mais pas de plancher universel. Ajustez ensuite selon la stabilité des revenus, les personnes à charge, la dette, la vitesse probable de retour à l’emploi et la liquidité du reste du patrimoine.</p>'),
    ('<p>Le risque inverse existe. Conserver 100 000 € pendant quinze ans « au cas où » alors que 20 000 € suffisent peut créer un coût d’opportunité considérable.</p>', '<p>Le risque inverse existe. Dans une situation où 20 000 € couvriraient réellement les chocs retenus, conserver 100 000 € pendant quinze ans uniquement « au cas où » pourrait créer un coût d’opportunité considérable. Dans un autre foyer, les montants pertinents peuvent être très différents.</p>'),
    ('<h2>7. Faire un stress test au lieu de chercher la perfection</h2><p>Testez trois scénarios :</p><ol><li><strong>Perte de revenu pendant quatre mois</strong> : la réserve suffit-elle sans découvert ni crédit renouvelable ?</li><li><strong>Dépense de 5 000 € demain</strong> : pouvez-vous la payer sans vendre un actif risqué ?</li><li><strong>Baisse de 30 % des marchés au même moment</strong> : seriez-vous obligé de vendre ?</li></ol><p>Si la réponse est non aux trois, la structure commence à être robuste.</p>', '<h2>7. Faire un stress test au lieu de chercher la perfection</h2><p>Testez trois scénarios calibrés sur votre vie :</p><ol><li><strong>Interruption de revenu :</strong> choisissez une durée plausible compte tenu de votre emploi, de votre secteur et des autres revenus du foyer ; la réserve suffit-elle sans dette coûteuse ?</li><li><strong>Grosse dépense indispensable :</strong> utilisez un montant cohérent avec votre logement, votre véhicule, votre santé ou vos obligations ; pouvez-vous l’absorber sans vendre un actif risqué ?</li><li><strong>Baisse des actifs risqués au même moment :</strong> choisissez un choc suffisamment sévère pour tester le risque de vente forcée ; seriez-vous obligé de vendre ?</li></ol><p>La structure commence à être robuste si elle couvre les deux premiers chocs sans dette coûteuse et si le troisième ne vous force pas à vendre. Les exemples « quatre mois », « 5 000 € » ou « −30 % » peuvent servir à démarrer un test, mais ne sont pas des normes.</p>'),
    ('<meta name="dateModified" content="2026-08-11"/>', '<meta name="dateModified" content="2026-08-12"/>'),
    ('<meta property="article:modified_time" content="2026-08-11"/>', '<meta property="article:modified_time" content="2026-08-12"/>'),
    ('"dateModified":"2026-08-11"', '"dateModified":"2026-08-12"'),
])

# 7) Reconversion : une réserve résiduelle dépend du foyer, pas d'un nombre fixe de mois.
edit("dossiers/puis-je-me-permettre-reconversion.html", pairs=[
    ('Le scénario adverse doit encore me laisser six mois de marge.', 'Le scénario adverse doit encore me laisser la réserve résiduelle que j’ai définie pour mon foyer. Six mois peuvent être une hypothèse illustrative, mais la durée pertinente dépend de la stabilité des autres revenus, des charges fixes, des personnes à charge, de la dette et du délai réaliste de retour à l’emploi.'),
    ('<meta name="dateModified" content="2026-08-11"/>', '<meta name="dateModified" content="2026-08-12"/>'),
    ('<meta property="article:modified_time" content="2026-08-11"/>', '<meta property="article:modified_time" content="2026-08-12"/>'),
    ('"dateModified":"2026-08-11"', '"dateModified":"2026-08-12"'),
    ('Mis à jour le 11/08/2026 · Dispositifs officiels séparés des hypothèses', 'Mis à jour le 12/08/2026 · Réserve résiduelle recalibrée selon le foyer'),
])

# 8) Audit budget : trois mois = première photo, pas horizon universel.
edit("dossiers/audit-budget-60-minutes.html", pairs=[
    ('Pas besoin d’un budget parfait ni d’une application compliquée. Trois mois de relevés, une feuille ou un tableur, et quelques calculs suffisent déjà à voir ce qui compte.', 'Pas besoin d’un budget parfait ni d’une application compliquée. Plusieurs mois de relevés, une feuille ou un tableur et quelques calculs suffisent déjà à voir ce qui compte ; trois mois donnent souvent une première photographie, davantage si vos flux sont saisonniers.'),
    ('<h2>Avant de commencer : prenez trois mois, pas un seul</h2>', '<h2>Avant de commencer : prenez plusieurs mois, pas un seul</h2>'),
    ('<p>Trois mois suffisent pour une première photographie. Six mois sont encore meilleurs si les revenus ou les dépenses varient beaucoup.</p>', '<p>Trois mois donnent souvent une première photographie exploitable. Si les revenus ou les dépenses varient beaucoup, six mois peuvent être plus représentatifs ; si votre budget est très saisonnier ou comporte beaucoup de dépenses annuelles, regarder douze mois évite de prendre une période atypique pour une norme.</p>'),
    ('<meta name="dateModified" content="2026-08-11"/>', '<meta name="dateModified" content="2026-08-12"/>'),
    ('<meta property="article:modified_time" content="2026-08-11"/>', '<meta property="article:modified_time" content="2026-08-12"/>'),
    ('"dateModified":"2026-08-11"', '"dateModified":"2026-08-12"'),
])

print("relative framing fixes prepared")
