// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker đã đăng ký thành công:', registration);
            })
            .catch(error => {
                console.log('Đăng ký Service Worker thất bại:', error);
            });
    });
}

// (Bạn có thể thêm bất kỳ logic JS nào khác vào đây)