// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
import {getDatabase , get, set , ref} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhPacf8d6QO3FzzjZAXcGphn-fLBQgqPw",
  authDomain: "typerivals-88b52.firebaseapp.com",
  projectId: "typerivals-88b52",
  storageBucket: "typerivals-88b52.firebasestorage.app",
  messagingSenderId: "812840490213",
  appId: "1:812840490213:web:a1a4d58a00acefa3eb700c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getDatabase(app)


const signin = document.querySelector('.let');
signin.addEventListener('click', async (event) => {
  event.preventDefault();
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((usercredential) => {
    alert("login successful")
  const user=usercredential.user;
  localStorage.setItem('loggedInUserId',user.uid);

  window.location.href='index2.html'

  })
  .catch((error)=>{
   const errorCode= error.code;
   if (errorCode='auth/invalid-credential') {
    alert("incorrect email or password")
  } else {
    
    alert("account does not exist")
   }
  })
})


