self.addEventListener("install", event => {
  console.log("Smart Calendar installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Smart Calendar active");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});