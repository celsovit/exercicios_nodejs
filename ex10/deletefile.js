const fs = require('fs');

const nomeArquivo = 'novoArquivo.txt';

fs.unlink(nomeArquivo, (err) => {
  if (err) {
    console.error('Erro ao apagar o arquivo:', err);
    return;
  }
  console.log('Arquivo apagado com sucesso!');
});
