const _ = require('lodash')

const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = _.concat(array1, array2, 5, 6);
// Resultado: [1, 2, 3, 4, 5, 6]

console.log('concatenatedArray:', concatenatedArray)
