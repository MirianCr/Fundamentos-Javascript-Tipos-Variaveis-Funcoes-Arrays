//touperCase deixa todas maiusculas

let nomes = ['ana Julia', 'Caio vinicius', 'Bia silva'];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)


//=================================================================================

//deixar alura tudo maiusculo
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(`nomes maiusculas Alura :${nomeMaiusculas}`) //ALURA


//===================================================================================
//escrever fundamentos de js//concatenando
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(`a concatenacao é ${nomeCompleto}`)  //Fundamentos de JS Alura






//Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.








//do forum
const listaDeNomes = ["jose Ferreira", "Luan silva", "BIA Costa"];

// 1) transformar as strings dos elementos do array em minusculo com map() e toLowerCase()
const nomesMinusculos = listaDeNomes.map((nome) => nome.toLowerCase());

// 2) transformar a primeira letra do primeiro nome em maiuscula com map() e toUpperCase()
const primeiroNomePadronizado = nomesMinusculos.map((nome) => {
      const primeiraLetra = nome[0].toUpperCase();
      return nome.replace(nome[0], primeiraLetra);
});

// 3) tranformar a primeira letra do sobrenome em maiuscula
// pra isso, precisei criar um método que concatena meu nome com o sobrenome, e onde eu passo o index da string e passo o caracter que quero substituir naquele exato lugar .

String.prototype.replaceAt = function (index, replacement) {
      return this.substring(0, index) + replacement + this.substring(index + 1);
};

const nomesPadronizados = primeiroNomePadronizado.map((nome) => {
      const indexNome = nome.indexOf(" ") + 1;
      const letraMaiuscula = nome.substring(indexNome, indexNome + 1);
      return nome.replaceAt(indexNome, letraMaiuscula.toUpperCase());
});

// 4) pronto, só verificar o resultado agora 

console.log('Nomes minúsculos: ', nomesMinusculos);
console.log('Primeira letra maiúscula: ', primeiroNomePadronizado);
console.log('Nomes padronizados: ', nomesPadronizados);