//filtrar os reprovados
//filter retorna booleanos
const nomes = ['Ana', 'Marcos','Juraci', 'Maria']
const notas = [7, 4.5, 8, 3.5 ]

const reprovados = nomes.filter((_, indice) =>
notas[indice] < 5)

console.log(`Alunos reprovados: ${reprovados}`)

//==============================================================================
//Que o método filter pode receber outro parâmetro que não é obrigatório, que é o parâmetro de índice, ou seja, toda vez que filter iterar no array, ou seja, fizer o loop pelo array de nomes, podemos trabalhar tanto com a informação do elemento, que seria o aluno, quanto com a informação do índice, índice 0, índice 1, índice 2. , etc.
//o filter é um método que funciona na base de true or false, verdadeiro ou falso, ou seja, todos os elementos que baterem com a condição que nós vamos dar, lembrando que uma comparação sempre retorna true ou false, o dado, o valor vai ser incluído na nova array que o Léo chamou de reprovados.
//: Mas aí uma última coisa interessante que podemos notar é que nosso editor de texto, o visual studio code, reclama que o parâmetro aluno foi declarado, mas o valor dele nunca foi lido, porque declaramos a primeira variável, mas não está utilizando ela no bloco da função, não está sendo utilizado.

//[09:05] Juliana: Nesse caso o Java script tem um padrão para identificarmos quando um parâmetro não está sendo usado, que é colocar um underline. Se colocamos um underline o Java script sabe que aquele parâmetro existe, mas ele não vai ser declarado, não vai ser utilizado no corpo da função.

//[09:25] Juliana: Mas aí como aparece então, se não estamos utilizando o parâmetro aluno na função, como aparece o nome reprovados Marcos? Como apareceu aqui? Como ele veio para cá? Porque o filter, apesar de não estarmos utilizando o valor de Marcos, o valor desse primeiro parâmetro para fazer nossa comparação, ainda é o dado que o filter retorna, que passa aqui para nossa const de reprovados caso o valor da comparação seja true, por isso que deu tudo certo, porque filter estava associado a nomes.

//[10:05] Juliana: Ele salva o valor no loop se a condição do bloco for atendida, por isso aparecem os reprovados: Marcos