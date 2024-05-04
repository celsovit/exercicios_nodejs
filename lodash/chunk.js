/*
    chunk()
    Divide um array em pedaços menores de um tamanho especificado.
*/

const _ = require('lodash')

const array = [1, 2, 3, 4, 5];
const chunkedArray = _.chunk(array, 2);
// Resultado: [[1, 2], [3, 4], [5]]

console.log('chunkedArray:', chunkedArray)