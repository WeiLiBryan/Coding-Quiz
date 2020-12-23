var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var container = document.querySelector("#container");
var footer = document.querySelector("#footer");
var button = document.querySelector(".btn");
var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector("#start");

var time = 0;

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

var wrongAnswers = [
    [
        "<javascript>",
        "<head>",
        "<script src=xxx.js>",
        "True",
        "alertBox(\"Hello World\")",
        "function:myFunction()"
    ],

    [
        "<scripting>",
        "<body>",
        "<script href=\"xxx.js\">",
        "Maybe",
        "msg(\"Hello World\");",
        "function = myFunction()"
    ],

    [
        "<js>",
        "Neither",
        "<script name=\"xxx.js\">",
        "Depends",
        "msgBox(\"Hello World\");",
        "myFunction()"
    ]
]

startButton.addEventListener("click", function(event) {
    event.preventDefault();

    startScreen.innerHTML = "";
    




});