//boolean
//, através desses valores nós conseguimos fazer comparação, então, se o usuarioLogado for igual à true, então, ele pode fazer coisas no nosso sistema, se contapaga for igual à false, então, posso mandar um aviso: "Sua conta não foi paga”.
const usuarioLogado = true;
const contaPaga = false;

//existem alguns outros valores de variáveis que não são nem true nem false, mas, que para o JavaScript, eles equivalem a ser tipo verdadeiro ou tipo falso, ou como costumamos dizer, truthy ou falsy.
// Porque eles não são, exatamente, booleanos, mas, podem se comportar como se fossem.
//Vamos usar alguns exemplos sobre, por exemplo, alguns desses valores que o JavaScript pode considerar como falsos.
//0 e 1 são, em algumas linguagens (inclusive em linguagem de banco), eles fazem o papel do verdadeiro e do falso, sendo que o 0 pode ser igual o false e o 1 faz o papel do true.
// Então, o zero é um dos valores que o JavaScript considera como false. Vamos fazer algumas comparações só para entendermos melhor como que funciona esse valor que não é booleano, mas, é falso.

//0 = false || "" = false
//1 = true

//Vou pedir para o JavaScript (console.log no terminal) comparar o 0 com o valor de false, mas, eu vou usar dois iguais ==, porque eu não quero comparar o valor e o tipo, eu quero comparar só o valor.
//u seja, o true que aparece no console é o resultado desta comparação que eu estou fazendo entre 0 e o booleano false.
//Outro tipo de dado que o JavaScript considera como se fosse falso são as strings vazias, que só abrimos e fechamos aspas sem colocar nada no meio.
//Também deu verdadeiro, ou seja, o JavaScript considera esses dois valores como tipo falso.
// console.log(0 == false);
// console.log("" == false);
// console.log(1 == true)

//null
// Nós também podemos colocar o null, ou seja, vazio ou nada. Ela não está significando nada. Ambos, o null e o undefined são similares e podem ser usados, entre eles, sem problema nenhum.
//O null é um tipo de dado que representa vazio, ele não representa nada, digamos assim
//undefined
// Vamos colocar em um exemplo: quando iniciamos uma variável com o let e deixa ela sem valor nenhum, ela ganha, automaticamente, pelo JavaScript o valor de undefined. Ou seja, ela não foi definida, mas, ela pode ser utilizada.

let minhaVar;
let varNull = null;
let numero = 3;
let texto = 'Alura';

console.log(typeof minhaVar);
console.log(typeof varNull)
//Vou só substituir os consoles (typeof minhaVar) e (typeof varNull). Vou salvar, rodar e deu undefined em minhaVar. Só que, agora, o (typeof varNull) veio objeto, ele não veio null.Ele veio como objeto
// Isso, ele veio como objeto. O que acontece? Como null foi criado no JavaScript, ele foi criado como um objeto. Ele deveria ter sido criado como null, só que ele é alguns dos bugs que tem dentro do JavaScript, que acaba ocorrendo, e que eles não pretendem consertar esses bugs.
// Por que? Porque se você consertar esses bugs você vai acabar quebrando muitos códigos já existentes. Então, acabou sendo deixado dessa maneira, porém, isso acaba influenciando, normalmente, no que fazemos. A menos, em casos específicos
//Essa é uma anedota do JavaScript, alguns erros, realmente, não têm como voltar atrás. Mas, lembre-se sempre. E precisamos saber esses detalhes da linguagem, quando estamos começando, porque não saber os detalhes pode acontecer de termos bugs que não sabemos de onde vem e esse do null ser igual a um objeto é um caso muito clássico.
// E lembrando que as linguagens de programação são feitas por pessoas e as pessoas, às vezes, também cometem erros e esse foi um caso que não deu para consertar.

/*O fato de null ser um dado do tipo Object em JavaScript não irá causar problemas no código por si mesmo, mas sim quando há divergência na checagem de tipo.

Isso porque, "computacionalmente" falando, null não deveria ser um objeto mas sim um tipo primitivo próprio. Este é um dos bugs mais famosos do JavaScript, que não teve como ser consertado em versões posteriores pela particularidade do JavaScript de ser uma linguagem interpretada no lado "cliente" da requisição. Se quiser, você pode conferir nesse post (em inglês) uma explicação interessante sobre a implementação em C do código.

Assim, devs que venham de outras linguagens podem não estar a par disso e tentar validar null utilizando typeof null === "null", o que retornaria false; ao contrário do caso typeof undefined === "undefined" que retornaria true.

Um exemplo real, como você perguntou, seria a validação de campos em um JSON retornado de uma API. Dependendo da API e de como o JSON é retornado, podem existir campos com valor null (por exemplo, campos não obrigatórios que não tenham nenhum dado). Quando o frontend vai consumir estes dados, precisa validar se todos os campos têm informações antes de exibir na tela, pois seria bem estranho para o usuário receber null onde espera ver alguma informação (embora isso às vezes aconteça!). Quem está desenvolvendo o código dessa validação tem que ter esse "bug do null" em mente, para que não tente, por exemplo, fazer algo do tipo:

// verificar se algum campo de uma API é null

if (typeof retornoAPI.campo === "null") {
  // código
}COPIAR CÓDIGO
O que sempre retornará false independente do valor do campo ser null ou não.

Por causa desse bug, não é ideal fazer a verificação de valores null usando o typeof, pois muitas coisas em JavaScript são "object", inclusive arrays; você pode ver aqui a tabela com os possíveis retornos do operador typeof. Ao invés disso, você pode utilizar o operador de igualdade estrita === ou operador de não-igualdade estrita !==:

const varNula = null;
const texto = "Alura";

console.log(varNula === null); //true
console.log(texto !== null); //trueCOPIAR CÓDIGO
Lembrando que null é considerado um valor falsy pelo JavaScript, então é importante forçar sempre a comparação por tipo e valor usando === e !==, ao invés de == e !=.

Bons estudos ;)*/