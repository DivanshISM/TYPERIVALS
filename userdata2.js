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
 const auth = getAuth(app)
 const db = getDatabase(app)

let attempt =[];
 onAuthStateChanged(auth, async (user) => {
    if(user){
        console.log("hellio")
        const uid = user.uid;
        const snap = await get(ref(db,`users/${uid}`))
        let data = snap.val()
        console.log(data);
        console.log(data.score)
        document.querySelector(".name").textContent=data.username;
        document.querySelector(".email").textContent=data.email;
        Object.keys(data.score).forEach(scoreUid => {
         const scoreData = data.score[scoreUid];
         let leader=scoreData.score
         console.log( scoreUid);
         console.log(leader); 
         attempt.push(leader);
         console.log(attempt); 
        });
        for (let i = 0; i < attempt.length; i++) {
         const element = attempt[i];
         let 
         j=i+1;
         let upinfo= document.querySelector(".attempt");
         upinfo.innerHTML = upinfo.innerHTML + '   <nav class="stats dot">\
         <ul class="stats inside">\
         <li class="head">'+j+'</li>\
         <li class="head">'+element+'</li>\
         </ul>\
       </nav>';
       
        }

    }
 })
 document.querySelector(".button").addEventListener("click",()=>{
  window.location.href="index.html";
 })
 