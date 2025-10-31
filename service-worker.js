const CACHE_NAME = 'simple-pwa-cache-v3';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json'
    // Thêm icon-512.png vào đây sau khi bạn có nó
    // '/icon-512.png' 
];

// Sự kiện 'install': cache các tệp cơ bản
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Mở cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Sự kiện 'fetch': Lấy từ cache trước, nếu không có mới lấy từ mạng
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Nếu tìm thấy trong cache, trả về
                if (response) {
                    return response;
                }
                // Nếu không, đi lấy từ mạng
                return fetch(event.request);
            }
        )
    );
});