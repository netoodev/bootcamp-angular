class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const neto = new Pessoa();
neto.nome = 'José S N Neto';
neto.idade = 19;

const joao = new Pessoa();
joao.nome = 'João C S Filho';
joao.idade = 18

neto.descrever();
joao.descrever();

