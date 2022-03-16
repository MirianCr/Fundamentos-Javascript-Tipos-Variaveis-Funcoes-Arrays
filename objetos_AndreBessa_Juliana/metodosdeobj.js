//Percorrer um objeto , verificar se existe a chave 'dependentes' e caso exista enviar uma mensagem de oferta de seguro 

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

//console.log(propsClientes) //trouxe todaas as chaves:'nome', 'idade', 'cpf'....

function oferecerSeguro(obj){
   const propsClientes = Object.keys(cliente); 
   if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.values(cliente))//trouxe só os valores

console.log(Object.entries(cliente))//arrays 
//nos traz um array com várias arrays dentro dele, e cada um sendo um conjunto de chave e valores só que agora em outra estrutura, em uma estrutura de array, então o índice zero se refere a chave, e o índice um vai se referir ao valor, e isso sempre se repetindo, no índice zero aqui a chave, no índice um o valor, e por aí vai.
oferecerSeguro(cliente)



