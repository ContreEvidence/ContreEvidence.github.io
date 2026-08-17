(() => {
  'use strict';
  if (document.documentElement.dataset.ceContentPolish === '1') return;
  document.documentElement.dataset.ceContentPolish = '1';

  const file = () => location.pathname.split('/').pop() || '';
  const prose = () => document.querySelector('main article.prose');

  function addMeta(attr, name, content) {
    if (!content || document.head.querySelector(`meta[${attr}="${name}"]`)) return;
    const meta = document.createElement('meta');
    meta.setAttribute(attr, name);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }

  function ensureArticleMetadata() {
    if (!prose() || !/\/(?:dossiers|articles|fiches-metiers)\//.test(location.pathname)) return;
    const title = (document.title || '').replace(/\s*\|\s*Contre-Évidence\s*$/i, '').trim();
    const description = document.querySelector('meta[name="description"]')?.content || '';
    const canonical = document.querySelector('link[rel="canonical"]')?.href || location.href;
    const image = document.querySelector('meta[property="og:image"]')?.content || new URL('/assets/og-cover-brand.png', location.origin).href;

    addMeta('name', 'twitter:card', 'summary_large_image');
    addMeta('property', 'og:type', 'article');
    addMeta('property', 'og:title', title);
    addMeta('property', 'og:description', description);
    addMeta('property', 'og:url', canonical);
    addMeta('property', 'og:image', image);

    const hasArticleLd = [...document.querySelectorAll('script[type="application/ld+json"]')].some(script => /"@type"\s*:\s*"Article"/i.test(script.textContent || ''));
    if (hasArticleLd) return;
    const datePublished = document.querySelector('meta[property="article:published_time"]')?.content || undefined;
    const dateModified = document.querySelector('meta[property="article:modified_time"]')?.content || document.querySelector('meta[name="dateModified"]')?.content || undefined;
    const section = document.querySelector('meta[property="article:section"]')?.content || undefined;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: canonical,
      mainEntityOfPage: canonical,
      image,
      datePublished,
      dateModified,
      articleSection: section,
      author: { '@type': 'Organization', name: 'Contre-Évidence' },
      publisher: { '@type': 'Organization', name: 'Contre-Évidence' },
      isAccessibleForFree: true
    };
    Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.ceGeneratedArticle = '1';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  function injectStyles() {
    if (document.getElementById('ce-pedagogy-styles')) return;
    const style = document.createElement('style');
    style.id = 'ce-pedagogy-styles';
    style.textContent = `
      .ce-pedagogy{margin:1.55rem 0 2rem;padding:1.15rem;border:1px solid rgba(16,24,32,.14);border-radius:20px;background:linear-gradient(135deg,#101820,#1b2a36);color:#f6f1e7;box-shadow:0 12px 28px rgba(16,24,32,.12)}
      .ce-pedagogy *{box-sizing:border-box}.ce-pedagogy-kicker{margin:0 0 .85rem;color:#e8c979;font-size:.76rem;font-weight:900;letter-spacing:.09em;text-transform:uppercase}
      .ce-pedagogy h3{margin:.05rem 0 .8rem;color:#fff;font-size:1.14rem}.ce-pedagogy p{color:#e6eaed}.ce-pedagogy-note{margin:.8rem 0 0!important;color:#cfd7dc!important;font-size:.84rem}
      .ce-flow-list{display:grid;gap:.55rem}.ce-flow-row{display:grid;grid-template-columns:minmax(0,1fr) 34px minmax(0,1.15fr);align-items:center;gap:.45rem;padding:.68rem .78rem;border-radius:14px;background:rgba(255,255,255,.065);border:1px solid rgba(255,255,255,.10)}
      .ce-flow-row strong{color:#fff}.ce-flow-arrow{text-align:center;color:#e8c979;font-size:1.18rem;font-weight:900}.ce-flow-outcome{color:#f6f1e7}
      .ce-formula{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.55rem;align-items:stretch}.ce-formula-step{padding:.85rem .7rem;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.11);text-align:center}.ce-formula-step b{display:block;color:#e8c979;font-size:1.18rem;margin-bottom:.18rem}.ce-formula-step span{display:block;color:#f6f1e7;font-size:.86rem}.ce-formula-step.is-result{background:#f6f1e7}.ce-formula-step.is-result b,.ce-formula-step.is-result span{color:#101820}
      .ce-week-bar{display:flex;min-height:78px;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.14);background:#fff}.ce-week-segment{display:flex;align-items:center;justify-content:center;padding:.35rem .22rem;text-align:center;font-size:.75rem;font-weight:850;line-height:1.15;color:#101820;border-right:1px solid rgba(16,24,32,.18)}.ce-week-segment:last-child{border-right:0}.ce-week-segment:nth-child(2n){background:#e8c979}.ce-week-segment:nth-child(2n+1){background:#f6f1e7}.ce-week-segment.is-chosen{background:#d4ab56}
      .ce-tree-label{margin:.2rem 0 .8rem;color:#e8c979;font-size:.78rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.ce-decision-tree{position:relative}.ce-decision-tree::before{content:'Budget après la décision';display:block;margin:0 auto 1rem;width:max-content;max-width:100%;padding:.55rem .8rem;border-radius:999px;background:#101820;color:#e8c979;font-weight:900;font-size:.82rem}.ce-decision-tree .decision-card{position:relative;border-color:rgba(16,24,32,.18);box-shadow:0 8px 18px rgba(16,24,32,.05)}.ce-decision-tree .decision-card::before{content:'↓';display:block;margin:-.35rem 0 .35rem;color:#9a6d14;font-weight:900}
      @media(max-width:760px){.ce-flow-row{grid-template-columns:1fr}.ce-flow-arrow{transform:rotate(90deg)}.ce-formula{grid-template-columns:1fr 1fr}.ce-week-bar{display:grid;grid-template-columns:1fr}.ce-week-segment{min-height:48px;border-right:0;border-bottom:1px solid rgba(16,24,32,.18)}.ce-week-segment:last-child{border-bottom:0}.ce-decision-tree::before{margin-left:0}}
      @media(max-width:460px){.ce-formula{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function findH2(fragment) {
    return [...document.querySelectorAll('main article.prose > h2')].find(h => (h.textContent || '').toLowerCase().includes(fragment.toLowerCase()));
  }

  function afterNearest(start, selector, node) {
    let cursor = start?.nextElementSibling;
    while (cursor) {
      if (cursor.matches?.(selector)) { cursor.insertAdjacentElement('afterend', node); return true; }
      if (cursor.tagName === 'H2') break;
      cursor = cursor.nextElementSibling;
    }
    start?.insertAdjacentElement('afterend', node);
    return false;
  }

  function visualShell(kicker, title, inner, note='') {
    const figure = document.createElement('figure');
    figure.className = 'ce-pedagogy';
    figure.setAttribute('role','group');
    figure.setAttribute('aria-label', title);
    figure.innerHTML = `<div class="ce-pedagogy-kicker">${kicker}</div><h3>${title}</h3>${inner}${note ? `<figcaption class="ce-pedagogy-note">${note}</figcaption>` : ''}`;
    return figure;
  }

  function addWorkingLessMap() {
    if (file() !== 'travailler-moins-vivre-mieux.html' || document.querySelector('[data-ce-visual="working-less-map"]')) return;
    const h2 = findH2('qu’est-ce qui vous manque réellement');
    if (!h2) return;
    const rows = [
      ['Trajet', 'Télétravail / proximité / mobilité'],
      ['Fatigue', 'Charge / santé / poste'],
      ['Temps familial', 'Horaires / 80 % / organisation du foyer'],
      ['Projet', 'Jour dédié / congé / transition'],
      ['Métier', 'Adaptation / autre poste / reconversion']
    ].map(([a,b]) => `<div class="ce-flow-row"><strong>${a}</strong><span class="ce-flow-arrow">→</span><span class="ce-flow-outcome">${b}</span></div>`).join('');
    const visual = visualShell('Diagnostic → levier', 'Ce qui vous pèse n’appelle pas toujours moins de travail', `<div class="ce-flow-list">${rows}</div>`, 'Le bon levier supprime la contrainte réelle avant de sacrifier du revenu.');
    visual.dataset.ceVisual = 'working-less-map';
    afterNearest(h2, '.decision-grid', visual);
  }

  function addEightyPercentVisual() {
    if (file() !== 'passer-80-pourcent-cout-reel.html' || document.querySelector('[data-ce-visual="eighty-formula"]')) return;
    const h2 = findH2('80 % de temps ne signifie pas 80 % de revenu disponible');
    if (!h2) return;
    const inner = `<div class="ce-formula">
      <div class="ce-formula-step"><b>3 000 €</b><span>revenu de départ</span></div>
      <div class="ce-formula-step"><b>−500 €</b><span>baisse de salaire</span></div>
      <div class="ce-formula-step"><b>+120 €</b><span>coûts de travail évités</span></div>
      <div class="ce-formula-step is-result"><b>−380 €</b><span>coût net mensuel</span></div>
    </div><div class="ce-formula" style="margin-top:.55rem"><div class="ce-formula-step is-result" style="grid-column:1/-1"><b>380 € ÷ 36 h ≈ 10,60 €/h récupérée</b><span>si les 36 heures sont réellement personnelles</span></div></div>`;
    const visual = visualShell('Avant / après', 'Une journée libre se juge au coût net et au temps réellement rendu', inner, 'Exemple pédagogique : le revenu après passage doit être calculé selon votre situation réelle.');
    visual.dataset.ceVisual = 'eighty-formula';
    afterNearest(h2, '.case-study', visual);
  }

  function addWeekVisual() {
    if (file() !== 'temps-energie-qualite-vie.html' || document.querySelector('[data-ce-visual="week-168"]')) return;
    const h2 = findH2('une semaine contient 168 heures');
    if (!h2) return;
    const segments = [
      ['Sommeil','56 h',33.33,''],['Travail','45 h',26.79,''],['Trajets','7 h',4.17,''],['Maintenance','20 h',11.90,''],['Famille','20 h',11.90,''],['Récupération','10 h',5.95,''],['Temps choisi','10 h',5.95,'is-chosen']
    ].map(([label,hours,width,cls]) => `<div class="ce-week-segment ${cls}" style="flex-basis:${width}%">${label}<br>${hours}</div>`).join('');
    const visual = visualShell('168 heures', 'La semaine réelle : le temps choisi n’est que ce qui reste après les contraintes', `<div class="ce-week-bar">${segments}</div>`, 'Exemple de cartographie uniquement. Remplacez ces chiffres par votre semaine réelle : l’objectif est de rendre visibles les blocs qui capturent le temps.');
    visual.dataset.ceVisual = 'week-168';
    afterNearest(h2, '.decision-grid', visual);
  }

  function styleFinanceDecisionTree() {
    if (file() !== 'patrimoine-permet-il-travailler-moins.html') return;
    const article = prose();
    if (!article || article.querySelector('[data-ce-visual="finance-tree"]')) return;
    const grids = [...article.querySelectorAll(':scope > .decision-grid')];
    const grid = grids.find(g => /budget encore positif/i.test(g.textContent || ''));
    if (!grid) return;
    grid.classList.add('ce-decision-tree');
    grid.dataset.ceVisual = 'finance-tree';
    grid.setAttribute('role','group');
    grid.setAttribute('aria-label','Arbre de décision financière : budget positif, déficit temporaire ou déficit permanent');
    const caption = document.createElement('p');
    caption.className = 'ce-tree-label';
    caption.textContent = 'Budget positif → patrimoine intact · déficit temporaire → transition chiffrée · déficit permanent → modèle à revoir';
    grid.insertAdjacentElement('beforebegin', caption);
  }

  function run() {
    ensureArticleMetadata();
    injectStyles();
    addWorkingLessMap();
    addEightyPercentVisual();
    addWeekVisual();
    styleFinanceDecisionTree();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once:true });
  else run();
})();
