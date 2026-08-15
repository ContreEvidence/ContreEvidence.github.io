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

  const additions = [
    {
      d:'mixte',t:'dossier',c:'Décision · Objectifs',
      h:'dossiers/tout-ca-pour-quoi-objectifs-besoins.html',
      n:'Tout ça pour quoi ? Objectifs, besoins et décisions',
      x:'Distinguer besoin, objectif et moyen avant d’optimiser argent, travail, patrimoine ou temps ; identifier aussi ce que l’on refuse de sacrifier.',
      k:'objectif besoin stratégie moyen décision valeurs finalité optimiser argent travail patrimoine temps qualité vie'
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
      n:'Indivision après séparation : vendre, racheter la part ou rester indivis ?',
      x:'Acte d’acquisition, apport, remboursements, créances, soulte, désolidarisation bancaire, occupation et scénarios de maintien temporaire.',
      k:'séparation couple indivision rachat soulte quote part apport prêt immobilier désolidarisation banque concubin pacs logement'
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
