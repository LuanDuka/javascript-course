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
const app = initializeApp(firebaseConfig);


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
const questionTextEl = document.getElementById('question-text');
const answerButtonsEl = document.getElementById('answer-buttons');
const quizHeaderEl = document.querySelector('.quiz-header');
const resultsContainerEl = document.getElementById('results-container');
const resultsListEl = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');

// Variáveis para controlar o estado do quiz
let currentQuestionIndex = 0;
let userAnswers = {}; // Usaremos um objeto para guardar {pergunta: resposta}

// Função para iniciar ou reiniciar o quiz
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = {};
  resultsContainerEl.classList.add('hidden');
  quizHeaderEl.classList.remove('hidden');
  restartBtn.classList.remove('hidden'); // Garante que o botão de recomeçar esteja visível no final
  showQuestion();
}

// Função para mostrar a pergunta atual e suas opções de resposta
function showQuestion() {
  // Limpa os botões de resposta anteriores
  answerButtonsEl.innerHTML = '';

  // Pega a pergunta atual do array
  const currentQuestion = perguntas[currentQuestionIndex];
  questionTextEl.innerText = currentQuestion.texto;

  // Cria um botão para cada resposta possível
  respostasPossiveis.forEach(resposta => {
    const button = document.createElement('button');
    button.innerText = resposta;
    button.classList.add('btn');
    button.addEventListener('click', selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

// Função chamada quando o usuário clica em uma resposta
function selectAnswer(event) {
  const selectedAnswer = event.target.innerText;
  const questionKey = perguntas[currentQuestionIndex].texto;

  // Guarda a resposta dada pelo usuário
  userAnswers[questionKey] = selectedAnswer;

  // Avança para a próxima pergunta
  currentQuestionIndex++;

  // Verifica se ainda há perguntas
  if (currentQuestionIndex < perguntas.length) {
    showQuestion();
  } else {
    // Se não houver mais perguntas, mostra os resultados
    showResults();
  }
}

// Função para mostrar os resultados finais
function showResults() {
  // Esconde a área de perguntas e mostra a de resultados
  quizHeaderEl.classList.add('hidden');
  resultsContainerEl.classList.remove('hidden');

  // Limpa a lista de resultados anteriores
  resultsListEl.innerHTML = '';

  // Percorre as respostas guardadas e as exibe na tela
  for (const pergunta in userAnswers) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${pergunta}</strong> ${userAnswers[pergunta]}`;
    resultsListEl.appendChild(li);
  }
}

// Adiciona o evento de clique ao botão de recomeçar
restartBtn.addEventListener('click', startQuiz);

// Inicia o quiz assim que a página carrega
startQuiz();