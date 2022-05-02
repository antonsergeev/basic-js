const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 0) {
        for (let i = rowIndex; i < matrix.length; i++) {
          matrix[i][colIndex] = 0;
        }
      }
    });
  });
  return matrix.reduce((acc1, row) => acc1 + row.reduce((acc2, x) => acc2 + x, 0), 0);
}

module.exports = {
  getMatrixElementsSum
};
