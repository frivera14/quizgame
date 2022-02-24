var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');


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


startBtn.addEventListener("click", countdown)
