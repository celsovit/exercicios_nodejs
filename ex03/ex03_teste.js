/* uma única instância é criada com require */

const s1 = require('./ex03_singleton')
const s2 = require('./ex03_singleton')

s1.exibirProximo()  // saída: 1
s2.exibirProximo()  // saída: 2

s1.exibirProximo()  // saída: 3
s2.exibirProximo()  // saída: 4