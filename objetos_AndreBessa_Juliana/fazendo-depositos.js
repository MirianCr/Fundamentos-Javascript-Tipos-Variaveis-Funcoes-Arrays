const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com",
    fones:["559166552", "55642222555"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco:"filha",
        dataNasc: "20/03/2018"},
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor;//this se refere a isso, esse objeto aqui
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);

//Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia.