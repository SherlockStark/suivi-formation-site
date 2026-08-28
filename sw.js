// Service worker minimal : exige par Chrome pour autoriser l'installation
// de l'application sur le Bureau. Ne met rien en cache, laisse passer le reseau.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
