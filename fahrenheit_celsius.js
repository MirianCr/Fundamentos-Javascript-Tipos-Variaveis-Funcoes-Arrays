//Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.
//Exemplo: converter temperatura de Fahrenheit para Celsius.
//================================================================================
var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
 
var celsius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 
 
//==================================================================================

// ES6
//forma mais moderna com arrowfunction:
// fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );
 
console.log(celsius) //  [ -18, 0, 7, 10, 24, 27, 37, 49 ]

//==========================================================================

//para dobrar valores:
const numbers = [1,4,5,9,14,25];
const dobrarNumeros = numbers.map(num => num * 2);
console.log(dobrarNumeros)