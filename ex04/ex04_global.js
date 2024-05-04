const PI = 3.14         // escopo local no módulo
console.log(global.PI)  // saída: undefined

/* 
    Atribuído diretamente no global, portanto mesmo sem exportar,
    o objeto "obj" estará acessível em outros módulos.
*/
global.obj = { name: 'Estou no global!' }
