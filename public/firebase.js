import initializeApp from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

var admin = require("firebase-admin");

var serviceAccount = require("/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gonotes-9dc50-default-rtdb.firebaseio.com"
});

//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7QsgDD3h64YbI1ICjnio3impaU15VC_Q",
  authDomain: "gonotes-9dc50.web.app",
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

function signUp() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
}



function signIn() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
}