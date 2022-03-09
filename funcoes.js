// let x = "";
// console.log(x);
// x = "oi";

//DECLARACAO DE FUNCAO - FORMA CLASSICA
//1.Declara a funcao;
                        //2 - valor de soma()
function imprimeTextox (texto){
    console.log (texto)
}

//2 executa a funcao(1 ou + vezes)
imprimeTextox(soma());
// imprimeTextox("outro texto");

//tres formas de escrever funcoes
function soma(){
    //outros codigos
    //varios console.log
    return 2 + 2;
    
}
//console.log(soma());

//O que está acontecendo é você está chamando a função, a função está sendo executada, só que ela não está te dando nenhuma resposta. Então, ela entra na function soma, declara a nossa constante resultado e põe o valor dela como 2 + 2.
//[13:57] Leonardo: E, acaba a nossa função, volta para o console.log, só que não tem o que imprimir, porque nossa função retornou nada, então, nós temos uma palavra chave que chama return, que é retorno.

// Perfeito. Lembrando que o console em si não interfere na execução do programa. Então, para o que o programa faz, ele vai exibir no console ou não, mas, o console é uma informação para quem está desenvolvendo, então, não adianta só ter o console.log e não ter retorno, se você quiser que sua função disponibilize os dados dela para outras partes do código.

//[19:42] Ju: Uma informação bacana de passar nesse momento é que essa palavra chave, essa cláusula, que chamamos de return ela tem que ser a última linha da função.

/*
As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, O JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima

Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
*/