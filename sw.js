self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/images/icon-128.png'
        '/images/icon-512.png'
      ]);
    })
  );
});
