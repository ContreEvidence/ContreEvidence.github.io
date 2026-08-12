(() => {
  'use strict';
  if (document.documentElement.dataset.ceContextTools === '1') return;
  document.documentElement.dataset.ceContextTools = '1';
  const path = location.pathname.replace(/\/+$/, '');

  function card(href, kicker, title, text, label) {
    const el = document.createElement('div');
    el.className = 'ce-context-tool';
    el.style.cssText = 'margin:1.2rem 0;padding:1.1rem 1.2rem;border:1px solid rgba(212,171,86,.38);border-radius:15px;background:#fff';
    el.innerHTML = `<div class="kicker">${kicker}</div><h3 style="margin:.25rem 0 .45rem">${title}</h3><p style="margin:0 0 .75rem;color:#59646d">${text}</p><a class="btn btn-primary" href="${href}">${label}</a>`;
    return el;
  }


  if (path.endsWith('/parcours-vie-professionnelle.html')) {
    const host = document.querySelector('.pro-resources');
    if (host && !document.querySelector('[data-ce-capital-pro-link]')) {
      const el = document.createElement('div');
      el.className = 'pro-resource';
      el.dataset.ceCapitalProLink = '1';
      el.innerHTML = '<div class="kicker">Diagnostic</div><h3>Voir mon capital professionnel.</h3><p>Employabilité, compétences, preuves, réseau, soutenabilité, marge financière et réversibilité : repérez ce qui vous donne des options et ce qui vous retient.</p><a href="outil-capital-professionnel.html">Faire le diagnostic →</a>';
      host.prepend(el);
    }
  }

  if (path.endsWith('/dossiers/finances-allocation-portefeuille.html')) {
    const prose = document.querySelector('.container.prose');
    if (prose && !document.querySelector('[data-ce-pea-tool-link]')) {
      const el = card('../outil-microscope-pea.html','Passer à l’application','Zoomer à l’intérieur du PEA','Une allocation patrimoniale peut être cohérente globalement tout en cachant une concentration dans la poche actions. Analysez les lignes et moteurs de risque séparément.','Ouvrir le microscope PEA →');
      el.dataset.cePeaToolLink = '1';
      prose.insertBefore(el, prose.firstChild);
    }
  }

  if (path.endsWith('/dossiers/competences-qualification-employabilite.html')) {
    const prose = document.querySelector('article.prose, .container.prose');
    if (prose && !document.querySelector('[data-ce-capital-pro-link]')) {
      const el = card('../outil-capital-professionnel.html','Passer à l’application','Mettre vos ressources professionnelles en regard','Le diagnostic ne donne pas une note : il fait apparaître les dimensions qui vous donnent des options et celles qui limitent votre prochain mouvement.','Faire mon diagnostic →');
      el.dataset.ceCapitalProLink = '1';
      prose.insertBefore(el, prose.firstChild);
    }
  }
})();
