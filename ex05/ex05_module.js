
/* global aponta para o this ? */
console.log(global === this)            // saída: false

/* module, aquele do module.exports aponta para o this ? */
console.log(module === this)            // saída: false

/* module.exports aponta para o this ? */
console.log(module.exports === this)    // saída: true

/* inicialmente é um objeto vazio */ 
console.log(module.exports)             // saída: {}

this.digaOi = function () {
    console.log('Oi!!!')
}

module.exports.sayHi = function () {
    console.log('Hi!!!')
}

ola = function () {
    console.log('Olá!!!')
}