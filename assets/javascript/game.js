
let correct = 0;
let incorrect = 0;
let words1 = ["transfusion", 
    "plasma", 
    "antibody", 
    "antigen",
    "platelets",
    "titer"];

let words2 = [];
let word = document.getElementById("word");
let letters = [];
let chosenWord = "";
let guessedWord = "";
let chances = 6;

// This section handles start button click.

document.getElementById("start").addEventListener("click", function() {
    var startButton = document.getElementById("start");
    startButton.style.display = "none";
    roundStart();
});

// This handles keypress and also limits keypresses to alpha characters only

document.addEventListener("keydown", function() {
    console.log(event.keyCode);
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        wordCheck(event.key.toLowerCase());
        winCheck();
        guessRemaining();
    };
    if(event.keyCode === 16 || event.keyCode === 20) {
        alert("Don't touch that!");
    }
});



// This section deals the word setting, and the word evaluating.
// I added all of the array switching stuff because I don't like when a random generator generates the same word over and over.

function roundStart(){
    guessedWord = "";
    chosenWord = "";
    chances = 6;
    for(let i = 1; i < chances + 1; i++) {
        document.getElementById("blood" + i).style.visibility = "visible";
    };

    if(!words1.length) {
        words1 = words2;
        words2 = [];
    };
    let wordChoice = Math.floor(Math.random() * words1.length);
    chosenWord = words1[wordChoice];
    wordSplit(words1, wordChoice);
};

function wordSplit(wordArray, choice){
    let beginWord = wordArray[choice];
    let currentWord = beginWord.split("");
    letters = currentWord;
    wordSet(letters);
    if(words1 !== -1) {
        words2.push(words1[choice]);
        words1.splice(choice, 1);
    };
}

function wordSet(creativeWord) {
    let setDiv = document.getElementById("word");
    setDiv.innerHTML = "";
    document.getElementById("guessedLetters").innerHTML="";
    for(let i = 0; i< creativeWord.length; i++) {
        let setPar = document.createElement("p");
        setPar.textContent = "_ ";
        setPar.classList.add("word_class");
        setPar.setAttribute("id", "letter" + i);
        setDiv.appendChild(setPar);
};
};

function wordCheck(key) {
    for(let i=0; i < letters.length; i++) {
        if(key === letters[i]){  
            document.getElementById("letter" + i).textContent = key;
        };
        };
    if(letters.indexOf(key) === -1) {
        wrongGuess(key);
        guessedLetters(key);
    }
};

function guessedLetters(press) {
    let guessedDiv = document.getElementById("guessedLetters");
    let guessedPar = document.createElement("p");
    guessedPar.classList.add("word_class");
    guessedPar.setAttribute("id", "guessed" + press);
    guessedDiv.appendChild(guessedPar);
    document.getElementById("guessed" + press).textContent = press;
};

// This section deals with wins

function winCheck() {
    let guessedWord = document.getElementById("word").textContent;
    if(guessedWord === chosenWord) {
        document.getElementById("correct").innerHTML = "Patients Saved: " + ++correct;
        setTimeout(winMessage, 100);
    }
};

function winMessage() {
    alert("Yep!")
    roundStart();
};

// This section deals with wrong guesses

function wrongGuess(press) {
    var wrongLetters = document.getElementById("guessedLetters").textContent;
    if(!wrongLetters.includes(press)) {
        var dropChanger = document.getElementById("blood" + chances);
        dropChanger.style.visibility = "hidden";
        console.log(dropChanger);
        --chances;
    };
};

// This section handles the loss situation that occurs after you run out of guesses

function guessRemaining() {
    if(chances === 0) {
        loss();
    };
};

function loss() {
    ++incorrect;
    document.getElementById("incorrect").textContent = "Patients Lost: " + incorrect;
    setTimeout(lossMessage, 100);
}

function lossMessage() {
    alert("Nope!")
    roundStart();
};
