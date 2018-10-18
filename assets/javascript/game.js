
var correct = 0;
var incorrect = 0;
var words = ["transfusion", 
    "Red Blood Cell", 
    "antibody", 
    "antigen"];

var testWord = ["box"]
var word = document.getElementById("word");

// Click event that fires a function that itself passes arguments. Click cannot pass arguments.
document.getElementById("start").addEventListener("click", function() {
    wordSplit(testWord, 0);
});

// This will split whatever word is passed in from the array into another array that we can use. We need to pass letters out of this funciton.
function wordSplit(wordArray, choice){
    beginWord = wordArray[choice];
    console.log(beginWord);
    var letters = beginWord.split("");
    console.log(letters);
    wordSet(letters);
}

function wordSet(here) {
    console.log(here);
}
// Next, letters will be used to build the necessary underlined spaces.
