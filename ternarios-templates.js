const nome = "Leo";
const idade = 10;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

//Com este exemplo, usamos três ferramentas do JavaScript vistas durante esta aula:

//1) O uso de operadores: >= como operador de comparação entre o valor da variável idade e 18 e também o operador ternário como condicional para retornar o valor da variável bebidaMaior ou bebidaMenor de acordo com o resultado da comparação.

///2) Template strings: Utilizamos a sintaxe do acento grave + ${} em conjunto com as aspas duplas ””. Teste também com aspas simples!

//3) Operador ternário: Vimos que é possível não apenas exibir o valor de variáveis utilizando o ${}, mas também fazer operações com JavaScript - por exemplo, condicionais - e inserir o correspondente ao true ou false na string de texto.

/*
Nesta aula vimos:
A diferença entre fazer comparações com ==, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e ===, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false.
O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.
O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6.
Como usar a template literal, escrevendo o texto entre acentos graves () e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.
*/

