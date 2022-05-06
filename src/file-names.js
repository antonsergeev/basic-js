const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  const result = [names[0]];
  names.forEach((name, i) => {
    if (i > 0) {
      const sameNamesCountInInput = names.filter((x, filterIndex) => filterIndex < i && x === name).length;
      const sameNamesCountInResult = result.filter(x => x === name).length;
      if (sameNamesCountInInput > 0) {
        result.push(`${name}(${sameNamesCountInInput})`);
      } else if (sameNamesCountInResult > 0) {
        result.push(`${name}(${sameNamesCountInResult})`);
      } else {
        result.push(name);
      }
    }
  });
  return result;
}

module.exports = {
  renameFiles
};
