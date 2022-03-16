//Cliente poupança
// aproveitar o cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupança

function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf,email, saldo)
    this.saldoPoup=saldoPoup
}

const ju = new ClientePoupanca("Ju", "5556666777888","ju@email.com", 100,200)

console.log(ju)

//funcao pra depositar na poupança
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup +=valor
}
ju.depositarPoup(30)
console.log(ju.saldoPoup)

// então esse call “c a l l”, é literalmente de chamar, estamos indo no construtor cliente e chamando as propriedades de dentro dele para dentro de ClientePoupanca e agora precisamos passar nos parâmetros de call quais são as propriedades que queremos chamar, porque não precisamos necessariamente chamar todas, mas nesse caso vamos querer porque o cliente é o cliente base, então precisamos de todas as informações do cliente base e aí sim adicionar o que é de ClientePoupanca a mais.

//pra saber mais:propriedades enumeraveis
//Além do nome e do valor, cada propriedade tem também três atributos:

//Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
//Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;
//Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
//Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento têm estes três atributos como true. Já a maior parte das propriedades herdadas do protótipo têm estes atributos como false e não podem ser enumeradas, adicionadas ou alteradas.

//O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf e email) e que não são herdadas do protótipo.

//Podemos verificar os atributos de cada propriedade utilizando alguns métodos nativos do JavaScript:
const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
   ]}

   //Usando o método Object.getOwnPropertyDescriptor() para descrever os atributos da propriedade editora, teremos:

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))

//O resultado será um objeto com os quatro atributos da propriedade editora: o valor (um string ”Casa do Código”) e os três atributos que descrevemos anteriormente:

{
 value: 'Casa do Código',
 writable: true,
 enumerable: true,
 configurable: true
}
//A propriedade editora foi criada por nós e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável - ou seja, vai ser percorrida em um loop for...in e indexada a um array com Object.keys() ou Object.entries().

//Veja que métodos que começam com getOwnProperty… funcionam apenas em propriedades “próprias” do objeto.

//Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

//Protótipos e herança são temas vastos em JavaScript. A partir desta introdução, você pode praticar e se aprofundar no tema.