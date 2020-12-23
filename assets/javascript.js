var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var container = document.querySelector("#container");
var footer = document.querySelector("#footer");
var buttonClass = document.querySelector(".btn");
var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector("#startScreen");
var main = document.querySelector("#main");
var body = document.getElementById("#background");

var time = 0;
var questionNumber = 0;
var buttonSpot;

var questionAnswer = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<javascript>",
            "<scripting>",
            "<js>"
        ],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers: [
            "<script src=xxx.js>",
            "<script src=\"xxx.js\">",
            "<script href=\"xxx.js\">",
            "<script name=\"xxx.js\">"
        ],
        correct: 1
    },

    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: [
            "Depends",
            "True",
            "Maybe",
            "False"
        ],
        correct: 3
    },

    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: [
            "msgBox(\"Hello World\");",
            "alertBox(\"Hello World\")",
            "msg(\"Hello World\");",
            "alert(\"Hello World\")"
        ],
        correct: 3
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()"
        ],
        correct: 2
    }
]


// Function generates question for the page
function displayQuestion() {
    // Generate a div with an id of question
    var questionDiv = document.createElement("div");
    var questionP = document.createElement("p");
    var horizontalRule = document.createElement("hr");
    questionDiv.setAttribute("id", "question");

    // Set the text within the p tag equal to whatever question number is given
    questionP.textContent = questionAnswer[questionNumber].question;


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
        answerButton.setAttribute("class", "btn btn-primary answerbutton");
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

// Fills buttons with answers
function fillButtons() {

    for (var id=0; id < 4; id++) {
        var button = document.getElementById(id);

        button.textContent = questionAnswer[questionNumber].answers[id];
    }
}

function nextQuestion() {
    // Clears screen
    main.innerHTML = "";
    // Inserts and displays question
    displayQuestion();
    // Inserts and displays buttons
    displayButtons();
    // Fills displayed buttons
    fillButtons();
}

function confirmation(bool) {
    var footer = document.createElement("footer");
    var footerP = document.createElement("p");
    footer.setAttribute("id", "question")
    var horizontalRule = document.createElement("hr");

    if (bool) { 
        footerP.textContent = "Correct!";
    }
    else {
        footerP.textContent = "Wrong!";
    }

    footer.appendChild(horizontalRule);
    footer.appendChild(footerP);
    body.appendChild(footer);

}


// Start of the webpage
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    nextQuestion();

    var answerButton = document.querySelector(".answerbutton");

    answerButton.addEventListener("click", function(event) {
        event.preventDefault();

        var chosenAnswerId = parseInt(this.id);

        if (chosenAnswerId === questionAnswer[questionNumber].correct) {
            confirmation(true);
        }

        
        questionNumber++;
        nextQuestion();
    });
});




