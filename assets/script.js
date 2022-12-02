var main = document.body.main;
var startEl = document.querySelector("#start");
var clickStart = document.createElement("button");
var timerEl = document.getElementById("timer");
var index = 0;

var timeLeft = 75;



var questions = [
    "Question 1?",
    "Question 2?",
    "Question 3?",
    "Question 4?"
];



// CLICK 'START' TO START THE QUIZ ////////////

var start = function() {
    startEl.textContent = start;
}
startEl.textContent = "Start";
//document.body.main.appendChild(clickStart);
clickStart.textContent = "Start";

///////////////////////////////////////////////



// ADVANCE QUESTIONS /////////////

var advance = function() {
    if (index < questions.length - 1) {
        index ++;
        displayQuestion();
    }
}

//////////////////////////////////



// GAME OVER /////////////////////

//////////////////////////////////



// TIMER /////////////////////////

function countdown() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        displayTimer();
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            // time up! message
        }
    }, 1000);
}

function displayTimer() {
    timerEl.textContent = timeLeft;
}



/////////////////////////////////

startEl.addEventListener("click", advance);

countdown();