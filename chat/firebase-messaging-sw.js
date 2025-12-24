importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA9GsP72R_43JW7rG8Dpvcvt_n2FbQe5SM",
  authDomain: "bobbyreichert-chat.firebaseapp.com",
  projectId: "bobbyreichert-chat",
  messagingSenderId: "743766854322",
  appId: "1:743766854322:web:a492e9eb137d903a7b17ab"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon
    }
  );
});
