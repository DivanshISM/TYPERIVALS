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

document.querySelector(".test").addEventListener("click",()=>{
    window.location.href='index2.html';
})

document.querySelector(".profile").addEventListener("click", ()=>{
    window.location.href='index4.html';
  })

  let users=[];
  let userscore=[];
  onAuthStateChanged(auth, async (user) => {
      if(user){
          
          const snap = await get(ref(db,`users`))
          let data=snap.val();
          console.log(data);
          Object.keys(data).forEach(scoreUid => {
              const scoreData = data[scoreUid];
              users.push(scoreData.username);
              console.log(users);
              let maxscore=[];
              Object.keys(scoreData.score).forEach(scoreUid => {
                  const scoredata = scoreData.score[scoreUid];
                  let leader=scoredata.score 
                  maxscore.push(leader);
                })
                let  max=Math.max(...maxscore);
                let us={
                    user:scoreData.username,
                    score:max
                }
        userscore.push(us)
     })
     
    }

const top10Largest = userscore.sort((a, b) => b.score - a.score).slice(0, 20);

console.log(top10Largest);

let rank=document.querySelector(".leader");
for (let i = 0; i < userscore.length; i++) {
    const element = userscore[i];
    let j = i+1;
    rank.innerHTML=rank.innerHTML + '<tr><td>'+j+'</td><td><img src="guest profile pic.jpg"></td><td>'+element.user+'</td><td>'+element.score+'</td></tr>'
}

})     