//Fazendo depósitos
//Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancarias
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
//utilizamos funções para dar comportamentos para um objeto, então depositar, sacar, no caso aqui no contexto do nosso banco, mas pode ser qualquer contexto do que você tiver trabalhando.
//E aqui dentro do bloco da função, entre as chaves, estamos passando this.saldo como o André falou, this é uma palavra reservada que se refere literalmente a isso, então quando falamos [this é este objeto aqui, está instância de objeto de cliente .saldo que é a propriedade que queremos trabalhar, += que é um operador de incremento aqui, então ele vai incrementar, saldo o valor da propriedade saldo, com o que estamos recebendo aqui como parâmetro da função.