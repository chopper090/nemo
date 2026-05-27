// Service Worker — Note Trainer PWA
// Strategia: network-first per HTML (sempre fresh), cache-first per asset statici.
const CACHE = 'note-trainer-v24-resolve';
const STATIC_ASSETS = [
  './manifest.json',
  './icon.svg',
];
const HTML_PAGES = [
  './',
  './index.html',
  './fretboard-lab.html',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([...STATIC_ASSETS, ...HTML_PAGES]).catch(() => {}))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isHTML = e.request.mode === 'navigate' ||
                 e.request.headers.get('accept')?.includes('text/html') ||
                 url.pathname.endsWith('.html') ||
                 url.pathname.endsWith('/');

  if (isHTML) {
    // Network-first: prova la rete, fallback alla cache se offline
    e.respondWith(
      fetch(e.request).then(resp => {
        if (resp && resp.status === 200) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        }
        return resp;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first per asset statici (icone, font, ecc.)
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp && resp.status === 200 && resp.type === 'basic') {
            const copy = resp.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
          }
          return resp;
        });
      })
    );
  }
});
