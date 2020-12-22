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
        "Both",
        "<script src=\"xxx.js\">",
        "False",
        "alert(\"Hello World\")",
        "function myFunction()"
    ]
}

var wrongAnswers = {
    first: [
        "<javascript>",
        "<head>",
        "<script src=xxx.js>",
        "True",
        "alertBox(\"Hellow World\"",
        "function:myFunction()"
    ],

    second: [
        "<scripting>",
        "<body>",
        "<script href=\"xxx.js\">",
        "Maybe",
        "msg(\"Hello World\");",
        "function = myFunction()"
    ],

    third: [
        "<js>",
        "Neither",
        "<script name=\"xxx.js\">",
        "Depends",
        "msgBox(\"Hello World\");",
        "myFunction()"
    ]
}


function quizStart() {
    // Picks a random question
    var questionNum = diceRoll(questionAnswer.question.length);

    // Inserts the question into the "question element"
    question.textContent = questionAnswer.question[questionNum];

    // Picks a button from one of the four
    buttonChoice = diceRoll(3);

    // Places the answer into the button
    placeAnswer(questionNum, buttonChoice);

    // Places wrong answers related to question into buttons
    insertJunk(questionNum);
    

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

// Takes in given parameters and spits out a random number
function diceRoll(given) {
    var roll = Math.floor(Math.random() * given);
    return roll;
}

// Places answer into random button
function placeAnswer(questionNum, buttonChoice) {
    var button = document.getElementById(buttonChoice);
    button.textContent = questionAnswer.answer[questionNum];
}

// Fills other buttons
function insertJunk(questionNum) {

    for (var i = 0; i < 4; i++) {
        button = document.getElementById(i).value;
        
        // If button has no text then set text of button to correspond with the question
        if (button.textContent === "") {
            button.textContent = wrongAnswers[i][questionNum];
        }
    }
}


// container.addEventListener("click", function(event) {
//     var element = event.target;
  
    
//     if (element.matches("button") === true) {
      
//     }
//   });