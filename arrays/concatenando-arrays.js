//Desafio juntando as turmas
const salaDePython = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJavascript = ['Ju', 'Leo', 'Raquel']

const salasUnificadas = salaDePython.concat(salaDeJavascript)
console.log(salasUnificadas)
//[ 'Melissa', 'Helena', 'Rodrigo', 'Ju', 'Leo', 'Raquel' ]

// Agora vamos passar aqui um dos nossos arrays que vou chamar, por exemplo, a sala de Python primeiro, e agora vem nosso método, que nesse caso vai ser um método chamado concat. Ele faz a concatenação entre os dois arrays. E como passamos o segundo array para ele concatenar? Como parâmetro.

//amos rodar com node, e agora nosso arquivo chama juntando turmas, e esperamos receber exatamente o que chegou, uma array somente com todos os nomes das duas salas. Então concat, de concatenação, o que fizemos foi pegar. Aqui no caso não faria muita diferença a array de onde partimos. Partimos da array sala de Python e estamos concatenando e passando como parâmetro de concat uma outra array, o Java script fez o resto, juntou tudo em uma array somente com todos os elementos dentro.

//O desafio está cumprido, Ju. Só tem que tomar cuidado com uma coisa. O concat não mexe na nossa lista que chamamos ele, temos que salvar esse valor em algum outro local, por isso criei outra lista para nós.

//[04:33] Juliana: Sim, bem lembrado, aquilo que nós inclusive comentamos anteriormente, sobre alguns métodos mexerem nas arrays originais e outros não, para alguns outros temos que salvar o resultado numa nova const para ter a array nova, modificada. Sempre temos que ter isso em mente, bem lembrado. Até o próximo vídeo.