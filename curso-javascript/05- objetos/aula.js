const pessoa = {
    nome: 'José S N Neto',
    idade: 19,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};


console.log(pessoa['nome']);