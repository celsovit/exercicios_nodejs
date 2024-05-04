const fs = require('fs')    // não precisa ser instalado, parte do core do Node.JS

const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f))

/*
    lista os arquivos do diretório atual:
    ex10_fs.js
    teste_fs.js
*/
