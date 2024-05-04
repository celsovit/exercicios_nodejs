const fs = require('fs')
const readline = require('readline')


const nomeArquivo = 'teste_fs.js'

const rl = readline.createInterface({
  input: fs.createReadStream(nomeArquivo),
  crlfDelay: Infinity
})

let linhaNumero = 0

console.log()

rl.on('line', (linha) => {
  linhaNumero++
  const linhaFormatada = String(linhaNumero).padStart(3, '0') // Adiciona zeros à esquerda
  console.log(`${linhaFormatada}: ${linha}`)
})


rl.on('close', () => {
  console.log('\nLeitura do arquivo concluída.')
})
