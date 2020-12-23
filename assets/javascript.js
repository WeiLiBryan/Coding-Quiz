var highscore = document.querySelector("#highscore");
var navbar = document.querySelector(".navbar");
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var main = document.querySelector("#main");
var body = document.body;

var time;
var questionNumber = 0;
var clock;

var questionAnswer = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<javascript>",
            "<scripting>",
            "<js>"
        ],
        correct: "<script>",
    },

    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers: [
            "<script src=xxx.js>",
            "<script src=\"xxx.js\">",
            "<script href=\"xxx.js\">",
            "<script name=\"xxx.js\">"
        ],
        correct: "<script src=\"xxx.js\">"
    },

    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: [
            "Depends",
            "True",
            "Maybe",
            "False"
        ],
        correct: "False"
    },

    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: [
            "msgBox(\"Hello World\");",
            "alertBox(\"Hello World\")",
            "msg(\"Hello World\");",
            "alert(\"Hello World\")"
        ],
        correct: "alert(\"Hello World\")"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()"
        ],
        correct: "function myFunction()"
    }
];


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

    // Container div
    var container = document.createElement("div");
    container.setAttribute("class", "container");

    // Generates 4 buttons
    for (var i=0; i < 4; i++) {
        
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
        container.appendChild(gridRow);
        container.appendChild(breakLine);
        main.appendChild(container);
        
        
    }
}

// Fills buttons with answers
function fillButtons() {

    for (var id=0; id < 4; id++) {
        var button = document.getElementById(id);

        button.textContent = questionAnswer[questionNumber].answers[id];
    }
}

function nextQuestion() {
    main.innerHTML = "";
    console.log("question index: " + questionNumber);
    // Inserts and displays question
    displayQuestion();
    // Inserts and displays buttons
    displayButtons();
    // Fills displayed buttons
    fillButtons();
}

// Displays whether user is correct or wrong
function confirmation(bool) {
    var confirmationDiv = document.createElement("div");
    confirmationDiv.innerHTML = "";
    var confirmationP = document.createElement("p");
    confirmationDiv.setAttribute("id", "confirmation");

    var horizontalRule = document.createElement("hr");

    if (bool) { 
        confirmationP.textContent = "Question " + (questionNumber+1) + ": Correct!";
    }
    else {
        confirmationP.textContent = "Question " + (questionNumber+1) + ": Wrong!";
    }

    confirmationDiv.appendChild(horizontalRule);
    confirmationDiv.appendChild(confirmationP);
    body.appendChild(confirmationDiv);
}

function countdown() {
    time = 40;
    clock = setInterval(function () {
        time--;
        timer.textContent = "Timer: " + time;
        if (time < 0){
            clearInterval(clock);
            registerScore();
        }
    }, 1000);
}

function registerScore() {
    // Clear everything
    body.innerHTML = "";

    // Since time is the score it sets it to 0 if it goes into the negative
    if (time < 0){
        time = 0;
    }

    // Generates a div
    var scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("id", "format");

    // 2 p tags in div
    var scoreP = document.createElement("p");
    var scoreP2 = document.createElement("p");
    scoreP.setAttribute("id", "format");
    scoreP2.setAttribute("id", "format");

    // Text that appears on the page
    scoreP.textContent = "Final Score: " + time;
    scoreP2.textContent = "Enter your signature here then press ENTER to submit";

    // input field on page
    var sig = document.createElement("input");
    sig.setAttribute("class", "form-control form-control-sm");
    sig.setAttribute("placeholder", "Signature");
    sig.setAttribute("id", "sig");
    sig.setAttribute("type", "text");
    sig.setAttribute("aria-label", ".form-control-sm example");

    // Appends to body
    scoreDiv.appendChild(scoreP);
    scoreDiv.appendChild(scoreP2);
    scoreDiv.appendChild(sig);
    body.appendChild(scoreDiv);

    // If enter is pressed, saves to local storage then opens leaderboard
    var inputId = document.getElementById('sig');
    inputId.addEventListener('keyup', function onEvent(e) {
        if (e.keyCode === 13) {
            store(sig);
            leaderboard();
        }
    });
    
}

function store(sig) {
    var user = {
        signature: sig.value.trim(),
        score: time
    };
    localStorage.setItem("user", JSON.stringify(user));
}

function leaderboard() {
    body.innerHTML = "";

    var leader = JSON.parse(localStorage.getItem("user"));
    var leaderSig = leader.signature;
    var leaderScore = leader.score;

    var leaderboard = document.createElement("div");
    var leaderboardP = document.createElement("p");
    leaderboardP.setAttribute("id", "Leaderboard-head");
    leaderboardP.textContent = "Latest User: " + leaderSig + "   Score: " + leaderScore;
    leaderboard.appendChild(leaderboardP);
    body.appendChild(leaderboard);
}





main.addEventListener("click", function(event) {
    event.preventDefault();

    // If start is pressed clears screen and starts timer
    if (event.target === startButton){
        event.preventDefault();
        // Clears screen
        main.innerHTML = "";
        countdown();
    }
        nextQuestion();
        if (event.target.matches("button")) {
            var chosenAnswer = event.target.textContent;
            
            console.log("choice: " + chosenAnswer, "answer: " + questionAnswer[questionNumber].correct);

            if (chosenAnswer === questionAnswer[questionNumber].correct) {
                confirmation(true);
                time += 15;
            }
            else {
                confirmation(false);
                time -= 15;
            }
            
            // Keep going until it runs out of questions
            if (questionNumber < 4) {
            questionNumber++;
            nextQuestion();
            }
            // Once limit is reached register score
            else{
                clearInterval(clock);
                registerScore();
            }
        }

});



navbar.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target === highscore) {
        leaderboard();
    }        
});


