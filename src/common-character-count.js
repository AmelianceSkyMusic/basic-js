
// npm test ./test/common-character-count.test.js

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
	const set = new Set([...s1, ...s2]);
	let count = 0;
	for (const i of set) {
		count += [...s1].find( e => e === i) ? 1 : 0;
	}

	return count;
}

module.exports = {
  getCommonCharacterCount
};
