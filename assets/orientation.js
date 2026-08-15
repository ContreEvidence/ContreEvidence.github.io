(() => {
  'use strict';

  const run = () => {
    const path = window.location.pathname;
    const nested = /\/(articles|themes|dossiers|fiches-metiers)\//.test(path);
    const prefix = nested ? '../' : '';
    const toolsHref = `${prefix}bibliotheque.html?type=outil`;

    const renameText = (root = document.body) => {
      if (!root || root.dataset.ceLabelsRenamed) return;
      const replacements = new Map([
        ['Budget, consommation & sécurité financière', 'Argent au quotidien'],
        ['Budget, consommation & sécurité', 'Argent au quotidien'],
        ['Budget, consommation, sécurité financière, immobilier, investissement, retraite & transmission : entrez par la décision à comprendre.', 'Argent au quotidien, immobilier, investissement, retraite & transmission : entrez par la décision à comprendre.']
      ]);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const trimmed = node.nodeValue.trim();
        if (!replacements.has(trimmed)) continue;
        node.nodeValue = node.nodeValue.replace(trimmed, replacements.get(trimmed));
      }
      root.dataset.ceLabelsRenamed = '1';
    };
    renameText();

    if (/\/parcours-vie-professionnelle\.html$/.test(path)) {
      const legacyTargets = {
        formation: 'a.situation-card[href="dossiers/quitter-travail-reconversion-sans-se-fragiliser.html"]',
        salariat: 'a.situation-card[href="dossiers/plan-30-jours-recherche-emploi.html"]',
        entrepreneuriat: 'a.situation-card[href="dossiers/lancer-activite-sans-quitter-emploi.html"]'
      };
      Object.entries(legacyTargets).forEach(([id, selector]) => {
        const target = document.querySelector(selector);
        if (target && !target.id) target.id = id;
      });
      const requested = window.location.hash.replace(/^#/, '');
      if (legacyTargets[requested]) {
        requestAnimationFrame(() => document.getElementById(requested)?.scrollIntoView({block:'start'}));
      }
    }

    /* Ponts dossier -> outil pour les intentions d'acquisition les plus fortes.
       Le bloc est ajouté près de la réponse courte sans remplacer le contenu éditorial. */
    const toolMap = {
      '/dossiers/combien-epargne-avant-demissionner.html': {
        href:'../simulateur-epargne-demission.html',
        title:'Calculez votre runway avec vos propres chiffres',
        text:'Dépenses essentielles, revenus certains, réserve protégée et scénario adverse : transformez votre épargne en mois de marge.'
      },
      '/dossiers/quitter-cdi-avec-credit-immobilier.html': {
        href:'../simulateur-epargne-demission.html',
        title:'Mesurez combien de mois le foyer peut réellement financer',
        text:'Le crédit entre dans vos dépenses essentielles : testez la marge créée par les revenus qui restent et les liquidités disponibles.'
      },
      '/dossiers/passer-80-pourcent-cout-reel.html': {
        href:'../simulateur-80-pourcent-cout-reel.html',
        title:'Calculez le prix réel de votre journée libérée',
        text:'Saisissez le revenu net attendu, les coûts de travail évités et les heures réellement récupérées.'
      },
      '/dossiers/travailler-moins-vivre-mieux.html': {
        href:'../simulateur-80-pourcent-cout-reel.html',
        title:'Testez ce que vous coûterait un passage à 80 %',
        text:'Comparez le coût net mensuel au nombre d’heures de vie réellement récupérées avant de comparer les autres options.'
      },
      '/dossiers/comparer-deux-offres-emploi.html': {
        href:'../outil-comparer-offres-emploi.html',
        title:'Mettez les deux offres sur la même base',
        text:'Revenu disponible et temps capturé sont calculés ; contrat, manager, risque, progression et inconnues restent séparés, sans faux score.'
      },
      '/dossiers/decision-plan-30-90-jours.html': {
        href:'../outil-plan-30-90-jours.html',
        title:'Construisez maintenant votre plan 30/90 jours',
        text:'Objectif, non-négociable, première action, jalons, mesure et condition de revue : passez du raisonnement à l’exécution.'
      }
    };
    const tool = Object.entries(toolMap).find(([suffix]) => path.endsWith(suffix))?.[1];
    const prose = document.querySelector('main article.prose');
    if (tool && prose && !prose.querySelector('.ce-tool-bridge')) {
      const bridge = document.createElement('div');
      bridge.className = 'decision-box ce-tool-bridge';
      bridge.innerHTML = `<h3>Tester avec vos données</h3><p><strong>${tool.title}</strong><br>${tool.text}</p><p><a class="btn btn-primary" href="${tool.href}">Ouvrir l’outil →</a></p>`;
      const answer = prose.querySelector(':scope > .answer-box, :scope > .voice-note');
      if (answer) answer.insertAdjacentElement('afterend', bridge);
      else prose.insertAdjacentElement('afterbegin', bridge);
    }

    if (/\/dossiers\/[^/]+\.html$/.test(path) && prose && !prose.querySelector('.ce-signature-lens')) {
      const lens = document.createElement('div');
      lens.className = 'decision-box ce-signature-lens';
      lens.innerHTML = `<h3>Avant de refermer ce dossier</h3><ul><li><strong>L’intuition qui peut tromper :</strong> quelle réponse paraissait évidente avant même d’avoir comparé ?</li><li><strong>La variable oubliée :</strong> quel coût, temps, risque ou dépendance n’entre pas dans le chiffre principal ?</li><li><strong>Ce qui ferait changer la réponse :</strong> quel fait ou quel seuil inverserait réellement votre choix ?</li><li><strong>Le contrôle :</strong> quand reverrez-vous cette décision, et quel indicateur regarderez-vous alors ?</li></ul>`;
      const related = prose.querySelector(':scope > .ce-related');
      if (related) related.insertAdjacentElement('beforebegin', lens);
      else prose.appendChild(lens);
    }

    const lifeLinks = [
      ['dossiers/finances-difficiles-sortir-decouvert-dettes.html','Je finis le mois à découvert ou les dettes commencent à s’empiler.'],
      ['dossiers/quand-vie-change-sante-separation-revenu.html','Ma santé, mon couple ou mes revenus changent brutalement.'],
      ['dossiers/couple-famille-argent-temps.html','Comment répartir argent, temps et risques dans le foyer ?'],
      ['dossiers/temps-energie-qualite-vie.html','Je gagne ou j’épargne, mais je manque surtout de temps et d’énergie.'],
      ['dossiers/quand-arreter-optimiser-utiliser-patrimoine.html','Tout va plutôt bien : qu’est-ce que mon patrimoine doit maintenant rendre possible ?'],
      ['outil-plan-30-90-jours.html','J’ai décidé. Comment passer concrètement à l’action ?']
    ];

    const isHome = path === '/' || /\/index\.html$/.test(path);
    if (isHome && !document.querySelector('[data-ce-life-routes="home"]')) {
      const sections = [...document.querySelectorAll('main > section')];
      const before = sections.find(section => section.querySelector('.section-head .kicker')?.textContent.trim() === 'Quand quelque chose doit changer');
      if (before) {
        const section = document.createElement('section');
        section.dataset.ceLifeRoutes = 'home';
        section.innerHTML = `<div class="container"><div class="section-head"><div class="kicker">Quand la vraie vie déborde des rubriques</div><h2>Parfois, le problème n’est ni seulement financier ni seulement professionnel.</h2><p>Budget qui ne tient plus, santé, séparation, famille, manque de temps ou au contraire situation déjà solide : partez directement de ce qui change dans votre vie.</p></div><div class="question-grid">${lifeLinks.map(([href,label]) => `<a class="question-link" href="${href}"><strong>${label}</strong><span>→</span></a>`).join('')}</div></div>`;
        before.insertAdjacentElement('beforebegin', section);
      }
    }

    if (/\/parcours-de-vie\.html$/.test(path) && !document.querySelector('[data-ce-life-routes="journey"]')) {
      const buildGrid = document.querySelector('#construire .situation-grid');
      if (buildGrid && !buildGrid.querySelector('a[href="outil-plan-30-90-jours.html"]')) {
        const card = document.createElement('a');
        card.className = 'situation-card';
        card.href = 'outil-plan-30-90-jours.html';
        card.innerHTML = '<span class="number">E</span><h3>J’ai choisi. Je veux maintenant passer à l’action</h3><p>Transformer la décision en première action, jalon à 30 jours, résultat à 90 jours et date de revue.</p>';
        buildGrid.appendChild(card);
      }
      const sections = [...document.querySelectorAll('main > section')];
      const before = sections.find(section => section.querySelector('.section-head .kicker')?.textContent.trim() === 'Ou entrez directement par votre terrain');
      if (before) {
        const section = document.createElement('section');
        section.className = 'journey-section';
        section.dataset.ceLifeRoutes = 'journey';
        section.innerHTML = `<div class="container"><div class="journey-intro"><div class="kicker">Situations transversales</div><h2>Votre problème ne rentre pas proprement dans une case ? C’est normal.</h2><p>Certaines décisions touchent en même temps l’argent, le travail, le logement, la santé, le couple ou le temps disponible. Commencez par la situation réelle, pas par le domaine administratif.</p></div><div class="situation-grid">${lifeLinks.map(([href,label],index) => `<a class="situation-card" href="${href}"><span class="number">${String.fromCharCode(65+index)}</span><h3>${label}</h3><p>${index===0?'Stabiliser avant de chercher à optimiser.':index===1?'Protéger les options pendant que la situation se stabilise.':index===2?'Rendre visibles les transferts d’argent, de temps et de carrière.':index===3?'Regarder ce que les chiffres faciles à mesurer oublient.':index===4?'Passer de l’accumulation à l’usage choisi de la marge créée.':'Transformer le choix en actions, jalons et date de revue.'}</p></a>`).join('')}</div></div>`;
        before.insertAdjacentElement('beforebegin', section);
      }
    }

    const budgetLinks = document.querySelector('.patrimoine-hub .pillar#budget .pillar-links');
    if (budgetLinks && !budgetLinks.querySelector('[data-ce-financial-distress]')) {
      const link = document.createElement('a');
      link.dataset.ceFinancialDistress = '1';
      link.href = '../dossiers/finances-difficiles-sortir-decouvert-dettes.html';
      link.textContent = 'Si le mois ne tient plus : découvert, dettes et factures →';
      budgetLinks.insertAdjacentElement('afterbegin', link);
    }

    const foundation = document.querySelector('.patrimoine-hub .foundation');
    const pillars = document.querySelector('.patrimoine-hub .pillar-grid');
    if (foundation && pillars && !foundation.dataset.ceReordered) {
      pillars.insertAdjacentElement('afterend', foundation);
      foundation.dataset.ceReordered = '1';
    }

    const flatLinks = document.querySelector('.ce-flat-links');
    if (flatLinks && !flatLinks.querySelector('[data-key="outils"]')) {
      const link = document.createElement('a');
      link.className = 'ce-flat-link';
      link.dataset.key = 'outils';
      link.href = toolsHref;
      link.textContent = 'Outils';
      flatLinks.appendChild(link);
    }

    const fallbackNav = document.querySelector('.ce-fallback-header nav');
    if (!flatLinks && fallbackNav && !fallbackNav.querySelector('[data-ce-tools-link]') && ![...fallbackNav.links].some(a => /[?&]type=outil\b/.test(a.href))) {
      const link = document.createElement('a');
      link.href = toolsHref;
      link.dataset.ceToolsLink = '1';
      link.textContent = 'Outils';
      fallbackNav.appendChild(link);
    }

    const params = new URLSearchParams(window.location.search);
    const isTools = /\/(simulateur|outil)[^/]*\.html$/i.test(path) || (path.endsWith('/bibliotheque.html') && params.get('type') === 'outil');
    if (isTools && flatLinks) {
      flatLinks.querySelectorAll('.ce-flat-link.is-current').forEach(el => el.classList.remove('is-current'));
      flatLinks.querySelector('[data-key="outils"]')?.classList.add('is-current');
    }

    const header = document.querySelector('.ce-flat-header');
    if (header && !header.dataset.ceCompactBound) {
      header.dataset.ceCompactBound = '1';
      const syncCompact = () => header.classList.toggle('is-compact', window.innerWidth >= 1041 && window.scrollY > 150);
      window.addEventListener('scroll', syncCompact, { passive:true });
      window.addEventListener('resize', syncCompact);
      syncCompact();
    }

    const flatNav = document.querySelector('.ce-flat-nav');
    if (flatNav && !flatNav.dataset.ceTabletBound) {
      flatNav.dataset.ceTabletBound = '1';
      const syncTablet = () => {
        if (window.innerWidth >= 760) flatNav.style.display = 'block';
        else flatNav.style.removeProperty('display');
      };
      window.addEventListener('resize', syncTablet);
      syncTablet();
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once:true });
  else run();
  setTimeout(run, 0);
})();