const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSResutObj = {};
  let splittedURL;
  let temporaryDomain;
  for (let url of domains) {
    splittedURL = url.split('.').reverse();

    if (Object.keys(DNSResutObj).includes('.' + splittedURL[0])) {
      DNSResutObj['.' + splittedURL[0]] += 1;
    } else {
      DNSResutObj['.' + splittedURL[0]] = 1;
    }
    if (Object.keys(DNSResutObj).includes('.' + splittedURL[0] + '.' + splittedURL[1])) {
      DNSResutObj['.' + splittedURL[0] + '.' + splittedURL[1]] += 1;
    } else {
      DNSResutObj['.' + splittedURL[0] + '.' + splittedURL[1]] = 1;
    }
    if (splittedURL.length > 2) {
      if (Object.keys(DNSResutObj).includes('.' + splittedURL[0] + '.' + splittedURL[1] + '.' + splittedURL[2])) {
        DNSResutObj['.' + splittedURL[0] + '.' + splittedURL[1] + '.' + splittedURL[2]] += 1;
      } else {
        DNSResutObj['.' + splittedURL[0] + '.' + splittedURL[1] + '.' + splittedURL[2]] = 1;
      }
    }
  }
  return DNSResutObj;
}

module.exports = {
  getDNSStats
};
