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

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014") 

console.log(filhaMaisNova[0].nome)