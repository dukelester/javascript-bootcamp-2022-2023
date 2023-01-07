// SPIRAL PRINT:: Given a matrix, print the elements in a spiral order

const myMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

console.log(myMatrix);

const spiralPrint = (matrix) => {
  let topRow = 0;
  let leftColumn = 0;
  let bottomRow = matrix.length - 1;
  let rightColumn = matrix[0].length - 1;
  console.log(topRow, leftColumn, bottomRow, rightColumn);
  while (topRow < bottomRow && leftColumn < rightColumn) {
    for (let col = 0; col <= rightColumn; col += 1) {
      console.log(matrix[topRow][col]);
    }
    topRow += 1;
    for (let row = topRow; row <= bottomRow; row += 1) {
      console.log(matrix[row][rightColumn]);
    }
    rightColumn -= 1;
    if (topRow <= bottomRow) {
      for (let col = rightColumn; col >= 0; col -= 1) {
        console.log(matrix[bottomRow][col]);
      }
      bottomRow -= 1;
    }
    if (leftColumn <= rightColumn) {
      for (let row = bottomRow; row > topRow; row -= 1) {
        console.log(matrix[row][leftColumn]);
      }
      leftColumn += 1;
    }
  }
};
spiralPrint(myMatrix);

// TIC-TAC-TOE CHECK ==>  Given a matrix representing a tic-tac-toe board, determine whether
// someone won, whether it
// was a tie, or whether the game has not ended yet.

const checkRow = (rowArray, letter) => {
  for (let k = 0; k < 3; k += 1) {
    if (rowArray[k] !== letter) {
      return false;
    }
  }
  return true;
};

const checkColumn = (gameBoardMatrix, columnIndex, letter) => {
  for (let i = 0; i < 3; i += 1) {
    if (gameBoardMatrix[i][columnIndex] !== letter) {
      return false;
    }
  }
  return true;
};

const ticTacToeWinner = (gameBoardMatrix, letter) => {
  // Check rows
  const rowWin = checkRow(gameBoardMatrix[0], letter)
  || checkRow(gameBoardMatrix[1], letter)
  || checkRow(gameBoardMatrix[2], letter);

  const columnWin = checkColumn(gameBoardMatrix, 0, letter)
  || checkColumn(gameBoardMatrix, 1, letter)
  || checkColumn(gameBoardMatrix, 2, letter);

  const diagonalWinLeftToRight = gameBoardMatrix[0][0] === letter
  && gameBoardMatrix[1][1] === letter
  && gameBoardMatrix[2][2] === letter;

  const diagonalWindRightToLeft = gameBoardMatrix[0][2] === letter
  && gameBoardMatrix[1][1] === letter
  && gameBoardMatrix[2][1] === letter;

  return rowWin || columnWin || diagonalWinLeftToRight || diagonalWindRightToLeft;
};

const board = [
  ['O', '-', 'X'],
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
];
const board2 = [
  ['X', '-', 'X'],
  ['-', 'X', '-'],
  ['X', 'X', 'X'],
];

const board3 = [
  ['-', '-', '-'],
  ['-', 'X', '-'],
  ['O', '-', 'X'],
];
console.log(board);
console.log('*****game 1*********', board);
console.log(ticTacToeWinner(board, 'X')); // X -wins
console.log(ticTacToeWinner(board, 'O')); // O wins
console.log(ticTacToeWinner(board3, '-')); // draw
console.log('*****game 2*********', board2);

console.log(ticTacToeWinner(board2, 'X'));
console.log(ticTacToeWinner(board2, 'O'));
console.log(ticTacToeWinner(board3, '-'));
console.log('*****game 3*********', board3);

console.log(ticTacToeWinner(board3, 'X'));
console.log(ticTacToeWinner(board3, 'O'));
console.log(ticTacToeWinner(board3, '-'));
