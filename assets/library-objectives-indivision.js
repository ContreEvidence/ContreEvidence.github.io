(() => {
  if (!Array.isArray(window.CE_LIBRARY_CATALOG)) return;

  const patch = (href, values) => {
    const item = window.CE_LIBRARY_CATALOG.find(entry => entry.h === href);
    if (item) Object.assign(item, values);
  };

  patch('dossiers/patrimoine-marge-de-manoeuvre.html', {
    n:'Richesse ≠ liberté : combien de marge de manœuvre votre patrimoine vous donne-t-il ?',
    x:'Même patrimoine net, libertés très différentes : liquidité, dettes, dépenses, runway de décision et capacité à changer de trajectoire.',
    k:'richesse liberté patrimoine marge manoeuvre runway liquidité dettes sécurité choix temps reconversion travailler moins'
  });

  patch('dossiers/finances-transmission-patrimoine.html', {
    k:'transmission patrimoine succession enfants donation assurance vie réserve quotité disponible indivision liquidité favoriser enfant'
  });

  patch('dossiers/finances-retraite-decumulation.html', {
    k:'retraite décumulation patrimoine âge cycle vie revenus retraits pension longévité allocation liquidité transmission'
  });

  patch('dossiers/finances-cadre-global.html', {
    k:'politique patrimoniale allocation taille patrimoine complexité objectif réserve concentration diversification gouvernance'
  });

  const additions = [
    {
      d:'mixte',t:'dossier',c:'Décision · Objectifs',
      h:'dossiers/tout-ca-pour-quoi-objectifs-besoins.html',
      n:'Tout ça pour quoi ? Objectifs, besoins et décisions',
      x:'Distinguer besoin, objectif et moyen avant d’optimiser argent, travail, patrimoine ou temps ; identifier aussi ce que l’on refuse de sacrifier.',
      k:'objectif besoin stratégie moyen décision valeurs finalité optimiser argent travail patrimoine temps qualité vie'
    },
    {
      d:'patrimoine',t:'guide',c:'Difficultés financières',
      h:'dossiers/finances-difficiles-sortir-decouvert-dettes.html',
      n:'Découvert, dettes, factures : reprendre le contrôle de ses finances',
      x:'Stabiliser les dépenses essentielles, arrêter l’aggravation, cartographier les dettes, mesurer le déficit mensuel et reconstruire une première marge avant d’investir.',
      k:'découvert dettes factures impayés crédit consommation budget crise difficultés financières fin mois surendettement point conseil budget banque de france stabiliser'
    },
    {
      d:'mixte',t:'guide',c:'Décision · Exécution',
      h:'dossiers/decision-plan-30-90-jours.html',
      n:'Après la décision : construire un plan 30/90 jours',
      x:'Transformer un choix en première action, jalon à 30 jours, résultat testable à 90 jours, indicateurs et condition de révision.',
      k:'plan action 30 jours 90 jours objectif exécution décision construire trajectoire jalon indicateur revue prochaine action'
    },
    {
      d:'mixte',t:'guide',c:'Transition de vie',
      h:'dossiers/quand-vie-change-sante-separation-revenu.html',
      n:'Quand la vie change brutalement : santé, séparation, revenu',
      x:'Stabiliser simultanément revenu, logement, travail, foyer et patrimoine avant d’empiler des décisions irréversibles.',
      k:'vie change santé maladie séparation perte revenu chômage aidant décès logement foyer patrimoine transition choc stabiliser'
    },
    {
      d:'mixte',t:'guide',c:'Foyer · Argent & temps',
      h:'dossiers/couple-famille-argent-temps.html',
      n:'Couple et famille : répartir argent, temps et risques',
      x:'Rendre visibles revenus, dépenses communes, patrimoine créé, temps non rémunéré et concessions professionnelles avant de choisir une règle de répartition.',
      k:'couple famille argent temps dépenses communes 50 50 proportion revenus compte joint enfants carrière équité foyer épargne patrimoine'
    },
    {
      d:'mixte',t:'guide',c:'Qualité de vie',
      h:'dossiers/temps-energie-qualite-vie.html',
      n:'Temps, énergie, qualité de vie : que cherchez-vous réellement à améliorer ?',
      x:'Regarder argent, temps, énergie, autonomie, relations et contraintes afin que ce qui est facile à mesurer n’écrase pas ce qui compte.',
      k:'qualité vie temps énergie autonomie relations argent travail contrainte trajet fatigue temps libre objectif vie arbitrage'
    },
    {
      d:'patrimoine',t:'dossier',c:'Patrimoine · Utilisation',
      h:'dossiers/quand-arreter-optimiser-utiliser-patrimoine.html',
      n:'Quand arrêter d’optimiser et commencer à utiliser son patrimoine ?',
      x:'Après construire et protéger : décider quand le patrimoine peut racheter du temps, réduire une contrainte, simplifier ou financer un projet important.',
      k:'utiliser patrimoine arrêter optimiser assez accumulation décumulation temps liberté qualité vie travailler moins simplifier projet capital'
    },
    {
      d:'patrimoine',t:'guide',c:'Allocation · Situations',
      h:'dossiers/allocation-patrimoine-selon-situation.html',
      n:'Quelle allocation selon votre situation ? 8 exemples concrets',
      x:'Même capital, décisions différentes : achat immobilier, revenus stables ou instables, chômage, héritage, retraite et transmission avec des allocations pédagogiques chiffrées.',
      k:'allocation patrimoine situation portefeuille 100000 achat immobilier chômage séparation maladie revenus instables indépendant entrepreneur héritage grosse somme retraite transmission sécurité liquidités actions obligations'
    },
    {
      d:'patrimoine',t:'dossier',c:'Patrimoine · Richesse',
      h:'dossiers/etre-riche-revenu-patrimoine-liberte.html',
      n:'À partir de quand est-on riche ? Revenu, patrimoine ou liberté ?',
      x:'Distinguer revenu, patrimoine net, capital mobilisable, position statistique et liberté réelle avec les repères Insee 2024.',
      k:'riche richesse seuil riche revenu niveau vie patrimoine net million top 10 top 5 top 1 liberté financière aisés insee'
    },
    {
      d:'patrimoine',t:'dossier',c:'Patrimoine · Pilotage',
      h:'dossiers/piloter-patrimoine-selon-taille.html',
      n:'Comment piloter un patrimoine selon sa taille ?',
      x:'Les priorités changent avec l’échelle : construire, sécuriser, allouer, limiter la concentration, coordonner fiscalité, transmission et gouvernance.',
      k:'taille patrimoine 100000 500000 million 3 millions banque privée gestion patrimoine allocation complexité gouvernance transmission diversification'
    },
    {
      d:'patrimoine',t:'dossier',c:'Patrimoine · Cycle de vie',
      h:'dossiers/patrimoine-selon-age-construire-utiliser.html',
      n:'Comment piloter son patrimoine selon l’âge ? Construire, protéger puis utiliser',
      x:'Ce qui change réellement de 25 à 75 ans : capital humain, dette, immobilier, horizon, retraite, décumulation, simplification et transmission.',
      k:'patrimoine âge 30 ans 40 ans 50 ans 60 ans 70 ans cycle vie allocation retraite décumulation épargne transmission'
    },
    {
      d:'patrimoine',t:'dossier',c:'Transmission · Enfants',
      h:'dossiers/favoriser-un-enfant-succession-donation.html',
      n:'Peut-on favoriser un enfant dans une succession ?',
      x:'Réserve héréditaire, quotité disponible, donation hors part, donation-partage, assurance-vie et pacte successoral pour organiser une transmission inégalitaire.',
      k:'favoriser enfant succession avantager enfant fidèle donation hors part successorale réserve héréditaire quotité disponible assurance vie RAAR pacte successoral'
    },
    {
      d:'patrimoine',t:'dossier',c:'Immobilier · Indivision',
      h:'dossiers/indivision-immobiliere-sortir-sans-subir.html',
      n:'Sortir d’une indivision immobilière : vendre, racheter, louer ou partager ?',
      x:'Séparer propriété, dette, comptes, occupation et objectifs avant de comparer vente, rachat de part, maintien temporaire et partage judiciaire.',
      k:'indivision immobilière sortir indivision vente rachat part soulte partage judiciaire quote part propriété créance logement héritiers couple'
    },
    {
      d:'patrimoine',t:'dossier',c:'Immobilier · Couple',
      h:'dossiers/indivision-couple-separation-rachat-soulte.html',
      n:'Indivision après séparation : racheter maintenant ou rendre le rachat possible ?',
      x:'Identifier le verrou réel du rachat, déplacer dette, apport, garanties, temps, revenus et convention pour construire le point où la sortie devient finançable.',
      k:'séparation couple indivision rachat soulte quote part apport prêt immobilier désolidarisation banque concubin pacs logement ingénierie solution'
    },
    {
      d:'patrimoine',t:'dossier',c:'Immobilier · Indivision',
      h:'dossiers/indivision-rachat-progressif-parts.html',
      n:'Rachat progressif : acheter une partie des droits puis monter jusqu’à 100 % ?',
      x:'Licitation partielle, quotes-parts 50/50 puis 60/40, loyers, prêt, fiscalité et taille optimale des tranches pour fractionner un rachat trop lourd à financer d’un coup.',
      k:'indivision rachat progressif parts quote-part licitation partielle 10 pourcent 20 pourcent soulte fractionnement propriété loyers prêt concubin séparation'
    },
    {
      d:'patrimoine',t:'dossier',c:'Transmission · Indivision',
      h:'dossiers/indivision-succession-heritiers-vendre-partager.html',
      n:'Indivision successorale : vendre, partager ou débloquer entre héritiers ?',
      x:'Maison familiale, héritier opposant ou silencieux, majorité des 2/3, partage amiable ou judiciaire, occupation et objectifs divergents.',
      k:'indivision succession héritiers vente partage succession bloquée maison familiale 2/3 licitation notaire partage judiciaire'
    },
    {
      d:'patrimoine',t:'dossier',c:'Immobilier · Comptes',
      h:'dossiers/indivision-loyers-charges-comptes.html',
      n:'Indivision : qui touche les loyers et qui paie prêt, charges et travaux ?',
      x:'Tenir les comptes d’une indivision : revenus, prêt, charges, travaux, avances, occupation privative et rémunération de la gestion.',
      k:'indivision loyers charges prêt travaux comptes remboursement occupation indemnité gestion revenus fruits créance 815-13'
    }
  ];

  let offset = window.CE_LIBRARY_CATALOG.length;
  for (const item of additions) {
    if (window.CE_LIBRARY_CATALOG.some(existing => existing.h === item.h)) continue;
    window.CE_LIBRARY_CATALOG.splice(offset, 0, item);
    offset += 1;
  }
})();
