const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCharactersCount = 0;
  let s2reminder = s2;
  for (let character of s1.split('')) {
    if (s2reminder.includes(character)) {
      commonCharactersCount++;
      s2reminder = s2reminder.replace(character, '');
    }
  }
  return commonCharactersCount;
}

module.exports = {
  getCommonCharacterCount
};
