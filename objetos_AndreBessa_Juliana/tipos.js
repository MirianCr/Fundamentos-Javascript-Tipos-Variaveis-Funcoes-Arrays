const cliente = {
      nome:"Andre",
      idade:36,
      cpf:"12345678955",
      email:"andre@gmail.com",
      fones:["559166552", "55642222555"]
    
     }
    
     cliente.fones.forEach(fone =>console.log(fone))
     console.log(cliente);

// lembrando de novo que um objeto é formado ali pelo aquele par chave valor, e um objeto ele pode ser composto por um array, por outros tipos de number, string, booleano, e ser formado por outros objetos também

// Então uma vez que só queremos imprimir as informações na tela e nada mais, podemos usar o método forEach() porque ele não retorna nada, não retorna nenhum dado, ele só faz o que pedimos dentro do loop.