console.log(`O diretório atual é:\n${ __dirname }\n`)
// saída: /media/celsorv/.../ex10

console.log(`O arquivo em execução é:\n${ __filename }\n`)
// saída: /media/celsorv/.../ex10/teste_fs.js

console.log(`O diretório a partir do qual o Node.js foi executado:\n${ process.cwd() }\n`)
// saída: /media/celsorv/.../ex10

console.log(`Os argumentos passados foram:\n${ process.argv }\n`)
// process.argv[0] é sempre o caminho para o executável do Node.js
// process.argv[1] é sempre o caminho para o arquivo JS sendo executado
// process.argv[3] em diante são os argumentos passados
