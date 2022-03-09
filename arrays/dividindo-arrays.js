//slice é cortar em ingles

const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log("tamanho da array de nomes:", nomes.length )
                          //0      10  
const sala1 = nomes.slice(0,nomes.length/2)//slice vai dividir essa lista de nomes em duas partes - indice 0 e vamos ate a metade
//nomes.length/2 é 20/2
                          //10 ate final                                      
const sala2 = nomes.slice(nomes.length/2)//aqui vai começar aonde parou o outro e pega a outra metade /2 porque quando nao coloca nada ele vai ate o final do array


console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
console.log("tamanho da sala1: ", sala1.length)
console.log("tamanho da sala2: ", sala2.length)

//amos agora colocar o que elas têm que guardar. A sala1 vai guardar os nomes dos alunos, e vamos usar o método slice, que vai dividir para nós essa lista de nomes em duas partes. Então, o slice pede alguns parâmetros, vamos ver o que ele pede. Ele pede um número, que é onde vamos começar a fazer o corte, e outro número, que é onde vamos terminar de fazer esse corte.

//[02:50] Leonardo: No caso aqui vamos começar a fazer o corte no índice 0, então vou colocar 0 para começar nele. E até onde queremos ir? Até a metade. Então vou usar o nomes.lenght, para dar o tamanho. Mas não queremos inteiro, queremos metade, então vou colocar sobre 2. Ele vai partir do 0 e vai chegar até metade do nosso array de nomes.

//[03:15] Leonardo: Agora vamos preparar a segunda sala, porque no momento só preparamos a primeira. E nossa lista de nomes não foi alterada, nós salvamos essa informação na sala1. Então agora temos que fazer a mesma coisa para sala2, então nome.slice, vamos começar onde paramos no outro, então nomes.lenght/2, para pegar de novo da metade da sala.

//[03:46] Leonardo: Não vou colocar nada onde nós terminamos, porque quando não colocamos nada ele vai até o final do array, não temos que nos preocupar com isso. É legal lembrar também que onde ele termina é exclusivo, ou seja, ele não vai pegar o nome que no caso para nós vai estar nessa posição do tamanho sobre 2.

//[04:11] Leonardo: E por fim vamos mostrar isso para poder ver o que está acontecendo realmente. Então console.log(‘Alunos da sala 1: ${sala1}’), vou fazer a mesma coisa para a sala2, então vou copiar e colar e trocar os nomes. Isso deve resolver para nós, Ju.

//[04:54] Juliana: Certo, então eu vou salvar e no terminal, já estou dentro da pasta onde estamos trabalhando, vou usar novamente o comando node para rodar o arquivo dividindo arrays, e ele exibiu para nós alunos da sala 1 e alunos da sala 2. Vamos só conferir se está tudo certo.
// Como o Léo disse anteriormente, o método slice aceita alguns parâmetros, lembrando que quando trabalhamos com métodos, eles são funções e todas as funções podem aceitar parâmetros de acordo com o que elas precisam fazer. No caso do slice, o Léo passou dois parâmetros, dois números.