const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// npm test ./test/count-cats.test.js
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  // let catsEars = 0;
  // for (const i of matrix) {
  //     for (const j of i) {
  //         // catsEars = j === '^^' ? catsEars + 1 : catsEars;
  //         if (j === '^^') catsEars++;

  //     }
  // }

  // let catsEars = 0;
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (matrix[i][j] === '^^') catsEars++;
  //   }
  // }

  // let catsEars = 0;
  // for (const box of matrix) {
  //   let results = box.filter( function(item) {
  //       return item === '^^';
  //   }).length;
  //   catsEars += results;
  // }

  let result = matrix.reduce((count, item) => {
    return count + item.filter(i => i === '^^').length;
  }, 0);

  return result;

}

module.exports = {
  countCats
};
