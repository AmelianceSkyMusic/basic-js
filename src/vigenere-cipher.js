// npm test ./test/vigenere-cipher.test.js

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {

	constructor(type = true) {
		this.type = type;
		this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
		this.table = function(chars, mode = 'chars') {
			let table = {};
			for (let i = 0; i < chars.length; i++) {
				if (mode === 'chars') {
					table[chars[i].toUpperCase()] = i;
				} else {
					table[i] = chars[i].toUpperCase();
				}
			}
			return table;
		};
		this.tableChars = this.table(this.chars);
		this.tableNumbs = this.table(this.chars, 'numbs');
	}

	encrypt(str, key) {
		if (!str || !key) throw new Error('Incorrect arguments!');

		const tableChars = this.tableChars;
		const tableNumbs = this.tableNumbs;
		str = str.toUpperCase();
		key = key.toUpperCase().repeat(Math.ceil(str.length / key.length));
		let shift = 0;
		let encryptArr = '';

		for (let i = 0; i < str.length; i++) {
			let char = str[i];
			let charNum = tableChars[str[i]];
			let keyCharNum = tableChars[key[i+shift]];
			if (Object.keys(tableChars).find(item => item === char)) {
				encryptArr += tableNumbs[(charNum + keyCharNum) % 26];
			} else {
				encryptArr += char;
				shift--;
			}
		}

		return this.type ? encryptArr : encryptArr.split('').reverse().join('');
	}

	decrypt(str, key) {
		if (!str || !key) throw new Error('Incorrect arguments!');

		const tableChars = this.tableChars;
		const tableNumbs = this.tableNumbs;
		key = key.toUpperCase().repeat(Math.ceil(str.length / key.length));
		let shift = 0;
		let decryptArr = '';

		for (let i = 0; i < str.length; i++) {
			let char = str[i];
			let charNum = tableChars[str[i]];
			let keyCharNum = tableChars[key[i+shift]];
			if (Object.keys(tableChars).find(item => item === char)) {
				decryptArr += tableNumbs[(charNum + 26 - keyCharNum) % 26];
			} else {
				decryptArr += char;
				shift--;
			}
		}
		return this.type ? decryptArr : decryptArr.split('').reverse().join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
