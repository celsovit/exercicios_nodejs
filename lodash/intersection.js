const _ = require('lodash')

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8];
const array3 = [2, 5, 8];

const intersectionArray = _.intersection(array1, array2, array3);

console.log(intersectionArray); // Resultado: [2]
