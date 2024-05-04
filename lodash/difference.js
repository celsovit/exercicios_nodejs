const _ = require('lodash')

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6];
const array3 = [4, 5, 7];

const differenceArray = _.difference(array1, array2, array3);

console.log(differenceArray); // Resultado: [1, 3]
