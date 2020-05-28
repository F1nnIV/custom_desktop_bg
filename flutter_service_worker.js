'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"Dog_app/.git/COMMIT_EDITMSG": "fe4c174cecf030f812e5997586df06b5",
"Dog_app/.git/config": "5e559bf285d7ba09ff7a2f1015d97304",
"Dog_app/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Dog_app/.git/FETCH_HEAD": "2fcf81dbf9781325796351fcb1b31d8d",
"Dog_app/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"Dog_app/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Dog_app/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Dog_app/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"Dog_app/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Dog_app/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Dog_app/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"Dog_app/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"Dog_app/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Dog_app/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Dog_app/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Dog_app/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"Dog_app/.git/index": "10e23afb2db7a6a90b941cafea596f65",
"Dog_app/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Dog_app/.git/logs/HEAD": "95734d6a4e8b04ce6fc4219e2f778673",
"Dog_app/.git/logs/refs/heads/master": "95734d6a4e8b04ce6fc4219e2f778673",
"Dog_app/.git/logs/refs/remotes/origin/master": "17963c21c5f1e9dbc0f1dbb6a59915b3",
"Dog_app/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"Dog_app/.git/objects/06/10d638f1d7fe604e3cb863554a45c1e980d7a0": "b12a6e8cdbf6bc157bc601ed1c8fe25c",
"Dog_app/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"Dog_app/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"Dog_app/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"Dog_app/.git/objects/15/d9093e86d5afc6afd31a1aff5b2789276b60ea": "efa8c46b795e3510fad439b332f15a96",
"Dog_app/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"Dog_app/.git/objects/25/684a3b91559f40a9c936c5bd667fe8aa2d9d39": "35d5b594541039ffe051a57af930bcb6",
"Dog_app/.git/objects/33/9e6fe605a5f07c516a87d805ba60cbb1c3b8db": "e56af34c16dafe4d37f62a5f17919184",
"Dog_app/.git/objects/3a/46edda19e1dadd3404cf646a273c239845ccc9": "13b37a08434fbec895d1dea403ecc134",
"Dog_app/.git/objects/4f/b979cc080084ee039552db7eadaf0fe6eb80a7": "48b3eeb1172da499c1da3ee0e3a873a3",
"Dog_app/.git/objects/53/cd9f628e3e96b7e2415bfc3109cf2d434c80ab": "a39ab5142840dfcf6c76b10bb9c3d9be",
"Dog_app/.git/objects/6e/ad612fe72fd1c8a4832a21469ba1748e539139": "1fb29c20f642dbdd41a9dc53fa29cceb",
"Dog_app/.git/objects/70/e214aa6b6c78eaed499f056709ef446c543808": "cfac683d56ed1a5f6ec33a590297afb3",
"Dog_app/.git/objects/75/9ee11fa7ce468ce11961acb0187254c3403bf8": "2aaeca9608011202c8ea3a0182273599",
"Dog_app/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"Dog_app/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"Dog_app/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"Dog_app/.git/objects/8c/eca0db5d52ddf7ef029321e5533f8dd1857341": "119c76ca75de8a76afc831b9cf40c2b8",
"Dog_app/.git/objects/91/75bdb3748eb098b35c6d568e2b2bbc7c8de3fb": "4a2e0d6ac481bbdad15c62af7e6e63de",
"Dog_app/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"Dog_app/.git/objects/a7/f3f2ba63832e37892ac1d5e99a0a113a68dd06": "18db086451ab4105ed467d743f4b3971",
"Dog_app/.git/objects/ad/414e5c92ef1334f0c2faff0b365b5c5cffde76": "1f18c0f5291bc10dbf583a7249ed5aa0",
"Dog_app/.git/objects/b4/610aac2ead8500d338c2d781301c939ea5d667": "4dbcffc083fb62481decbf3ae1e85def",
"Dog_app/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"Dog_app/.git/objects/c2/19b1c29773b13926d3e1bbdf5439dee5cdc987": "127da477d8e1e321cec22c5a8ff2c24d",
"Dog_app/.git/objects/c4/e11b0a7b6600b18384be962b0115ec3826e2ec": "70ed609c46e413781688a53889d2fdca",
"Dog_app/.git/objects/c6/a0830af5ae0a18bb6d332c13c7b591db7d932a": "a5ceb122b6fd4359dd50a927036d9deb",
"Dog_app/.git/objects/d1/e90feb3a5f4b7eef2a1f69793a74e424577900": "f79d704a04a35d08dd92ce82774636de",
"Dog_app/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"Dog_app/.git/objects/ee/84355cb08eecbaa32974c9a0e15e80a30b1254": "a80c0de0cb9e0004a7ddab38a38f8a47",
"Dog_app/.git/objects/f4/1baf0319a3de87bd1e2144b8aa4fcf53433e77": "8ffafd86aab609a54a70f80f3d749ec6",
"Dog_app/.git/objects/fa/ff9c5f55dc041d0ec8f21fa30e6ee5c487faac": "0399f5d8bdfb0d15b0c446b6575859a3",
"Dog_app/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"Dog_app/.git/refs/heads/master": "ab4695bc4dea71df9d340d958b3cb76b",
"Dog_app/.git/refs/remotes/origin/master": "ab4695bc4dea71df9d340d958b3cb76b",
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
"Dog_app/main.dart.js": "7a669a1f96a86e6ea8cf5ff07621fe94",
"Dog_app/manifest.json": "1aa81c7d235b8fb9919fb358aa19a6e0",
"Dog_app/README.md": "a7a31f238b2289beea6455a9cd4bd7cc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6c51d0a8cf9359d3fdcceae535aa34eb",
"main.dart.js": "fbaa35faac231e8c5bbcbc396c4ecc43",
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
