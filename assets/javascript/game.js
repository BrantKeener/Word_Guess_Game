
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

// This section deals the word setting, and the word evaluating.
// I added all of the array switching stuff because I don't like when a random generator generates the same word over and over.

document.getElementById("start").addEventListener("click", function() {
    if(!words1.length) {
        words1 = words2;
        words2 = [];
    };
    let wordChoice = Math.floor(Math.random() * words1.length);
    chosenWord = words1[wordChoice];
    wordSplit(words1, wordChoice);
});

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
    for(i = 0; i< creativeWord.length; i++) {
        let setPar = document.createElement("p");
        setPar.textContent = "_ ";
        setPar.classList.add("word_class");
        setPar.setAttribute("id", "letter" + i);
        setDiv.appendChild(setPar);
};
};

document.addEventListener("keydown", function() {
    wordCheck(event.key.toLowerCase());
    winCheck();
});


function wordCheck(key) {
    for(i=0; i < letters.length; i++) {
        if(key === letters[i]){  
            document.getElementById("letter" + i).textContent = key;
        } else {
            guessedLetters(key);
        };
    };
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
    var correctGuess = 0;
    if(guessedWord === chosenWord) {
        document.getElementById("correct").innerHTML = "Patients Saved: " + ++correctGuess;
    }
};