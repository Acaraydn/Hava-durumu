const CACHE_NAME = 'hava-durumu-v1';
const urlsToCache = [
  '/Hava-durumu/',
  '/Hava-durumu/index.html',
  '/Hava-durumu/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
