'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"Dog_app/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"Dog_app/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"Dog_app/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"Dog_app/assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"Dog_app/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"Dog_app/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Dog_app/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Dog_app/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Dog_app/index.html": "6c51d0a8cf9359d3fdcceae535aa34eb",
"/": "6c51d0a8cf9359d3fdcceae535aa34eb",
"Dog_app/main.dart.js": "c69766f30e1979254e1c408b5f997507",
"Dog_app/manifest.json": "1aa81c7d235b8fb9919fb358aa19a6e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6c51d0a8cf9359d3fdcceae535aa34eb",
"main.dart.js": "eb8ba6fab1d072ac3874588f55575a44",
"manifest.json": "1aa81c7d235b8fb9919fb358aa19a6e0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
