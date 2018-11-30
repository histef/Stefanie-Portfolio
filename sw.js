let cacheName = 'offline v2 cache'; //sets versions for our cache
let cacheFiles = [
  'index.html',
  'css/style.css',
  'js/index.js',
  // 'img/beach-aerial.jpeg',
  // 'img/bookshelf.png',
  // 'img/crashing-waves-L.jpg',
  // 'img/crashing-waves-sm.jpeg',
  // 'img/frogger.jpg',
  // 'img/green-ocean-L.jpg',
  // 'img/green-ocean-sm.jpeg',
  // 'img/memory-game.png',
  // 'img/SC-logo.png',
  // 'SC-logo.ico'
]

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installed');
    //install event has to wait until promise is resolved
  event.waitUntil( //wait until cache is opened and all files added
    caches.open(cacheName) //caches API, opens cacheName. if new name, this creates cache
    .then(cache => {
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles); //if one file fails to add, none are added
      })
    .catch( error => console.log('error: SW install problem' + error))
  )
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetched');

  event.respondWith( //tells browser we're handling this request ourselves
    //takes a response object (new Response()) or a promise that resolves with a response
    //gets something out of any cache, starting with the oldest
      caches.match(event.request).then(function(response) {
        if (response) {
         return response  //check cache first, if not there, then fetch from network
        } return fetch(event.request);
      })
    );

  //  fetch(event.request).then(response=>{
  //    if (response.status === 404){
  //      return new Response("Non-existent page");
  //    }
  //    return response;
  //  }).catch(()=>{
  //    return new Response('Server connection failed');
  //  })
  // );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] activated');
  event.waitUntil(
  //clear old cache versions
    //get all cache names that exist
  caches.keys().then(cacheNames => Promise.all( //wait til we get everything to delete all at once.
    cacheNames.map(oldCache => {
      if (oldCache !== cacheName){ // check that it ISN't a name in the list of our staticCacheNames
        console.log("[ServiceWorker] Removing Cached Files from old cache");
        return caches.delete(oldCache);
      }
    })))
  );
});