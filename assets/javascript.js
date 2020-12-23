var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var container = document.querySelector("#container");
var footer = document.querySelector("#footer");
var button = document.querySelector(".btn");
var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector("#startScreen");
var main = document.querySelector("#main");

var time = 0;
var questionNumber = 0;
var buttonSpot;

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

// Function generates question for the page
function displayQuestion() {
    // Generate a div with an id of question
    var questionDiv = document.createElement("div");
    var questionP = document.createElement("p");
    var horizontalRule = document.createElement("hr");
    questionDiv.setAttribute("id", "question");

    // Set the text within the p tag equal to whatever question number is given
    questionP.textContent = questionAnswer.question[questionNumber];


    // Append p tag to question div
    questionDiv.appendChild(questionP);
    questionDiv.appendChild(horizontalRule);

    // Append question div to main div
    main.appendChild(questionDiv);
}

// Generates buttons and assigns them to bootstrap classes
function displayButtons() {

    // Generates 4 buttons
    for (var i=0; i < 4; i++) {
        // Container div
        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "container");

        // Row div
        var gridRow = document.createElement("div");
        gridRow.setAttribute("class", "row mx-auto");

        // Column div
        var gridColumn = document.createElement("div");
        gridColumn.setAttribute("class", "col-xs-1 text-center");

        // Button
        var answerButton = document.createElement("button");
        answerButton.setAttribute("class", "btn btn-primary");
        answerButton.setAttribute("type", "button");
        answerButton.setAttribute("id", i);

        var breakLine = document.createElement("br");
        // Appends all the elements
        gridColumn.appendChild(answerButton);
        gridRow.appendChild(gridColumn);
        buttonDiv.appendChild(gridRow);
        main.appendChild(buttonDiv);
        main.appendChild(breakLine);
        
    }
}

function diceRoll(given) {
    var roll = Math.floor(Math.random() * given);
    return roll;
}

function insertAnswer(buttonSpot) {
    var button = document.getElementById(buttonSpot);
    button.textContent = questionAnswer.answer[questionNumber];
}

// Start of the webpage
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Clears start screen
    main.innerHTML = "";

    displayQuestion();
    displayButtons();

    // Picks a random spot to put answer
    buttonSpot = diceRoll(4);

    // Inserts answer into a random box
    insertAnswer(buttonSpot);

    // Fills in other boxes
    fill();

    
});


