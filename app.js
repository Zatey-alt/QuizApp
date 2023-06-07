const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
let quizData = [];

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const fetchQuizData = async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=multiple"
    );
    const data = await response.json();
    quizData = data.results;
    loadQuiz();
  } catch (error) {
    console.error(error);
  }
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerHTML = currentQuizData.question;
  const options = [...currentQuizData.incorrect_answers];
  options.splice(
    Math.floor(Math.random() * (options.length + 1)),
    0,
    currentQuizData.correct_answer
  );
  answerElements.forEach((answer, index) => {
    answer.nextElementSibling.innerHTML = options[index];
  });
};

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct_answer) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Play Again</button>
      `;
    }
  }
});

fetchQuizData();
