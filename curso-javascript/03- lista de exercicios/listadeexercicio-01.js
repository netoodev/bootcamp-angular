const nota1 = 6;
const nota2 = 6;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5) {
    console.log(`A média do aluno foi ${media.toFixed(2)} e ele está reprovado.`)
} else if (media >= 5 && media < 7 ) {
    console.log(`A média do aluno foi ${media.toFixed(2)} e ele está em recuperação.`)
} else {
    console.log(`A média do aluno foi ${media.toFixed(2)} e ele está aprovado.`)
}
