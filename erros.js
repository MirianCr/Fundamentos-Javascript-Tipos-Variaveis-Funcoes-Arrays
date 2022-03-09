//Então sempre tente ler os erros da melhor forma possível, mesmo que seja usando o tradutor.
const numero = 0;
//const numero;
//SyntaxError: Missing initializer in const declaration
//Esse erro já sublinhou para nós, colocou um indicador que tem algum problema na const numero que acabamos de declarar, então, sabemos que o problema está ali.
//Um pouco mais abaixo é informado qual é o problema. É um "SyntaxError", ou seja, um erro de sintaxe, então, escrevemos alguma coisa errada. Vamos ver, em seguida, o que ele traz.
//Ele nos avisa que está faltando um inicializador, ou seja, está faltando algum número para podermos declarar uma constante
//as consts nao podem ser criadas sem valor porisso deu erro

//Léo, vamos criar, forçar mais um erro? Eu vou comentar a minhaVar para forçarmos o erro. Agora, vamos falar um pouco sobre o que é todo o resto de texto que o terminal nos traz no erro. Porque, no final, sempre acabamos parando no começo, nas primeiras linhas e é importante o restante? Por que o JavaScript nos traz isso?

// O que temos nessa parte de código? Essa parte é muito importante para nós quando estamos trabalhando com vários tipos de módulos ou em bibliotecas, que é uma coisa que vamos ver mais adiante; e, também, quando temos mais de um arquivo trabalhando, quando nosso código faz parte de mais de um arquivo, ele é separado em vários arquivos separados, vários tipos diferentes.

// Então, conseguimos ver, exatamente, em qual arquivo está dando esse problema e em que parte desse arquivo. Então, se tivermos a primeira linha branca, depois do nosso erro de referência, nós temos “at Object”, que é no objeto e em seguida, temos o caminho do arquivo, que é “(/home/juliana/Documents/alura” aí, a classe em que nós estamos nos nossos códigos e o arquivo “erros.js”, que é o arquivo que criamos.

// Depois disso a mensagem ainda nos passa a linha e qual caractere, então, é linha 3, caractere número 13.



//Cada linguagem de programação tem sua própria forma de lidar com erros. O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:

//RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

//ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

//SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

//TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.