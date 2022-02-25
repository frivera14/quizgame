var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');
var timeLeft = 20;

// create array with questions and answers

function countdown() {
  startBtn.remove();


  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = ' ';
      clearInterval();
    }
  }, 1000);
};


startBtn.addEventListener("click", startQuiz)

function startQuiz() {
  countdown();
  header.innerHTML = 'Could I be more like a question?'

  var optBtn1 = document.createElement("button")
  var optBtn2 = document.createElement("button")
  var optBtn3 = document.createElement("button")
  var optBtn4 = document.createElement("button")

  optBtn1.textContent = 'Answer 1'
  optBtn1.className = "optBtn"
  optBtn2.textContent = 'Answer 2'
  optBtn2.className = "optBtn"
  optBtn3.textContent = 'Answer 3'
  optBtn3.className = "optBtn"
  optBtn4.textContent = 'Answer 4'
  optBtn4.className = "optBtn"

  mainEl.appendChild(optBtn1)
  mainEl.appendChild(optBtn2)
  mainEl.appendChild(optBtn3)
  mainEl.appendChild(optBtn4)



}
// change header to display question
// append li buttons
// add true value to prompt correct
// add false value to prompt wrong answer and deduct x seconds from timer

