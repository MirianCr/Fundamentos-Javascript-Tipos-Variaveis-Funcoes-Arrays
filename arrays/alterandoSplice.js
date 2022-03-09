const listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
//listaDeChamada.splice(1,2,'Rodrigo');//3 parametros: 1.indice = 1 //2 numero deelementos que ele vai remover //3. o que vai por no lugar

listaDeChamada.splice(2,0,'Rodrigo') //nao apaga ninguem
console.log(`Lista de chamada: ${listaDeChamada}`)

// Então listaDeChamda.splice, e o que esse splice vai fazer? Vai permitir que removamos alguns elementos de qualquer lugar dentro do array e coloque novos elementos em qualquer lugar dentro desse array também. Ele agora vai pedir três parâmetros. O primeiro parâmetro é em qual índice ele vai começar. No caso, a Ana e o Caio que temos que remover. A Ana é o índice número 1, lembrando que o array começa no 0.

//Então o índice 1, vamos remover a partir desse índice quantos elementos? A Ana e o Caio. E por fim vamos colocar algum elemento nesse lugar? Se quisermos colocar podemos falar agora. Vou querer, no meu caso vai ser o Rodrigo.

//[02:52] Leonardo: Teoricamente está pronto. Isso já vai fazer com que nós consigamos atualizar nossa lista. Vamos só imprimir a lista para ver se ela foi realmente atualizada. Então console.log, e vou abrir de novo com template string, uma lista de chamada, e agora vou colocar dólar, os bigodes, e vamos chamar a lista aqui dentro.

//metodo splice altera o array original