 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged }  from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
 import {getFirestore,setDoc,doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
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
const signup = document.querySelector(".button");
signup.addEventListener("click",(event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    const auth= getAuth();
    const db= getFirestore();
    createUserWithEmailAndPassword(auth,email,password)
    .then( async (usercredential)=>{
        const user=usercredential.user;

        console.log(user)
        const uid = user.uid;
        const userdata={
            email: email,
            username: username,
            score: "0"
        }
        console.log(userdata);
        await saveDataOfNewUser(uid,userdata);
        alert("account created succesfully")
        const docRef= doc(db,"user",user.uid);
        setDoc(docRef,userdata)
        .then(()=>{
            window.location.href="index.html";

        })
        .catch((error)=>{
            console.error("error writing document",error);
        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if (errorCode='auth/email-already-in-use') {
            alert("account already exist")

        }
        else{
            alert("unable to create account");
        }
    })
})


const saveDataOfNewUser = async (uid,userdata) => {
    console.log('hello');
    await set(ref(db,`users/${uid}`), userdata)
}