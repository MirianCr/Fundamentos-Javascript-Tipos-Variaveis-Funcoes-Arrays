//Até agora trabalhamos com arrays que representam listas de dados (notas de alunos em uma escola). Mas o que acontece se declaramos um array sem nenhum valor na lista?

const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)

//No exemplo acima, podemos ver que o JavaScript criou o array e a guardou na variável arrayVazia, mas seu length é 0.

//Vamos então ver o que acontece se usarmos a notação de colchetes para tentar acessar o índice 0 do array (lembrando que o índice zero se refere à primeira posição):
const arrayVazia2 = [];
console.log(arrayVazia2[0]) //undefined

const arrayVazia3 = [,,,];
console.log(arrayVazia3.length)
console.log(arrayVazia3[0])
console.log(arrayVazia3[1])
console.log(arrayVazia3[2])

//O que fizemos aqui, afinal?

//Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

//Para finalizar, faça um último teste. Vamos usar o método push() visto anteriormente para adicionar um valor - lembrando que este método sempre vai adicionar o valor no final do array!

const arrayVazia4 = [,,,];
console.log(arrayVazia4.length)
arrayVazia4.push(50)
console.log(arrayVazia4)
console.log(arrayVazia4.length) //3[ <3 empty items>, 50 ]4

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.