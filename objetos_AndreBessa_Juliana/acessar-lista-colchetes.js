//Acessando dados com colchetes

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com"
}

const chaves=["nome", "idade", "cpf","email"]

console.log(cliente[chaves[0]]) //Retorna apenas o nome
console.log(cliente["nome"])// tbm Retorna apenas o nome

console.log(cliente[chaves[1]]) //Retorna apenas a idade
console.log(cliente["idade"])// tbm Retorna apenas a idade

console.log(cliente[chaves]) //undefined
//===================================================================================
//usando forEach

chaves.forEach(info => console.log (cliente[info]))//exibiu todas as informacoes do cliente

//=================================================================================

// lembrando que forEach() é um método de array do JavaScript 
//Porém quando já trabalhamos com nome de chave fixo, costumamos usar mais a notação de ponto e a notação quando precisamos passar aqui a chave como variável por exemplo como no caso do forEach() que cada vez que passar no loop vai ser um índice diferente, vai ser um valor diferente
