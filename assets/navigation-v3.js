(() => {
  'use strict';

  const VERSION = '20260815-plain-1';
  if (document.documentElement.dataset.ceNavigation === VERSION) return;
  document.documentElement.dataset.ceNavigation = VERSION;

  const header = document.querySelector('#site-header, header');
  if (!header) return;

  const path = window.location.pathname;
  const nested = /\/(articles|themes|dossiers|fiches-metiers)\//.test(path);
  const prefix = nested ? '../' : '';
  const u = p => `${prefix}${p}`;
  const params = new URLSearchParams(window.location.search);

  const links = [
    ['Patrimoine','themes/argent.html','patrimoine'],
    ['Vie professionnelle','parcours-vie-professionnelle.html','vie-pro'],
    ['Fenêtres','hors-cadre.html','hors-cadre'],
    ['Outils','bibliotheque.html?type=outil','outils']
  ];
  const mobileLinks = [
    ['Bibliothèque','bibliotheque.html'],
    ['Par où commencer ?','parcours-de-vie.html'],
    ['Mon espace','mon-espace.html']
  ];

  header.className = 'ce-flat-header';
  header.innerHTML = `<div class="ce-flat-shell ce-flat-top">
    <a class="ce-flat-brand" href="${u('index.html')}"><img src="${u('assets/logo.png')}?v=20260808-14" alt="Logo Contre-évidence"><span class="ce-flat-brand-copy"><strong>CONTRE-<em>ÉVIDENCE</em></strong><small>PATRIMOINE · VIE PROFESSIONNELLE · FENÊTRES</small></span></a>
    <form class="ce-search" action="${u('bibliotheque.html')}" method="get" role="search"><input type="search" name="q" aria-label="Rechercher sur le site" placeholder="Rechercher : emploi, formation, immobilier, investissement…" autocomplete="off"><button type="submit">Rechercher</button></form>
    <div class="ce-flat-actions"><a class="ce-start-link" href="${u('parcours-de-vie.html')}">Par où commencer ?</a><button class="ce-flat-toggle" type="button" aria-expanded="false" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button></div>
  </div><nav class="ce-flat-nav" aria-label="Navigation principale"><div class="ce-flat-shell ce-flat-links">${links.map(([label,p,key]) => `<a class="ce-flat-link" data-key="${key}" href="${u(p)}">${label}</a>`).join('')}${mobileLinks.map(([label,p]) => `<a class="ce-flat-link ce-menu-only" href="${u(p)}">${label}</a>`).join('')}</div></nav>`;

  const q = params.get('q');
  if (q) header.querySelector('.ce-search input').value = q;

  const isTools = /\/(simulateur|outil)[^/]*\.html$/i.test(path) || (path.endsWith('/bibliotheque.html') && params.get('type') === 'outil');
  let current = isTools ? 'outils'
    : path.includes('/hors-cadre') ? 'hors-cadre'
    : path.includes('/themes/argent') || path.includes('/parcours-argent') || path.includes('/marches-analyses-avancees') || path.includes('/dossiers/finances-') || path.includes('/dossiers/audit-budget') || path.includes('/dossiers/liquidites-reserve') || path.includes('/dossiers/rembourser-credit') || path.includes('/dossiers/assurer-ou-autoassurer') || path.includes('/dossiers/vendre-ou-conserver-bien-immobilier') || path.includes('/dossiers/immobilier-') || path.includes('/dossiers/location-') || path.includes('/dossiers/garages-') || path.includes('/dossiers/classes-actifs') ? 'patrimoine'
    : path.includes('/fiches-metiers') || path.includes('/parcours-vie-professionnelle') || path.includes('/themes/travail') || path.includes('/themes/entreprendre') || path.includes('/moins-de-25-ans') || path.includes('/videos') || path.includes('/dossiers/plan-30-jours') || path.includes('/dossiers/calculer-prix') || path.includes('/dossiers/debloquer') || path.includes('/dossiers/negocier-salaire') || path.includes('/dossiers/dependance-gros-client') || path.includes('/dossiers/tresorerie-bfr') || path.includes('/dossiers/devenir-manager') || path.includes('/dossiers/competent-mais-invisible') || path.includes('/dossiers/capacite-refuser-travail') || path.includes('/dossiers/formation-vaut-elle-le-cout') || path.includes('/dossiers/quitter-emploi-stable') || path.includes('/dossiers/embaucher-ou-sous-traiter') || path.includes('/dossiers/competences-qualification-employabilite') || path.includes('/dossiers/metiers-fonctions-organisation-entreprise') || path.includes('/dossiers/apprendre-developper-competences') || path.includes('/dossiers/management-relations-conflits') || path.includes('/dossiers/regles-responsabilites-fautes-travail') || path.includes('/dossiers/prejuges-biais-monde-professionnel') || path.includes('/dossiers/sante-travail-equilibre-vie-pro-perso') ? 'vie-pro'
    : '';

  if (!current) {
    const signals = `${document.querySelector('.theme-link')?.getAttribute('href') || ''} ${document.querySelector('.article-hero .kicker')?.textContent || ''} ${document.querySelector('a.back')?.getAttribute('href') || ''} ${document.title}`.toLowerCase();
    if (/argent|finance|patrimoine|immobilier|investissement|retraite|transmission|allocation|etf|pea|assurance-vie/.test(signals)) current = 'patrimoine';
    else if (/travail|vie professionnelle|entreprendre|entrepreneuriat|emploi|carrière|formation|reconversion|candidature|entretien|métier|compétence|management|employabilité/.test(signals)) current = 'vie-pro';
  }
  if (current) header.querySelector(`[data-key="${current}"]`)?.classList.add('is-current');

  const toggle = header.querySelector('.ce-flat-toggle');
  const setOpen = open => {
    header.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    if (toggle) toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  toggle?.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
  header.querySelectorAll('.ce-flat-link').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });

  const syncMobileOnly = () => header.querySelectorAll('.ce-menu-only').forEach(a => { a.style.display = window.innerWidth < 760 ? 'flex' : 'none'; });
  window.addEventListener('resize', syncMobileOnly);
  syncMobileOnly();

  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };

  function applyPlainLanguageEntrances() {
    const isHome = path === '/' || /\/index\.html$/.test(path);

    if (isHome) {
      setText('.beginner-hero .kicker', 'Comprendre · choisir · avancer');
      setText('.beginner-hero h1', 'Commencez par ce que vous vivez, pas par une rubrique.');
      setText('.beginner-hero a[href*="#se-situer"]', 'Je veux comprendre où j’en suis');
      setText('.beginner-hero a[href*="#arbitrer"]', 'Je dois faire un choix');
      setText('.beginner-hero a[href*="#construire"]', 'Je sais ce que je veux, mais pas comment y arriver');
      setText('.need-intro .section-head h2', 'Commencez par la phrase qui vous ressemble aujourd’hui.');
      setText('.need-card:nth-of-type(1) .need-step', '01 · Comprendre ma situation');
      setText('.need-card:nth-of-type(1) .need-action', 'M’aider à y voir clair →');
      setText('.need-card:nth-of-type(2) .need-step', '02 · Faire un choix');
      setText('.need-card:nth-of-type(2) h3', '« J’hésite entre plusieurs options. »');
      setText('.need-card:nth-of-type(2) .need-action', 'Comparer mes options →');
      setText('.need-card:nth-of-type(3) .need-step', '03 · Construire mon chemin');
      setText('.need-card:nth-of-type(3) h3', '« Je sais ce que je veux, mais pas encore comment y arriver. »');
      setText('.need-card:nth-of-type(3) .need-action', 'Construire mon plan →');
    }

    if (path.endsWith('/parcours-de-vie.html')) {
      setText('.article-hero h1', 'Commencez par ce qui vous pose problème aujourd’hui.');
      setText('.decision-entry a:nth-child(1) .state', '01 · Comprendre ma situation');
      setText('.decision-entry a:nth-child(1) .go', 'M’aider à y voir clair →');
      setText('.decision-entry a:nth-child(2) .state', '02 · Faire un choix');
      setText('.decision-entry a:nth-child(2) h2', 'J’hésite entre plusieurs options.');
      setText('.decision-entry a:nth-child(2) .go', 'Comparer mes options →');
      setText('.decision-entry a:nth-child(3) .state', '03 · Construire mon chemin');
      setText('.decision-entry a:nth-child(3) h2', 'Je sais ce que je veux, mais pas encore comment y arriver.');
      setText('.decision-entry a:nth-child(3) .go', 'Construire mon plan →');
      setText('#se-situer .journey-intro .kicker', '01 · Comprendre ma situation');
      setText('#se-situer .journey-intro h2', 'D’abord, y voir clair.');
      setText('#arbitrer .journey-intro .kicker', '02 · Faire un choix');
      setText('#arbitrer .journey-intro h2', 'Si plusieurs options se tiennent, comparez ce qu’elles changent vraiment.');
      setText('#construire .journey-intro .kicker', '03 · Construire mon chemin');
      setText('#construire .journey-intro h2', 'Vous savez ce que vous voulez : transformez-le en étapes.');
    }

    if (path.endsWith('/themes/argent.html')) {
      setText('.maturity-head h2', 'Commencez par ce que vous devez faire maintenant.');
      setText('.maturity-card.build .step', '02 · Je fais grandir mon patrimoine');
      setText('.maturity-card.build h3', 'Faire travailler mon épargne sans me disperser.');
      setText('.maturity-card.build p', 'Pour comparer immobilier, placements, crédit et diversification.');
      setText('.maturity-card.pilot .step', '03 · J’organise l’ensemble');
      setText('.maturity-card.pilot h3', 'Voir tout mon patrimoine avant de modifier un placement.');
      setText('.maturity-card.pilot p', 'Quand vous avez déjà plusieurs placements, biens, dettes ou projets à faire tenir ensemble.');
      const pilotItems = document.querySelectorAll('.maturity-card.pilot li');
      ['répartition globale','ce qui est trop concentré et ce qui reste disponible','scénarios défavorables','choix entre placements et transmission'].forEach((text,index) => { if (pilotItems[index]) pilotItems[index].textContent = text; });
    }

    if (path.endsWith('/parcours-vie-professionnelle.html')) {
      setText('.article-hero .voice-signature', 'Votre poste dit ce que vous faites aujourd’hui. Vos compétences, vos résultats, votre santé et les portes qui restent ouvertes disent où vous pouvez aller demain.');
      setText('.article-hero > .container > p', 'Le problème du jour compte. Mais il faut aussi regarder ce que votre travail vous apporte aujourd’hui, ce qu’il vous coûte et les portes qu’il vous ouvre pour la suite.');
      setText('.pro-frame h2', 'Deux questions : où en suis-je, et qu’est-ce que je dois régler maintenant ?');
      setText('.pro-frame > p', 'Vous pouvez avoir un problème immédiat à résoudre — trouver un emploi, comparer une offre, négocier, changer de voie ou partir — ou avoir besoin de comprendre ce que votre situation prépare pour la suite. Les deux questions ne se traitent pas de la même façon.');
      setText('.trajectory-choice a:nth-child(1) strong', '1 · Je veux comprendre où va ma vie professionnelle →');
      setText('.trajectory-choice a:nth-child(1) span', '8 situations concrètes pour voir ce que votre travail construit, ce qui vous fragilise et ce qu’il faudrait renforcer maintenant.');
      setText('.trajectory-choice a:nth-child(2) strong', '2 · J’ai un problème précis à régler maintenant →');
      setText('.pro-actions .btn-primary', 'Faire le point sur mes atouts et mes options →');
      setText('.situation-head h2', 'Choisissez la situation qui ressemble le plus à la vôtre.');
      setText('.situation-head p', 'Chaque porte mène d’abord à la réponse utile pour le problème du moment, puis aux explications plus détaillées si vous voulez aller plus loin.');
    }
  }

  applyPlainLanguageEntrances();

  if (!/\/(index\.html)?$/.test(path)) {
    document.querySelector('.ce-breadcrumb')?.remove();
    const h1 = document.querySelector('main h1');
    const crumb = document.createElement('div');
    crumb.className = 'ce-breadcrumb';
    let middle = '';
    if (current === 'patrimoine') middle = `<span class="sep">›</span><a href="${u('themes/argent.html')}">Patrimoine</a>`;
    else if (current === 'vie-pro') middle = `<span class="sep">›</span><a href="${u('parcours-vie-professionnelle.html')}">Vie professionnelle</a>`;
    else if (current === 'hors-cadre' && !path.endsWith('/hors-cadre.html')) middle = `<span class="sep">›</span><a href="${u('hors-cadre.html')}">Fenêtres</a>`;
    const label = path.includes('/bibliotheque') ? 'Tous les contenus' : (h1?.textContent?.trim() || document.title.split('—')[0].trim());
    crumb.innerHTML = `<div class="ce-breadcrumb-inner"><a href="${u('index.html')}">Accueil</a>${middle}<span class="sep">›</span><span class="current">${label}</span></div>`;
    header.insertAdjacentElement('afterend', crumb);
  }

  const footer = document.querySelector('footer .foot, footer .container');
  if (footer && !footer.querySelector('.ce-footer-socials')) {
    const socials = document.createElement('div');
    socials.className = 'ce-footer-socials';
    socials.innerHTML = '<strong>Suivre Contre-Évidence</strong><a href="https://www.youtube.com/channel/UCxzyhABkEwWcGxmLyQvXISA" target="_blank" rel="noopener">YouTube</a><a href="https://www.instagram.com/contre_evidence/" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com/profile.php?id=61592757877017" target="_blank" rel="noopener">Facebook</a><a href="https://www.tiktok.com/@contreevidence" target="_blank" rel="noopener">TikTok</a>';
    footer.appendChild(socials);
  }
})();