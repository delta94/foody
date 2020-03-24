export const isPushNotificationSupported = () =>
  'serviceWorker' in navigator && 'PushManager' in window;

export const register = () =>
  navigator.serviceWorker.register('/serviceWorker.js');
