const numero = 1;
const numeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log(`O número ${numero} é nulo!`);
} else if (numeroPar) {
    console.log(`O número ${numero} é par!`);
} else {
    console.log(`O número ${numero} é Ímpar!`);
}

