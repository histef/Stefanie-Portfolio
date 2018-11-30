/******Register Service Worker*****/

if ("serviceWorker" in navigator){
  navigator.serviceWorker.register('sw.js', {scope: 'https://histef.github.io/Stefanie-Portfolio/'})
  .then(registration => console.log('Service Worker Registered'));
  .catch(err => console.log('Service Worker registration failed', err));
}