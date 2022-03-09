//O JavaScript tem uma particularidade, que são três formas de escrever variáveis: var, let e const.
//E acabamos de ver como conseguimos utilizar tanto a var, que não é muito recomendada de se utilizar, hoje em dia, por ela ser muito solta; a let, que nos permite trocar os valores dela, porém, nós sempre temos que declarar ela antes de ser utilizada; e a const que é fixa, o valor dela, uma vez declarado, fica preso nela e também tem que ser declarado antes.

//Ao declararmos uma variável como const ela deve obrigatoriamente receber um valor: const taxaComissao = 0.25;
//Ao declararmos let, ao contrário, podemos apenas declarar a variável, sem atribuir nenhum valor. Além disso, o valor inicial pode ser modificado depois:

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100



// var altura = 5;
// var comprimento = 7;
// area = altura * comprimento;
// console.log(area);
// var area;

//let

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === 'retangulo'){
//     area = altura * comprimento;
// }else{
//     area = (altura * comprimento) /2;
// }

// console.log(area);

//const
// E sempre que criamos uma nova constante ela já tem que ter um valor, ao contrário da let e da var, não dá para, simplesmente, criar e dar um nome e deixar ela sem valor nenhum atribuído.
const forma = 'triangulo';
const altura = 5;
const comprimento =7;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento;
    }else{
    area = (altura * comprimento) /2;
    }
    
console.log(area);

/*Nesta aula vimos que:
var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.*/




