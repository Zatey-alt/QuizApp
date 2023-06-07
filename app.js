const quizData = [
    {
      question: "What is the capital of France?",
      a: "Paris",
      b: "London",
      c: "Berlin",
      d: "Rome",
      correct: "a",
    },
    {
      question: "Which planet is known as the Red Planet?",
      a: "Mars",
      b: "Venus",
      c: "Jupiter",
      d: "Saturn",
      correct: "a",
    },
    {
      question: "Who painted the Mona Lisa?",
      a: "Pablo Picasso",
      b: "Vincent van Gogh",
      c: "Leonardo da Vinci",
      d: "Michelangelo",
      correct: "c",
    },
    {
      question: "What is the largest ocean in the world?",
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Arctic Ocean",
      d: "Pacific Ocean",
      correct: "d",
    },
    {
      question: "What is the currency of Japan?",
      a: "Yen",
      b: "Euro",
      c: "Dollar",
      d: "Pound",
      correct: "a",
    },
    {
      question: "Which country is famous for the Great Wall?",
      a: "China",
      b: "India",
      c: "Brazil",
      d: "Australia",
      correct: "a",
    },
    {
      question: "Who wrote the novel 'Pride and Prejudice'?",
      a: "Jane Austen",
      b: "William Shakespeare",
      c: "George Orwell",
      d: "Charles Dickens",
      correct: "a",
    },
    {
      question: "What is the largest animal on Earth?",
      a: "Elephant",
      b: "Blue whale",
      c: "Giraffe",
      d: "Hippopotamus",
      correct: "b",
    },
    {
      question: "What is the chemical symbol for gold?",
      a: "Ag",
      b: "Au",
      c: "Fe",
      d: "Pb",
      correct: "b",
    },
    {
      question: "Which city is known as the 'Big Apple'?",
      a: "Los Angeles",
      b: "New York City",
      c: "Chicago",
      d: "San Francisco",
      correct: "b",
    },
    {
      question: "Who is the author of the 'Harry Potter' book series?",
      a: "J.R.R. Tolkien",
      b: "J.K. Rowling",
      c: "Stephen King",
      d: "George R.R. Martin",
      correct: "b",
    },
  ];
  
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
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
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="history.go(0)">Play Again</button>
    ` // location.reload() won't work in CodePen for security reasons;
    }
    }
    });