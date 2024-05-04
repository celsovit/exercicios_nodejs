const fs = require('fs');

const arquivoOrigem = 'copyfile.js';
const arquivoDestino = 'arquivoCopia.js';

fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
  if (err) {
    console.error('Erro ao copiar o arquivo:', err);
    return;
  }
  console.log('Arquivo copiado com sucesso!');
});
