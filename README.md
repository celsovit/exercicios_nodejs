# Exercícios com Node.JS

[Node.js](https://nodejs.org/en) é uma plataforma de desenvolvimento de código aberto e de tempo de execução de [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript) que permite aos desenvolvedores criar aplicativos de rede escaláveis. Ele utiliza o motor JavaScript [V8](https://v8.dev/), da Google, para executar código JavaScript fora de um navegador da web, permitindo que você desenvolva aplicativos do lado do servidor. Isso significa que você pode escrever código em JavaScript e executá-lo no servidor, permitindo construir aplicações web altamente eficientes e escaláveis. Node.js é especialmente popular para criar aplicativos de rede em tempo real, como aplicativos de bate-papo, jogos online, aplicativos de colaboração em tempo real e muito mais.

Node.js não oferece acesso direto ao DOM (Document Object Model), que é uma estrutura de árvore de objetos fornecida pelos navegadores para representar documentos HTML ou XML. Node.js é projetado principalmente para execução de código JavaScript no servidor, portanto, não possui acesso ao DOM como um navegador web padrão.

No entanto, existem bibliotecas e frameworks em Node.js que permitem manipular o DOM, mas eles geralmente não são nativos do Node.js. Por exemplo, o [Puppeteer](https://pptr.dev/) é uma biblioteca Node.js que permite controlar um navegador Chrome ou Chromium via API, o que significa que você pode usar o Node.js para automatizar ações em uma página da web, incluindo a manipulação do DOM.

Para executar um arquivo `.js`, no terminal execute `node <nome-arquivo-js>`

```bash
$ node ex01
```

## Chrome Headless
O Chrome Headless é uma funcionalidade do Google Chrome que permite executar o navegador em um ambiente sem interface gráfica, o que o torna útil para automação de testes, scraping da web, captura de screenshots, entre outras tarefas.

## Módulos e o padrão Singleton
No Node.js, os módulos são carregados uma vez e mantidos em cache, o que significa que quando você requer um módulo múltiplas vezes, você obtém a mesma instância desse módulo, criando efetivamente um Singleton.

## Objeto Global
No JavaScript do lado do cliente (frontend), como em navegadores da web, existe um objeto global chamado [window](https://developer.mozilla.org/pt-BR/docs/Web/API/Window), que representa a janela do navegador e contém várias propriedades e métodos úteis para interagir com a página web e o ambiente do navegador.

No entanto, no JavaScript do lado do servidor (backend), como no Node.js, não há um objeto global window, porque não há uma interface gráfica (GUI) para representar. Em vez disso, no Node.js, você tem um objeto global chamado [global](https://www.geeksforgeeks.org/node-js-global-objects/), que fornece um contexto de execução global para o seu código. O objeto global contém várias propriedades e métodos que são acessíveis de qualquer lugar em seu código Node.js.

## Lodash
Lodash é uma biblioteca JavaScript que fornece funções utilitárias para simplificar a manipulação e o trabalho com arrays, objetos, strings e outros tipos de dados em JavaScript. Ela é amplamente utilizada para tornar o código mais conciso, legível e eficiente. Com Lodash, os desenvolvedores podem evitar a repetição de código e lidar com tarefas comuns de forma mais fácil e rápida, graças à sua ampla gama de funções utilitárias.

Para instalar, no terminal execute:

```bash
$ npm i lodash
```

## Módulo fs

O módulo fs em Node.js fornece uma ampla variedade de funções para interagir com o sistema de arquivos. Algumas das principais funções incluem:

- Leitura de Arquivos:
    - fs.readFile(): Lê o conteúdo de um arquivo.
    - fs.readFileSync(): Versão síncrona de fs.readFile().
    - fs.createReadStream(): Cria um fluxo de leitura para - ler grandes arquivos de forma eficiente.

- Escrita em Arquivos:
    - fs.writeFile(): Escreve dados em um arquivo.
    - fs.writeFileSync(): Versão síncrona de fs.writeFile().
    - fs.createWriteStream(): Cria um fluxo de escrita para escrever grandes quantidades de dados em um arquivo.

- Manipulação de Arquivos:
    - fs.rename(): Renomeia um arquivo.
    - fs.unlink(): Remove um arquivo.
    - fs.copyFile(): Copia um arquivo.
    - fs.exists(): Verifica se um arquivo ou diretório existe.
    - fs.access(): Verifica a acessibilidade de um arquivo ou diretório.

- Manipulação de Diretórios:
    - fs.mkdir(): Cria um diretório.
    - fs.rmdir(): Remove um diretório vazio.
    - fs.readdir(): Lê o conteúdo de um diretório.
    
- Outras Operações:
    - fs.stat(): Retorna informações sobre o arquivo.
    - fs.watch(): Monitora alterações em um arquivo ou diretório.
    - fs.truncate(): Trunca um arquivo para um tamanho especificado.

## Módulo http

O módulo http em Node.js permite criar servidores HTTP para lidar com solicitações e enviar respostas. Com este módulo, é possível realizar uma série de operações relacionadas à comunicação HTTP. Aqui estão algumas das coisas que você pode fazer com o módulo http:

- Criar um Servidor HTTP: Você pode criar um servidor HTTP usando a função http.createServer().

- Manipular Solicitações HTTP: Você pode definir um callback para lidar com diferentes tipos de solicitações HTTP, como GET, POST, PUT, DELETE, etc.

- Enviar Respostas HTTP: Você pode enviar respostas HTTP personalizadas usando o método response.writeHead() para definir o código de status e os cabeçalhos de resposta, e o método response.end() para enviar o corpo da resposta.

- Trabalhar com URLs e Rotas: Você pode analisar URLs de solicitação HTTP usando o módulo url, permitindo a implementação de rotas personalizadas.

- Processar Parâmetros de Consulta e Corpos de Solicitação: Você pode acessar os parâmetros de consulta de uma solicitação GET e os dados enviados em uma solicitação POST para realizar operações baseadas neles.
Erro: ReferenceError: minhaOperacaoAssincrona is not defined

- Configurar Segurança: Você pode configurar certificados SSL/TLS para fornecer uma comunicação segura usando o protocolo HTTPS.

- Monitorar Eventos do Servidor: Você pode monitorar eventos como listening, connection, request, close, etc., para realizar operações específicas em resposta a esses eventos.

- Conectar-se a Outros Servidores HTTP: Você pode usar o módulo http para fazer solicitações HTTP a outros servidores.

No entanto, enquanto é possível criar aplicativos web simples usando apenas o módulo http, muitas vezes é preferível usar estruturas mais avançadas e flexíveis, como o Express.js, que simplificam o desenvolvimento e fornecem recursos adicionais, como roteamento avançado, middleware, manipulação de erros, entre outros.

## Promises, async e await

- As Promises são objetos usados para representar o eventual resultado de uma operação assíncrona.

- Uma Promise pode estar em um dos três estados: pendente, resolvida ou rejeitada.

- Você pode criar Promises usando o construtor Promise.

- As Promises possuem os métodos .then() para manipular o sucesso e .catch() para lidar com falhas.

Tanto o uso de .then() e .catch() quanto o uso de async e await produzem essencialmente os mesmos resultados. Ambas as abordagens lidam com operações assíncronas de forma eficaz, permitindo que você execute código em resposta à resolução ou rejeição de uma Promise.

A principal diferença entre as duas abordagens está na sintaxe e na maneira como o código é estruturado:

- .then() e .catch(): Essa é uma abordagem mais tradicional e baseada em callbacks. Você encadeia chamadas de .then() para lidar com o sucesso da Promise e usa .catch() para lidar com falhas. Isso pode levar a uma "callback hell" em casos de muitas operações encadeadas.

- async e await: Essa é uma abordagem mais moderna e baseada em Promises. Você define funções assíncronas com async e usa await dentro delas para aguardar a resolução ou rejeição de Promises. Isso torna o código mais linear e fácil de entender, especialmente em casos de várias operações assíncronas.


## Saiba Mais

- [Navegadores sem cabeça – um guia completo](https://fineproxy.org/pt/headless-browsers-a-comprehensive-guide/)

- [Selenium Python em Headless no Chrome](https://geovanecavalcante.medium.com/selenium-python-em-headless-no-chrome-be70189dc68b)

- [Módulos em JavaScript: ES Modules vs. CommonJS](https://www.linkedin.com/pulse/m%C3%B3dulos-em-javascript-es-modules-vs-commonjs-herlon-costa-4wuhf)

- [Módulos JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)

- [Como aumentar sua produtividade usando Lodash](https://imasters.com.br/java/como-aumentar-sua-produtividade-usando-lodash)

- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)