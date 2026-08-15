(() => {
  'use strict';

  const slugify = (s='') => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,70) || 'section';

  const objectiveGuides = {
    'accepter-emploi-plus-loin-cout-trajet.html': {
      goal:'Qu’est-ce que le nouveau poste doit réellement améliorer : revenu, carrière, stabilité, intérêt du travail ou qualité de vie ?',
      constraint:'Quel temps de trajet, coût ou fatigue devient non négociable ?',
      reverse:'À partir de quel salaire, télétravail ou gain de carrière votre réponse change-t-elle ?'
    },
    'formation-vaut-elle-le-cout.html': {
      goal:'Quel verrou précis la formation doit-elle lever : compétence, diplôme exigé, crédibilité, réseau ou accès à un métier ?',
      constraint:'Combien de temps, d’argent et de revenu pouvez-vous réellement sacrifier ?',
      reverse:'Quel taux de débouché, gain salarial ou alternative plus courte ferait changer le choix ?'
    },
    'lancer-activite-sans-quitter-emploi.html': {
      goal:'Cherchez-vous un complément de revenu, une preuve de marché ou une vraie sortie du salariat ?',
      constraint:'Quel revenu minimal, quelle sécurité et quel temps personnel devez-vous préserver ?',
      reverse:'À partir de combien de clients récurrents ou de marge mensuelle le passage à temps plein devient-il raisonnable ?'
    },
    'acheter-ou-louer-si-on-risque-demenager.html': {
      goal:'Cherchez-vous surtout stabilité, rendement, contrôle du logement ou flexibilité géographique ?',
      constraint:'Quelle probabilité de déménagement et quelle perte maximale à la revente acceptez-vous ?',
      reverse:'À partir de quelle durée de détention l’achat reprend-il l’avantage dans vos hypothèses ?'
    },
    'finances-cadre-global.html': {
      goal:'À quoi le patrimoine doit-il servir : sécurité, projets, liberté de choix, retraite, transmission ou plusieurs objectifs séparés ?',
      constraint:'Quelles réserves et concentrations ne voulez-vous jamais franchir ?',
      reverse:'Quel événement de vie justifie réellement de revoir l’organisation du patrimoine ?'
    },
    'finances-allocation-portefeuille.html': {
      goal:'Quel horizon et quel usage correspondent à chaque partie du portefeuille ?',
      constraint:'Quelle baisse maximale pouvez-vous supporter sans vendre au mauvais moment ?',
      reverse:'Quel changement d’horizon, de revenu ou de concentration globale justifierait une autre répartition ?'
    },
    'finances-transmission-patrimoine.html': {
      goal:'Que voulez-vous obtenir : protéger, aider maintenant, avantager, préserver un actif ou réduire un futur conflit ?',
      constraint:'Quel capital devez-vous absolument conserver pour votre propre longévité et vos besoins ?',
      reverse:'Quel changement familial, patrimonial ou de disponibilité du capital rendrait le montage actuel inadapté ?'
    },
    'finances-retraite-decumulation.html': {
      goal:'Quel niveau de vie et quels projets le patrimoine doit-il financer après les pensions ?',
      constraint:'Quelles dépenses essentielles ne doivent jamais dépendre d’une bonne année de marché ?',
      reverse:'À partir de quel manque annuel, quelle longévité ou quelle baisse de marché faut-il réduire le risque ou les dépenses ?'
    },
    'gestion-pilotee-comparer-performances.html': {
      goal:'Que doit produire la gestion pilotée : performance, simplicité, discipline, diversification ou délégation complète ?',
      constraint:'Quels frais et quel écart à votre point de comparaison êtes-vous prêt à accepter pour ce service ?',
      reverse:'Après combien d’années ou quel écart net de frais la solution cesse-t-elle de justifier son coût ?'
    },
    'cout-reel-voiture-achat-credit-loa-lld.html': {
      goal:'La voiture doit-elle minimiser le coût, maximiser la fiabilité, préserver du cash ou répondre à un besoin d’usage particulier ?',
      constraint:'Quel budget annuel total et quelle immobilisation de capital refusez-vous de dépasser ?',
      reverse:'À partir de quel kilométrage, coût de financement ou durée de détention l’option choisie devient-elle moins bonne ?'
    }
  };

  const readingGuides = {
    'allocation-patrimoine-selon-situation.html': {
      text:'Ici, « allocation » veut simplement dire <strong>comment répartir votre argent</strong> entre ce qui doit rester disponible, ce qui finance un projet et ce qui peut être investi longtemps. Commencez par la situation qui vous ressemble ; les termes plus techniques viennent ensuite.'
    },
    'trajectoire-professionnelle-selon-situation.html': {
      text:'Vous n’avez pas besoin de raisonner en « capital professionnel » pour utiliser ce dossier. Posez-vous d’abord quatre questions : <strong>est-ce que ce travail me fait progresser, est-ce qu’il me paie suffisamment, est-ce que je peux le tenir dans la durée, et quelles portes restent ouvertes si je veux partir ?</strong>'
    },
    'tout-ca-pour-quoi-objectifs-besoins.html': {
      text:'Vous pouvez commencer par trois questions : <strong>qu’est-ce que je veux vraiment changer ? qu’est-ce que je refuse de sacrifier ? comment saurai-je que c’est suffisant ?</strong> Le reste du dossier sert à approfondir ces trois questions.'
    },
    'finances-allocation-portefeuille.html': {
      text:'Le mot « allocation » désigne simplement la <strong>répartition du patrimoine entre plusieurs usages et plusieurs types de placements</strong>. L’objectif n’est pas de trouver un pourcentage parfait, mais une répartition que vous pouvez réellement tenir quand les marchés ou votre vie changent.'
    }
  };

  const plainReplacements = {
    'trajectoire-professionnelle-selon-situation.html': [
      [/Optionalité/g, 'Options disponibles'],
      [/optionalité/g, 'options disponibles'],
      [/benchmark externe/gi, 'comparaison avec le marché'],
      [/soutenabilité réelle/gi, 'capacité à tenir dans la durée'],
      [/transférabilité/gi, 'utilité des compétences ailleurs']
    ],
    'tout-ca-pour-quoi-objectifs-besoins.html': [
      [/arbitrage/gi, 'choix'],
      [/stress test/gi, 'scénario défavorable'],
      [/réversibilité/gi, 'possibilité de revenir en arrière'],
      [/robustesse/gi, 'solidité']
    ]
  };

  function injectObjectiveFirst() {
    const prose = document.querySelector('main article.prose');
    if (!prose || prose.querySelector('.ce-objective-first')) return;
    const file = location.pathname.split('/').pop();
    const guide = objectiveGuides[file];
    if (!guide) return;
    const box = document.createElement('div');
    box.className = 'answer-box ce-objective-first';
    box.innerHTML = `<h2>Avant de calculer : qu’essayez-vous réellement d’obtenir ?</h2><ul><li><strong>Objectif :</strong> ${guide.goal}</li><li><strong>Non-négociable :</strong> ${guide.constraint}</li><li><strong>Ce qui ferait changer la réponse :</strong> ${guide.reverse}</li></ul>`;
    const firstAnswer = prose.querySelector(':scope > .answer-box');
    if (firstAnswer) firstAnswer.insertAdjacentElement('afterend', box);
    else prose.insertAdjacentElement('afterbegin', box);
  }

  function replaceTextNodes(root, replacements) {
    if (!root || !replacements?.length) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|CODE|PRE)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      let value = node.nodeValue;
      replacements.forEach(([pattern,replacement]) => { value = value.replace(pattern,replacement); });
      node.nodeValue = value;
    });
  }

  function addProgressiveReadingLayer() {
    const prose = document.querySelector('main article.prose');
    if (!prose) return;
    const file = location.pathname.split('/').pop();
    const firstAnswer = prose.querySelector(':scope > .answer-box');
    if (firstAnswer) {
      const heading = firstAnswer.querySelector('h2');
      if (heading && /réponse courte/i.test(heading.textContent)) heading.textContent = 'En bref';
    }

    if (plainReplacements[file]) replaceTextNodes(prose, plainReplacements[file]);

    const guide = readingGuides[file];
    if (!guide || prose.querySelector('.ce-plain-guide')) return;
    const box = document.createElement('div');
    box.className = 'answer-box ce-plain-guide';
    box.innerHTML = `<h2>Pour commencer simplement</h2><p>${guide.text}</p><p><strong>Vous pouvez vous arrêter à l’essentiel</strong>, puis ouvrir les exemples, calculs et nuances seulement si vous en avez besoin.</p>`;
    if (firstAnswer) firstAnswer.insertAdjacentElement('afterend', box);
    else prose.insertAdjacentElement('afterbegin', box);
  }

  function enhanceToc(toc) {
    if (!toc || toc.dataset.ceCollapsible === '1') return;
    toc.dataset.ceCollapsible = '1';
    const list = toc.querySelector('ol');
    if (!list) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'ce-toc-toggle';
    button.setAttribute('aria-expanded','false');
    button.innerHTML = `Dans ce dossier <span>+</span>`;
    button.addEventListener('click', () => {
      const open = toc.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      button.querySelector('span').textContent = open ? '−' : '+';
    });
    toc.insertBefore(button, list);
  }

  function enhanceMobileTables() {
    document.querySelectorAll('.prose .compare-wrap table').forEach(table => {
      const wrap = table.closest('.compare-wrap');
      if (!wrap || wrap.dataset.ceMobileTable === '1') return;
      const headers = [...table.querySelectorAll('thead th')].map(th => th.textContent.trim());
      const rows = [...table.querySelectorAll('tbody tr')];
      if (headers.length < 2 || !rows.length || rows.length > 18) return;
      const mobile = document.createElement('div');
      mobile.className = 'ce-mobile-table';
      rows.forEach(row => {
        const cells = [...row.children];
        const card = document.createElement('div');
        card.className = 'ce-mobile-row';
        card.innerHTML = cells.map((cell,index) => `<div class="ce-mobile-cell"><strong>${headers[index] || `Colonne ${index+1}`}</strong><span>${cell.innerHTML}</span></div>`).join('');
        mobile.appendChild(card);
      });
      wrap.dataset.ceMobileTable = '1';
      wrap.appendChild(mobile);
    });
  }

  function addEditorialAttribution(heroContainer) {
    if (!heroContainer || heroContainer.querySelector('.ce-editorial-meta')) return;
    const deep = /\/(?:dossiers|articles|fiches-metiers)\//.test(location.pathname);
    const root = deep ? '../' : '';
    const meta = document.createElement('div');
    meta.className = 'ce-reading-meta ce-editorial-meta';
    meta.innerHTML = `<span>Par <a href="${root}a-propos.html">Rédaction Contre-Évidence</a></span><span><a href="${root}methode-sources.html">Méthode & sources</a></span>`;
    const update = heroContainer.querySelector('.ce-update-meta');
    if (update) update.insertAdjacentElement('afterend', meta);
    else heroContainer.appendChild(meta);
  }

  function buildArticleBodyLongform() {
    const prose = document.querySelector('main article.prose');
    if (!document.body.classList.contains('article-body') && !prose) return;
    const main = document.querySelector('main');
    const hero = main?.querySelector(':scope > .hero, :scope > .article-hero');
    if (!main || !hero || main.dataset.ceLongform === '1') return;
    main.dataset.ceLongform = '1';

    const heroContainer = hero.querySelector('.container');
    if (prose) addEditorialAttribution(heroContainer);

    const sections = [...main.querySelectorAll(':scope > section')].filter(s => s !== hero && !s.classList.contains('ce-related'));
    const h2s = prose ? [...prose.querySelectorAll(':scope > h2')] : sections.map(s => s.querySelector('h2')).filter(Boolean);
    if (h2s.length < 4) return;

    const readingText = prose ? (prose.textContent || '') : sections.map(s => s.textContent || '').join(' ');
    const words = readingText.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 220));
    if (heroContainer && !heroContainer.querySelector('.ce-longform-meta')) {
      const meta = document.createElement('div');
      meta.className = 'ce-reading-meta ce-longform-meta';
      meta.innerHTML = `<span>≈ ${minutes} min de lecture</span><span>${words.toLocaleString('fr-FR')} mots</span>`;
      heroContainer.appendChild(meta);
    }

    const used = new Set();
    h2s.forEach((h2,index) => {
      if (!h2.id) {
        let id = slugify(h2.textContent);
        if (used.has(id) || document.getElementById(id)) id = `${id}-${index+1}`;
        h2.id = id;
      }
      used.add(h2.id);
    });

    const toc = document.createElement('nav');
    toc.className = 'ce-article-toc';
    toc.id = 'sommaire';
    toc.setAttribute('aria-label','Sommaire du dossier');
    const candidates = h2s.filter(h => !/checklist|pour aller plus loin|à retenir|ce que j.en retiens/i.test(h.textContent)).slice(0,8);
    toc.innerHTML = `<strong>Dans ce dossier</strong><ol>${candidates.map(h => `<li><a href="#${h.id}">${h.textContent.replace(/^\d+\s*[·.:-]?\s*/, '')}</a></li>`).join('')}</ol>`;
    const wrap = document.createElement('div');
    wrap.className = 'ce-longform-toc-wrap';
    wrap.appendChild(toc);
    hero.insertAdjacentElement('afterend', wrap);

    h2s.forEach((h2,index) => {
      if (index > 0 && index % 4 === 0) {
        const back = document.createElement('a');
        back.className = 'ce-back-toc';
        back.href = '#sommaire';
        back.textContent = '↑ Retour au sommaire';
        h2.insertAdjacentElement('beforebegin', back);
      }
    });

    if (!document.querySelector('.ce-reading-progress')) {
      const progress = document.createElement('div');
      progress.className = 'ce-reading-progress';
      document.body.appendChild(progress);
      const sync = () => {
        const rect = main.getBoundingClientRect();
        const start = window.scrollY + rect.top;
        const end = start + Math.max(main.offsetHeight - window.innerHeight, 1);
        const ratio = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start || 1)));
        progress.style.transform = `scaleX(${ratio})`;
      };
      window.addEventListener('scroll', sync, {passive:true});
      window.addEventListener('resize', sync);
      sync();
    }
  }

  const run = () => {
    addProgressiveReadingLayer();
    injectObjectiveFirst();
    buildArticleBodyLongform();
    document.querySelectorAll('.ce-article-toc').forEach(enhanceToc);
    enhanceMobileTables();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
  setTimeout(run, 0);
})();