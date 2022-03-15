const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com",
    fones:["559166552", "55642222555"]
  
   }

   cliente.dependentes = {
       nome: "Sara",
       parentesco:"filha",
       dataNasc: "20/03/2018"
   }
   console.log(cliente)

   cliente.dependentes.nome="Sara Silva"
   console.log(cliente)