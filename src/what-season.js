// npm test ./test/what-season.test.js

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
 *
 */
 function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
    const monthNum = date.getMonth()+1;

    if (monthNum === 12 || monthNum === 1 || monthNum === 2) {
        return 'winter';
    } else if (monthNum === 3 || monthNum === 4 || monthNum === 5) {
        return 'spring';
    } else if (monthNum === 6 || monthNum === 7 || monthNum === 8) {
        return 'summer';
    } else if (monthNum === 9 || monthNum === 10 || monthNum === 11) {
        return 'fall';
    }
  } catch (error) {
      throw new Error('Invalid date!');
  }
}


module.exports = {
  getSeason
};
