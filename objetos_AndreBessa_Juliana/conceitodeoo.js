// Então a principal ideia do orientação a objeto, ele é um paradigma de programação, ele é um modelo, então é uma maneira de você programar, existem diversas maneiras, programação funcional, enfim que você pode utilizar também em diversas linguagens, então esse é o modelo, é um estilo que você tem para programar, não é uma regra absoluta, você pode usar outros modelos também, que você se achar mais confortável. 

//a principal ideia da orientação a objeto é trazer para o código conceitos e ideias que vemos no dia a dia, no mundo real, que nem fizemos nos exemplos das aulas anteriores, modelamos, pegamos informações de uma pessoa, a pessoa existe no real, então quantas informações da pessoa eu preciso, nome, CPF, e-mail, então isso pegamos essas informações e transforma em código, então esse conceito que são objetos, estão, que existem no dia a dia, no mundo real, estamos transportando para computação, para o código.
// Então a ideia é pegar as informações do mundo real e jogar para dentro computador, dentro da codificação, dentro da linguagem

//==============================================================
//classes
// outro conceito importante em orientação a objeto é o conceito de classe, ***então uma classe***, os objetos que criamos até agora, criamos objetos literais, ou usando construtores naquela maneira de função no JavaScript, mas uma maneira que temos também que é meio que padrão a orientação a objeto, é você utilizar classes, que são modelos para criação de um objeto.

//Então na classe vamos definir as propriedades que precisamos, que identificamos do mundo real, que precisamos trazer para o mundo computacional por assim dizer, e para modelarmos na codificação depois, para codificar depois. Então uma classe ela vai definir para nós as propriedades, as informações que precisamos, e os comportamentos de um determinado objeto, que são os métodos que chamamos.
//exemplo de classe:
class Pessoa{
    constructor(nome,sobrenome,cpf,email){
        this.nome = nome
        this.sobrenome =sobrenome
        thid.cpf = cpf
        this.email = email
    }

    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}
//===============================================================
//Atributos e metodos
//A classe define os atributos (caracteristicas) e os metodos(comportamentos) de um objeto

//==============================================================
//HERANÇA
//É um mecanismo da Orientação a Objetos que permite que uma classe herde caracteristicas de uma outra classe
//exemplo de herança js

class Programador extends Pessoa{//extend é herança, a classe programador herda as caracteristicas pessoa
    constructor(nomne, sobrenome, cpf, email, linguagem){
        super(nome,sobrenome,cpf,email) //super faz referencia ao call, que chama da classe pessoa o construtor
        this.linguagem = linguagem
    }
}
//==============================================================
//OBJETO
//Objeto é a instancia de uma classe
const novoDev = new Programador("Andre", "Silva","andre@email.com","Javascript")

//A orientacao a objetos é um modelo(estilo/paradigma) de se programar
//Na orientação a objetos a ideia é transformar coisas do mundo para o codigo
//uma classe tem atributos e metodos
//um objeto é uma instancia de classe em memoria