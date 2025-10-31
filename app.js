// 1. Đăng ký Service Worker
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

// 2. Logic lưu và tải ghi chú
const noteEditor = document.getElementById('note-editor');
const statusDiv = document.getElementById('status');

// Tải ghi chú đã lưu khi mở
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('userNote')) {
        noteEditor.value = localStorage.getItem('userNote');
        statusDiv.textContent = 'Đã tải ghi chú đã lưu.';
    }
});

// Tự động lưu khi gõ
noteEditor.addEventListener('keyup', () => {
    localStorage.setItem('userNote', noteEditor.value);
    statusDiv.textContent = 'Đã lưu ghi chú. (lúc ' + new Date().toLocaleTimeString() + ')';
});