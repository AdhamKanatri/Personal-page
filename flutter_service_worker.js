'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "610ea38e28c8bca8bc8110c2ea679d23",
"assets/AssetManifest.bin.json": "decc58385b449d976ec384715e7e0cae",
"assets/AssetManifest.json": "4fb3f27095219ea9eb38f4182cccad10",
"assets/assets/images/Adham%2520sign.webp": "3dced236cf323313f7556a6ebdfc642e",
"assets/assets/images/background.webp": "2998449acf25ae0603dc2c6218bf7333",
"assets/assets/images/bg_img_2.webp": "15a2970c3c75b2422465be76ddd0ff5b",
"assets/assets/images/chint.webp": "a32ddc12013fe724b273b19b7e09d26b",
"assets/assets/images/contact_icon.webp": "dde947f4241a11ebab827796eca7de57",
"assets/assets/images/desktop.webp": "064c26f3650d53ed2c12fcaec25ec2cb",
"assets/assets/images/Dr.Mohammd.webp": "581903cacb9fc5238e9e663c5d6536fd",
"assets/assets/images/email.webp": "d6c38f1c3903e363bacaa85eba3cc64b",
"assets/assets/images/Finishing.webp": "7da8f16c5e343f9e6f1069446ea71461",
"assets/assets/images/github-logo.webp": "75d70bf35dba89c881ec175b35907724",
"assets/assets/images/graphic.webp": "e6804df261147259086bd08f389f43fc",
"assets/assets/images/hand.webp": "c6d7462b01cda2ebbaf3acacd2d599a1",
"assets/assets/images/Hover.webp": "5f5f7abf86dd47ddfff785047e1bba49",
"assets/assets/images/Hover_flip.webp": "088de81770802f43b769ae4302a0927d",
"assets/assets/images/Intreaction_design.webp": "c472ef212dcb583a9446f5418399104a",
"assets/assets/images/ledvance.webp": "26b49731529feb469b8dca99210bfbd4",
"assets/assets/images/LinkedIn.webp": "855dc00e1f2516764719225ee9b01ab5",
"assets/assets/images/Logo.webp": "333c3f7c0fd540a3841a12d02bd4336d",
"assets/assets/images/marketing_portfolio.webp": "9e349d519a6140e518916502f10b558a",
"assets/assets/images/messanger.webp": "ecc25ae2d1622f9100a71695d7e82dc5",
"assets/assets/images/Mobile%2520Application.webp": "36a3467d59e33a92483502b73ed9b01e",
"assets/assets/images/Mohammad_Azmi_AlMadi.webp": "079bde413c180b34e5e98651d45f7d22",
"assets/assets/images/Ohod.webp": "fbb4aeb78548bb8e9c605df651ba06f2",
"assets/assets/images/pdf-download.webp": "20a3bb92f2bba5cfed01e68e251b439d",
"assets/assets/images/pdf-file.webp": "24f0e0888d3d838a36d2c2c994ba38b4",
"assets/assets/images/people.webp": "e005fb884619cf0fc2a8a971458f2602",
"assets/assets/images/person.webp": "5ddc5950875b16442b1d61f46a902744",
"assets/assets/images/philips.webp": "8d921d56c7d10f48524a58c07f3b1f76",
"assets/assets/images/recent_work_bg.webp": "e33f254ccbdc062b0078d602e35a987c",
"assets/assets/images/reward_app.webp": "dbeb0a1cb5677fac7884128c392b250b",
"assets/assets/images/schneider.webp": "955217cfd835457f3a75635006a3e478",
"assets/assets/images/Shaikhan_Bawazeer.webp": "e5159bb44079e5325f0299db899cf11b",
"assets/assets/images/sign.webp": "aed941b25134bf5cf0709acfa1d7a4ee",
"assets/assets/images/skype.webp": "b845245e678acbb24d25b5cad84bd2ee",
"assets/assets/images/Storage%2520Not%2520Enough.webp": "26c4194a737b4ab0742a932747ecf16b",
"assets/assets/images/TopBanner.webp": "09725cf745e5ad3643fee1b81803df42",
"assets/assets/images/ui.webp": "da8e1db02ac6b70df7ead9a40a76b713",
"assets/assets/images/whatsapp.webp": "d48a3ee9eb0bfa3d794a7c65831a2c81",
"assets/assets/images/work_1.webp": "163ebdf72b88882d196da74dcc249a60",
"assets/assets/images/work_2.webp": "f32cc6431e5fa9aaadadc5461433904d",
"assets/assets/images/work_3.webp": "63b66f73938aca080ec973dcce34ed1a",
"assets/assets/images/work_4.webp": "845368a6551165d88e024fb9cacdf03d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2884e21bebd05d2fb0203c01878d5e0c",
"assets/NOTICES": "7082075b32ecec8b5aa6112aa3fda461",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "68ddffa4bb37346805b40217208ad86c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "cab2f5a308714e88175650f2c695e47a",
"icons/Icon-192.png": "b0de837f05e6a6ad84bb1fd465b1112c",
"icons/Icon-512.png": "ed8b8ce6b8f0f80071e8a4e4f2a9878a",
"index.html": "9fc56d1f0735183c4b651e01a244b699",
"/": "9fc56d1f0735183c4b651e01a244b699",
"main.dart.js": "392c25704216499087db5b0f21b397da",
"manifest.json": "a2462746134dc728ce07b923123448ed",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
