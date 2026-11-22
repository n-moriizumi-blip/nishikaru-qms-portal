// アプリとしてインストールできるようにするためだけの最小の作り（検査記録ポータルと同じ）。
// 保存はしない（いつも最新の画面をそのまま使う）
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {});
