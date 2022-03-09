//O console é uma ferramenta que tem tanto no Node, que estamos usando, quanto nos navegadores e usamos ele para colocar frases para fora, os dados, de uma forma geral, para fora da nossa aplicação. De uma forma que não apareça, diretamente, para o nosso usuário, mas, ele tem acesso, caso ele precise.
//log = registro
//A palavra log significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.

console.error('deu erro!');
//Eu vou comentar os consoles.log anteriores e vou rodar. ”deu erro”. Eles exibiram no nosso terminal o que passamos, uma string só escrita (”deu erro”), que passamos entre parênteses.

//[06:33] Leonardo: Nesse caso, nós mandamos ele, simplesmente, exibir para nós essa mensagem de erro, então, era esperado que aparecesse só isso. Mas, nós depois podemos complementar com stacktrace, com algumas outras opções que vamos ver um pouco mais para frente. Ou melhor, que já vimos no curso.

//[06:57] Ju: Por enquanto, nós já sabemos o que é o console.log, que ele é só um registro do que passamos entre os parênteses. Pode ser tanto um dado quanto uma variável.

//[07:10] Ju: E tem console.error, que já vimos console.error em funcionamento. Já vimos a stacktrace, que é resultado de um erro quando ele é chamado do jeito certo, que vamos ver mais para frente. O que mais? Tem mais alguma coisa que podemos falar de erros, nesse momento, Léo? Sobre erros não, desculpa, sobre console.

//[07:35] Leonardo: É sempre uma boa prática nós utilizarmos o console, tanto quanto log quanto error, para sair da nossa aplicação, para sempre sabermos o que está acontecendo dentro dela. Já que se ela, simplesmente, entra, executa e sai, nós não sabemos se teve algum problema no meio. Ás vezes, uma conta entra um dado errado, então, é sempre bom termos esse feedback da aplicação, para sabermos o que está acontecendo.

//Entre os outros métodos, existem:

//console.error() para exibir mensagens de erro;
//console.table() para visualizar de forma mais organizada informações tabulares;
//console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
//console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

//O JavaScript foi padronizado em 1996 pela European Computer Manufacturers Association (ECMA), e é por isso que às vezes você o ouve como ECMAScript. É uma linguagem incrivelmente poderosa, presente na maioria dos navegadores e no back-end de grandes sistemas.

//Sabendo disso, analise as alternativas abaixo e marque as verdadeiras sobre esta linguagem de programação.

//No JavaScript, os tipos de dados podem ser divididos em duas categorias: tipos primitivos e tipos de objetos.
//Alternativa correta! Muito bem! Os tipos primitivos do JavaScript incluem números, texto (conhecidas como strings) e valores booleanos. Já o tipo objeto é uma coleção de propriedades, onde cada uma possui um nome e um valor, sendo ele um valor primitivo ou outro objeto.
//Alternativa correta

//No JavaScript, podemos criar um programa com paradigma funcional e lógico.
//Alternativa correta! Certo, podemos sim. O JavaScript é uma linguagem de programação multiparadigma e possui suporte para funcional, orientado a objetos ou lógico por exemplo.
//Alternativa correta

//Divisão por zero não é um erro no JavaScript.
//Alternativa correta! Isso aí. Diferente de outras linguagens de programação como Java ou Python, divisão por zero no JavaScript não gera um erro. O retorno desta operação é infinito ou infinito negativo (Infinity). Porém, a divisão de zero por zero resulta num NaN (not a number).
