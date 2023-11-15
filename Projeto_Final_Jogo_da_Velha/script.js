document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const currentPlayerDisplay = document.getElementById('current-player');
    const gameStatusDisplay = document.getElementById('game-status');
    const resetButton = document.getElementById('reset-button');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', 
                     '', '', '',
                     '', '', ''];
    let gameActive = true;

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]

        ];

        for (const pattern of winPatterns) { // Esse for of loop é utilizado para iterar sobre cada padrão de vitória possível.
            const [a, b, c] = pattern; // Essas variáveis são usadas para extrair os 3 elementos do padrão de vitória e são transferidas para a, b e c.

            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                // Esse if verifica se as células nos índices a, b e c do tabuleiro têm o mesmo valor,
                // ou seja, se são todas 'X' ou todas 'O'. Além disso, gameBoard[a] é verificado para garantir que a célula não esteja vazia.
                return gameBoard[a]; // Retorna, se o if for verdadeiro, a combinação vencedora.

            }

        }

        return null; // Retorno null quando o padrão de vitória NÃO é encontrado.
    };

    const checkDraw = () => { // Esta função verifica se o jogo terminou em empate, ou seja, todas as células foram preenchidas e não há vencedor.
        return gameBoard.every(cell => cell !== '');

    };

    const endGame = (result) => { // Esta função é chamada quando o jogo termina (quando há um vencedor ou empate). Ela atualiza o status do jogo e desativa o jogo.
        gameActive = false;
        gameStatusDisplay.textContent = result ? `Jogador ${result} venceu!` : 'Empate!';

    };

    const handleCellClick = (index) => { // Esta função é chamada quando uma célula do tabuleiro é clicada. Ela atualiza o estado do jogo,
                                         // verifica se há um vencedor ou empate, e alterna para o próximo jogador.
        if (gameBoard[index] || !gameActive) return; // Se gameBoard na posição index ou gameActive for false apenas retorna.

        gameBoard[index] = currentPlayer; // gameBoard na posição index recebe o jogador atual
        cells[index].textContent = currentPlayer; // Imprime na tela quem é o atual jogador 'X' ou 'O'.

        const winner = checkWinner(); // Cria a variável vencedor que recebe a função checkWinner

        if (winner) { // Se for ganhador chama a função endGame que encerra o programa dizendo quem foi o vencedor ou se foi empate.
            endGame(winner);

        } else if (checkDraw()) { // Senão se executa a função checkDraw e termina o jogo com a função endGame.
            endGame(null);

        } else { // Senão o jogador atual recebe 'X' ou 'O'
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            currentPlayerDisplay.textContent = currentPlayer; // Imprime na tela o jogador atual.

        }

    };

    const resetGame = () => { // Esta função reinicializa o jogo, limpando o tabuleiro e configurando as variáveis para um novo jogo.
        gameBoard = ['', '', '', 
                     '', '', '',
                     '', '', ''];
        gameActive = true;
        currentPlayer = 'X';

        gameStatusDisplay.textContent = '';
        currentPlayerDisplay.textContent = currentPlayer;

        cells.forEach((cell, index) => {
            cell.textContent = '';
            cell.addEventListener('click', () => handleCellClick(index));

        });

    };

    resetButton.addEventListener('click', resetGame);
    // Esses trechos adicionam event listeners aos elementos HTML. O botão de reiniciar é vinculado à função resetGame,
    // e cada célula do tabuleiro é vinculada à função handleCellClick quando clicada.

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));

    });
    
});
