importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
);

const ROUTES = [
  '/',
  '/recherche',
  '/mon-garde-manger',
  '/mes-favoris',
  '/historique'
];

if (workbox) {
  const { registerRoute } = workbox.routing;
  const { NetworkFirst, CacheFirst } = workbox.strategies;
  const { ExpirationPlugin } = workbox.expiration;
  const { CacheableResponsePlugin } = workbox.cacheableResponse;

  registerRoute(
    new RegExp('.(js|json)$'),
    new NetworkFirst({
      cacheName: 'assets'
    })
  );

  registerRoute(
    /^https:\/\/unpkg\.com/,
    new CacheFirst({
      cacheName: 'assets-unpkg',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200]
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30
        })
      ]
    })
  );

  registerRoute(
    new RegExp('(?:png|gif|jpg|jpeg|webp|svg|woff2)$'),
    new CacheFirst({
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    })
  );

  // ROUTES.forEach((slug) =>
  //   registerRoute(
  //     slug,
  //     new CacheFirst({
  //       cacheName: 'routes'
  //     })
  //   )
  // );
}
