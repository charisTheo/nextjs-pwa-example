importScripts("precache-manifest.9dfdd385173ce17210e7d17897d98aed.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const OFFLINE_PAGE_URL = 'offline.html';

workbox.precaching.precacheAndRoute(['/', OFFLINE_PAGE_URL].concat(self.__precacheManifest || []));

// addEventListener('install', event => {
//   const cacheName = workbox && workbox.core.cacheNames.runtime;
//   event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(['/', OFFLINE_URL])))
// });

self.addEventListener('fetch', async event => {
  if (event.request.mode === 'navigate' ||
        (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))
  ) {
    event.respondWith(
      fetch(event.request).catch(error => caches.match(OFFLINE_PAGE_URL))
    );
  }
});


