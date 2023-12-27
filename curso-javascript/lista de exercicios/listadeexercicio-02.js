const peso = 85;
const altura = 1.80;

const imc = peso / Math.pow(altura,2);

if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc.toFixed(1)} e você está abaixo do peso.`)
} else if(imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é de ${imc.toFixed(1)} e você está com o peso normal.`)
} else if(imc >= 25 && imc < 30) {
    console.log(`Seu IMC é de ${imc.toFixed(1)} e você está acima do peso.`)
} else if(imc >= 30 && imc < 40) {
    console.log(`Seu IMC é de ${imc.toFixed(1)} e você está obeso.`)
} else {
    console.log(`Seu IMC é de ${imc.toFixed(1)} e você está com obesidade grave.`)
}