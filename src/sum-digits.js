
// npm test ./test/sum-digits.test.js
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
	n = [...n.toString()];
	while (n.length > 1) {
		let z = 0;
		for (const i of n) {
			z += +i;
		}
		n = z;
		n = [...n.toString()];
	}
	return +n[0];
}

module.exports = {
	getSumOfDigits
};
