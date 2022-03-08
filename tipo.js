//Nessa primeira aula, nós vamos repassar alguns dos pontos mais fundamentais da linguagem, que estamos vendo que é o JavaScript.

//Vamos começar por tipos de dados. Porque isso também pode variar de linguagem para linguagem.

//Os nossos computadores conseguem armazenar os dados que vamos colocar dentro deles, dentro de alguns tipos.

//Dentro do JavaScript temos três tipos principais, que são os primitivos, que vamos utilizar mais durante as aulas. Que são os números, que serve para armazenar números; as strings, que servem para armazenar textos e caracteres; e os booleanos, que servem para armazenar verdadeiros ou falsos.

// NaN, o tal do Not a Number. , quando recebemos isso significa que o JavaScript tentou fazer uma operação matemática, mas, não conseguiu. O resultado dessa operação ele não consegue fazer, não é reconhecido como um número.

//Sempre que você estiver fazendo uma operação matemática e ver essas três letras, significa que alguma das partes dessa conta não está sendo (e está aí a importância de sabermos os tipos de dados), o JavaScript não está reconhecendo alguma parte dessa operação como sendo um número

//Programas funcionam manipulando valores, como o número 3.14 ou o texto Juliana e Leonardo. Os tipos de valores que podem ser representados e manipulados em uma linguagem de programação são conhecidos como tipos, e uma das características mais fundamentais de uma linguagem de programação é o conjunto de tipos que ela suporta

//Variáveis
//Quando um programa precisa reter um valor para uso futuro, ele atribui o valor a (ou “armazena” o dado em) uma variável. As variáveis têm nomes e permitem o uso desses nomes em nossos programas para se referir a valores. A maneira como as variáveis funcionam é outra característica fundamental de qualquer linguagem de programação.

//Os tipos de JavaScript podem ser divididos em duas categorias: tipos primitivos e tipos de objetos. Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como strings) e valores booleanos (conhecidos como booleanos).

//Tipos numéricos
//Como vimos em aula, podemos armazenar números de diferentes formas:

//const idade = 28
//const pi = 3.14COPIAR CÓDIGO
//Dica: podemos utilizar o número PI através com o código Math.PI.

/*O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe tradicional para números reais. Um valor real é representado como a parte integral do número, seguido por um ponto decimal e a parte fracionária do número.

Pontos flutuantes também podem ser representados usando notação exponencial: um número real seguido pela letra e (ou E), seguido por um sinal opcional de mais (+) ou menos (-), e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do expoente.

Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.*/


// var a = 10
// var b = 0
// console.log(a/b) //Infinity