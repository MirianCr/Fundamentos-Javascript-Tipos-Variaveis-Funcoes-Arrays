//O JavaScript tem uma particularidade, que são três formas de escrever variáveis: var, let e const.
//E acabamos de ver como conseguimos utilizar tanto a var, que não é muito recomendada de se utilizar, hoje em dia, por ela ser muito solta; a let, que nos permite trocar os valores dela, porém, nós sempre temos que declarar ela antes de ser utilizada; e a const que é fixa, o valor dela, uma vez declarado, fica preso nela e também tem que ser declarado antes.
//

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




