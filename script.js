var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');


function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }else {
      timerEl.textContent = ' ';
      clearInterval();
      displayMessage();
    }
  }, 1000);
};

countdown();

function displayMessage() {
    ;
}