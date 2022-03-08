//tipo string
// Nós conseguimos usar as strings para guardar qualquer outro tipo de dado, que não seja número, nem booleano. 
//qualquer cadeia de caracteres, conjunto de caracteres que nós colocamos entre aspas (sejam duplas ou simples), o JavaScript vai considerar como um dado do tipo string.

const texto = "Olá mundo!";
const texto2 = 'Olá mundo!';
//const senha = 'senhaSuperSegura456!';
const StringDeNumeros = "34567";
const citacao = 'O Leo disse "oi!"' // 'Você pode usar tanto aspas simples, quanto aspas duplas'. 

//template string ou template literal.
//concatenação: mesmo operador de mais serve para somar números, mas, também, vamos ver como ele pode funcionar para somar texto.
const meuNome = "Leonardo";
console.log(citacao + meuNome);

//Para saber mais: Codificação de strings
// O padrão UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje.
//Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Para saber mais: Trabalhando com strings
//para padronizar uma comparação entre strings:
// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
//const cidade = "belo horizonte";
//const input = "Belo Horizonte";

//console.log(cidade === input); // false

//Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.
//toLowerCase() que converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido)
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

const senha = "minhaSenha123";
console.log(senha.length) // 13 caracteres

//A propriedade length de um objeto String contém o comprimento da string. length é uma propriedade read-only (somente leitura) de instâncias de string. Essa propriedade retorna o número de unidades de código presentes na string