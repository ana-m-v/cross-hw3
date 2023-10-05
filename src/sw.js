const CACHE_NAME = "my-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/styles/main.css",
  "/scripts/main.js",
  "/images/logo.png",
  "/home",
  "/map",
  "/profile",
  "/about",
  "/",

  // Add more URLs as needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles/main.css",
        // Add other static assets you want to cache
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
