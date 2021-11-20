// Store game status element
const statusDisplay = document.querySelector('.game--status');

// Declare variables used to track game state
// To pause the game
let gameActive = true;

// Store current player
let currentPlayer = "X";

// Store current game game state
let gameState = ["", "", "", "", "", "", "", "", ""];

// Messages
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Set initial message to let players know whose turn it is
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed(){
	// TO-DO
}

function handlePlayerChange(){
	// TO-DO
}

function handleResultValidation(){
	// TO-DO
}

function handleCellClick(){
	// TO-DO
	console.log("Cell Clicked")
}

function handleRestartGame(){
	// TO-DO
	console.log("Restart clicked")
}

// Add event listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
