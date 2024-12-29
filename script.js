document.body.style.backgroundImage = "url(gameAssets/forest.jpg)";
var imageURL = "";
time = [0, 0]
var prevtime = []
const timeline = {
    "start": [
        "You were laying in bed, playing games,slowly drifting off to sleep. Soft snors filling to room as you fell into a deep slumber. <br><br> When you wake up You find yourself in the middle of the forest, and your body, is a CAT'S?! nothing to your name but a simple rusty compass. You look at it to inspect... It seems to go haywire?!? The arrow spins round and round with no ending in sight. Lost, you look around, hoping to find a way to..where exactly?...",
        "Which path do you wish to take?",
        "forest.jpg",
        "compassbtn()"
    ],
    "00": [
        "You are back in the forest where you started, and its paths remain the same, ",
        "where do you want to go now?",
        "forest.jpg",
        "compassbtn()"
    ],
    "10": [
        "You trudge north, your trusty rusty compass still spinning wildly in your pocket. The forest starts to clear, and you’re greeted by a strange sight: a flock of ducks... walking backwards. One particularly large duck waddles up to you, tilts its head and honks loudly. “You’re not from around here, are you?” it quacks, startling you. Before you can answer, the duck pulls out a pair of tiny sunglasses and perches them on its beak. “Listen, pal, south is our turf. If you’re gonna wander here, you gotta prove you’re cool enough.” The other ducks start quacking rhythmically, like a beatbox, and the leader nods at you. “Alright, show us your best dance moves, or scram!”",
        "Are you ready to play?",
        "laketown.jpg",
        "danceBattle()"
    ],
    "-10": [
        "You head south, bravely ignoring that you have no idea where you’re going. The forest starts to smell faintly of... pancakes? That’s weird. But before you can dwell on it, you trip over a suspiciously placed tree root and tumble face-first into a clearing. As you dust yourself off, you spot the source of the pancake smell: a short, chubby squirrel wearing a tiny chef’s hat is flipping pancakes on a rock heated by the sun. It glares at you with the intensity of someone who’s seen too much. “You lost, buddy?” it squeaks, waving a spatula threateningly.",
        "Do you apologise and ask for directions, or back away slowly from the culinary critter?",
        "eastsit.png",
        "compassbtn()"
    ],
    "01": [
        "You choose to take the Eastern path. After nights of tiring travel, you reach A villager travelling across town stops to ask who you are.",
        "You are forced to introduce yourself, noticing the hostility from the suspicious kitty; after greetings, he invites you over for lunch,<br> Do you, or do you not accept? Remember, there will be consequences.",
        "eastsit.png",
        "eastbtn()"
    ],
    "0-1": [
        "Ooh... West? My, my, a daring kitty, indeed! But beware, for the Wicked Kitty of the West is not one to take trespassers lightly. Her whiskers twitch with the scent of fear, and her claws are sharper than even the bravest heart might bear. Are you certain this is the path you wish to take?",
        "The air grows thick as you consider your choice, mystery kitty. Whispers of forgotten travellers swirl through the forest, warning you of the risks. Yet, isn’t it the thrill of danger that draws you westward? Or are your paws trembling, ready to turn tail? <br> So, what will it be? Will you press on, fearless and defiant, into the shadow of the Wicked Kitty’s domain? Or will you choose another path and leave her secrets untouched? The decision lies with you, oh bold and curious feline.",
        "404.jpg",
        "witchbtn()"
    ],
    "0-1": ["You Journey more west", "", "westpath1.png", "westeastbtn()"],
    "0-2": ["More west?!??", "", "westpath1.png", "westeastbtn()"],
    "0-3": ["Okay this is getting annoying", "", "westpath2.png", "westeastbtn()"],
    "0-4": ["okay you know what? nothing happens, good job", "", "westpath2.png", "westeastbtn()"],
    "0-5": ["Fine go west again, I'll give you a good challenge", "", "westpath3.png", "westeastbtn()"],
    "0-6": [
        "You step boldly into the west, the forest twisting into shadowy, tangled shapes. A faint jingling, like bells on the wind, draws your attention. Suddenly, glowing green eyes pierce the dark. “Well, well, a daring little stray,” purrs a silky voice. The Wicked Kitty of the West emerges from the shadows, a crown perched crookedly on her sleek, black head. Her tail flicks as she circles you. “Tell me, brave one,” she smirks, “what brings you to my domain? Treasure? Secrets? Or perhaps you simply crave danger? Either way, you’ll have to prove your worth... if you dare.”",
        "OMG OMG OMG?! Is the wicked kitty of the west offering you an apprenticeship? Will you accept? Or will you not?",
        "witchhut.png",
        "witchbtn()"
    ],
    "dummy": [
        "This is dummy text",
        "This is dummy choice text :P",
        "404.jpg",
        "compassbtn()"
    ],

}
endinglist = [
    [
        "King of Dance Ending",
        "The duck sizes you up, adjusting its tiny sunglasses dramatically. “Haven’t seen your type here before. You got moves, stranger?” it quacks with a smirk (as much as ducks can smirk). Before you can respond, a circle of backward-walking ducks forms around you, clapping their wings rhythmically. <br> As you beat the ducks at their dance battle they now consider you their king and ruler.",
        "kinggato.png"
    ],
    [
        "Ducked Ending",
        "The duck sizes you up, adjusting its tiny sunglasses dramatically. “Haven’t seen your type here before. You got moves, stranger?” it quacks with a smirk (as much as ducks can smirk). Before you can respond, a circle of backward-walking ducks forms around you, clapping their wings rhythmically. <br> As you lost their game they turn you into a duck.",
        "duckgato.png"
    ],
    [
        "The Curse of Blåhaj Ending",
        "You step back, shaking your head. “I’m not your apprentice. I refuse.” The Wicked Kitty’s grin fades into a cold, calculating smile. “So be it,” she purrs, her voice dripping with venom. “But know this, little stray: refusing me comes with consequences.”",
        "blahajgato.png"
    ],
    [
        "Witch Kitty Ending",
        "You steady yourself and nod. “I’ll prove my worth. Teach me.” The Wicked Kitty grins, her sharp teeth gleaming. “Oh, how deliciously bold! But remember, little stray, power always has a price.” With a flick of her paw, green mist swirls around you, and the forest vanishes. You’re now in a shadowy town filled with strange trinkets and a bubbling cauldron. The Wicked Kitty lounges on a velvet cushion, her eyes gleaming. “Lesson one: Never trust a pretty face. Ready to learn, mystery kitty? Or will you flee before the fun begins?”",
        "wizardgato.png"
    ],
    [
        "BREAD KITTY",
        "The villager stared at you, his warm, friendly smile forming into a deep scowl as he realised the weight of your words. “I see. I thought you were here to become one of us..but it turns out to be…” Suddenly, he pulls out a sword, placing it in a protective stance, ready to attack.",
        "breadgato.png"
    ],
    [
        "NYAN CAT Ending",
        "Happy, the villager smiles, taking your arm in his hand as he drags you into the village. Lanterns filled the street as the sounds of laughing kittens and cats filled the streets. Eventually, he stops in front of a building. Dragging him inside. The villager sat you down and told you to wait in place while he got the food. He then placed you in front of him.<br>“Eat” <br> The villager said, looking at you expectantly. You drink the soup, and a loud burp leaves your lips as you finish. Suddenly, you feel a rumbling sensation in your chest. You transform into a NYAN CAT!",
        "nyancat.gif"
    ],
    [
        "Prehistoric Time Ending",
        "As you look around you, you find that one of the trees is fake and hides a machine with a small dashboard; as you press the buttons on its dashboard, you feel yourself moving with the tree. After stopping, you exit the tree and... <br> You Found a dinocat, and maybe accidentally locked yourself in the prehistoric era",
        "dinocat.png"
    ]
]



