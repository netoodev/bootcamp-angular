"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = false;
let nome = "Neto";
let idade = 19;
let altura = 1.80;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = "Qualquer coisa";
let produto = {
    id: 1,
    nome: "Kit Copo",
    preco: 54.90,
    descricao: "Pra a amizade continuar"
};
let meuProduto = {
    nome: "Forninho Elétrico",
    preco: 250.00,
    unidades: 8
};
let dados = ["Neto", "Helô", "Manoel"];
let dados2 = ["Neto", "Helô", "Manoel"];
let infos = ["Neto", 19];
let boleto = ["Água conta", 199.90, 242356744623];
let aniversario = new Date("2004-11-17 10:43");
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
function addToHello(name) {
    return `Hello ${name}`;
}
let hello = addToHello("Neto");
function callToPhone(phone) {
    return phone;
}
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Neto";
    });
}
const bot = { id: 1, name: "Wall-E" };
class Robô {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `${this.name} says hello!`;
    }
}
const walle = new Robô(1, "Wall-E");
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack(strenghtSpent, skill) {
        console.log(`Attack with ${strenghtSpent} points of strenght using ${this.skill[skill]}`);
        this.strength -= strenghtSpent;
        console.log(`Your current strength: ${this.strength}`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ozborn", 85, ["Super-Smash", "Club Attack", "Deafening Shout"]);
const p2 = new Magician("Ganfold", 56, ["Poisoning Spell", "Master Attack", "Magic Field"], 100);
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Neto, Percy"], ["Annabeth", "Grover"]);
console.log(numArray);
console.log(stgArray);
