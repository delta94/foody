importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
);

if (workbox) {
  const { registerRoute } = workbox.routing;
  const { NetworkFirst } = workbox.strategies;

  registerRoute(/\.js$/, new NetworkFirst());
}
