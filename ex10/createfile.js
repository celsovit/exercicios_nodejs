const fs = require('fs')

const nomeArquivo = 'novoArquivo.txt'

const conteudo = 'Este é o conteúdo do novo arquivo.'

fs.writeFile(nomeArquivo, conteudo, (err) => {
  if (err) {
    console.error('Erro ao criar o arquivo:', err)
    return
  }
  console.log('Arquivo criado com sucesso!')
})
