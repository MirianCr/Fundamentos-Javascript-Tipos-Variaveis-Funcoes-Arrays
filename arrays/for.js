const numeros = [100,200,300,400,500,600]

for (let i = 0; i<numeros.length; i++){
    console.log(i, numeros[i]);
}

//O terminal exibiu para nós seis sequências. 0 e 100, 1 e 200, 2 e 300, por aí. O que então estamos fazendo com essa estrutura? O for é uma estrutura de loop, é um laço de repetição. Toda vez que o Java script e que nosso programa cai numa linha que tenha esse for ele vai entrar e vai ficar lá, repetindo e executando o que está sendo pedido dentro do bloco, lembrando que um bloco de código no Java script é o que especificamos entre as chaves.

// A primeira coisa que o Léo fez foi criar uma variável, uma let, e ele chamou de i, como costumamos chamar i de índice, mas esse é só um nome padrão que costumamos usar, pode ser qualquer nome como o Léo disse, mas vamos usar o padrão.
// Ele deu para essa variável i o valor de 0. A segunda coisa que o Léo fez foi dizer que ele está fazendo uma comparação de i menor do que numeros.length. É o tamanho da array que estamos trabalhando. Por enquanto, nesse momento, qual o tamanho de números? Números tem seis elementos. Então o valor referente a numeros.length é seis.
//E i por enquanto tem valor 0, que foi o que acabamos de falar aqui. Neste momento, essa condição é verdadeira, porque o valor de i é menor do que seis. E a terceira coisa que o Léo colocou foi i++. É um operador que aumenta em um o valor da variável i, que é a mesma coisa que escrever i = i + 1, é só uma forma mais curta de escrever. Certo, Léo, por enquanto?

for (let i = 0; i <= 10; i++){
    console.log(i)
   }

   //O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de parada i <= 10 está correta, a variável i que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (i++). Quando o valor da variável de controle i chega a 11, depois de imprimir o número 10 no terminal, a comparação i <= 10 retorna false e isso encerra o loop.

//O loop infinito pode acontecer caso algum dos parâmetros seja passado de forma incorreta ou esteja faltando. Por exemplo o terceiro, responsável por alterar a variável de controle após o bloco de código dentro do for ter sido executado: