//your JS code here. If required.
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');
const gameDiv = document.getElementById('game');
const messageDiv = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let player1, player2;
let gameActive = false;

submitButton.addEventListener('click', () => {
    player1 = player1Input.value || 'Player 1';
    player2 = player2Input.value || 'Player 2';
    player1Input.style.display = 'none';
    player2Input.style.display = 'none';
    submitButton.style.display = 'none';
    
    gameDiv.style.display = 'block';
    messageDiv.textContent = `${player1}, you're up!`;
    gameActive = true;
});

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent || !gameActive) {
            return;
        }

        cell.textContent = currentPlayer;

        if (checkWinner()) {
            messageDiv.textContent = `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageDiv.textContent = `${currentPlayer === 'X' ? player1 : player2}, you're up!`;
        }
    });
});

function checkWinner() {
    const winningConditions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return cells[a - 1].textContent === currentPlayer && 
               cells[b - 1].textContent === currentPlayer && 
               cells[c - 1].textContent === currentPlayer;
    });
}