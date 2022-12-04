var h2El = document.getElementById("h2");
var startEl = document.getElementById("start")
var button1El = document.getElementById("button1");
var button2El = document.getElementById("button2");
var button3El = document.getElementById("button3");
var button4El = document.getElementById("button4");
var timerEl = document.getElementById("timer");
var formEl = document.getElementById("form");
var submitEl = document.getElementById("submit");
var highScoresEl = document.getElementById("high-scores");
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

var optionA = [
    "1a", "2a", "3a", "4a", "5a"
];
var optionB = [
    "1b", "2b", "3b", "4b", "5b"
];
var optionC = [
    "1c", "2c", "3c", "4c", "5c"
];
var optionD = [
    "1d", "2d", "3d", "4d", "5d"
];


button1El.style.display = "none";
button2El.style.display = "none";
button3El.style.display = "none";
button4El.style.display = "none";
timerEl.style.display = "none";
formEl.style.display = "none";
highScoresEl.style.display = "none";


// CLICK 'START' TO START THE QUIZ ////////////

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

///////////////////////////////////////////////



// ADVANCE QUESTIONS /////////////

var startQuiz = function() {
    if (index > 0) {
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
        }
    }, 1000);
}

function displayTimer() {
    timerEl.style.display = "block";
    timerEl.textContent = timeLeft;
}

function deduct() {
    timeLeft = timeLeft - 15;
}


/////////////////////////////////

// GAME OVER /////////////////////

var gameOver = function() {
    h2El.textContent = "All Done!"
    button1El.style.display = "none";
    button2El.style.display = "none";
    button3El.style.display = "none";
    button4El.style.display = "none";
    formEl.style.display = "block";
    submitEl.addEventListener("click", function(event) {
        event.preventDefault();
        var initials = document.querySelector("#initials").value;
        localStorage.setItem("initials", initials);
    })
}



//////////////////////////////////

startEl.addEventListener("click", advance);
startEl.addEventListener("click", countdown);