const fs = require('fs')

const nomeArquivo = 'teste_fs.js'

fs.readFile(nomeArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err)
    return
  }
  console.log('Conteúdo do arquivo:')
  console.log('-'.repeat(60))
  console.log(data)
  console.log('-'.repeat(60))
})
