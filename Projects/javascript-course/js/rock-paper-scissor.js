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

// Função para processar a escolha do jogador
function choice(playerMove) {
    // Gera um número aleatório para a escolha do computador
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Scissor';
    } else {
        computerMove = 'Paper';
    }

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
        .innerHTML = `You <img class="move-icon" src="img/${playerMove}.png"> - <img class="move-icon" src="img/${computerMove}.png"> Computer`;
}

// Inicializa os elementos na tela ao carregar a página
updateScoreElement();
resultElement('');
movesElement('', '');