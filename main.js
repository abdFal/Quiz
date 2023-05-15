const questions = [
  {
    question: "Which of the following is an example of a vector quantity?",
    answers: [
      { text: "Temperature", correct: false },
      { text: "Time", correct: false },
      { text: "Distance", correct: false },
      { text: "Velocity", correct: true },
    ],
  },
  {
    question: "Which of the following equations represents Ohm's Law?",
    answers: [
      { text: "V = IR", correct: true },
      { text: "P = IV", correct: false },
      { text: "F = ma", correct: false },
      { text: "P = F/A", correct: false },
    ],
  },
  {
    question: "Which of the following statements about kinetic energy is true?",
    answers: [
      {
        text: "Kinetic energy is always conserved in a system",
        correct: false,
      },
      { text: "Kinetic energy is the energy of motion", correct: true },
      { text: "Kinetic energy is a scalar quantity", correct: true },
      { text: "Kinetic energy is equal to potential energy", correct: false },
    ],
  },
  {
    question: "What is the unit of electric charge?",
    answers: [
      { text: "Ampere", correct: false },
      { text: "Volt", correct: false },
      { text: "Ohm", correct: false },
      { text: "Coulomb", correct: true },
    ],
  },
  {
    question: "Which of the following is a fundamental force of nature?",
    answers: [
      { text: "Gravity", correct: true },
      { text: "Friction", correct: false },
      { text: "Tension", correct: false },
      { text: "Inertia", correct: false },
    ],
  },
  {
    question:
      "Which of the following equations represents the work done by a constant force on an object?",
    answers: [
      { text: "W = Fd", correct: true },
      { text: "W = mgh", correct: false },
      { text: "W = Pt", correct: false },
      { text: "W = QV", correct: false },
    ],
  },
  {
    question: "What is the SI unit of power?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Watt", correct: true },
      { text: "Newton", correct: false },
      { text: "Volt", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a characteristic of a simple harmonic motion?",
    answers: [
      { text: "Acceleration is proportional to displacement", correct: false },
      { text: "Period is inversely proportional to frequency", correct: true },
      { text: "Amplitude is independent of frequency", correct: false },
      { text: "Velocity is constant throughout the motion", correct: false },
    ],
  },
  {
    question: "Which of the following is a property of a magnetic field?",
    answers: [
      { text: "It can do work on charged particles", correct: true },
      { text: "It is a scalar quantity", correct: false },
      { text: "It is affected by the charge of a particle", correct: false },
      {
        text: "It always points in the same direction as an electric field",
        correct: false,
      },
    ],
  },
  {
    question: "What is the SI unit of electric current?",
    answers: [
      { text: "Ampere", correct: true },
      { text: "Volt", correct: false },
      { text: "Ohm", correct: false },
      { text: "Watt", correct: false },
    ],
  },
  {
    question: "What is the formula to calculate force?",
    answers: [
      { text: "F = mv", correct: false },
      { text: "F = mg", correct: true },
      { text: "F = m/a", correct: false },
      { text: "F = mh", correct: false },
    ],
  },
  {
    question: "What is the formula to calculate work?",
    answers: [
      { text: "W = Fd", correct: true },
      { text: "W = mv", correct: false },
      { text: "W = Pt", correct: false },
      { text: "W = F/m", correct: false },
    ],
  },
  {
    question:
      "What is the name of the law that states that energy cannot be created or destroyed, only transformed or transferred?",
    answers: [
      { text: "Newton's Third Law", correct: false },
      { text: "Ohm's Law", correct: false },
      { text: "Conservation of Energy Law", correct: true },
      { text: "Boyle's Law", correct: false },
    ],
  },
  {
    question: "What is the formula for calculating power?",
    answers: [
      { text: "P = Fd", correct: false },
      { text: "P = mv", correct: false },
      { text: "P = W/t", correct: false },
      { text: "P = W/t", correct: true },
    ],
  },
  {
    question: "What is the formula for calculating potential energy?",
    answers: [
      { text: "PE = mgh", correct: true },
      { text: "PE = Fd", correct: false },
      { text: "PE = mv", correct: false },
      { text: "PE = W/t", correct: false },
    ],
  },
  {
    question: "What is the formula for calculating kinetic energy?",
    answers: [
      { text: "KE = mgh", correct: false },
      { text: "KE = Fd", correct: false },
      { text: "KE = 1/2mv^2", correct: true },
      { text: "KE = W/t", correct: false },
    ],
  },
  {
    question: "What is the formula for calculating acceleration?",
    answers: [
      { text: "a = F/m", correct: false },
      { text: "a = v^2/r", correct: false },
      { text: "a = (v-u)/t", correct: true },
      { text: "a = W/t", correct: false },
    ],
  },
  {
    question: "What is the formula for calculating pressure?",
    answers: [
      { text: "P = Fd", correct: false },
      { text: "P = m/v", correct: false },
      { text: "P = F/A", correct: true },
      { text: "P = W/t", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const surrendButton = document.getElementById("surrender-btn");
const result = document.getElementById("result");
const title = document.getElementById("quiz-title");
title.innerHTML = "ANL Quiz | Answer Honestly Or Your'e Dumb";

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  result.innerHTML =
    "You Scored " + score + " out of " + questions.length + "!";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  questionElement.style.display = "none";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
surrendButton.addEventListener("click", () => {
  surrender();
});

function tryAgain() {
  questionElement.style.display = "block";
  surrendButton.style.display = "block";
  startQuiz();
}

function surrender() {
  resetState();
  questionElement.innerHTML = "Your'e Coward! so bad";
  result.innerHTML = "you have got" + score + ",and you give up";
  nextButton.innerHTML = "Try Again";
  surrendButton.style.display = "none";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", () => {
    tryAgain();
  });
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();

// ignore this, nothing you can use for the endpoint of your own localhost url
history.replaceState(null, null, "http://127.0.0.1:9001/ANLQuiz");
