var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');
var mkList = document.createElement("ul");
var mkItem = document.createElement("li")
var optBtn = document.createElement("button");
var option1 = false
var option2 = false
var option3 = false
var option4 = false

function countdown() {
  var timeLeft = 20;
  startBtn.remove();
  header.innerHTML = '';

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }else {
      timerEl.textContent = ' ';
      clearInterval();
    }
  }, 1000);
};

// function startQuiz()
// change header to display question
// append li buttons 
// add true value to prompt correct
// add false value to prompt wrong answer and deduct x seconds from timer


startBtn.addEventListener("click", countdown)
