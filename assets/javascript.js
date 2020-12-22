var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var container = document.querySelector("#container");

var questionAnswer = {
    question: [
        "Inside which HTML element do we put the JavaScript?", 
        "Where is the correct place to insert a JavaScript?",
        "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        "The external JavaScript file must contain the <script> tag.",
        "How do you write \"Hello World\" in an alert box?",
        "How do you create a function in JavaScript?"
    ],

    answer: [
        "<script>",
        "Both are correct",
        "<script src=\"xxx.js\">",
        "False",
        "alert(\"Hello World\")",
        "function myFunction()"
    ]
}

// Compares answer to question
function verification(num) {
    if (questionAnswer.question[num] === questionAnswer.answer[num]) {
        return false;
    }

    else {
        return true;
    }
}



container.addEventListener("click", function(event) {
    var element = event.target;
  
    
    if (element.matches("button") === true) {
      
    }
  });