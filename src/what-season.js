const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('NotImplementedError!!!');

  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    return 'Invalid date!';
  }

  const seasonMonths = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  }

  try {
    const monthIndex = date.getMonth();
    console.log(monthIndex);
    for (let season in seasonMonths) {
      if (seasonMonths[season].includes(monthIndex)) {
        return season;
      }
    }
  } catch {
    return 'Invalid date!';
  }
}

module.exports = {
  getSeason
};

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// console.log( getSeason(deeperFakeDate) );


// [ () => getSeason('foo'),
//   () => getSeason({ John: 'Smith' }),
//   () => getSeason(20192701),
//   () => getSeason([2019, '27', 0 + '1']),
//   () => getSeason(() => new Date()) ].forEach(x => console.log(x()));
