var main = document.body.main;
var buttonEl = document.querySelector("buttons");
var timerEl = document.getElementById("timer");
var h2El = document.getElementById("h2");
var pEl = document.getElementById("p");
var index = 0;

var timeLeft = 75;



var questions = [
    "Welcome to the Coding Quiz!",
    "Question 1?",
    "Question 2?",
    "Question 3?",
    "Question 4?",
    "Question 5?"
];



// CLICK 'START' TO START THE QUIZ ////////////

// var start = function() {
//     startEl.textContent = start;
// }
// startEl.textContent = "Start";
//document.body.main.appendChild(clickStart);

// clickStart.textContent = "Start";

///////////////////////////////////////////////



// ADVANCE QUESTIONS /////////////
var displayQuestion = function() {
    h2El.textContent = questions[index];
    if (index > 0) {
        pEl.style.display = "none";
    }
}

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


