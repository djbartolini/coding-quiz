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
goBack.style.display = "none";
clear.style.display = "none";

var questions = [
    "Welcome to the Coding Quiz!",
    "What is the syntax for an HTML tag??",
    "What symbol is used to end a line of code in Javascript?",
    "The JavaScript Math.random() function will return what value?",
    "Which of these JavaScript operators represent strict equality?",
    "Which JavaScript document method is used to return ALL elements matching a specified (CSS) selector?"
];

// ANSWER KEY // 1: A // 2: A // 3: D // 4: C // 5: A //

var optionA = [
    "a. <> ", "a. ; ", "a. A random number between 0 and 99", "a. = ", "a. querySelectorAll()"
];
var optionB = [
    "b. {} ", "b. } ", "b. A random number between 0 and 9", "b. == ", "b. querySelector()"
];
var optionC = [
    "c. class=\"\" ", "c. ? ", "c. A random floating point number between 1 and 2", "c. === ", "c. getElementByID"
];
var optionD = [
    "d. (: :) ", "d. </> ", "d. A random floating point number between 0 and 1", "d. :: ", "d. getElementsByClassName"
];

var timeLeft = 75;

var index = 0;

// START AND ADVANCE THROUGH QUIZ ////////////

var advance = function() {
    if (index === 0) {
        pEl.style.display = "block";
        startEl.style.display = "block";
        index++;
        advanceQuiz();
    } else {
        index++;
        advanceQuiz();
    }
}

var advanceQuiz = function() {
    if (index > 0) {
        tryAgain.style.display = "none";
        h2El.textContent = questions[index];
        pEl.style.display = "none";
        startEl.style.display = "none";
        button1El.style.display = "block";
        button2El.style.display = "block";
        button3El.style.display = "block";
        button4El.style.display = "block";  
        button1El.textContent = optionA[index - 1];
        button2El.textContent = optionB[index - 1];
        button3El.textContent = optionC[index - 1];
        button4El.textContent = optionD[index - 1];    
    }
     if (index === 1) {
        button1El.addEventListener("click", advance);
        button2El.addEventListener("click", deduct);
        button3El.addEventListener("click", deduct);
        button4El.addEventListener("click", deduct);
    }
    if (index === 2) {
        button1El.addEventListener("click", advance);
        button2El.addEventListener("click", deduct);
        button3El.addEventListener("click", deduct);
        button4El.addEventListener("click", deduct);
    }
    if (index === 3) {
        button1El.removeEventListener("click", advance);
        button1El.addEventListener("click", deduct);
        button2El.addEventListener("click", deduct);
        button3El.addEventListener("click", deduct);
        button4El.removeEventListener("click", deduct);
        button4El.addEventListener("click", advance);
    }
    if (index === 4) {
        button1El.addEventListener("click", deduct);
        button2El.addEventListener("click", deduct);
        button3El.removeEventListener("click", deduct);
        button3El.addEventListener("click", advance);
        button4El.removeEventListener("click", advance);
        button4El.addEventListener("click", deduct);
    }
    if (index === 5) {
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
    timerEl.textContent = timeLeft;
    if (timeLeft > 0) {
        h2El.textContent = "All Done!";
    } else {
        h2El.textContent = "Game Over";
    }
    button1El.style.display = "none";
    button2El.style.display = "none";
    button3El.style.display = "none";
    button4El.style.display = "none";
    tryAgain.style.display = "none";
    formEl.style.display = "block";
}

var allInitials = JSON.parse(localStorage.getItem("initials")) || [];
var allScores = JSON.parse(localStorage.getItem("scores")) || [];

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    allInitials.push(initials);
    allScores.push(timeLeft);
    localStorage.setItem("initials", JSON.stringify(allInitials));
    localStorage.setItem("scores", JSON.stringify(allScores));
    renderScores();
})

//////////////////////////////////////

// HIGH SCORES ///////////////////////

var renderScores = function() {
    h2El.textContent = "Recent Scores"
    formEl.style.display = "none";
    tableEl.style.display = "inline-table";
    var initials = JSON.parse(localStorage.getItem("initials"));
    var localScores = JSON.parse(localStorage.getItem("scores"));

    for (var i = 0; i < initials.length; i++) {
        var trEl = document.createElement("tr");
        var initialEl = document.createElement("td");
        var scoreEl = document.createElement("td");
        initialEl.textContent = initials[i];
        scoreEl.textContent = localScores[i];
        trEl.appendChild(initialEl);
        trEl.appendChild(scoreEl);
        tableEl.append(trEl);
    }

    goBack.style.display = "inline-block";
    clear.style.display = "inline-block";
    goBack.addEventListener("click", restart);
    clear.addEventListener("click", clearTable);
}

var restart = function() {
    location.reload();
}

var clearTable = function() {
    localStorage.clear();
    tableEl.style.display = "none";
}
//////////////////////////////////

startEl.addEventListener("click", advance);
startEl.addEventListener("click", countdown);