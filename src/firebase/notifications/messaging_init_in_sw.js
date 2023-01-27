import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC0L3o1uFlJ3wBAuzG1bXHf-chsTtAGGAk",

    authDomain: "hr-self-services.firebaseapp.com",
  
    projectId: "hr-self-services",
  
    storageBucket: "hr-self-services.appspot.com",
  
    messagingSenderId: "83495502259",
  
    appId: "1:83495502259:web:e58381aa5186589dc20bc6",
  
    measurementId: "G-13NVHJR69Y"
  
};

// Initialize Firebase
if(firebaseConfig.apiKey){

    
    const app = initializeApp(firebaseConfig);


    // Initialize Firebase Cloud Messaging and get a reference to the service
    const messaging = getMessaging(app);
    
}

