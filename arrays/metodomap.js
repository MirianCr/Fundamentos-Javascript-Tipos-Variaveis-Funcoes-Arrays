//Desafio ponto extra:
//um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas
//pontos:10,9,8,7,6
//===============================================================================

const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota );
console.log(notasAtualizadas)

//aqui ele recebe nota 11
//const notasAtualizadas = notas.map(nota => nota +1 );

//================================================================================
//Exatamente, ela virou onze, mas o aluno não pode receber nota onze. O máximo que a escola permite é nota 10. Então vamos fazer alguma coisa para poder resolver isso. Vamos manter nossa arrow function, o parâmetro dela, mas vamos ter que mexer nela. E agora podemos abrir os bigodes e escrever um if ou podemos só usar o operador ternário, que é o que vou fazer para ficar mais rápido para nós.

//[03:35] Leonardo: Queremos comparar se a nota for igual a 10, fazemos essa comparação. Se for verdadeiro retornamos só o valor da nota, se ela é igual a 10 não pode somar mais um nela. Agora, se for falso retornamos nota mais um, ou nota mais mais. Certo?

//Eu cometi um pequeno erro, vamos ver o que aconteceu. Eu coloquei nota “mais mais”. O que ele faz? Ele vai retornar o valor de nota e depois tentar somar um, no nosso caso não funciona, temos que primeiro somar um e depois retornar, então colocamos “mais mais” nota.

//[04:55] Juliana: Olha só, Java script passando a perna em nós.

//[04:58] Leonardo: Exatamente, não só Java script como várias outras linguagens de programação também tem isso, nós temos que tomar um pouco de cuidado com a ordem das operações.

//[05:05] Juliana: Sim, exatamente. Então vamos rodar novamente e agora sim, 10, 10, 9, 8, 7, perfeito, Léo, tinha me passado reto a diferença, realmente, porque o que acontece? O Léo falou, retornar, e o que faz o map? Vamos dar uma repassada. Qual a diferença entre usar o foreach, que aparentemente já estava resolvendo nosso problema e usar o map? Sempre temos que pensar, sempre batemos nessa tecla, o que as operações, o que o código que executamos retorna para nós?

//O foreach é um método que não retorna nada, ele simplesmente executa o que está dentro do bloco. Vou abrir inclusive o arquivo que estávamos trabalhando com o foreach. Ele vai executar o que está dentro do bloco, porém o método do foreach por si não vai retornar nenhum dado para nós. Agora, quando trabalhamos com o map, o map sim, tudo que ele faz, tudo que a função call-back do map faz é retornada com uma nova array.

//[06:18] Juliana: Ou seja, é nesse caso exatamente o que queremos, porque temos uma array de notas e queremos receber uma array de notas atualizadas. Foi isso que o Léo fez. O retorno de map, ou seja, depois dele calcular tudo que tem que fazer ele vai retornar, jogar para fora dessa função uma array atualizada com o que foi feito dentro, nota, notas com número a mais, e temos que salvar esse valor em uma nova variável, no caso o Léo usou notas atualizadas.

//[06:50] Juliana: No caso do foreach, se quiséssemos retornar uma array com novos valores teríamos que acrescentar mais código para pegar cada um desses valores, salvar em outro lugar, por isso temos métodos que fazem trabalhos diferentes para nós. Se precisamos retornar uma array com novos valores vamos utilizar o map, e vamos vendo que existem vários outros de acordo com o que queremos fazer no código, para encontrar índices de array, coisas que estão no array pelo elemento, e por aí vai. Vamos deixar o material para vocês.

//[07:24] Juliana: O caso aqui então vimos como o Java script pode passar uma perna em nós com o operador de incremento, porque também o que está acontecendo aqui? O map está executando o código, fazendo o ternário, que é um if, se for nota igual a 10 ele simplesmente retorna nota ou se não for ele vai adicionar um e retornar, então se tivéssemos deixado como estava antes, só com nota “mais mais” o Java script faz exatamente o que não queremos. Ele vai primeiro passar o número da nota para dentro da array nova e em seguida tentar incrementar, que para nós, não adianta, porque essa operação vai se perder e nós não vamos ter o resultado dela.