//PREMADE BUTTON SETUP

function compassbtn() {
    adiv = document.getElementById("choicebox");
    adiv.innerHTML = '';
    indiv = document.createElement('div');
    indiv.className = 'GameLine';

    routetxt = document.createElement('p');
    routetxt.className = 'GameText'
    routetxt.innerHTML = 'Routes will vary with the user\'s choices'

    buttons = [document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button')]
    buttons[0].textContent = 'North'; buttons[0].onclick = function () { makeChoice('north'); }
    buttons[1].textContent = 'South'; buttons[1].onclick = function () { makeChoice('south'); }
    buttons[2].textContent = 'East'; buttons[2].onclick = function () { makeChoice('east'); }
    buttons[3].textContent = 'West'; buttons[3].onclick = function () { makeChoice('west'); }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'direction-button';
    }

    adiv.appendChild(buttons[0]);
    adiv.appendChild(indiv);
    indiv.appendChild(buttons[3]);
    indiv.appendChild(buttons[2]);
    adiv.appendChild(buttons[1]);
    adiv.appendChild(routetxt);
}
function westeastbtn() {
    adiv = document.getElementById("choicebox");
    adiv.innerHTML = '';
    indiv = document.createElement('div');
    indiv.className = 'GameLine';

    routetxt = document.createElement('p');
    routetxt.className = 'GameText'
    routetxt.innerHTML = 'Routes will vary with the user\'s choices'

    buttons = [document.createElement('button'), document.createElement('button')]
    buttons[1].textContent = 'East'; buttons[1].onclick = function () { makeChoice('east'); }
    buttons[0].textContent = 'West'; buttons[0].onclick = function () { makeChoice('west'); }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'direction-button';
    }

    adiv.appendChild(indiv);
    indiv.appendChild(buttons[0]);
    indiv.appendChild(buttons[1]);
    adiv.appendChild(routetxt);
}
function eastbtn() {
    adiv = document.getElementById("choicebox");
    adiv.innerHTML = '';
    indiv = document.createElement('div');
    indiv.className = 'GameLine';

    routetxt = document.createElement('p');
    routetxt.className = 'GameText'
    routetxt.innerHTML = 'Routes will vary with the user\'s choices'

    buttons = [document.createElement('button'), document.createElement('button')]
    buttons[0].textContent = 'Accept'; buttons[0].onclick = function () { endings(endinglist[5]); }
    buttons[1].textContent = 'Reject'; buttons[1].onclick = function () { endings(endinglist[4]); }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'direction-button';
    }

    adiv.appendChild(indiv);
    indiv.appendChild(buttons[0]);
    indiv.appendChild(buttons[1]);
    adiv.appendChild(routetxt);
}
function southbtn() {
    adiv = document.getElementById("choicebox");
    adiv.innerHTML = '';
    indiv = document.createElement('div');
    indiv.className = 'GameLine';

    routetxt = document.createElement('p');
    routetxt.className = 'GameText'
    routetxt.innerHTML = 'Routes will vary with the user\'s choices'

    buttons = [document.createElement('button'), document.createElement('button')]
    buttons[0].textContent = 'Ask him'; buttons[0].onclick = function () { endings(endinglist[4]); }
    buttons[1].textContent = 'Go Back'; buttons[1].onclick = function () { endings(endinglist[5]); }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'direction-button';
    }

    adiv.appendChild(indiv);
    indiv.appendChild(buttons[0]);
    indiv.appendChild(buttons[1]);
    adiv.appendChild(routetxt);
}
function witchbtn() {
    adiv = document.getElementById("choicebox");
    adiv.innerHTML = '';
    indiv = document.createElement('div');
    indiv.className = 'GameLine';

    routetxt = document.createElement('p');
    routetxt.className = 'GameText'
    routetxt.innerHTML = 'Routes will vary with the user\'s choices'

    buttons = [document.createElement('button'), document.createElement('button')]
    buttons[0].textContent = 'Accept'; buttons[0].onclick = function () { endings(endinglist[2]); }
    buttons[1].textContent = 'Reject'; buttons[1].onclick = function () { endings(endinglist[3]); }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'direction-button';
    }

    adiv.appendChild(indiv);
    indiv.appendChild(buttons[0]);
    indiv.appendChild(buttons[1]);
    adiv.appendChild(routetxt);
}
function danceBattle() {

    adiv = document.getElementById("choicebox");
    adiv.innerHTML = '';
    indiv = document.createElement('div');
    indiv.className = 'GameLine';


    routetxt = document.createElement('p');
    routetxt.className = 'GameText'
    routetxt.innerHTML = 'Dance to the rhythm of the keys (Blue Keys)'


    startgame = document.createElement('button');
    startgame.textContent = 'Start'; startgame.className = "direction-button"; startgame.onclick = function () {
        adiv.innerHTML = '';
        points = document.createElement('p');
        points.id = "score"; points.innerHTML = "0";
        buttons = [document.createElement('button'), document.createElement('button')]
        buttons[0].textContent = 'Left'; buttons[0].className = "direction-button";
        buttons[1].textContent = 'Right'; buttons[1].className = "direction-button";
        for (let i = 0; i < buttons.length; i++) { buttons[i].className = 'direction-button'; }

        adiv.appendChild(indiv);
        indiv.appendChild(buttons[0]);
        indiv.appendChild(buttons[1]);
        adiv.appendChild(points);
        adiv.appendChild(routetxt);

        let score = 0;
        let activeButton = 0;
        let gameActive = true; // Game state

        function getRandomButton() {
            return Math.random() < 0.5 ? 1 : 2;
        }

        function activateRandomButton() {
            if (!gameActive) return; // Exit if the game is not active

            activeButton = getRandomButton();
            if (activeButton == 1) { buttons[0].style.backgroundColor = "Blue"; buttons[1].style.backgroundColor = null; }
            else { buttons[1].style.backgroundColor = "Blue"; buttons[0].style.backgroundColor = null; }

            setTimeout(() => {
                if (!gameActive) return; // Stop logic if the game has ended
                if (activeButton == 1 || activeButton == 2) {
                    score -= 1; // Penalize for not pressing
                    updateScore();
                    buttons[0].style.backgroundColor = null;
                    buttons[1].style.backgroundColor = null;
                }
                activateRandomButton();
            }, 2200); // Adjust timing as needed
        }

        function updateScore() {
            points.innerHTML = score;
            if (score >= 10) {
                gameActive = false;
                endings(endinglist[0]);
            }
            else if (score <= -5) {
                gameActive = false;
                endings(endinglist[1]);
            }
        }

        function handleButtonPress(event) {
            if (!gameActive) return; // Ignore clicks if the game has ended

            if (event === activeButton && activeButton != 0) {
                score += 1; // Correct button pressed, increment score
            } else {
                score -= 1; // Wrong button pressed, decrement score
            }
            updateScore(); // Update the score display
            buttons[0].style.backgroundColor = null;
            buttons[1].style.backgroundColor = null;
            activeButton = 0; // Clear the active button
        }
        buttons[0].onclick = function () { handleButtonPress(1) }
        buttons[1].onclick = function () { handleButtonPress(2) }

        updateScore();
        activateRandomButton();
    }
    adiv.appendChild(indiv);
    adiv.appendChild(startgame);
    adiv.appendChild(routetxt);



}

