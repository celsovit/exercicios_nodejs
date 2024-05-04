const _ = require('lodash')

const array = [1, 2, 3, 4, 5];
const evens = _.filter(array, num => num % 2 === 0);    // Resultado: [2, 4]

console.log('array:', array)
console.log('evens:', evens)
