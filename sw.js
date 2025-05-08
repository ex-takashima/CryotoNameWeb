// キャッシュ名
const CACHE_NAME = 'name-encryption-app-v1';

// キャッシュするファイル
const CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './privacy-policy.html',
  './images/icon-192x192.png',
  './images/icon-512x512.png'
];

// インストール時に実行
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// アクティベート時に実行
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ時に実行（キャッシュファーストの戦略）
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあればそれを返す
        if (response) {
          return response;
        }
        
        // キャッシュがなければネットワークからフェッチ
        return fetch(event.request)
          .then(response => {
            // ナビゲーションリクエストやリソースの場合のみキャッシュ
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // レスポンスをクローンしてキャッシュに保存
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
      })
      .catch(() => {
        // オフライン時などのフォールバック
        if (event.request.url.indexOf('.html') > -1) {
          return caches.match('./index.html');
        }
      })
  );
});
