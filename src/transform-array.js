// npm test ./test/transform-array.test.js

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
	try {
		let newArr = [];
		let skip = false;
		if (!Array.isArray(arr)) throw new Error();
		for (let i = 0; i < arr.length; i++) {
			const elem = arr[i];
			const prevElem = arr[i-1];
			if (elem === '--discard-next' || elem === '--double-next') {
				continue;
			}

			if (prevElem === '--discard-next') {
				skip = true;
				continue;
			} else if (prevElem === '--double-next') {
				newArr.push(elem);
			} else if (elem === '--discard-prev') {
				if (skip) {
					skip = false;
					continue;
				}
				newArr.pop();
				continue;
			} else if (elem === '--double-prev') {
				if (prevElem && !skip) {
					newArr.push(prevElem);
				} else {
					skip = false;
				}
				continue;
			}

			newArr.push(elem);
		}

		return newArr;
	} catch (error) {
		throw new Error(`'arr' parameter must be an instance of the Array!`);
	}
}

module.exports = {
	transform
};
