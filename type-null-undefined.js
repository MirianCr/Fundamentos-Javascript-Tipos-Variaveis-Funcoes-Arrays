//Nesta aula falamos sobre três tipos primitivos: number, string e boolean. Mas existem ainda mais dois tipos que não abordamos com profundidade: null e undefined.

//O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

let input = null;
let input2;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}


console.log(input); // null
console.log(input2); // undefined

// tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
//undefined também é o valor retornado por uma função que não tem cláusula return

console.log(null == undefined); // true
console.log(null === undefined); // false

//No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.

/*Nesta aula vimos:
Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números texto e booleanos.
Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.
Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela.
Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false).
Onde as booleanas mais aparecem, como resultados de comparações com === ou outros operadores de comparação como >=.*/