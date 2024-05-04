/*
    zip()
    Cria um array de agrupamentos baseado nos elementos dos arrays 
    passados como argumentos.
*/


const _ = require('lodash')

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const zippedArray = _.zip(array1, array2);
// Resultado: [['a', 1], ['b', 2], ['c', 3]]

console.log('zippedArray:', zippedArray)