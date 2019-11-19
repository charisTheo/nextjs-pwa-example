importScripts("precache-manifest.037fc0fa5ed5a09758c2100f20e92a48.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const OFFLINE_PAGE_URL = 'offline.html';

workbox.precaching.precacheAndRoute([...self.__precacheManifest, '/', OFFLINE_PAGE_URL]);

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


