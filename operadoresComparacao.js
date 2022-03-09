// == Comparacao implicita

const numero = 5;
const texto = "5";


console.log(numero == texto) //true
console.log(numero === texto) //false

//typeof
console.log(typeof numero) //number
console.log(typeof texto) //string

// == só compara o valor
// === compara o valor e o tipo de dado 

//conversao explicita 
// Ainda tem códigos que utilizam o dois iguais, mas, as boas práticas pedem para utilizamos o três iguais e quando for fazer conversão, fazer de modo explícito. Então, usar string ou usar o number, usar essas funções dentro de conversão.
//Number()//String()

/*
Porém, a lista de operadores é extensa e há muitas formas de utilizá-los. Além das operações matemáticas básicas, do = para atribuição de valor em uma variável e das comparações com == e ===, utilizamos operadores para diversas outras tarefas de código, por exemplo:

||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.*/