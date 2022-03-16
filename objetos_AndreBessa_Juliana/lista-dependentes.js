//verificar a melhor forma de agregar a informação de um novo dependente do objeto cliente
const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com",
    fones:["559166552", "55642222555"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco:"filha",
        dataNasc: "20/03/2018"  
   }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})
// Então se estamos lidando com array e queremos adicionar um dado no array sem se importar em qual que é a posição que vamos adicionar, podemos usar o método de array que é o push(), que sempre vai adicionar o que passarmos por parâmetro no último índice do array.
//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014") 

console.log(filhaMaisNova[0].nome)//Samia Maria