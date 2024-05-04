const _ = require('lodash')

const arrayWithDuplicates = [1, 2, 2, 3, 3, 4, 5];
const uniqueArray = _.uniq(arrayWithDuplicates);
// Resultado: [1, 2, 3, 4, 5]

console.log('uniqueArray:', uniqueArray)