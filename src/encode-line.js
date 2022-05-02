const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str + '?';
  let currentLetterCount = 1;
  let resultString = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === str[i]) {
      currentLetterCount++;
    } else {
      resultString += `${currentLetterCount}${str[i-1]}`;
      currentLetterCount = 1;
    }
  }
  return resultString.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
