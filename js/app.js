/* Setting up Service Worker */

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('ServiceWorker registration successful', reg))
      .catch((err) => console.log('ServiceWorker registration failed', err))
    };
