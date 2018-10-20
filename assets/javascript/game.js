
var correct = 0;
var incorrect = 0;
var words = ["transfusion", 
    "plasma", 
    "antibody", 
    "antigen"];

var word = document.getElementById("word");

// Click event that fires a function that itself passes arguments. Click cannot pass arguments.

document.getElementById("start").addEventListener("click", function() {
    var wordChoice = Math.floor(Math.random() * words.length);
    wordSplit(words, wordChoice);
});

// This will split whatever word is passed in from the array into another array that we can use.

function wordSplit(wordArray, choice){
    var beginWord = wordArray[choice];
    var letters = beginWord.split("");
    wordSet(letters);
    wordCheck(letters);
    // console.log(letters);
}

// This should set up three paragraphs with underlines, add underlines, and set class.

function wordSet(letters) {
    var paraDiv = document.getElementById("word");
    paraDiv.innerHTML = "";
    for(i = 0; i< letters.length; i++) {
        var wordPar = document.createElement("p");
        wordPar.textContent = "_ ";
        wordPar.classList.add("word_class");
        wordPar.setAttribute("id", "letter" + i);
        paraDiv.appendChild(wordPar);
        // console.log(letters);
};
};

// This function will handle button presses, update the html, or give an alert.

function wordCheck(letters) {
    document.addEventListener("keydown", function() {
        console.log(letters);
        var pressedKey;
        pressedKey = event.key;
        for(i=0; i < letters.length; i++) {
            if(pressedKey === letters[i]){
                // console.log(letters);
                document.getElementById("letter" + i).textContent = pressedKey;
            }
        }
        });
    };
