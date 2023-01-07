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
