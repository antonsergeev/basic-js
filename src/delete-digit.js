const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nString = String(n);
  const digitCombinations = [+nString.slice(1), +nString.slice(0, -1)];
  for (let i = 2; i < nString.length; i++) {
    digitCombinations.push(Number(nString.slice(0, i-1) + nString.slice(i)));
  }
  return Math.max(...digitCombinations);
}

module.exports = {
  deleteDigit
};
