/*Continuando então nosso trabalho com estruturas de dados e com nossas listas de alunos, vamos ver qual o desafio deste vídeo. Nós temos que criar uma função que vai receber o nome de um aluno, procurar esse aluno em uma lista de alunos e caso o aluno esteja presente nessa lista retornar a média deste aluno, ou retornar uma mensagem se o aluno não foi encontrado na lista, ou seja, se o aluno não fizer parte daquela lista de classe, por exemplo, nós temos que dar uma mensagem de retorno dizendo que o aluno não foi localizado.*/

const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
                             //3
const mediaDosAlunos = [10,7,9,6];

//indexOf -> 3
//includes -> booleano

                          //0[alunos]  1[10,7,9,6]
let listaDeNotasEalunos = [alunos,     mediaDosAlunos];

const exibeNomeNota=(nomeDoAluno) =>{ //ver se aluno existe com o if
    if(listaDeNotasEalunos[0].includes(nomeDoAluno)){ //O includes sempre vai retornar verdadeiro ou falso
        let indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno)//indexOf le retorna um número, que é um número referente ao número do índice.
                                  //[0][3]          
        return listaDeNotasEalunos[0][indice] + ', sua media e ' + listaDeNotasEalunos[1][indice]
    }else{
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Juliana"))
console.log(exibeNomeNota("Nemo"))

//Ana, sua media e 6
//Juliana, sua media e 7
//Aluno não esta cadastrado


//indexOf siginifica indice de 
//O que faz o indexOf? O indexOf vai trazer qual o número do índice também fazendo uma pesquisa por ano. Então o primeiro método includes retorna um verdadeiro ou falso, sempre lembrando que é interessante entender o que cada função, cada método retorna para nós.
//O includes sempre vai retornar verdadeiro ou falso. Ele retorna um booleano para nós. O código entra no if caso a condição seja verdadeira. Então aqui é verdadeiro porque Ana existe nessa array, ele retornou true, porém outro método que usamos, o indexOf, não retorna booleano, ele retorna um número, que é um número referente ao número do índice.
//Ele vai buscar por Ana e vai trazer para nós qual o número do índice onde Ana se localiza nessa array. O João está no índice 0, Juliana no índice 1, Caio no índice 2, Ana no índice 3. Ele vai retornar 3 e guardar esse valor na variável índice.
// Ou seja, então o que vai ser retornado na função? Nosso retorno vai ser valor de lista de notas e alunos no índice 0, e a segunda informação aqui é 3. Índice 0 vou colocar um comentário para ficar mais fácil de entender. Na verdade é índice 0, índice 3, que é onde Ana se localiza dentro dessa array de três dimensões.
//Então Ana, sua média é, mesma coisa para a linha de baixo. Porém lembrando que a lista de notas e alunos tem duas arrays dentro dela. A segunda array é média dos alunos, então no índice 1 e 3. Foi dentro de média dos alunos procurar o índice 3 que é Ana.
//Então a nota da Ana é 6. O que fazemos aqui com as variáveis é uma espécie de substituição. Sempre lembrar que as variáveis guardam valores, e no final o que está sendo representado pela variável índice é um valor número. Quando for feita essa substituição o Java script vai entender que no nossa lista de notas e alunos, índice, na verdade, é 0 e 3, e lista de notas e alunos o índice é 1 e 3. Deu tudo certo.