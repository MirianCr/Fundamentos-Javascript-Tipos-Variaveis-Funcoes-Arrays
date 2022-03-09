//arrow = significa flecha =>

function apresentar(nome){
    return `meu nome é ${nome}`
}

//Arrow function
const apresentarArrow = nome =>`meu nome é ${nome}`;
const soma = (num1, num2) =>num1 + num2

//Arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 >10){
        return "somente numeros de 1 a 9"
    }else{
        return num1 + num2;
    }
}




//Essa é a cara da arrow function. Léo, fala para nós um pouco sobre as características desse jeito curioso, e um pouco diferente, de se escrever funções no JavaScript.

//[04:23] Leonardo: Essa arrow function veio junto com o ES6, que foi o de 2015. Foi uma grande novidade, como a Ju disse, e ela deixou nosso código bem melhor. Conseguimos, agora, declarar tudo numa linha só, não precisa de chaves, não precisa de return, não precisa de nada disso.

///[04:42] Leonardo: Ela, também, não pode ser nomeada. Ela não tem nem essa possibilidade para podemos usar, então, fiquem um pouco atentos com isso. E ela sempre vem com uma const e o nome da nossa variável, que vamos usar antes.

//[04:58] Leonardo: Ela tem alguns casos especiais, Ju, que vamos ver mais para frente, que é com objeto, com outras coisas; não é o tema desse curso, vamos ver em outros cursos. E, eu acho que é isso, por enquanto, que eu posso debulhar para nós da arrow function.

/*
] Ju: Então, agora que vimos declaração de função, expressão de função e arrow function, como que sabemos quando utilizamos cada um desses três tipos?

[09:37] Leonardo: Ju, em cima disso temos: arrow function é um jeito rápido e curto de você escrever a função, então, nosso código acaba ficando mais curto e isso é uma coisa boa.

[09:49] Leonardo: Porém, se você achar que ela não é muito fácil de entender o que está acontecendo dentro dela, você pode dar declaração de função, sem problema, para fazer isso.

[09:59] Leonardo: A arrow function também tem algumas vantagens, quando estamos mexendo com objetos, que não vamos ver nesse curso, vamos tratar isso em outro curso. Mas, de forma geral, podemos utilizar as três funções, só lembrando da questão do hoisting de quando fazemos declaração da função completa.

[10:21] Ju: Então, a arrow function se comporta nessa questão de hoisting, exatamente, da mesma forma que a expressão de função, não é?*/