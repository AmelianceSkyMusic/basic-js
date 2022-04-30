// npm test ./test/simple-chain.test.js

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		// if (value <= 0 || position > this.chain.length ||
		// 	typeof position !== 'number' || position % 1 !== 0) {
		// 	this.chain = undefined;
		// 	throw new Error();
		// }
		if (!this.chain) {
			this.chain = [value];
		} else {
			this.chain.push(value);
		}
		return this;
	},
	removeLink(position) {
		try {
			if (position <= 0 || position > this.chain.length ||
				typeof position !== 'number' || position % 1 !== 0) {
				this.chain = undefined;
				throw new Error();
			}

			this.chain.splice(position-1, 1);
			return this;
		} catch (error) {
			// Msg(`You can't remove incorrect link!`);
			throw new Error(`You can't remove incorrect link!`);
		}
	},
	reverseChain() {
		// Msg(this.chain)
		if (this.chain && this.chain.length > 1) {
			this.chain.reverse();
		}
		return this;
	},
	finishChain() {
		const chain = this.chain;
		this.chain = undefined;
		return chain.map(element => {
			if (element === undefined) return `( )`;
			return `( ${element} )`;
		}).join('~~');
	}
};

module.exports = {
	chainMaker
};
