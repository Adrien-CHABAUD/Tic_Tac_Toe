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

function handleCellPlayed(clickedCell, clickedCellIndex){
	// Update internal game state
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange(){
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	statusDisplay.innerHTML = currentPlayerTurn();
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation(){
	let roundWon = false;
	for(let i = 0; i <= 7; i++){
		const winningCondition = winningConditions[i];
		let a = gameState[winningCondition[0]];
		let b = gameState[winningCondition[1]];
		let c = gameState[winningCondition[2]];

		if(a == '' || b == '' || c == ''){
			continue;
		}
		if(a == b && b == c){
			roundWon = true;
			break
		}
	}
	if(roundWon){
		statusDisplay.innerHTML = winningMessage();
		gameActive = false;
		return;
	}

	// Check if some values are not populated in the gameState
	let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    // No one won, still moves to be done
    handlePlayerChange();
	
}

function handleCellClick(clickedCellEvent){
	// Save the clicked html element
	const clickedCell = clickedCellEvent.target;

	// Grab the 'data-cell-index' attribute
	const clickedCellIndex = parseInt(
		clickedCell.getAttribute('data-cell-index')
	); 

	// Check if the call already has been played or if the game is paused
	if(gameState[clickedCellIndex] !== "" || !gameActive){
		return;
	}

	// If anything is in order proceed the game flow
	handleCellPlayed(clickedCell, clickedCellIndex);
	handleResultValidation();
}

function handleRestartGame(){
	gameActive = true;
	currentPlayer = "X";
	gameState = ["", "", "", "", "", "", "", "", ""];
	statusDisplay.innerHTML = currentPlayerTurn();
	document.querySelectorAll('.cell')
			.forEach(cell => cell.innerHTML = "");
}

// Add event listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
