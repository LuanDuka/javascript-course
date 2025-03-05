//Update
// Declaração da variável score no topo do arquivo
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// Verifica se o score é um objeto válido
if (!score || typeof score !== 'object') {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

//Reset score
const resetScoreButton = document.querySelector('.reset-score-button');
const sureMessageInput = document.querySelector('.sure-message');

const resetScoreListener = () => {
    //Show sure message
    sureMessageInput.innerHTML = `
     <div>
         Are you sure you want to reset the score? 
         <button class="js-sure-button">
         Yes
         </button>
         <button class="js-sure-button">
         No
         </button>
     </div>
     `;
    //querySelectorAll ensure that the buttons are correctly selected after the HTML is dynamically updated
    const sureMessageButton = document.querySelectorAll('.js-sure-button');
    // if (sureMessageButton.length > 0)) to make sure buttons exist before attaching the event listeners
    // This can prevent the error in case the buttons haven't been rendered yet
    if (sureMessageButton.length > 0) {// Check if buttons are present
        sureMessageButton.forEach(button => {
            button.addEventListener('click', () => {//Fixed the typo 'Click' to 'click' for the event listener
                if (button.textContent.trim().toLowerCase() === 'yes') {
                    score.wins = 0;
                    score.losses = 0;
                    score.ties = 0;
                    localStorage.removeItem('score');
                    //hide the message
                    sureMessageInput.innerHTML = '';
                    // Atualiza os elementos na tela
                    updateScoreElement();
                    resultElement('');
                    movesElement('', '');
                } else if (button.textContent.trim().toLowerCase() === 'no') {
                    sureMessageInput.innerHTML = '';
                }
            })
        })
    }
}
resetScoreButton.addEventListener('click', resetScoreListener);

function sureMessage() {

}
/*
// Função para resetar o placar
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');

    // Atualiza os elementos na tela
    updateScoreElement();
    resultElement('');
    movesElement('', '');
}
*/

/*SuperSimpleDev Resolution
// Below are 3 parts that need to be
// changed in the JavaScript code for
// this exercise.
// See 12r.js for the full code.
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();

  } else if (event.key === 'Backspace') {
    // Update 'Backspace' to show the
    // confirmation message instead of
    // resetting the score immediately.
    showResetConfirmation();
  }
});

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    // Update the click event listener to
    // show the confirmation message instead
    // of restting the score immediately.
    showResetConfirmation();
  });

// Function for showing the confirmation message.
function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;
  
  // You could use onclick="..." in the HTML above,
  // but it's recommended to use .addEventListener()
  document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click', () => {
      resetScore();
      hideResetConfirmation();
    });
  
  document.querySelector('.js-reset-confirm-no')
    .addEventListener('click', () => {
      hideResetConfirmation();
    });
}

// A helper function (it helps us reuse the
// code for hiding the confirmation message).
function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}
*/
let isAutoPlaying = false;
let intervalId;//save the ID

// const autoPlay = () => {

// };
const autoPlayButton = document.querySelector('.auto-play-button');

const autoPlayListener = () => {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {//add arrow function
            const playerMove = pickComputerMove();
            choice(playerMove);
        }, 1000);
        isAutoPlaying = true;

    } else {
        clearInterval(intervalId);//call the ID to stop
        isAutoPlaying = false;
    }
    if (autoPlayButton.innerText === 'Auto Play') {
        autoPlayButton.innerText = 'Stop Playing';
    } else {
        autoPlayButton.innerText = 'Auto Play';
    }
}
autoPlayButton.addEventListener('click', autoPlayListener);
/*
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {//add arrow function
            const playerMove = pickComputerMove();
            choice(playerMove);
        }, 1000);
        isAutoPlaying = true;

    } else {
        clearInterval(intervalId);//call the ID to stop
        isAutoPlaying = false;
    }
}
    */
//Update onclick to addEventListener
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        choice('Rock');
    });
document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        choice('Paper');
    });
document.querySelector('.js-scissor-button')
    .addEventListener('click', () => {
        choice('Scissor');
    });
//Update keyboard to play typing a letter
document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
    console.log(event.code);
    if (event.key === 'r') {
        choice('Rock');
    } else if (event.key === 'p') {
        choice('Paper');
    } else if (event.key === 's') {
        choice('Scissor');
    } else if (event.key === 'Backspace') {
        event.preventDefault();// Prevent browser from navigating back
        resetScoreListener();
    } else if (event.key === 'a') {
        autoPlayListener();
    }
});


// Função para processar a escolha do jogador
function choice(playerMove) {
    const computerMove = pickComputerMove();

    // Determina o resultado do jogo
    let result = '';
    if (playerMove === computerMove) {
        result = 'Tie.';
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissor') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissor' && computerMove === 'Paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Atualiza o placar com base no resultado
    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose!') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    // Salva o placar no localStorage
    localStorage.setItem('score', JSON.stringify(score));

    // Exibe o resultado no console
    console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  Wins:${score.wins}. Losses ${score.losses}. Ties ${score.ties}!`);

    // Atualiza os elementos na tela
    updateScoreElement();
    resultElement(result);
    movesElement(playerMove, computerMove);
    return computerMove;
}

// Função para atualizar o placar na tela
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins}. Losses ${score.losses}. Ties ${score.ties}!`;
}

// Função para exibir o resultado na tela
function resultElement(result) {
    if (!result) {
        document.querySelector('.js-result')
            .innerHTML = `Choose a move!`;
    } else {
        document.querySelector('.js-result')
            .innerHTML = result;
    }
}

// Função para exibir os movimentos na tela
function movesElement(playerMove, computerMove) {
    document.querySelector('.js-moves')
        .innerHTML = `You <img class="move-icon" src="img/${playerMove || 'Rock'}.png"> - <img class="move-icon" src="img/${computerMove || 'Paper'}.png"> Computer`;
}

// Inicializa os elementos na tela ao carregar a página
updateScoreElement();
resultElement('');
movesElement('', '');

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor';
    }

    return computerMove;
}
