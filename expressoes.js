function minhaFuncao(param){
    //bloco de codigo
}
//minhaFuncao("param");

//expressao de funcao
//const soma = function(num1, num2){
  //  return num1 + num2
//}
//console.log(soma(1,1))

//diferenca principal: hoisting
//funções e var sao "listadas" no topo do arquivo

console.log(apresentar())

function apresentar(){
    return "olá";
}


console.log(soma(1,1))
const soma = function(num1, num2){
    return num1 + num2
}

/*
Ele diz que não consegue acessar soma antes da inicialização. Então, Léo, fala para nós o que está acontecendo, porque esse é um comportamento do JavaScript que é muito importante entendermos como funciona, para resolvermos esse tipo de bug.

[08:50] Leonardo: Ju, o que está acontecendo é o seguinte. Quando fizemos a declaração de soma com o const, ela se comporta igual uma variável. E como uma variável no JavaScript, nós não podemos usar ela, a não ser que já tenhamos passado por ela, iniciado ela alguma vez.

[09:11] Leonardo: A exceção disso é o caso das funções que declaramos com um nome ou as var. Nesse caso, o interpretador do JavaScript vai passar pelo nosso código e puxar todas essas declarações para o topo do nosso código. Então, ele vai, primeiro, iniciar todas essas declarações e todas as nossas var, e depois vai executar o nosso código. Então, não temos esse problema, não temos esse perigo.

[09:40] Leonardo: Esse trabalho que ele faz, chamamos de hoisting, que é içar ou levantar; que é, exatamente, trazer todas essas declarações para cima do nosso código, no topo dele.

[09:54] Ju: Então, podemos dizer que o JavaScript antes de fazer qualquer coisa no código, ele lista as funções que são declaradas e o que é declarado como var, e antes de começar qualquer coisa, ele já sabe o que é. Então, por isso que funciona se nós chamarmos a função declarada antes dela existir, entre muitas aspas no código.*/