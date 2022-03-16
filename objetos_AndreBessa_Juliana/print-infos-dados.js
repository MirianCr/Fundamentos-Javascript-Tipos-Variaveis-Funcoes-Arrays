//acessar um objeto com informações de um cliente e exibir no console

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com"

}
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`O email do cliente ${cliente.nome} é: ${cliente.email} `)
console.log(`O CPF do cliente ${cliente.nome} é:  ${cliente.cpf.substring(0,3)}(somente os 3 primeiros digitos).`)
console.log(`Nosso melhor cliente é o Sr. ${cliente.nome} , tem a idade de ${cliente.idade} anos, tem o numero do CPF:  ${cliente.cpf}, e o email: ${cliente.email}`)

//substring: então de 0 até o 3
//Isso, que começamos no índice zero, da nossa array de caracteres, que é uma string, lembrando que uma string podemos dizer que é um array de caracteres, então estamos começando no índice zero, que é o número 1 e está indo até o índice 3 e parando antes dele, ou seja, vai exibir o índice zero, o índice um e o índice dois, ou seja, os 3 primeiros números, os 3 primeiros algarismos, caracteres dessa string.