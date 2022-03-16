//cliente generico
//gerar uma função que permita a criação de novos clientes a partir de um modelo

function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
const andre = new Cliente("Andre", "12345678", "andre@email.com", 100)

console.log(andre)

//o new é uma palavra reservada como o André disse, existem algumas em todas as linguagens de programação, isso quando é uma palavra reservada, não podemos, por exemplo, criar uma variável chamada variável new porque new é uma palavra reservada da linguagem, o JavaScript ele vai ficar confuso.

//[05:26] Então usamos essa palavra new, a palavra-chave, para dizer que justamente estamos utilizando a partir da nossa função cliente, estamos criando um new, criando um novo cliente, chamamos isso de instância, então a nossa const andre é uma nova instância de cliente criado a partir da nossa função construtora.

//[05:50] E o André quando criou o nosso new Cliente() ele passou entre parâmetros os dados reais desse cliente, então new Cliente() abre e fecha parênteses e dentro dele os quatro parâmetros da nossa função cliente, ou seja, o nome que ele colocou uma string André, o cpf ele colocou uma string com o cpf fictício, 12543 o número que você quiser, uma outra com o e-mail dele e no final um número com um saldo, const andre = new Cliente(“André”, “1254359542”, “andre@email.com”, 100) agora se quisermos dar um console.log() para testar vemos se esse cliente realmente foi criado.