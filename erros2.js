//console.log("deu erro");
//console.error("deu erro");
//Então não faz diferença usar um ou outro?

//Faz, sim. Porém, como em qualquer linguagem de programação, é normal que alguns métodos só funcionem da forma que esperamos se fornecermos os dados necessários da forma correta.

//Vamos tentar novamente, passando uma informação um pouco diferente para console.error():
console.log("deu erro");
console.error(new Error("deu erro"));

//Nesta aula vimos:
/*As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.
O que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.
Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando.
O que é stacktrace, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.
O que é o Console API e como podemos utilizá-lo usando o console.log() e console.error().
Onde as mensagem do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal*/