const paragraphs = [
    "The sun dipped low over the horizon, casting long shadows across the quiet countryside. A gentle breeze carried the scent of freshly cut hay, mingling with the earthy aroma of damp soil. Birds darted across the sky, their silhouettes stark against the orange and purple hues of dusk. A farmer stood by his tractor, wiping sweat from his brow as he surveyed the day’s work. Nearby, a creek gurgled softly, its clear waters reflecting the fading light. The world seemed to slow down in this moment, offering a peaceful respite from the hustle of modern life. Crickets began their nightly chorus, creating a symphony of nature that filled the air with an almost magical quality.",
    "The bustling marketplace was alive with energy, a kaleidoscope of colors and sounds. Vendors shouted to advertise their wares, their voices blending into a cacophony that filled the square. Brightly colored fabrics fluttered in the wind, displayed on wooden stands alongside baskets of fresh produce. The aroma of spices and freshly baked bread wafted through the air, drawing passersby to food stalls offering tempting treats. Children ran between the stalls, laughing and chattering as they marveled at the trinkets and toys for sale. An old musician played a lively tune on his violin, his weathered face lighting up as coins clinked into his open case. It was a scene of organized chaos, yet it held a charm that left an indelible impression on anyone who visited.",
    "The library was a sanctuary of quiet, its vast collection of books offering endless possibilities for discovery. Rows upon rows of shelves stretched to the ceiling, each filled with volumes bound in every color imaginable. The scent of aged paper and polished wood created an atmosphere of timelessness. A student sat at a corner table, their laptop open beside a stack of reference books, while a couple whispered softly as they shared a page. The librarian moved silently between the aisles, her soft-soled shoes barely making a sound. Sunlight streamed through tall windows, casting a warm glow that danced across the polished floors. The library was more than a place for books; it was a temple of learning, a retreat for those seeking knowledge and inspiration.",
    "The train ride offered a window into a world both familiar and new. Fields of golden wheat stretched endlessly, their heads swaying in unison with the gentle breeze. Farmhouses punctuated the landscape, their red barns and white picket fences standing in stark contrast to the green pastures. As the train sped through small towns, glimpses of life unfolded—children playing in backyards, an old man reading on his porch, and a dog chasing after a bicycle. Inside the train, passengers settled into their seats, each absorbed in their own world. A young couple shared earphones, swaying to a tune only they could hear, while an elderly woman knitted quietly, her needles clicking rhythmically. The journey was not just about the destination; it was a collection of fleeting moments that painted a tapestry of life.",
    "The beach was a canvas of vibrant activity, with every corner alive with movement and sound. Waves crashed against the shore, their frothy edges gleaming under the midday sun. Children built elaborate sandcastles, their laughter carried on the ocean breeze. Couples strolled hand in hand along the water’s edge, their footprints quickly erased by the tide. Vendors pushed carts loaded with ice cream and cold drinks, their bells chiming to attract customers. Kite strings stretched into the sky, their colorful sails dancing against the backdrop of endless blue. As the day wore on, the heat gave way to a cooler evening, and the golden hues of sunset painted the scene with a serene beauty that lingered in the hearts of all who witnessed it.",
    "The garden was a haven of tranquility, a place where nature thrived in harmony. Rows of vibrant flowers created a mosaic of colors, each petal kissed by the morning dew. Bees buzzed industriously, moving from bloom to bloom, while butterflies flitted gracefully through the air. A stone path wound its way through the garden, leading to a small pond surrounded by willows that dipped their branches into the water. Goldfish darted beneath the surface, their movements creating ripples that reflected the sunlight. In the center of the garden stood a wooden bench, perfectly placed for quiet reflection. The air was filled with the soothing sounds of nature, from the gentle rustling of leaves to the distant trill of birdsong. It was a space that invited peace and rejuvenation.",
    "The small café on the corner was a bustling hub of activity, its cozy interior a retreat from the cold outside. The aroma of freshly brewed coffee and baked goods greeted visitors as they stepped through the door. Tables were arranged haphazardly, each one occupied by patrons engrossed in conversation, books, or laptops. A barista moved with practiced efficiency behind the counter, frothing milk and pouring espresso with a flourish. The walls were adorned with artwork from local artists, adding a touch of personality to the space. Outside, snowflakes began to fall, blanketing the street in white and creating a stark contrast to the warmth within. It was a place where strangers became friends, and time seemed to pause for just a little while.",
    "The hiking trail led through a dense forest, where towering trees formed a canopy that filtered the sunlight into golden beams. The ground was carpeted with fallen leaves, their crunching underfoot the only sound in the otherwise silent woods. Each step revealed something new—a mushroom growing on a decaying log, a squirrel darting up a tree, or the faint tracks of a deer imprinted in the soil. The air was fresh and cool, filled with the scent of pine and earth. Occasionally, the trail opened up to breathtaking views of the valley below, where rivers snaked through the landscape and mountains stood proudly in the distance. It was a journey of discovery and connection, a reminder of nature’s raw and untamed beauty.",
    "The city at night was a symphony of lights and sounds, a vibrant contrast to the quiet of the day. Neon signs illuminated the streets, their bright colors reflecting off rain-slicked pavement. Cars honked and sped through intersections, their headlights cutting through the darkness. Street vendors sold everything from hot dogs to souvenirs, their calls blending into the hum of conversation. In one corner, a street performer played a soulful tune on his saxophone, drawing a small crowd. Skyscrapers loomed overhead, their windows glowing like stars against the black sky. It was a city that never truly slept, where every corner held a story and every passerby carried a secret.",
    "The storm rolled in with a dramatic flourish, its dark clouds churning like an angry sea. Thunder rumbled ominously, shaking windows and setting car alarms blaring. Lightning streaked across the sky, illuminating the world in brief, brilliant flashes. Rain poured down in sheets, turning streets into rivers and forcing people to seek shelter wherever they could. Inside a small diner, patrons watched the storm from the safety of their booths, their conversations muted by the roar of the rain. A waitress moved between tables, balancing trays and offering warm smiles despite the chaos outside. The storm was both terrifying and beautiful, a reminder of nature’s power and its ability to command attention."
];
let i = Math.random() * 10; 
if (i >= 0 && i < 1) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[0];
} else if (i >= 1 && i < 2) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[1];
} else if (i >= 2 && i < 3) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[2];
} else if (i >= 3 && i < 4) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[3];
} else if (i >= 4 && i < 5) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[4];
} else if (i >= 5 && i < 6) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[5];
} else if (i >= 6 && i < 7) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[6];
} else if (i >= 7 && i < 8) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[7];
} else if (i >= 8 && i < 9) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[8];
} else if (i >= 9 && i <= 10) {
   document.getElementsByClassName("prf")[1].innerHTML=paragraphs[9];
}

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
wordpara = document.getElementsByClassName('prf');
let word = wordpara[1].textContent.split("");

let typedText = [];
let acurracytext = [];
backchar = [];

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

  
