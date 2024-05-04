const fs = require('fs')

const nomeArquivo = 'novoArquivo.txt'

if (fs.existsSync(nomeArquivo)) {
  console.log('O arquivo existe.')
} else {
  console.log('O arquivo não existe.')
}
