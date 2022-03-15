const salaJs = [7, 8 ,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,atual)=>
    atual + acumulador,0)
    return somaDasNotas/notasDaSala.length
}
console.log(`A media da sala de Js: ${mediaSala(salaJs)}`)
console.log(`A media da sala de Java: ${mediaSala(salaJava)}`)
console.log(`A media da sala de Python: ${mediaSala(salaPython)}`)

//============================================================================
//media usada de uma maneira mais curta:
const notas = [10, 6.5, 8, 7];
const media = notas.reduce((acum, atual) => atual + acum, 0 ) /notas.length;
console.log(media)
//============================================================================
//um método chamado reduce, de reduzir. Ou seja, vamos trazer todo o array para um único valor. Ele vai retornar para nós esse valor. Tenho que colocar esse valor em algum lugar. Então vou criar uma const, vou chamar ela de somaDasNotas, e agora vou utilizar esse novo método reduce.