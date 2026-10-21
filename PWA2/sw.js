const CACHE = "mi-pwa-v2"; // subimos la versión
const FILES = ["/", "/index.html", "/style.css", "/app.js", "/icon-512.png"];
self.addEventListener("install", e => {
e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request).then(r => r || fetch(e.request))
);
});