importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp(
  {
    apiKey: "AIzaSyC0L3o1uFlJ3wBAuzG1bXHf-chsTtAGGAk",
  
    authDomain: "hr-self-services.firebaseapp.com",
  
    projectId: "hr-self-services",
  
    storageBucket: "hr-self-services.appspot.com",
  
    messagingSenderId: "83495502259",
  
    appId: "1:83495502259:web:e58381aa5186589dc20bc6",
  
    measurementId: "G-13NVHJR69Y"
  }
  );

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({title,body,image}) => {
      // const { title, body, image } =payload.notification;
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
        self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    });
}

