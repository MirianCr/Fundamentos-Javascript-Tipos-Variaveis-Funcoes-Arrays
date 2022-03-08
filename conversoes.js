//tipo de dado
//booleano

//conversao implicita
const numero = 456;
const numeroString = Number("456");

//Number()
//String()
console.log(numero === numeroString);
console.log(numero + numeroString) //NaN
//aso, o JavaScript tem um igual para nós atribuirmos um valor à uma variável (nós não podemos confundir), dois iguais para fazer uma comparação, digamos assim, pelo valor, só o que está dentro (então, ele está comparando só o 456), porém, os três iguais compararam não só o valor, mas, também o tipo; se é string, se é número, ou os dois têm que ser número para dar true ou os dois têm que ser string para dar true, etc.

//conversao explicita
// Conversão Explícita nós vamos utilizar duas funções do JavaScript, nesse caso. A função number, com “N” maiúsculo no início, e a função string.
//Eu posso assumir que usamos number quando queremos transformar uma string em número e nós usamos o string para transformar um número numa string
//e eu tentar converter uma string que não contém só número, contém, por exemplo, algarismo, ele vai dar um Not a Number. Como tivemos antes quando estávamos tentando multiplicar duas strings