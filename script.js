var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz')
var header = document.getElementById('welcome');
var timeLeft = 150;
let shuffledQuestions, currentQuestion

// create array with questions and answers
const questionSet = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<scripting>", correct: false },

    ]
  },
  {
    question: "How do you create a function in JavaScript?",
    answer: [
      { text: "function myFunction()", correct: true },
      { text: "function = myFunction()", correct: false },
      { text: "fucntion:myFunction()", correct: false },

    ]
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answer: [
      { text: "The <body> section.", correct: true },
      { text: "Both <body> and <head> are correct.", correct: false },
      { text: "The <head> section", correct: false },
    ]
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answer: [
      { text: "True", correct: true },
      { text: "False", correct: false },

    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answer: [
      { text: "alert('Hello World');", correct: true },
      { text: "msgBox('Hello World');", correct: false },
      { text: "alertBox('Hello World');", correct: false },
      { text: "msg('Hello World');", correct: false },
    ]
  },
];

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
  question.answer.forEach(answer => {
    var optBtn = document.createElement("button")
    optBtn.innerText = answer.text
    optBtn.className = "optBtn"
    optBtn.addEventListener('click', selectAnswer)
    mainEl.appendChild(optBtn)


  })
}

function selectAnswer(event) {
  var answerSelection = event.target.addEventListener('click');

  if (answerSelection.matches(true))
    console.log('This is true');
};


// add true value to prompt correct
// add false value to prompt wrong answer and deduct x seconds from timer

