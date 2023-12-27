// IMPRIMIR PARAMETRO

// function dizerNome(nome) {
//     console.log(`Meu nome é ${nome}`);
// }

// dizerNome('Neto');

// RETORNAR VALOR

// function quadrado(valor) {
//     return valor * valor;
// }

// console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrescimo
}

console.log(incrementarJuros(100, 25));