const _ = require('lodash')

const array = [ 
    { name: 'John', age: 25 }, 
    { name: 'Jane', age: 30 }, 
    { name: 'Doe', age: 20 } 
]

const sortedByAge = _.sortBy(array, 'age')
// Resultado: [{ name: 'Doe', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]


console.log('array:', array)
console.log('sortedbyAge:', sortedByAge)