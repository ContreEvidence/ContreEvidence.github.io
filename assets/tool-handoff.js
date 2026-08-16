(() => {
  'use strict';
  const KEY = 'ce-tool-handoff-v1';
  const TTL = 30 * 60 * 1000;
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const num = id => {
    const el = document.getElementById(id);
    return el ? Math.max(0, Number(el.value) || 0) : 0;
  };
  const text = id => document.getElementById(id)?.textContent?.trim() || '';
  const money = value => new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(value);

  const sourceMappings = {
    'outil-audit-financier-personnel.html': {
      targets: {
        'simulateur-reserve-securite.html': () => ({
          sourceLabel: 'Audit financier personnel',
          prefill: { liquid: num('liquid') },
          suggestions: {
            essential: num('fixed') + num('variable')
          },
          note: 'Les liquidités sont reprises telles quelles. La somme dépenses fixes + variables n’est qu’une première estimation : confirmez-la uniquement si elle correspond bien à vos dépenses essentielles.'
        })
      }
    },
    'simulateur-capacite-emprunt.html': {
      targets: {
        'parcours-achat-immobilier.html': () => ({
          sourceLabel: 'Capacité d’emprunt',
          context: [
            ['Capital empruntable indicatif', text('principal')],
            ['Enveloppe avec apport avant frais', text('budget')]
          ],
          note: 'Ces montants viennent du simulateur précédent. Le parcours commence justement par vérifier pourquoi cette capacité ne doit pas être confondue avec le budget à dépenser.'
        })
      }
    },
    'simulateur-80-pourcent-cout-reel.html': {
      targets: {
        'parcours-temps-argent-liberte.html': () => ({
          sourceLabel: 'Simulation du passage à 80 %',
          context: [
            ['Coût net mensuel calculé', text('netCost')],
            ['Temps réellement récupéré', `${num('hours').toLocaleString('fr-FR')} h / mois`],
            ['Nouvelle capacité d’épargne', text('newSaving')]
          ],
          note: 'Le parcours conserve ce résultat comme un scénario parmi d’autres : emploi plus proche, organisation différente ou usage du patrimoine peuvent résoudre la même contrainte autrement.'
        })
      }
    },
    'simulateur-decumulation-patrimoine.html': {
      targets: {
        'parcours-temps-argent-liberte.html': () => ({
          sourceLabel: 'Simulation de décumulation',
          context: [
            ['Capital final — scénario central', text('endBase')],
            ['Capital final — scénario adverse', text('endBad')]
          ],
          note: 'Ces trajectoires restent attachées aux hypothèses saisies. Le parcours suivant sert à décider quel usage du capital mérite réellement d’être testé.'
        })
      }
    }
  };

  const targetMapping = {
    'simulateur-reserve-securite.html': {
      apply(payload) {
        const applied = [];
        Object.entries(payload.prefill || {}).forEach(([id,value]) => {
          const el = document.getElementById(id);
          if (!el || value == null || value === '') return;
          el.value = String(value);
          el.dispatchEvent(new Event('input',{bubbles:true}));
          applied.push(id);
        });
        return applied;
      }
    }
  };

  function saveHandoff(target, payload) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({
        target,
        source: file,
        createdAt: Date.now(),
        ...payload
      }));
    } catch {}
  }

  function targetFileFromAnchor(anchor) {
    try {
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin) return '';
      return (url.pathname.split('/').pop() || 'index.html').toLowerCase();
    } catch { return ''; }
  }

  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;
    const source = sourceMappings[file];
    if (!source) return;
    const target = targetFileFromAnchor(anchor);
    const factory = source.targets[target];
    if (!factory) return;
    const payload = factory();
    if (payload) saveHandoff(target, payload);
  }, true);

  function readHandoff() {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return null;
      const payload = JSON.parse(raw);
      if (!payload || payload.target !== file || Date.now() - payload.createdAt > TTL) return null;
      sessionStorage.removeItem(KEY);
      return payload;
    } catch { return null; }
  }

  function makeBanner(payload, applied) {
    const section = document.createElement('section');
    section.className = 'ce-handoff';
    section.dataset.ceHandoff = '1';
    const context = (payload.context || []).filter(([,v]) => v && v !== '—');
    const suggestionEntries = Object.entries(payload.suggestions || {}).filter(([,v]) => Number.isFinite(v) && v > 0);
    const chips = context.map(([label,value]) => `<div class="ce-handoff-chip"><span>${label}</span><strong>${value}</strong></div>`).join('');
    const suggestions = suggestionEntries.map(([id,value]) => {
      const label = id === 'essential' ? 'Dépenses mensuelles à vérifier' : id;
      return `<button type="button" data-ce-accept-suggestion="${id}" data-ce-value="${value}"><span>${label}</span><strong>${money(value)}</strong><small>Utiliser cette estimation</small></button>`;
    }).join('');
    section.innerHTML = `<div class="ce-handoff-shell"><div class="ce-handoff-head"><div class="ce-handoff-kicker">Continuer sans repartir de zéro</div><h2>Résultat repris depuis : ${payload.sourceLabel || 'outil précédent'}</h2><p>${payload.note || 'Les données compatibles ont été reprises localement dans cette session.'}</p></div>${chips ? `<div class="ce-handoff-grid">${chips}</div>` : ''}${applied?.length ? `<p class="ce-handoff-applied">✓ Les champs strictement compatibles ont été préremplis. Vérifiez-les avant de poursuivre.</p>` : ''}${suggestions ? `<div class="ce-handoff-suggestions">${suggestions}</div>` : ''}<button class="ce-handoff-close" type="button">Fermer ce rappel</button></div>`;
    return section;
  }

  function injectStyle() {
    if (document.getElementById('ce-handoff-style')) return;
    const style = document.createElement('style');
    style.id = 'ce-handoff-style';
    style.textContent = `.ce-handoff{margin:0;background:#f7f4ec;border-bottom:1px solid rgba(16,24,32,.1)}.ce-handoff-shell{max-width:1100px;margin:auto;padding:1.1rem 20px}.ce-handoff-head{max-width:850px}.ce-handoff-kicker{font-size:.7rem;font-weight:900;letter-spacing:.11em;text-transform:uppercase;color:#76591c}.ce-handoff h2{margin:.2rem 0 .35rem;font-size:clamp(1.25rem,2.5vw,1.75rem);color:#101820}.ce-handoff p{margin:.2rem 0;color:#59646d;line-height:1.5}.ce-handoff-grid,.ce-handoff-suggestions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.55rem;margin-top:.8rem}.ce-handoff-chip,.ce-handoff-suggestions button{padding:.7rem .8rem;border:1px solid rgba(16,24,32,.1);border-radius:11px;background:#fff;text-align:left}.ce-handoff-chip span,.ce-handoff-suggestions span{display:block;font-size:.72rem;color:#667078}.ce-handoff-chip strong,.ce-handoff-suggestions strong{display:block;margin-top:.16rem;color:#101820}.ce-handoff-suggestions button{cursor:pointer;font:inherit}.ce-handoff-suggestions small{display:block;margin-top:.25rem;color:#76591c;font-weight:800}.ce-handoff-applied{font-weight:750}.ce-handoff-close{margin-top:.75rem;border:0;background:transparent;color:#76591c;font-weight:850;cursor:pointer;padding:0}@media(max-width:760px){.ce-handoff-grid,.ce-handoff-suggestions{grid-template-columns:1fr}}`;
    document.head.appendChild(style);
  }

  function consume() {
    const payload = readHandoff();
    if (!payload) return;
    const applied = targetMapping[file]?.apply(payload) || [];
    injectStyle();
    const banner = makeBanner(payload, applied);
    const hero = document.querySelector('main > .article-hero, main > section.article-hero, main .article-hero');
    if (hero) hero.insertAdjacentElement('afterend', banner);
    else document.querySelector('main')?.insertAdjacentElement('afterbegin', banner);

    banner.querySelectorAll('[data-ce-accept-suggestion]').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.ceAcceptSuggestion;
        const el = document.getElementById(id);
        if (!el) return;
        el.value = button.dataset.ceValue || '';
        el.dispatchEvent(new Event('input',{bubbles:true}));
        button.disabled = true;
        button.querySelector('small').textContent = 'Estimation reprise — à vérifier';
      });
    });
    banner.querySelector('.ce-handoff-close')?.addEventListener('click', () => banner.remove());
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', consume, {once:true});
  else consume();
})();