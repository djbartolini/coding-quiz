var h2El = document.getElementById("h2");
var startEl = document.getElementById("start")
var button1El = document.getElementById("button1");
var button2El = document.getElementById("button2");
var button3El = document.getElementById("button3");
var button4El = document.getElementById("button4");
var timerEl = document.getElementById("timer");
var tryAgain = document.getElementById("try-again");
var formEl = document.getElementById("form");
var submitEl = document.getElementById("submit");
var pEl = document.getElementById("p");
var tableEl = document.getElementById("table");
var tableInitials = document.getElementById("table-initials");
var tableScore = document.getElementById("table-score");
var tableHead = document.getElementById("th");
var goBack = document.getElementById("go-back");
var clear = document.getElementById("clear");

button1El.style.display = "none";
button2El.style.display = "none";
button3El.style.display = "none";
button4El.style.display = "none";
timerEl.style.display = "none";
tryAgain.style.display = "none";
formEl.style.display = "none";
tableEl.style.display = "none";
tableHead.style.display = "none";
tableInitials.style.display = "none";
tableScore.style.display = "none";
goBack.style.display = "none";
clear.style.display = "none";

var questions = [
    "Welcome to the Coding Quiz!",
    "Question 1?",
    "Question 2?",
    "Question 3?",
    "Question 4?",
    "Question 5?"
];

var optionA = [
    "1a correct", "2a correct", "3a", "4a", "5a correct"
];
var optionB = [
    "1b", "2b", "3b", "4b", "5b"
];
var optionC = [
    "1c", "2c", "3c", "4c correct", "5c"
];
var optionD = [
    "1d", "2d", "3d correct", "4d", "5d"
];

var timeLeft = 75;

var index = 0;

// START AND ADVANCE THROUGH QUIZ ////////////

var advance = function() {
    if (index === 0) {
        pEl.style.display = "block";
        startEl.style.display = "block";
        index++;
        startQuiz();
    } else {
        index++;
        startQuiz();
    }
}

var startQuiz = function() {
    if (index > 0) {
        tryAgain.style.display = "none";
        h2El.textContent = questions[index];
        pEl.style.display = "none";
        startEl.style.display = "none";
        button1El.style.display = "block";
        button2El.style.display = "block";
        button3El.style.display = "block";
        button4El.style.display = "block";      
    }
     if (index === 1) {
        button1El.textContent = optionA[index - 1];
        button2El.textContent = optionB[index - 1];
        button3El.textContent = optionC[index - 1];
        button4El.textContent = optionD[index - 1];
        button1El.addEventListener("click", advance);
        button2El.addEventListener("click", deduct);
        button3El.addEventListener("click", deduct);
        button4El.addEventListener("click", deduct);
    }
    if (index === 2) {
        button1El.textContent = optionA[index - 1];
        button2El.textContent = optionB[index - 1];
        button3El.textContent = optionC[index - 1];
        button4El.textContent = optionD[index - 1];
        button1El.addEventListener("click", advance);
        button2El.addEventListener("click", deduct);
        button3El.addEventListener("click", deduct);
        button4El.addEventListener("click", deduct);
    }
    if (index === 3) {
        button1El.textContent = optionA[index - 1];
        button2El.textContent = optionB[index - 1];
        button3El.textContent = optionC[index - 1];
        button4El.textContent = optionD[index - 1];
        button1El.removeEventListener("click", advance);
        button1El.addEventListener("click", deduct);
        button2El.addEventListener("click", deduct);
        button3El.addEventListener("click", deduct);
        button4El.removeEventListener("click", deduct);
        button4El.addEventListener("click", advance);
    }
    if (index === 4) {
        button1El.textContent = optionA[index - 1];
        button2El.textContent = optionB[index - 1];
        button3El.textContent = optionC[index - 1];
        button4El.textContent = optionD[index - 1];
        button1El.addEventListener("click", deduct);
        button2El.addEventListener("click", deduct);
        button3El.removeEventListener("click", deduct);
        button3El.addEventListener("click", advance);
        button4El.removeEventListener("click", advance);
        button4El.addEventListener("click", deduct);
    }
    if (index === 5) {
        button1El.textContent = optionA[index - 1];
        button2El.textContent = optionB[index - 1];
        button3El.textContent = optionC[index - 1];
        button4El.textContent = optionD[index - 1];
        button1El.removeEventListener("click", deduct);
        button1El.addEventListener("click", advance);
        button2El.addEventListener("click", deduct);
        button3El.removeEventListener("click", advance);
        button3El.addEventListener("click", deduct);
        button4El.addEventListener("click", deduct);
    }
    if (index === 6) {
        gameOver();
    }
}
//////////////////////////////////


// TIMER /////////////////////////

function countdown() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        displayTimer();
        if (timeLeft === 0 || index > 5) {
            clearInterval(timeInterval);
            gameOver();
        } else if (timeLeft < 0) {
            timeLeft = 0;
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}

function displayTimer() {
    timerEl.style.display = "block";
    timerEl.textContent = timeLeft;
}

function deduct() {
    timeLeft = timeLeft - 15;
    tryAgain.style.display = "block";
}
/////////////////////////////////


// GAME OVER /////////////////////

var gameOver = function() {
    var allInitials = [localStorage.getItem("initials")];
    var allScores = [localStorage.getItem("scores")];
    var score = timeLeft;
    timerEl.textContent = score;
    if (score > 0) {
        h2El.textContent = "All Done!";
    } else {
        h2El.textContent = "Game Over";
    }
    button1El.style.display = "none";
    button2El.style.display = "none";
    button3El.style.display = "none";
    button4El.style.display = "none";
    formEl.style.display = "block";
    submitEl.addEventListener("click", function(event) {
        event.preventDefault();
        var initials = document.querySelector("#initials").value;
        allInitials.push(initials);
        allScores.push(score);
        localStorage.setItem("initials", allInitials);
        localStorage.setItem("scores", allScores);
        renderScores();
    })
}


var renderScores = function() {
    h2El.textContent = "High Scores"
    formEl.style.display = "none";
    tableHead.style.display = "inline-table"
    tableEl.style.display = "inline-table";
    tableInitials.style.display = "inline-table";
    // tableInitials.style.flexDirection = "column";
    tableScore.style.display = "inline-table";
    // tableScore.style.flexDirection = "column"
    var initialsText = localStorage.getItem("initials");
    tableInitials.textContent = initialsText;
    tableScore.textContent = localStorage.getItem("scores");
    goBack.style.display = "inline-block";
    clear.style.display = "inline-block";
    goBack.addEventListener("click", restart);
    goBack.addEventListener("click", countdown);
    clear.addEventListener("click", clearTable);
}

var restart = function() {
    timeLeft = 75;
    index = 0;
    tableEl.style.display = "none";
    tableHead.style.display = "none";
    tableInitials.style.display = "none";
    tableScore.style.display = "none";
    goBack.style.display = "none";
    clear.style.display = "none";
    advance();
}

var clearTable = function() {
    localStorage.clear();
    initials = [];
    allScores = [];
    tableInitials.textContent = "";
    tableScore.textContent = "";
}
//////////////////////////////////

startEl.addEventListener("click", advance);
startEl.addEventListener("click", countdown);