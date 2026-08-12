(() => {
  'use strict';
  if (document.documentElement.dataset.ceSiteEvolution === '1') return;
  document.documentElement.dataset.ceSiteEvolution = '1';

  const SPACE_KEY = 'ce.space.v1';
  const nested = /\/(articles|themes|dossiers|fiches-metiers)\//.test(location.pathname);
  const prefix = nested ? '../' : '';
  const href = path => `${prefix}${path}`;
  const cleanPath = value => {
    try {
      const u = new URL(value, location.href);
      return u.pathname.replace(/^\/+/, '');
    } catch (_) { return String(value || '').replace(/^\/+/, ''); }
  };
  const currentPath = cleanPath(location.href);
  const now = () => new Date().toISOString();
  const escapeHtml = (s='') => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const uid = (prefixName='id') => `${prefixName}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;

  const journeys = [
    {
      id:'mobilite-emploi',
      title:'Une offre plus loin : du salaire affiché au vrai choix de vie',
      intro:'Le bon ordre consiste à comparer l’offre, mesurer le trajet, chiffrer un éventuel déménagement puis seulement décider ce que le logement doit devenir.',
      decisionTitle:'Accepter une mobilité professionnelle',
      steps:[
        {path:'dossiers/comparer-deux-offres-emploi.html',label:'Comparer les deux offres',why:'Salaire, contrat, management, trajectoire et qualité de vie.'},
        {path:'dossiers/accepter-emploi-plus-loin-cout-trajet.html',label:'Mesurer le coût du trajet',why:'Argent réellement conservé et heures de vie échangées.'},
        {path:'dossiers/demenager-pour-un-emploi-salaire-minimum.html',label:'Tester le déménagement',why:'Logement, transport, transition et salaire de bascule.'},
        {path:'dossiers/acheter-ou-louer-si-on-risque-demenager.html',label:'Adapter la décision immobilière',why:'Durée probable de détention, coûts de sortie et mobilité.'}
      ]
    },
    {
      id:'emploi-credit-immobilier',
      title:'Changer de travail sans rendre le logement plus fragile',
      intro:'Financement bancaire, sécurité du foyer et liberté professionnelle ne répondent pas à la même question. Ce parcours les remet dans le bon ordre.',
      decisionTitle:'Changer de travail autour d’un projet immobilier',
      steps:[
        {path:'dossiers/changer-travail-avant-credit-immobilier.html',label:'Choisir l’ordre travail / achat',why:'Financement, période d’essai, réserve et mobilité.'},
        {path:'dossiers/acheter-sans-vider-epargne.html',label:'Préserver une réserve après l’achat',why:'Apport, travaux, mensualité et marge de sécurité.'},
        {path:'dossiers/accepter-emploi-plus-loin-cout-trajet.html',label:'Tester un nouveau trajet',why:'Une hausse de salaire peut être absorbée par le transport et le temps.'},
        {path:'dossiers/acheter-ou-louer-si-on-risque-demenager.html',label:'Réexaminer acheter ou louer',why:'La mobilité change la durée minimale qui rend l’achat cohérent.'}
      ]
    },
    {
      id:'quitter-reconversion',
      title:'Quitter, se reconvertir ou ralentir sans décider à l’aveugle',
      intro:'Le risque baisse fortement quand on mesure d’abord le coût de rester, la réserve disponible, le revenu de transition et la valeur du temps récupéré.',
      decisionTitle:'Préparer une transition professionnelle',
      steps:[
        {path:'dossiers/quitter-emploi-stable-ou-rester.html',label:'Comparer rester et partir',why:'Coût de rester, coût de partir et valeur d’une sortie préparée.'},
        {path:'dossiers/combien-epargne-avant-demissionner.html',label:'Calculer la réserve nécessaire',why:'Dépenses essentielles et durée de transition adverse.'},
        {path:'dossiers/reconversion-sans-perte-salaire.html',label:'Tester une reconversion',why:'Formation, manque à gagner, aides et options progressives.'},
        {path:'dossiers/travailler-moins-vivre-mieux.html',label:'Comparer les façons de récupérer du temps',why:'80 %, trajet, revenu, pause et soutenabilité.'}
      ]
    },
    {
      id:'achat-immobilier',
      title:'Acheter un logement : du prix affiché au risque de devoir revendre',
      intro:'Le prix n’est qu’un morceau de la décision. Coût complet, copropriété, réserve après signature et horizon de détention doivent rester reliés.',
      decisionTitle:'Décider d’un achat immobilier',
      steps:[
        {path:'dossiers/cout-complet-achat-immobilier.html',label:'Reconstruire le coût complet',why:'Acquisition, crédit, assurance, travaux, charges et sortie.'},
        {path:'dossiers/audit-copropriete-avant-achat.html',label:'Auditer la copropriété',why:'Décisions collectives, travaux, charges et risques hors appartement.'},
        {path:'dossiers/acheter-sans-vider-epargne.html',label:'Garder de la marge après signature',why:'Réserve, travaux et scénario adverse.'},
        {path:'dossiers/acheter-ou-louer-si-on-risque-demenager.html',label:'Tester l’horizon de détention',why:'Voir quand les coûts d’achat et de revente sont réellement amortis.'}
      ]
    }
  ];

  function readSpace(){
    try {
      const state = JSON.parse(localStorage.getItem(SPACE_KEY) || 'null');
      return state && typeof state === 'object' ? state : {version:1,readings:{},favorites:{},simulations:{},decisions:[],recent:[]};
    } catch (_) { return {version:1,readings:{},favorites:{},simulations:{},decisions:[],recent:[]}; }
  }
  function writeSpace(state){
    try { localStorage.setItem(SPACE_KEY, JSON.stringify(state)); return true; } catch (_) { return false; }
  }

  function annotateHome(){
    if (!document.body.classList.contains('home-index')) return;
    document.querySelectorAll('main > section').forEach((section, index) => {
      const kicker = section.querySelector('.kicker')?.textContent?.trim() || `section-${index+1}`;
      const slug = kicker.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      section.dataset.ceHomeSection = slug;
      if (!section.id) section.id = `home-${slug}`;
    });
  }

  function addFreshnessLabel(){
    if (!/\/(dossiers|articles)\//.test(location.pathname)) return;
    const meta = document.querySelector('meta[name="dateModified"]');
    if (!meta?.content) return;
    const hero = document.querySelector('.article-hero .container, .article-body .hero .container, main > .hero .container');
    if (!hero || hero.querySelector('.ce-content-freshness')) return;
    const d = new Date(`${meta.content}T12:00:00`);
    if (Number.isNaN(d.getTime())) return;
    const label = document.createElement('div');
    label.className = 'ce-content-freshness';
    label.style.cssText='margin-top:.75rem;font-size:.76rem;color:#69747b;font-weight:750';
    label.textContent = `Mis à jour le ${new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric'}).format(d)} · les règles datées sont contrôlées séparément des hypothèses`;
    hero.appendChild(label);
  }

  function saveJourney(journey, currentIndex, button, statusNode){
    const state = readSpace();
    state.decisions = Array.isArray(state.decisions) ? state.decisions : [];
    let decision = state.decisions.find(d => d.journeyId === journey.id);
    if (!decision) {
      decision = {
        id:uid('decision'), journeyId:journey.id, title:journey.decisionTitle, domain: journey.id === 'achat-immobilier' ? 'Patrimoine' : 'Vie professionnelle',
        status:'En cours', createdAt:now(), updatedAt:now(), items:[]
      };
      state.decisions.unshift(decision);
    }
    decision.items = journey.steps.map((step, i) => ({
      type:'journey-step', id:`${journey.id}:${i}`, url:new URL(step.path, location.origin + '/').href,
      title:step.label, label:step.why, addedAt:decision.createdAt || now(), journeyIndex:i
    }));
    decision.journeyCurrent = currentIndex;
    decision.updatedAt = now();
    writeSpace(state);
    button.textContent='✓ Parcours enregistré';
    if (statusNode) statusNode.textContent='Vous le retrouverez dans Mon espace avec vos lectures et simulations.';
  }

  function injectJourney(){
    const matches = journeys.filter(j => j.steps.some(s => cleanPath(s.path) === currentPath));
    if (!matches.length || !document.querySelector('main')) return;
    const journey = matches[0];
    const index = journey.steps.findIndex(s => cleanPath(s.path) === currentPath);
    const section = document.createElement('section');
    section.className='ce-decision-journey';
    section.dataset.ceJourney=journey.id;
    const state = readSpace();
    const already = Array.isArray(state.decisions) && state.decisions.some(d => d.journeyId === journey.id);
    section.innerHTML=`<div class="container"><div class="ce-journey-head"><div><div class="kicker">Parcours de décision</div><h2>${escapeHtml(journey.title)}</h2><p>${escapeHtml(journey.intro)}</p></div></div><div class="ce-journey-grid">${journey.steps.map((step,i)=>{
      const cls=i===index?'is-current':i<index?'is-done':'';
      const stateLabel=i===index?'Vous êtes ici':i<index?'Étape précédente':'Étape suivante';
      const inner=`<span class="ce-step-n">${String(i+1).padStart(2,'0')}</span><strong>${escapeHtml(step.label)}</strong><small>${escapeHtml(step.why)}</small><span class="ce-step-state">${stateLabel}</span>`;
      return i===index?`<div class="ce-journey-step ${cls}" aria-current="step">${inner}</div>`:`<a class="ce-journey-step ${cls}" href="${href(step.path)}">${inner}</a>`;
    }).join('')}</div><div class="ce-journey-actions"><button class="ce-journey-save" type="button">${already?'✓ Parcours enregistré':'Suivre ce parcours dans Mon espace'}</button><a href="${href('mon-espace.html')}">Ouvrir Mon espace →</a><span class="ce-journey-toast" aria-live="polite"></span></div></div>`;
    document.querySelector('main').appendChild(section);
    const button=section.querySelector('.ce-journey-save');
    const status=section.querySelector('.ce-journey-toast');
    button.addEventListener('click',()=>saveJourney(journey,index,button,status));
  }

  const formValue = saved => {
    if (!saved) return '';
    if (saved.type === 'checkbox' || saved.type === 'radio') return saved.checked ? 'Oui' : 'Non';
    return saved.value ?? '';
  };
  const humanKey = key => String(key).replace(/^fin-|^ce-|^sim-/,'').replace(/[-_]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());

  function renderDiff(host, a, b){
    if (!a || !b) { host.innerHTML='<p>Choisissez deux scénarios.</p>'; return; }
    const av=a.values||{}, bv=b.values||{};
    const keys=[...new Set([...Object.keys(av),...Object.keys(bv)])];
    const rows=keys.map(key=>({key,a:formValue(av[key]),b:formValue(bv[key])})).filter(row=>String(row.a)!==String(row.b));
    host.innerHTML = rows.length ? `<table><thead><tr><th>Hypothèse</th><th>${escapeHtml(a.label||a.title)}</th><th>${escapeHtml(b.label||b.title)}</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${escapeHtml(humanKey(r.key))}</td><td>${escapeHtml(r.a)}</td><td>${escapeHtml(r.b)}</td></tr>`).join('')}</tbody></table>` : '<p>Ces deux scénarios utilisent les mêmes valeurs enregistrées.</p>';
  }

  function enhanceDecisionCenter(){
    if (!document.body.classList.contains('space-page')) return;
    const hero=document.querySelector('.space-hero');
    if (!hero || document.querySelector('.ce-decision-center')) return;
    const wrap=document.createElement('section');
    wrap.className='container ce-decision-center';
    hero.insertAdjacentElement('afterend',wrap);

    const render=()=>{
      const state=readSpace();
      state.decisions=Array.isArray(state.decisions)?state.decisions:[];
      state.simulations=state.simulations&&typeof state.simulations==='object'?state.simulations:{};
      const sims=Object.values(state.simulations).sort((a,b)=>String(b.updatedAt||b.savedAt).localeCompare(String(a.updatedAt||a.savedAt)));
      const simById=Object.fromEntries(sims.map(s=>[s.id,s]));
      const decisionCards=state.decisions.length?state.decisions.map(d=>{
        const items=Array.isArray(d.items)?d.items:[];
        const attached=items.filter(i=>i.type==='simulation').map(i=>simById[i.id]).filter(Boolean);
        return `<article class="ce-dc-card" data-decision-id="${escapeHtml(d.id)}"><div class="ce-dc-card-top"><div><div class="kicker">${escapeHtml(d.domain||'Décision')}</div><h3>${escapeHtml(d.title||'Décision')}</h3><div class="ce-dc-meta">${items.length} élément${items.length>1?'s':''} relié${items.length>1?'s':''}${attached.length?` · ${attached.length} simulation${attached.length>1?'s':''}`:''}</div></div></div><div class="ce-dc-field"><label>État de la décision</label><select data-dc-status><option${d.status==='À explorer'?' selected':''}>À explorer</option><option${d.status==='En cours'?' selected':''}>En cours</option><option${d.status==='Décidé'?' selected':''}>Décidé</option><option${d.status==='À revoir'?' selected':''}>À revoir</option></select></div><div class="ce-dc-field"><label>Date de révision</label><input type="date" data-dc-review value="${escapeHtml(d.reviewDate||'')}"></div><div class="ce-dc-field"><label>Conclusion / point à vérifier</label><textarea data-dc-conclusion placeholder="Ex. J’accepte si le gain net reste supérieur à 250 € et si le trajet ne dépasse pas 45 min.">${escapeHtml(d.conclusion||'')}</textarea></div><span class="ce-dc-save-state" aria-live="polite">Enregistré localement ✓</span><div class="ce-dc-linked"><strong>Simulations reliées :</strong> ${attached.length?attached.map(s=>escapeHtml(s.label||s.title)).join(' · '):'aucune pour l’instant'}</div></article>`;
      }).join(''):'<div class="ce-dc-empty">Aucune décision suivie pour l’instant. Depuis un dossier, utilisez « + Ma décision » ou « Suivre ce parcours » : vos lectures et simulations resteront ensuite réunies ici.</div>';

      const simRows=sims.length?sims.map(sim=>{
        const attachedDecision=state.decisions.find(d=>(d.items||[]).some(i=>i.type==='simulation'&&i.id===sim.id));
        return `<div class="ce-dc-sim-row" data-sim-id="${escapeHtml(sim.id)}"><div><strong>${escapeHtml(sim.label||sim.title||'Scénario')}</strong><div class="ce-dc-meta">${escapeHtml(sim.title||'Outil')} · ${sim.savedAt?new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'short',year:'numeric'}).format(new Date(sim.savedAt)):''}</div></div><select data-sim-decision><option value="">${attachedDecision?'Changer de décision…':'Rattacher à une décision…'}</option>${state.decisions.map(d=>`<option value="${escapeHtml(d.id)}"${attachedDecision?.id===d.id?' selected':''}>${escapeHtml(d.title)}</option>`).join('')}</select><button class="ce-dc-mini-btn" type="button" data-open-sim>Ouvrir</button></div>`;
      }).join(''):'<div class="ce-dc-empty">Enregistrez deux variantes d’un même simulateur pour pouvoir les comparer ici.</div>';

      const groups={}; sims.forEach(s=>{const key=cleanPath(s.url||'');(groups[key]||(groups[key]=[])).push(s);});
      const comparable=Object.values(groups).filter(g=>g.length>=2).flat();
      const compareOptions=comparable.map(s=>`<option value="${escapeHtml(s.id)}">${escapeHtml(s.label||s.title)}</option>`).join('');
      wrap.innerHTML=`<div class="ce-decision-center-head"><div><div class="kicker">Centre de décisions</div><h2>Une décision, ses hypothèses, sa conclusion et sa prochaine révision.</h2><p>Les données restent dans ce navigateur. Le but est de conserver le raisonnement, pas seulement un résultat de simulateur.</p></div></div><div class="ce-dc-grid">${decisionCards}</div><div class="ce-dc-sims"><h3>Rattacher les scénarios enregistrés</h3><p>Un scénario devient beaucoup plus utile lorsqu’il reste associé à la décision qu’il devait éclairer.</p>${simRows}</div><div class="ce-dc-compare"><h3>Comparer deux scénarios</h3><div class="ce-dc-compare-controls"><select data-compare-a><option value="">Scénario A…</option>${compareOptions}</select><select data-compare-b><option value="">Scénario B…</option>${compareOptions}</select><button class="ce-dc-mini-btn primary" type="button" data-compare>Comparer</button></div><div class="ce-dc-diff" data-diff><p>Les différences d’hypothèses apparaîtront ici. Comparez de préférence deux variantes du même outil.</p></div></div>`;

      wrap.querySelectorAll('[data-decision-id]').forEach(card=>{
        const id=card.dataset.decisionId;
        const save=()=>{
          const data=readSpace(); const d=(data.decisions||[]).find(x=>x.id===id); if(!d)return;
          d.status=card.querySelector('[data-dc-status]').value;
          d.reviewDate=card.querySelector('[data-dc-review]').value;
          d.conclusion=card.querySelector('[data-dc-conclusion]').value.trim();
          d.updatedAt=now(); writeSpace(data);
          const badge=card.querySelector('.ce-dc-save-state'); badge.classList.add('is-visible'); clearTimeout(badge._t); badge._t=setTimeout(()=>badge.classList.remove('is-visible'),1600);
        };
        card.querySelector('[data-dc-status]').addEventListener('change',save);
        card.querySelector('[data-dc-review]').addEventListener('change',save);
        card.querySelector('[data-dc-conclusion]').addEventListener('change',save);
      });

      wrap.querySelectorAll('[data-sim-id]').forEach(row=>{
        const simId=row.dataset.simId;
        row.querySelector('[data-sim-decision]').addEventListener('change',e=>{
          const decisionId=e.target.value; if(!decisionId)return;
          const data=readSpace(); const sim=data.simulations?.[simId]; const decision=(data.decisions||[]).find(d=>d.id===decisionId); if(!sim||!decision)return;
          (data.decisions||[]).forEach(d=>{d.items=(d.items||[]).filter(i=>!(i.type==='simulation'&&i.id===simId));});
          decision.items=Array.isArray(decision.items)?decision.items:[];
          decision.items.unshift({type:'simulation',id:sim.id,url:sim.url,title:sim.title,label:sim.label,addedAt:now()}); decision.updatedAt=now();
          writeSpace(data); render();
        });
        row.querySelector('[data-open-sim]').addEventListener('click',()=>{
          const sim=readSpace().simulations?.[simId]; if(sim?.url) location.href=`${sim.url}${sim.url.includes('?')?'&':'?'}ce-scenario=${encodeURIComponent(sim.id)}`;
        });
      });
      wrap.querySelector('[data-compare]').addEventListener('click',()=>{
        const data=readSpace(); const a=data.simulations?.[wrap.querySelector('[data-compare-a]').value]; const b=data.simulations?.[wrap.querySelector('[data-compare-b]').value]; renderDiff(wrap.querySelector('[data-diff]'),a,b);
      });
    };
    render();
  }

  annotateHome();
  addFreshnessLabel();
  injectJourney();
  enhanceDecisionCenter();
})();
