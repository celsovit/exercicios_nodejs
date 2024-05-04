/*
    flatten()
    Aplaina um array, removendo arrays aninhados.
*/


const _ = require('lodash')

const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = _.flatten(nestedArray);
// Resultado: [1, 2, [3, [4]]]

console.log('flattenedArray:', flattenedArray)
