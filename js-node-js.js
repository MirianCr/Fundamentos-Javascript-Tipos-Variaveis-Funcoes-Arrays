//primeira característica do JavaScript, que pode ser diferente de algumas outras linguagens que você já deu uma olhada quando estava decidindo para qual caminho ia, por exemplo, é que o JavaScript é uma linguagem que chamamos de tipagem dinâmica.
//Mas, uma linguagem nós dizemos que é dinamicamente tipada quando não precisamos declarar o tipo.
//Quando falamos de tipagem dinâmica, o que queremos dizer?
//Quer dizer que o JavaScript aceita que nós, por exemplo, criemos uma let, vou chamar de minhaVar e dê um valor para ela de número, por exemplo 567.
//E mais para frente, nós reatribuimos essa variável; por exemplo minhaVar, pode deixar um valor numérico para ter um valor de string, então, agora minhaVar = “texto”.
//Ou seja, quando criamos uma variável não precisamos dizer para o JavaScript qual é o tipo de dado, então, não preciso dizer que minhaVar é do tipo number. O JavaScript não aceita isso. Ele vê qual é o tipo e infere essa informação.
//ntão, ele vê que 567 é uma sequência de algarismos sem string, sem as aspas, e diz “Isso é um número, eu vou identificar e vou considerar um número”.
// A mesma coisa com string, a mesma coisa com booleano.

//O fato do JavaScript aceitar a troca do tipo de dado, ou seja, não estou trocando apenas 567 por 876, eu estou trocando o tipo de dado de número para string, para booleano ou para alguns outros.
//O fato do JavaScript aceitar isso faz com que ele seja uma linguagem de programação de tipagem dinâmica.

//Do JavaScript podemos falar, também, que ele é uma linguagem de programação multiparadigma. O que isso quer dizer?
//Quer dizer que conseguimos resolver o mesmo problema de várias formas diferentes. E isso não é só dele, muitas linguagens são assim e ele é uma delas.
//O interessante do JavaScript é que, apesar dele ser multiparadigma, nós também conseguimos usar ele como um paradigma só, resolvendo de maneira mais simples os nossos problemas, para termos soluções mais simples e programas mais simples.

// Apesar do nome, o JavaScript é só um pouco, levemente, baseada no Java. E não precisa saber nada de Java para começar no JavaScript. Então, inclusive, se formos ver como funciona para colocarmos no console, colocar num terminal o “Olá, Mundo”, “Hello World” nas duas linguagens, dá para ver que é muito diferente.

//O nome mesmo da linguagem JavaScript é ECMAScript.
//CMA é o nome da fundação que cuida dos padrões e dos standarts para a linguagem, então, o que vai ser desenvolvido, as features que vão ser desenvolvidas, o que a linguagem precisa melhorar, atualizações, etc.

//Vamos primeiro falar que tem dois tipos de linguagens, as interpretadas e as compiladas.

// Na linguagem interpretada, nós vamos escrever o nosso código e o nosso código vai ser executado. Então, nós vamos ter um programa por trás, que vai ler a linha do nosso código e executar o que está escrito nessa linha na hora em que estivermos rodando.

//Já linguagens compiladas, nosso código vai passar primeiro por um programa chamado compilador, que vai transformar o nosso código em código de máquina, linguagem de máquina. É um tipo especial de linguagem que o computador entende.

// E quando falamos em executar, nós vamos executar diretamente essa linguagem de máquina, o que facilita para o computador, mas, que é muito difícil para nós conseguirmos ler.

//Sim, é um sistema de trocas que fazemos. As linguagens compiladas rodam mais rápido, mas, precisam passar por um compilador. Já as linguagens interpretadas não precisam passar por esse intermediador, não precisam ser compiladas para rodarem, mas, elas são um pouco mais lentas.

//Porque o Node nada mais é que o JavaScript, o Node não é uma linguagem.
//O JavaScript, como é uma linguagem interpretada, ele precisa de um interpretador. Nós podemos usar um navegador como interpretador ou podemos usar o Node como interpretador. Se usamos o Node, nós, geralmente, vamos usar o JavaScript no backend, ou seja, no nosso lado do servidor. Para ele executar os códigos que queremos no servidor.
//Ele também traz umas funções interessantes, que o navegador nos traz, como, por exemplo, o console; que vamos entrar um pouco mais a fundo a seguir, nos próximos vídeos e nas próximas aulas.
// Então, podemos dizer que quando o JavaScript surgiu, o Node não existia. O Node é uma ferramenta que foi desenvolvida em 2010 (eu acho), bem depois do JavaScript já existir, para nós conseguirmos usar o JavaScript fora do interpretador padrão dele, que é o navegador (que é o que está aparecendo na tela).
// O console do navegador é o terminal (de muitas aspas), onde vemos as mensagens do JavaScript, quando trabalhamos com ele no front. Mas, para conseguir trabalhar com ele fora do navegador e rodar em outro ambiente, surgiu o Node.
// Então, o Node é um ambiente para gerar códigos JavaScript fora do navegador.
// E o navegador tem algumas ferramentas do JavaScript que o Node não tem. Então, por exemplo, tudo que precisamos que o JavaScript faça para se conectar com a interface, com a tela do navegador, não está presente no Node. Mas, o Node tem suas próprias ferramentas, que servem, justamente, para trabalhar no backend.