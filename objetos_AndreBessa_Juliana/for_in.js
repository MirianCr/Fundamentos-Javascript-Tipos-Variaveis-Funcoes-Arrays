//Puxando relatorio == percorrer um objeto e extrair informações basicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com",
    fones:["559166552", "55642222555"],
    dependentes: [
        {
        nome: "Sara Silva",
        parentesco:"filha",
        dataNasc: "20/03/2018"},
        {
        nome: "Samia Maria",
        parentesco:"filha",
        dataNasc: "04/01/2014"} 
    
    ],

    saldo:100,
    depositar:function(valor){
        this.saldo +=valor
    }
}
let relatorio = "";
for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }    
}
//console.log(typeof cliente.depositar)
console.log(relatorio)

//O método for in é um método do JavaScript que é para objetos.

