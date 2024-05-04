const _ = require('lodash')

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4, 5];

const unionArray = _.union(array1, array2, array3);

console.log(unionArray); // Resultado: [1, 2, 3, 4, 5]
