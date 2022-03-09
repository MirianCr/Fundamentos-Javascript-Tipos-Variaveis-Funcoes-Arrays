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

//String()
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//toString()
let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.


let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

//Number()
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.

//Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.

//Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais semântica possível, pensando em qual é o dado que está sendo salvo na variável e para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.



