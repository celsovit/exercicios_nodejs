/*
    debounce(): 
    Cria uma função que irá adiar sua execução até que a mesma função 
    não seja chamada por um período específico.
*/

const _ = require('lodash')

const saveChanges = _.debounce(() => {
    console.log('Salvando alterações...');
}, 1000);

console.log('chamada 1')
saveChanges(); // Esta chamada não executará a função

console.log('chamada 2')
saveChanges(); // Esta chamada não executará a função

console.log('chamada 3')
saveChanges(); // Esta chamada não executará a função

// Depois de 1 segundo da última chamada, 
// 'Salvando alterações...' será logado no console
