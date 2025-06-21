// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbaVk1M1DdFo7mnI_KLyRaHS2oD4y007I",
  authDomain: "form-ageu.firebaseapp.com",
  projectId: "form-ageu",
  storageBucket: "form-ageu.firebasestorage.app",
  messagingSenderId: "534251283144",
  appId: "1:534251283144:web:f2f3c2f795de76705dfbfd"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// ========================================================================
// ÁREA DE CONFIGURAÇÃO: Edite aqui para adicionar suas perguntas e respostas
// ========================================================================

// 1. Crie sua lista de perguntas. Cada pergunta é um objeto dentro do array.
const perguntas = [
  { texto: "Quem é o mais chato?" },
  { texto: "Quem fala mais?" },
  { texto: "Quem mija na cama?" },
  { texto: "Quem é o mais provável de ficar rico?" },
  { texto: "Quem cozinha melhor?" }
];

// 2. Crie a lista de respostas que será usada para TODAS as perguntas.
const respostasPossiveis = [
  "Ana",
  "Daniel",
  "Henrique",
  "Guilherme"
];

// ========================================================================
// FIM DA ÁREA DE CONFIGURAÇÃO - Não precisa editar o código abaixo
// ========================================================================

// Referências aos elementos do HTML
const loginContainer = document.getElementById('login-container');
const appContainer = document.getElementById('app-container');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userDisplay = document.getElementById('user-display');

const questionTextEl = document.getElementById('question-text');
const answerButtonsEl = document.getElementById('answer-buttons');
const quizHeaderEl = document.querySelector('.quiz-header');
const resultsContainerEl = document.getElementById('results-container');
const resultsListEl = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');

// Variáveis de estado do quiz
let currentQuestionIndex = 0;
let userAnswers = {};

// --- LÓGICA DE AUTENTICAÇÃO ---

// Observador do estado de autenticação (a função mais importante)
auth.onAuthStateChanged(user => {
  if (user) {
    // Usuário está logado
    loginContainer.classList.add('hidden');
    appContainer.classList.remove('hidden');
    userDisplay.textContent = `Olá, ${user.displayName}!`;
    startQuiz(); // Inicia o quiz quando o usuário loga
  } else {
    // Usuário está deslogado
    loginContainer.classList.remove('hidden');
    appContainer.classList.add('hidden');
    userDisplay.textContent = '';
  }
});

// Função para fazer login com Google
function signInWithGoogle() {
  auth.signInWithPopup(provider)
    .catch(error => {
      console.error("Erro durante o login:", error);
    });
}

// Função para fazer logout
function signOut() {
  auth.signOut();
}

// Event Listeners dos botões de login/logout
loginBtn.addEventListener('click', signInWithGoogle);
logoutBtn.addEventListener('click', signOut);

// --- LÓGICA DO QUIZ (praticamente a mesma de antes) ---

function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = {};
  resultsContainerEl.classList.add('hidden');
  quizHeaderEl.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  answerButtonsEl.innerHTML = '';
  const currentQuestion = perguntas[currentQuestionIndex];
  questionTextEl.innerText = currentQuestion.texto;

  respostasPossiveis.forEach(resposta => {
    const button = document.createElement('button');
    button.innerText = resposta;
    button.classList.add('btn');
    button.addEventListener('click', selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function selectAnswer(event) {
  const selectedAnswer = event.target.innerText;
  const questionKey = perguntas[currentQuestionIndex].texto;
  userAnswers[questionKey] = selectedAnswer;

  currentQuestionIndex++;
  if (currentQuestionIndex < perguntas.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizHeaderEl.classList.add('hidden');
  resultsContainerEl.classList.remove('hidden');
  resultsListEl.innerHTML = '';

  for (const pergunta in userAnswers) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${pergunta}</strong> ${userAnswers[pergunta]}`;
    resultsListEl.appendChild(li);
  }
}

restartBtn.addEventListener('click', startQuiz);