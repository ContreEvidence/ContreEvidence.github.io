(() => {
  'use strict';
  if (document.documentElement.dataset.ceAnalyticsLoader === '2') return;
  document.documentElement.dataset.ceAnalyticsLoader = '2';

  const current = document.currentScript;
  if (!current?.src) return;
  const base = new URL('.', current.src);

  // Les évolutions UX restent indépendantes du fournisseur d'analytics.
  if (!document.querySelector('link[data-ce-site-evolution]')) {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = new URL('site-evolution.css?v=20260812-1', base).href;
    css.dataset.ceSiteEvolution = '1';
    document.head.appendChild(css);
  }
  if (!document.querySelector('script[data-ce-site-evolution]')) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = new URL('site-evolution.js?v=20260812-1', base).href;
    script.dataset.ceSiteEvolution = '1';
    document.head.appendChild(script);
  }

  const configUrl = new URL('analytics-config.json', base);
  fetch(configUrl, { cache: 'no-store', credentials: 'same-origin' })
    .then(response => response.ok ? response.json() : null)
    .then(config => {
      if (!config || config.enabled !== true) return;
      if (config.provider !== 'cloudflare-web-analytics') return;
      const token = String(config.token || '').trim();
      if (!token) return;
      if (document.querySelector('script[data-cf-beacon]')) return;

      const beacon = document.createElement('script');
      beacon.defer = true;
      beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      beacon.setAttribute('data-cf-beacon', JSON.stringify({ token, spa: false }));
      document.head.appendChild(beacon);
    })
    .catch(() => {});
})();
