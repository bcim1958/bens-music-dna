// Disposable localhost-only native transition test worker. Caches one synthetic
// old-writer fixture to prove Cache Storage delivery; never touches app storage.
const CACHE='music-dna-synthetic-transition-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.add('fixtures/compat-bank-85ad816.js')).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(new URL(e.request.url).pathname.endsWith('/fixtures/compat-bank-85ad816.js'))e.respondWith(caches.match(e.request).then(async r=>{if(!r)return fetch(e.request);const h=new Headers(r.headers);h.set('X-Music-DNA-Synthetic-Cache','hit');return new Response(await r.arrayBuffer(),{status:r.status,headers:h});}));});
