const _ = require('lodash')

const array = [1, 2, 3];
const doubled = _.map(array, num => num * 2);   // Resultado: [2, 4, 6]

console.log('array:', array)
console.log('doubled:', doubled)
