// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7QsgDD3h64YbI1ICjnio3impaU15VC_Q",
    authDomain: "gonotes-9dc50.firebaseapp.com",
    databaseURL: "https://gonotes-9dc50-default-rtdb.firebaseio.com",
    projectId: "gonotes-9dc50",
    storageBucket: "gonotes-9dc50.appspot.com",
    messagingSenderId: "407954421672",
    appId: "1:407954421672:web:f35a574930d6d30dfc8f9d",
    measurementId: "G-BNZSG4G6HF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);