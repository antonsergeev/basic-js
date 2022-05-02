const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr.filter(x => x != -1).sort((a, b) => a - b);
  let arrIndex = 0;
  let arr2Index = 0;
  const result = [];
  while (arrIndex < arr.length) {
    if (arr[arrIndex] === -1) {
      result.push(-1);
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
    arrIndex++;
  }
  return result;
}

module.exports = {
  sortByHeight
};
