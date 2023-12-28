class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return this.peso / Math.pow(this.altura, 2);
    }

    apresentarImc () {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return `Olá, me chamo ${this.nome}, meu IMC é de ${imc.toFixed(1)} e indica que estou abaixo do peso.`;
        } else if(imc >= 18.5 && imc < 25) {
            return `Olá, me chamo ${this.nome}, meu IMC é de ${imc.toFixed(1)} e indica que estou com o peso normal.`;
        } else if(imc >= 25 && imc < 30) {
            return `Olá, me chamo ${this.nome}, meu IMC é de ${imc.toFixed(1)} e indica que estou acima do peso.`;
        } else if(imc >= 30 && imc < 40) {
            return `Olá, me chamo ${this.nome}, meu IMC é de ${imc.toFixed(1)} e indica que estou obeso.`;
        } else {
            return `Olá, me chamo ${this.nome}, meu IMC é de ${imc.toFixed(1)} e indica que estou em obesidade grave.`;
        }
    }

}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose.apresentarImc());