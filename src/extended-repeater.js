// npm test ./test/extended-repeater.test.js

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(string, options ) {
	const repeatTimes	        = options.repeatTimes;
	const separator	          	= options.separator || '+';
	let addition	           	= options.addition;
	const additionRepeatTimes 	= options.additionRepeatTimes;
	const additionSeparator	  	= options.additionSeparator || '|';

	if (addition === null) addition = 'null';
	const add = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
	const str = Array(repeatTimes).fill(string + add).join(separator);
	return str;
}


module.exports = {
  repeater
};
