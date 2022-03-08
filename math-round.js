// já existe um método da classe Math que arredonda os números, a Math.round().
//Precisei entender as diferentes formas de arredondar e formatar números no JavaScript, prestei serviço a uma empresa que gostaria de saber quanto está pagando por hora de salário. 

//O valor da resposta foi 17, já resolvemos o problema das várias casas decimais , mas ainda não está muito preciso.

//Isso ocorre porque o método Math.round() retorna o valor de um número arredondado para o inteiro mais próximo.

/*function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes);     
  
    return Math.round(salarioHora);    
   
  
  }
  //ganhoPorHora(3000, 176);
  console.log (ganhoPorHora(3000,176))*/

//-------------------------------------------------------------

  //Como estamos trabalhando com dinheiro é importante saber também os centavos, com o auxílio do método .toFixed() eu consigo controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.
  //Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamostoFixed(2), um ponto importante de se observar é que o método .toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123, o valor fica 11.12, já se temos 20.555, o valor fica 20.56. Outro ponto importante de se observar é que seu retorno será uma string representando o número.
/*
  function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);
  
    return total;
  
  };
  console.log (ganhoPorHora(3000,176))*/

  //-------------------------------------------------------------
  /*Formatando o resultado para Real
No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

decimal para representar números simples.

currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

percent para formato percentual.

currency: A moeda para usar na formatação monetária */

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
  }
  console.log(ganhoPorHora(3000,176)); //R$ 17,05

  /*Para saber mais
No JavaScript temos outros métodos que podem ser utilizadas para o arredondamento como:

Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11*/

//ordenaçãodenumeros
var lista = [10,1, 5, 9, 8, 12, 15];
console.log(lista.sort()) // 1, 10, 12, 15, 5,  8,  9//

//O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

//Se for 0 indica que são iguais
//Se for -1 indica que o primeiro valor é menor
//Se for 1, o segundo é menor.

function comparaNumeros(a,b) { 
  if (a == b) return 0;
   if (a < b) return -1; 
   if (a > b) return 1; }
   console.log(lista.sort(comparaNumeros)); // 1,  5,  8, 9,   10, 12, 15 //

   //Simplicando a implementação
   /*É possível trocar a função nomeada pra ser anônima. E trocar os três IFs por uma conta simples: a - b.

Repare que o resultado dessa conta é sempre 0 se forem iguais, -1 se a é menor e 1 se b é menor. Exatamente o que precisamos.

Juntanto tudo isso com a sintaxe de arrow functions do ES6 pra escrever menos, podemos simplesmente fazer:*/

   console.log(lista.sort((a, b) => a - b)); // 1,  5,  8, 9, 10, 12, 15