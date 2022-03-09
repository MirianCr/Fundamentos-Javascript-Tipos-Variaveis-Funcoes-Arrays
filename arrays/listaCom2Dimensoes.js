// //lista de 2 dimensoes
// const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
// const mediaDosAlunos = [10,7,9,6];
//                            //0[alunos]  1[10,7,9,6]
// let listaDeNotasEalunos = [alunos,     mediaDosAlunos];

// //[0]listaDeNotasEalunos=alunos / [0] alunos = joao 
// //[1]listaDeNotasEalunos=mediaDosAlunos /[0] mediaDosAlunos = 10                         
// console.log(`${listaDeNotasEalunos[0][0]}, a sua media é ${listaDeNotasEalunos[1][0]}`)

// // Pronto, criamos uma lista com duas dimensões. Ela é uma lista que contém listas dentro dela. Vamos ver como podemos fazer para acessar essa lista agora. Para isso vou usar o console.log e vamos passar uma template string para poder linkar os nomes dos alunos com as notas para podermos ver.

const cidades = ['Salvador', 'Curitiba', 'Fortaleza', 'Manaus'];
const habitantes = [100, 200, 300,400];
const totalHabitantes = [cidades, habitantes];
console.log(`Na cidade de ${totalHabitantes[0][0]}, o total de habitantes é de ${totalHabitantes[1][0]} mil habitantes`)
//Na cidade de Salvador, o total de habitantes é de 100 mil habitantes

//outro exemplo :matrizes

const idades = [30, 35, 28]
const nomes = ["Ana", "Juliana", "Leonardo"]
const faculdade = [false, true, true]

const funcionarios = [nomes,idades,faculdade]
console.log(`A funcionaria ${funcionarios[0][0]} tem a idade de ${funcionarios[1][0]} anos e faz faculdade ${funcionarios[2][0]}`)

/*
O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido.

Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.*/