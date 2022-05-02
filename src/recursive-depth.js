// npm test ./test/recursive-depth.test.js

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

	// constructor() {
	// 	this.depth = 0;
	// }
	calculateDepth(arr) {

		if (!Array.isArray(arr)) {
			return 0;
		} else {
			if (arr.length === 0) return 1;
			arr = arr.map(item => {
				return this.calculateDepth(item);
			});
			const maxDepth = Math.max(...arr);
			return 1 + maxDepth;
		}

	}
}

module.exports = {
	DepthCalculator
};
