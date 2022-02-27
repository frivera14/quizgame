var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');
var score = document.getElementsByClassName('answer')
var optBtn1 = document.createElement("button")
var optBtn2 = document.createElement("button")
var optBtn3 = document.createElement("button")
var optBtn4 = document.createElement("button")
var opt2Btn1 = document.createElement("button")
var opt2Btn2 = document.createElement("button")
var opt2Btn3 = document.createElement("button")
var opt3Btn1 = document.createElement("button")
var opt3Btn2 = document.createElement("button")
var opt3Btn3 = document.createElement("button")
var opt4Btn1 = document.createElement("button")
var opt4Btn2 = document.createElement("button")
var timeLeft = 100;
var timeInterval;
var highScore = JSON.parse(localStorage.getItem('highScore') || '[]');
var nameHere = document.createElement("input")
var submit = document.createElement("button")


optBtn1.className = 'optBtn'
optBtn2.className = 'optBtn'
optBtn3.className = 'optBtn'
optBtn4.className = 'optBtn'
opt2Btn1.className = 'optBtn'
opt2Btn2.className = 'optBtn'
opt2Btn3.className = 'optBtn'
opt3Btn1.className = 'optBtn'
opt3Btn2.className = 'optBtn'
opt3Btn3.className = 'optBtn'
opt4Btn1.className = 'optBtn'
opt4Btn2.className = 'optBtn'


function countdown() {
  startBtn.remove();
  header.innerHTML = ''
  timeInterval = setInterval(function () {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = ' ';
      clearFirst();
      clearSec();
      clearThird();
      clearLast();
      clearInterval();
    }
  }, 1000);
};


startBtn.addEventListener("click", firstQuestion)

// First Question

function firstQuestion() {
  countdown();
  header.innerText = 'Inside which HTML element do we put the JavaScript?'
  optBtn1.innerText = '<script>'
  optBtn2.innerText = '<scripting>'
  optBtn3.innerText = '<javascript>'
  optBtn4.innerText = '<js>'
  mainEl.appendChild(optBtn1)
  mainEl.appendChild(optBtn2)
  mainEl.appendChild(optBtn3)
  mainEl.appendChild(optBtn4)

};

function clearFirst() {
  optBtn1.className = 'hide'
  optBtn2.className = 'hide'
  optBtn3.className = 'hide'
  optBtn4.className = 'hide'
}

optBtn1.addEventListener('click', function checkTruth() {
  console.log('This is true')
  clearFirst();
  nextQuestion();
});

optBtn2.addEventListener('click', function checkTruth2() {
  timeLeft -= 20;
  console.log('This is false')
  clearFirst();
  nextQuestion();
})
optBtn3.addEventListener('click', function checkTruth3() {
  timeLeft -= 20;
  console.log('This is false')
  clearFirst();
  nextQuestion();
})
optBtn4.addEventListener('click', function checkTruth4() {
  timeLeft -= 20;
  console.log('This is false')
  clearFirst();
  nextQuestion();
})

// Second Question

function nextQuestion() {
  header.innerText = 'How do you create a function in JavaScript?'
  opt2Btn1.innerText = 'function = myFunction()'
  opt2Btn2.innerText = 'fucntion:myFunction()'
  opt2Btn3.innerText = 'function myFunction()'
  mainEl.appendChild(opt2Btn1)
  mainEl.appendChild(opt2Btn2)
  mainEl.appendChild(opt2Btn3)

}

function clearSec() {
  opt2Btn1.className = 'hide'
  opt2Btn2.className = 'hide'
  opt2Btn3.className = 'hide'
}

opt2Btn1.addEventListener('click', function check() {
  timeLeft -= 20
  console.log('This is false')
  clearSec();
  thirdQ();
});

opt2Btn2.addEventListener('click', function check2() {
  timeLeft -= 20;
  console.log('This is false')
  clearSec();
  thirdQ();
})
opt2Btn3.addEventListener('click', function check3() {
  console.log('This is true')
  clearSec();
  thirdQ();
})

// Third Question
function thirdQ() {
  header.innerText = 'Where is the correct place to insert a JavaScript?'
  opt3Btn1.innerText = 'Both are correct.'
  opt3Btn2.innerText = 'The <body> section'
  opt3Btn3.innerText = 'The <head> section'
  mainEl.appendChild(opt3Btn1)
  mainEl.appendChild(opt3Btn2)
  mainEl.appendChild(opt3Btn3)

}

function clearThird() {
  opt3Btn1.className = 'hide'
  opt3Btn2.className = 'hide'
  opt3Btn3.className = 'hide'
}

opt3Btn1.addEventListener('click', function anotherCheck() {
  timeLeft -= 20;
  console.log('This is true')
  clearThird();
  lastQ();
});

opt3Btn2.addEventListener('click', function anotherCheck2() {
  console.log('This is false')
  clearThird();
  lastQ();
})
opt3Btn3.addEventListener('click', function anotherCheck3() {
  timeLeft -= 20;
  console.log('This is false')
  clearThird();
  lastQ();
})

// Fourth Question
function lastQ() {
  header.innerText = 'The external JavaScript file must contain the <script> tag.'
  opt4Btn1.innerText = 'True'
  opt4Btn2.innerText = 'False'
  mainEl.appendChild(opt4Btn1)
  mainEl.appendChild(opt4Btn2)


}

function clearLast() {
  header.innerText = 'All Done! There is your score!'
  opt4Btn1.className = 'hide'
  opt4Btn2.className = 'hide'
  submit.innerText = 'submit'
  nameHere.className = 'form'
  submit.className = 'btn'

  mainEl.appendChild(nameHere)
  mainEl.appendChild(submit)

  clearInterval(timeInterval)
  timerEl.textContent = timeLeft;


  submit.addEventListener('click', () =>{
    highScore.push({
      score: timeLeft,
      name: nameHere.value
    });
  
    highScore.sort((score1, score2) => {
      return score2.score - score1.score
    })

    localStorage.setItem('highScore', JSON.stringify(highScore));

  }
  )

  
}


opt4Btn1.addEventListener('click', function lastCheck() {
  timeLeft -= 20;
  console.log('This is false')
  clearLast();
});

opt4Btn2.addEventListener('click', function lastCheck2() {
  console.log('This is true')
  clearLast();
})



// add true value to prompt correct
// add false value to prompt wrong answer and deduct x seconds from timer

