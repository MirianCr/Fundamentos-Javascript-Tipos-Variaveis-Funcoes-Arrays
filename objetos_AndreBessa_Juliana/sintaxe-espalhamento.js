//Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista unica, para analise de outros departamentos do banco 
const clientes = [
    {
    nome:"Andre",
    idade:36,
    cpf:"12345678955",
    email:"andre@gmail.com",
    fones:["559166552", "55642222555"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco:"filha",
        dataNasc: "20/03/2018"
    },
        {
        nome: "Samia Maria",
        parentesco:"filha",
        dataNasc: "04/01/2014"
    }],
},
    {
        nome: "Juliana",
        cpf: "5675689582112",
        dependentes: [{
            nome:"Sophia",
            parentesco:"filha",
            dataNasc: "30/08/2020"
        }],   
    }
    ]

    const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]//...é a sintaxe de espalhamento

    console.log(listaDependentes)
    console.table(listaDependentes) //forma de tabela

    //spread operator, ou sintaxe de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.  
    
    //Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

    // Se voltarmos aqui na linha 27 onde o André criou nossa const listaDependentes, ele criou, abriu um array, e dentro desse array ele espalhou, é literalmente isso que esse operador faz, primeiro ele espalhou dentro do array o conteúdo de clientes no índice zero ponto dependentes, ou seja, o primeiro índice do nosso array, a primeira posição da nossaarray clientes, que é o objeto André, acessou a chave dependentes dentro do objeto André, ela é um array, pegou todos os itens desse array e espalhou dentro aqui do array que ele criou, do array listaDependentes.

//[05:15] E em seguida fez a mesma coisa para o índice um da nossa array clientes que é nosso objeto Juliana, acessou clientes no índice um, ponto dependentes, então pegou esse array aqui que é o array que só tem um índice e espalhou o conteúdo dele dentro do nosso array listaDependentes, ou seja, ele tirou, o que esse operador fez foi, ele foi retirando cada um, os elementos dentro de seus arrays, e colocando eles literalmente espalhados dentro de um único array.

//[05:54] Então agora temos uma lista com todos os dependentes sem mais nenhuma informação, e eles não estão mais separados, por exemplo, Sara e Samia, não estão mais dentro do seu array e Sophia dentro do seu array, estão separados, eles são todos parte, eles estão, todas as informações os índices estão espalhados dentro do array principal que é o nosso array listaDependentes que foi que criamos para colocar tudo isso aqui dentro.

//[06:21] Nós inclusive temos um outro tipo de console que é o console.table() que vai exibir essas informações de um jeito mais interessante aqui para nós, não é André?