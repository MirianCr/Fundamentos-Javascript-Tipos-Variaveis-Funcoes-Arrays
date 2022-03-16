// Faça como eu fiz: Objeto como um array associativo
const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    
   adicionarTipo: function (propriedade,tipo){
    this[propriedade].push(tipo)
   }
}

   //console.log(colecionador.nome) //João do Gibi
   //console.log(colecionador["nome"]) //João do Gibi
  
  for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
  }
  console.log(colecionador.tipocolecao)//[ 'quadrinhos', 'HQ0', 'HQ1', 'HQ2', 'HQ3' ]


  

   //Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. No segundo exemplo, acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. No JavaScript, objetos são classificados também como um array associativo (map ou dicionário).

//Mas por que é importante saber disso?

//Nesta linguagem as propriedades são expressas como strings e podem ser manipuladas em tempo de execução, o que confere uma flexibilidade muito grande na hora de escrever código . Vamos adicionar dinamicamente uma série de tipos de quadrinhos à lista de tipos do objeto colecionador. Adicione ao objeto a função abaixo:

  //Usando uma estrutura for conseguimos manipular a propriedade tipocolecao do objeto colecionador, por meio da função adicionarTipo(). Usamos a notação de colchetes junto à palavra reservada this, que faz referência ao próprio objeto. Desse modo, fazemos uso do objeto como um array associativo.

//É importante que conheçamos as diversas maneiras que o JavaScript possui para acessarmos os valores das propriedades de um objeto. Uma dessas formas é usando o conceito de array associativo.