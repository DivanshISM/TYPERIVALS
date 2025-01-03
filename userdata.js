 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged }  from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
 import {getFirestore,setDoc,doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
 import {getDatabase , get, set ,update, push,ref} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js'

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
  let sore = document.querySelector(".score");
  var userid; 
  
  onAuthStateChanged(auth, async (user) => {
    if(user){
      var uid = user.uid;
      userid=uid;
      const snap = await get(ref(db,`users/${uid}`))
      
      
    }
  })
  
  document.querySelector(".profile").addEventListener("click", ()=>{
    window.location.href='index4.html';
  })
  function scorechange() {
    const interval = setInterval(() => {
      const element = document.querySelector(".viewresult");
      
      if (element && window.getComputedStyle(element).display === "block") {
        let sorearr= sore.textContent.split('');
        if (sorearr.length > 0) {
          const udate ={
            score: sore.innerHTML
          }
         push(ref(db,`users/${userid}/score`),udate)
         .then(()=>{
           console.log("your score has been recorded");
  
          })
          .catch((error)=>{
            console.error("error writing document",error);
          })
          clearInterval(interval);
          
        }
        
      }
    }, 100);
  }
  
  scorechange(); 
