const _ = require('lodash')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [evenNumbers, oddNumbers] = _.partition(numbers, num => num % 2 === 0);

console.log(evenNumbers); // Resultado: [2, 4, 6, 8]
console.log(oddNumbers);  // Resultado: [1, 3, 5, 7, 9]
