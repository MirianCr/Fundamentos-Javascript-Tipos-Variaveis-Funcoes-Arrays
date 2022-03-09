const nome = "Ju"

const idade = 2022 - 1987
const cidadeDeNascimento = "Vazante"
// const apresentacao = "meu nome é " + nome + ", nasci cidade de " + cidadeDeNascimento + ", minha idade é " + idade;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`

console.log(apresentacao)

//Já vimos concatenação de strings, normal. Então, o que é a template string?

//[02:25] Ju: Ela surgiu para facilitar a questão de concatenação, porque, dependendo da quantidade de variáveis que você quer juntar, tudo começa a ficar muito embolado.