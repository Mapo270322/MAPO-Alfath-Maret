
const CACHE_NAME = "mapo-v3";

const urlsToCache = [
  "/MAPO-Alfath-Maret/",
  "/MAPO-Alfath-Maret/index.html",
  "/MAPO-Alfath-Maret/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
