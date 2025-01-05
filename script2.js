
let word = [];

let geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBiMBaVIZN2fyf-o85zp14-DJvEC5DqDE0`

const response = fetch(geminiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `generate a random text of about 150 words` }]
          }]
        })
      }).then((response) => {
        response.json().then((data) => {
            const value = data.candidates[0].content.parts[0].text;
            console.log(value)
            word = value.split("")
            console.log(word);
            document.getElementsByClassName('prf')[1].textContent = word.join('');

        })
    })

    
    




end = document.querySelector(".end")
document.querySelector(".leaderboard").addEventListener("click",()=>{
    window.location.href='leader.html';
})


let countdown = 30;
let cotdown = 30;

document.querySelector(".timer").innerHTML = countdown;


option1 = document.querySelector(".option1");
option2 = document.querySelector(".option2");
option3 = document.querySelector(".option3");

option1.addEventListener("click", () => {
    countdown = 30;
    document.querySelector(".timer").innerHTML = countdown;
    cotdown = 30;
    return countdown
    
});
option2.addEventListener("click", () => {
    countdown = 60;
    document.querySelector(".timer").innerHTML = countdown;
    cotdown = 60;
    return countdown
});
option3.addEventListener("click", () => {
    countdown = 120;
    cotdown = 120;
    document.querySelector(".timer").innerHTML = countdown;
    return countdown
});

document.addEventListener("keydown", () => {
    let timerInterval = setInterval(Timer, 1000);
    function endstop() {
        clearInterval(timerInterval);
            document.querySelector(".testarea").style.display = "none";
            document.querySelector(".viewresult").style.display = "block";
            document.getElementById("wpm").innerHTML=Math.round(typedText.length*12/(cotdown-countdown)) + "wpm";
            document.getElementById("acurracy").innerHTML= Math.floor((backchar.length/(backchar.length+acurracytext.length))*100) + "%";
            document.getElementById("duration").innerHTML=(cotdown-countdown) +"sec";
            document.querySelector(".score").innerHTML=(Math.round(typedText.length*12/(cotdown-countdown)))*(Math.floor((backchar.length/(backchar.length+acurracytext.length))*100))
        }
        end.addEventListener("click",endstop)
        function Timer() {
            document.querySelector(".timer").innerHTML = countdown;
            
            if (countdown === 0) {
                clearInterval(timerInterval);
                document.querySelector(".testarea").style.display = "none";
                document.querySelector(".viewresult").style.display = "block";
                document.getElementById("wpm").innerHTML=Math.round(typedText.length*12/(cotdown-countdown)) + "wpm";
                document.getElementById("acurracy").innerHTML= Math.floor((backchar.length/(backchar.length+acurracytext.length))*100) + "%";
                document.getElementById("duration").innerHTML=(cotdown-countdown) +"sec";
                document.querySelector(".score").innerHTML=(Math.round(typedText.length*12/(cotdown-countdown)))*(Math.floor((backchar.length/(backchar.length+acurracytext.length))*100))
            }
        else {
            countdown--;
        }
    }
}, { once: true })

function toggledropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown, .dropdown *')) {
        var dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
}


let typedText = [];
let acurracytext = [];
backchar = [];
document.getElementsByClassName('prf')[1].textContent = word.join('');


function handKeyPress(event) {
    if (event.key === 'Backspace') {
        if (typedText.length > 0) {
            if (typedText[typedText.length - 1] === backchar[backchar.length - 1]) {
                typedText.pop();
                let pElement = document.getElementsByClassName('prf');
                back = backchar.pop();
                word.unshift(back);
                let text = typedText.join('');
                pElement[0].textContent = text;
                pElement[1].textContent = word.join('');
            } else {
                typedText.pop();
                let pElement = document.getElementsByClassName('prf');
                let text = typedText.join('');
                pElement[0].textContent = text;
                pElement[1].textContent = word.join('');
            }
        }

    } else if (event.key.length === 1) {
        typedText.push(event.key);
        if (typedText[typedText.length - 1] === word[0]) {
            let pElement = document.getElementsByClassName('prf');
            remove = word.shift();
            backchar.push(remove);
            let text = typedText.join('');
            pElement[1].textContent = word.join('');
            pElement[0].textContent = text;
        }
        else {
            let text = typedText.join('');
            let pElement = document.getElementsByClassName('prf');
            pElement[0].textContent = text;
            acurracytext.push(event.key);
        }
    }
}

document.addEventListener('keydown', handKeyPress);
document.getElementById("restart").addEventListener("click",()=>{
    location.reload()
})

  
