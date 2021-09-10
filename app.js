//linking html elements to JS

const cells = document.querySelectorAll(".row > div");
const message = document.querySelector("#playText");
const board = document.querySelector("#board");
// const restartMessage = document.querySelector("#restartMessage");

//declaring variables

const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;
let numOfPlays = 0;

//play and win functions

function cellClicked(e) {
  const id = e.target.id;
  numOfPlays++
  if (e.target.textContent !== "") return;
  playerWon();
  if (currentPlayer == playerX) {
    cells[id] = playerX;
    e.target.textContent = playerX;
    message.innerText = "Player O turn";

    if (playerWon()) {
      message.innerText = `${currentPlayer} has won`;
      restart();
      return;
    }
    if (playerCat()) {
      return;
    }
    currentPlayer = playerO;
  } else if (currentPlayer == playerO) {
    cells[id] = playerO;
    e.target.textContent = playerO;
    message.innerText = "Player X turn";
    if (playerWon()) {
      message.innerText = `${currentPlayer} has won`;
      restart();
      return;
    }
    if (playerCat()) {
      
      return;
    }
    currentPlayer = playerX;
  }
}

function playerWon() {
  if (cells[0].textContent === currentPlayer) {
    if (
      cells[1].textContent === currentPlayer &&
      cells[2].textContent === currentPlayer
    ) {
      return true;
    }
    if (
      cells[3].textContent === currentPlayer &&
      cells[6].textContent === currentPlayer
    ) {
      return true;
    }
    if (
      cells[4].textContent === currentPlayer &&
      cells[8].textContent === currentPlayer
    ) {
      return true;
    }
  }
  if (cells[8].textContent === currentPlayer) {
    if (
      cells[2].textContent === currentPlayer &&
      cells[5].textContent === currentPlayer
    ) {
      return true;
    }
    if (
      cells[6].textContent === currentPlayer &&
      cells[7].textContent === currentPlayer
    ) {
      return true;
    }
  }
  if (cells[4].textContent === currentPlayer) {
    if (
      cells[1].textContent === currentPlayer &&
      cells[7].textContent === currentPlayer
    ) {
      return true;
    }
    if (
      cells[3].textContent === currentPlayer &&
      cells[5].textContent === currentPlayer
    ) {
      return true;
    }
    if (
      cells[2].textContent === currentPlayer &&
      cells[6].textContent === currentPlayer
    ) {
      return true;
    }
  }
}

function playerCat() {
  if (numOfPlays<9) {
    return false;
  } else {
    // restartMessage.innerText =
    //   "Drats! Double-click anywhere on board to play again";
    message.innerText = `Cat`;
    restart();
  }
}

//reseting the board with double click to refresh page

// const restart = () => {
//   restartMessage.innerText = "Double-click anywhere on board to play again";
//   board.addEventListener("dblclick", () => {
//     window.location.reload(true);
//   });
// };


//running the game

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
