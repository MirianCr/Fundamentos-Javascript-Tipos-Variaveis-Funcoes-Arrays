// Para saber mais: Deletando propriedades
//Já vimos o principal, que é acessar, alterar e adicionar valores em um objeto. Mas ainda faltou falarmos sobre um caso: E quando queremos deletar um conjunto de chave/valor?

// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
// aliado: {
//     nome: "Saruman",
//     classe: "mago"
//   },
//   status: "desaparecido"
//  }

//Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
//delete objPersonagem.aliado
//console.log(objPersonagem.aliado) //undefined

//Também é possível utilizar a notação de colchetes:

///delete objPersonagem.aliado
//delete objPersonagem["status"]

//console.log(objPersonagem.aliado) //undefined
//console.log(objPersonagem.status) //undefined

//Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.

//Após remover as duas propriedades acima, o objeto agora está desta forma:

// {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
//    }

//O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

//const delProp = delete objPersonagem.aliado
//const delPropInexistente = delete objPersonagem["endereco"]

//console.log(delProp) //true
//console.log(delPropInexistente) //true

//O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante no curso.

//===================================================
//Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.
//Objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele.

// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
//    }
   
//    const objPersonagem2 = objPersonagem
//    const objPersonagem2 = objPersonagem
// objPersonagem2.nome = "Gandalf, o Cinzento"

// console.log(objPersonagem.nome) //Gandalf, o Cinzento
// console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

//Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento

   //O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.