//cliente poupança
//aproveitar o cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupança

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

class ClientePoupanca extends Cliente{//extends ele herdar
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}
const andre = new ClientePoupanca("Andre", "andre@email.com",
'2121223333333', 100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)

// Então eu defini aqui class palavra reservada class, ClientePoupanca, que nem a Ju falou, a classe precisa ter um nome com letra maiúscula no início dela, então ela vai extends, ela vai estender, ela vai herdar de Cliente, class ClientePoupanca extends Cliente{} então defini que a classe ClientePoupanca ela herda de cliente, então agora eu vou fazer aquela questão do construtor.

// [01:51] Então no construtor da classe ClientePoupanca além das informações do cliente, eu tenho que colocar as informações que são específicas da poupança, então dentro das chaves, constructor() palavra reservada, eu vou passar aqui por parâmetro, nome, email, cpf, saldo, saldoPoupanca que é a informação específica de uma classe, de um objeto que é do tipo cliente poupança, então saldoPoupanca.

// [02:38] E como eu estou herdando da classe Cliente, eu vou usar o super(), então eu estou indo lá no construtor da classe Cliente, puxando para a classe ClientePoupanca, e passando para o super() as informações que são para construir o cliente e depois adicionar a informação da poupança, então constructor, super(nome, email, cpf, saldo) e adiciono agora o this para essa classe ClientePoupanca, cliente poupança, o this.saldoPoupanca = que vai receber do construtor o saldoPoupanca, certo Ju?

// [03:38] Juliana: Certo. E agora para o nosso cliente poupança conseguir fazer depósitos na conta poupança, ele também tem que ter um comportamento, tem que ter um método para isso, porque o saldo da poupança é diferente do saldo da conta normal.

// [03:57] André: Exatamente, então vou definir aqui dentro da classe ClientePoupanca esse comportamento, esse método, então depositar, está vendo que está vindo o depositar, mas é o depositar da classe Cliente, então depositar comportamento depositar na poupança, que é um comportamento que só tem na classe ClientePoupanca, então depositarPoupanca(valor), que vai receber o valor por parâmetro, e vou fazer o seguinte, this.saldoPoupanca desse ClientePoupanca na propriedade saldoPoupanca vai receber += valor, certo Ju?