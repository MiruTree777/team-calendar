// Service Worker - 웹 푸시 알림 수신
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || '⚔ 에이징커브 공대', {
      body: data.body || '',
      icon: data.icon || '',
      badge: data.badge || '',
      vibrate: [200, 100, 200],
      tag: 'aging-curve',
      renotify: true,
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://mirutree777.github.io/team-calendar/')
  );
});
