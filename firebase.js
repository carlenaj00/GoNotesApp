// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7QsgDD3h64YbI1ICjnio3impaU15VC_Q",
  authDomain: "gonotes-9dc50.firebaseapp.com",
  projectId: "gonotes-9dc50",
  storageBucket: "gonotes-9dc50.appspot.com",
  messagingSenderId: "407954421672",
  appId: "1:407954421672:web:f35a574930d6d30dfc8f9d",
  measurementId: "G-BNZSG4G6HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);