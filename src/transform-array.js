const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const newArr = [];
  let i = 0;
  const possibleControls = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  while (i < arr.length) {
    if (arr[i] == '--discard-prev') {
      newArr.pop();
    } else if (arr[i] == '--discard-next') {
      i += 2;
    } else if (arr[i] == '--double-prev' && i > 0) {
      newArr.push(arr[i-1]);
    } else if (arr[i] == '--double-next' && i < arr.length - 1) {
      newArr.push(arr[i+1]);
    } else if (!possibleControls.includes(arr[i])) {
      newArr.push(arr[i]);
    }
    i++;
  }
  return newArr;
}

module.exports = {
  transform
};
