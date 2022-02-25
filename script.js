var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');
var answer = document.getElementById('answer');
var timeLeft = 150;

// create array with questions and answers
const questionSet = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<scripting>", correct: false },

    ]
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "function = myFunction()", correct: false },
      { text: "fucntion:myFunction()", correct: false },

    ]
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "The <body> section.", correct: true },
      { text: "Both <body> and <head> are correct.", correct: false },
      { text: "The <head> section", correct: false },
    ]
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },

    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alert('Hello World');", correct: true },
      { text: "msgBox('Hello World');", correct: false },
      { text: "alertBox('Hello World');", correct: false },
      { text: "msg('Hello World');", correct: false },
    ]
  },
];

let shuffledQuestions, currentQuestion


function countdown() {
  startBtn.remove();
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


startBtn.addEventListener("click", setQuiz)

function setQuiz() {
  countdown();
  shuffledQuestions = questionSet.sort(() => Math.random() - .5)
  currentQuestion = 0
  setQuestions();
};

function setQuestions() {
  showQuestion(shuffledQuestions[currentQuestion])
};

function showQuestion(question) {
  header.innerText = question.question
  question.answers.forEach(answers => {
    var optBtn = document.createElement("button")
    optBtn.innerText = answers.text
    optBtn.className = "optBtn"
    optBtn.answers
    mainEl.appendChild(optBtn)
    

  })
}
// add true value to prompt correct
// add false value to prompt wrong answer and deduct x seconds from timer

