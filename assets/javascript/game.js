
var correct = 0;
var incorrect = 0;
var words1 = ["transfusion", 
    "plasma", 
    "antibody", 
    "antigen",
    "platelets",
    "titer"];

var words2 = [];
var word = document.getElementById("word");
var letters = [];

// This section of code handles the word setting, and the word evaluating.
// I added all of the array switching stuff because I don't like when a random generator generates the same word over and over.

document.getElementById("start").addEventListener("click", function() {
    if(!words1.length) {
        words1 = words2;
        words2 = [];
    };
    var wordChoice = Math.floor(Math.random() * words1.length);
    wordSplit(words1, wordChoice);
});

function wordSplit(wordArray, choice){
    var beginWord = wordArray[choice];
    var currentWord = beginWord.split("");
    letters = currentWord;
    wordSet(letters);
    if(words1 !== -1) {
        words2.push(words1[choice]);
        words1.splice(choice, 1);
        console.log(words1);
        console.log(words2);
    };
}

function wordSet(creativeWord) {
    var setDiv = document.getElementById("word");
    setDiv.innerHTML = "";
    for(i = 0; i< creativeWord.length; i++) {
        var wordPar = document.createElement("p");
        wordPar.textContent = "_ ";
        wordPar.classList.add("word_class");
        wordPar.setAttribute("id", "letter" + i);
        setDiv.appendChild(wordPar);
};
};

document.addEventListener("keydown", function() {
    wordCheck(event.key);
});


function wordCheck(key) {
    for(i=0; i < letters.length; i++) {
        if(key === letters[i]){  
            document.getElementById("letter" + i).textContent = key;
        }
    }
};

function wordSet(creativeWord) {
    var paraDiv = document.getElementById("word");
    paraDiv.innerHTML = "";
    for(i = 0; i< creativeWord.length; i++) {
        var wordPar = document.createElement("p");
        wordPar.textContent = "_ ";
        wordPar.classList.add("word_class");
        wordPar.setAttribute("id", "letter" + i);
        paraDiv.appendChild(wordPar);
};
};