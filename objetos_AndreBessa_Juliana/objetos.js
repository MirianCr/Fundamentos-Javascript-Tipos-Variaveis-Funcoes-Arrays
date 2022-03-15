const listaCPFs = ["02556652555" , "12345678956", "12345678965"]

//const cliente = ["nome", "André", "idade", 36]

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com"

}
console.log(listaCPFs)

// todo objeto no JavaScript ele é formado com a chave valor, diferente de um array, que o array você tem lá os elementos do array e você consegue acessar pelo índice.

//no JavaScript, ele permite você criar um objeto dessa forma aqui, existe outras formas que vamos ver no decorrer do curso, então é isso, um objeto em JavaScript é formado pela cadeia, chave, valor e fica muito mais organizado.

//Agora eu consigo do cliente ter as informações, saber que o nome é André, idade 36, porque da maneira que estava antes aqui, fica meio desorganizado que nem a Ju falou, então para podermos relacionar aquelas informações, o que é a chave, o que é o valor daquela chave, fica um pouco mais complexo de trabalharmos com isso ai.

//mas vimos que arrays funcionam para quando temos que organizar por exemplo informações que são do mesmo tipo, então eu tenho uma lista de CPFs, eu tenho uma lista de nomes, eu tenho uma lista de valores, por exemplo.

//Agora o objeto, ele funciona quando precisamos fazer uma abstração de algo do mundo real por exemplo, então eu tenho o cliente, o cliente tem nome, o cliente tem idade, o cliente tem endereço, o cliente tem várias coisas, e precisamos organizar essa informação para que ela seja acessada de uma forma coesa, e também o cliente pode ser o André, o cliente pode ser a Juliana, o cliente pode ser você, então todos os clientes eles tem nome, eles tem idades, de acordo com o que o seu produto precisa, mas tudo pode ser representado por um único objeto cliente.

//O objeto ele é estrutura de dados mais importantes do JavaScript, também vamos ver mais sobre isso mais um pouco para frente do curso, e ele tem essa cara de uma estrutura de chaves e valores, os valores podem ser tanto primitivos, como strings, números, booleanos, ou podem ser alguns outros tipos de estrutura que também vamos ver ao longo do curso.