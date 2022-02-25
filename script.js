var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');
var mkList = document.createElement("ol");
var mkItem1 = document.createElement("li")
var mkItem2 = document.createElement("li")
var mkItem3 = document.createElement("li")
var mkItem4 = document.createElement("li")
// create array with questions and answers
var option1 = false
var option2 = false
var option3 = false
var option4 = false

function countdown() {
  var timeLeft = 20;
  startBtn.remove();
  

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


startBtn.addEventListener("click", startQuiz)

function startQuiz() {
  header.innerHTML = 'Could I be more like a question?'

  var optBtn1 = document.createElement("button")
  var optBtn2 = document.createElement("button")
  var optBtn3= document.createElement("button")
  var optBtn4 = document.createElement("button")

  optBtn1.textContent = 'Answer 1'
  optBtn1.className = "optBtn"
  optBtn2.textContent = 'Answer 2'
  optBtn2.className = "optBtn"
  optBtn3.textContent = 'Answer 3'
  optBtn3.className = "optBtn"
  optBtn4.textContent = 'Answer 4'
  optBtn4.className = "optBtn"

  
  mainEl.appendChild(mkList);
  mainEl.appendChild(optBtn1)
  mainEl.appendChild(optBtn2)
  mainEl.appendChild(optBtn3)
  mainEl.appendChild(optBtn4)

  

  countdown();
  

}
// change header to display question
// append li buttons 
// add true value to prompt correct
// add false value to prompt wrong answer and deduct x seconds from timer

