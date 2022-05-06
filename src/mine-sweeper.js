const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const zerosArr = Array.from(new Array(matrix[0].length+2), () => 0);
  const extendedMatrix = [];
  extendedMatrix.push([...zerosArr]);
  for (let i = 0; i < matrix.length; i++) {
    extendedMatrix.push([0, ...matrix[i], 0])
  }
  extendedMatrix.push([...zerosArr]);

  console.log(extendedMatrix);

  const resultMatrix = [];
  let currentCell;
  matrix.forEach((row, rowIndex) => {
    resultMatrix.push([]);
    row.forEach((_, colIndex) => {
      currentCell = 0;
      currentCell += extendedMatrix[rowIndex][colIndex];
      currentCell += extendedMatrix[rowIndex][colIndex+1];
      currentCell += extendedMatrix[rowIndex][colIndex+2];
      currentCell += extendedMatrix[rowIndex+1][colIndex];
      currentCell += extendedMatrix[rowIndex+1][colIndex+2];
      currentCell += extendedMatrix[rowIndex+2][colIndex];
      currentCell += extendedMatrix[rowIndex+2][colIndex+1];
      currentCell += extendedMatrix[rowIndex+2][colIndex+2];
      resultMatrix[rowIndex][colIndex] = currentCell;
    });
  });
  return resultMatrix;
}

module.exports = {
  minesweeper
};
