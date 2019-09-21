const pageCache = 'udacity-rest-app-v1';
const assets = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/restaurant.html?id=1',
    '/restaurant.html?id=2',
    '/restaurant.html?id=3',
    '/restaurant.html?id=4',
    '/restaurant.html?id=5',
    '/restaurant.html?id=6',
    '/restaurant.html?id=7',
    '/restaurant.html?id=8',
    '/restaurant.html?id=9',
    '/restaurant.html?id=10',
    '/sw.js',
    '/favicon.ico',
    '/css/styles.css',
    '/js/app.js',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(pageCache).then(cache => {
      console.log('service worker has been installed');
      cache.addAll(assets);
  })
  );
});

self.addEventListener('activate', event => {
    console.log('service worker has been activated');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(pageCache).then(cache => {
      return cache.match(event.request).then(response => {
        return response || fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
