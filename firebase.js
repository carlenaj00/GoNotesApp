import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const admin = require("firebase-admin");
 

document.getElementById('reg-btn').addEventListener('click ', function(){
  document.getElementById('register-div').style.display="inline";
  document.getElementById('login-div').style.display ="none";
});

document.getElementById('login-btn').addEventListener('click ', function(){
  document.getElementById('register-div').style.display="none";
  document.getElementById('login-div').style.display ="inline";
});


//Login Section
document.getElementById('login-btn').addEventListener('click ', function(){
  const loginEmail= document.getElementById('login-email').value;
  const loginPassword= document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredential)=> {
    const user = userCredential.user; 
    document.getElementById('login-div').style.display ="none";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('login-div').style.display ="none";
  });
   
});


// Register Section 
document.getElementById('reg-btn').addEventListener('click ', function(){
  const registerEmail= document.getElementById('register-email').value;
  const registerPassword= document.getElementById('register-password').value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then((userCredential)=> {
    const user = userCredential.user; 
    document.getElementById('register-div').style.display ="none";

  })
  .catch((error) => {
    const errorCode = error.code; 
    const errorMessage = error.message;
    document.getElementById('register-div').style.display ="none";
  })
   
});