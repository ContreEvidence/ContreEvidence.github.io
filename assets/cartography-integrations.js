(() => {
  'use strict';
  const run = () => {
    const path = window.location.pathname;

    const bridgeMap = {
      '/dossiers/finances-retraite-decumulation.html': {
        href:'../simulateur-decumulation-patrimoine.html',
        title:'Testez combien votre patrimoine peut réellement financer',
        text:'Dépenses, revenus futurs, horizon, rendement réel et scénario adverse : projetez la trajectoire plutôt que d’appliquer un taux de retrait universel.'
      },
      '/dossiers/quand-arreter-optimiser-utiliser-patrimoine.html': {
        href:'../simulateur-decumulation-patrimoine.html',
        title:'Passez de « puis-je utiliser mon patrimoine ? » à un scénario chiffré',
        text:'Fixez ce que vous voulez financer, le capital à préserver et un scénario défavorable pour tester la soutenabilité de l’usage.'
      },
      '/dossiers/patrimoine-permet-il-travailler-moins.html': {
        href:'../simulateur-decumulation-patrimoine.html',
        title:'Testez le rôle du patrimoine dans une baisse de revenu',
        text:'Mesurez le besoin annuel sur capital aujourd’hui puis ce qu’il devient lorsque d’autres revenus commencent plus tard.'
      }
    };

    const bridge = Object.entries(bridgeMap).find(([suffix]) => path.endsWith(suffix))?.[1];
    const prose = document.querySelector('main article.prose');
    if (bridge && prose && !prose.querySelector('.ce-cartography-bridge') && !prose.querySelector(`a[href="${bridge.href}"]`)) {
      const box = document.createElement('div');
      box.className = 'decision-box ce-cartography-bridge';
      box.innerHTML = `<h3>Tester avec vos données</h3><p><strong>${bridge.title}</strong><br>${bridge.text}</p><p><a class="btn btn-primary" href="${bridge.href}">Ouvrir le simulateur →</a></p>`;
      const answer = prose.querySelector(':scope > .answer-box, :scope > .voice-note');
      if (answer) answer.insertAdjacentElement('afterend', box);
      else prose.insertAdjacentElement('afterbegin', box);
    }

    if (path.endsWith('/outils.html')) {
      const compare = document.querySelector('#comparer .tool-grid');
      if (compare && !compare.querySelector('a[href="simulateur-sortie-indivision.html"]')) {
        const card = document.createElement('a');
        card.className = 'tool-card';
        card.href = 'simulateur-sortie-indivision.html';
        card.innerHTML = '<small>Indivision immobilière</small><h3>Vendre, racheter ou racheter progressivement</h3><p>Valeur, dette, quotes-parts, créances, liquidités et horizon réunis dans une seule simulation économique.</p><b>Comparer les sorties →</b>';
        compare.appendChild(card);
      }

      const scenario = document.querySelector('#scenario .tool-grid');
      if (scenario && !scenario.querySelector('a[href="simulateur-decumulation-patrimoine.html"]')) {
        const card = document.createElement('a');
        card.className = 'tool-card';
        card.href = 'simulateur-decumulation-patrimoine.html';
        card.innerHTML = '<small>Retraite · Liberté financière</small><h3>Décumulation et utilisation du patrimoine</h3><p>Dépenses, revenus, horizon, rendement réel, choc adverse et capital à préserver : projeter avant de retirer.</p><b>Tester la soutenabilité →</b>';
        scenario.appendChild(card);
      }
    }

    if (path.endsWith('/themes/argent.html')) {
      const sections = [...document.querySelectorAll('.pillar, article')];
      const retirement = sections.find(el => /retraite|transmission/i.test(el.querySelector('h2,h3')?.textContent || ''));
      const links = retirement?.querySelector('.pillar-links');
      if (links && !links.querySelector('a[href*="simulateur-decumulation-patrimoine"]')) {
        const a = document.createElement('a');
        a.href = '../simulateur-decumulation-patrimoine.html';
        a.textContent = 'Outil : combien le patrimoine peut-il financer dans la durée ? →';
        links.appendChild(a);
      }
    }

    if (path.endsWith('/parcours-vie-professionnelle.html') && !document.querySelector('[data-ce-pro-pilotage]')) {
      const frame = document.querySelector('.pro-frame');
      if (frame) {
        const block = document.createElement('div');
        block.className = 'start-here';
        block.dataset.ceProPilotage = '1';
        block.style.margin = '0 0 1.7rem';
        block.innerHTML = `<div><div class="kicker">Suivre dans le temps</div><h2>Votre poste est une photo. Pilotez la trajectoire.</h2><p>Capital professionnel → preuves → test du marché → revue 30/90 jours : reliez les outils existants dans une boucle régulière plutôt que d’attendre la prochaine crise de carrière.</p></div><a class="btn btn-primary" href="parcours-pilotage-professionnel.html">Piloter ma trajectoire →</a>`;
        frame.insertAdjacentElement('afterend', block);
      }
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();