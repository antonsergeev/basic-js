const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  throw new NotImplementedError('NotImplementedError!!!');

  if ((typeof sampleActivity != 'string') || !/^(\d+|\d+\.\d+)$/.test(sampleActivity)) {
    return false;
  } else if (parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  const calculatedAge = HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  return Math.ceil(calculatedAge);
}

module.exports = {
  dateSample
};

// console.log(dateSample('1'))
