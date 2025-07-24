
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('barrel-timer-cache').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon.png',
        './barrel_background.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