function endings(loc) {
    document.getElementById("intro").innerHTML = '';
    endingname = document.createElement("p"); endingname.id = "endingname";
    endingchoice = document.createElement("p"); endingchoice.id = "endingchoice";
    document.getElementById("intro").appendChild(endingname)
    document.getElementById("intro").appendChild(endingchoice)
    document.body.style.backgroundImage = ("url('gameAssets/" + loc[2] + "')");
    endingname.innerHTML = loc[0];
    endingchoice.innerHTML = loc[1];

    document.getElementById("choicebox").innerHTML = '';
    restartButton = document.createElement('button'); restartButton.innerHTML = 'Play Again?'; restartButton.className = "direction-button";
    restartButton.onclick = function () { changeState(timeline['start']); time = [0, 0] }
    document.getElementById("choicebox").appendChild(restartButton);
}


//CHANGING AND MOVING THE BUTTONS + TEXT

function changeState(state) {
    if (state) {
        document.getElementById("intro").innerHTML = '';
        gametext = document.createElement('p'); gametext.id = "gameText";
        choicetext = document.createElement('p'); choicetext.id = "choiceText";
        document.getElementById("intro").appendChild(gametext)
        document.getElementById("intro").appendChild(choicetext)
        document.body.style.backgroundImage = ("url('gameAssets/" + state[2] + "')");
        gametext.innerHTML = state[0]
        choicetext.innerHTML = state[1]
        if (state[3]) {
            switch (state[3]) {
                case "compassbtn()": compassbtn(); break;
                case "westeastbtn()": westeastbtn(); break;
                case "witchbtn()": witchbtn(); break;
                case "danceBattle()": danceBattle(); break;
                case "eastbtn()": eastbtn(); break;

                default:
                    break;
            }
        }
        return true
    } else {
        return false
    }
}

function makeChoice(dir) {
    prevtime = [time[0], time[1]]
    switch (dir) {
        case "north": time[0] += 1; break;
        case "south": time[0] -= 1; break;
        case "east": time[1] += 1; break;
        case "west": time[1] -= 1; break;

        default:
            break;
    }
    var state = timeline[(time[0].toString() + time[1])];
    if (!changeState(state)) { state = timeline[(prevtime[0].toString() + prevtime[1])]; time = prevtime }
    changeState(state);

}
document.getElementById('tree').addEventListener('click', function () {
    endings(endinglist[6]);
});


// routetxt = document.createElement('p');
// routetxt.className = 'GameText'
// routetxt.innerHTML = 'Routes will vary with the user\'s choices'