class Cliente{ //comeca com letra maiuscula
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
    
}

const andre = new Cliente("Andre", "andre@email.com", "112233445566", 100);
andre.exibirSaldo()
console.log(andre)

//Então a sintaxe de classe ela é um pouco diferente do que fazemos normalmente no JavaScript, começando que os nomes das nossas classes, dos nossos construtores de classe como utilizamos com função, eles começam com letra maiúscula, ao contrário de todas as outras variáveis e nomes de funções que criamos com camelCase no JavaScript, ou seja, começando com minúscula e separando as letras com maiúscula, sempre damos o nome de uma classe, com letra maiúscula, isso é padrão da linguagem.

// E o construtor recebe por parâmetro o que precisamos passar para construir um cliente, e os nossos métodos, lembrando que o método é uma função que executa no contexto de um objeto, a diferença é que com classes não precisamos escrever a palavra-chave function, só declaramos a função aqui passando, abrindo e fechando chaves e passando o parênteses vazio ou com valores, e o JavaScript já interpreta que isso é um método, uma função que vai rodar no contexto dos objetos que criarmos, beleza André? Acho que está super bacana aqui o nosso exemplo.


