let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(index) {
  if (board[index] !== '' || !gameActive) {
    return;
  }
  
  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    alert("It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
