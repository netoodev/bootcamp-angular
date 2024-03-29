//Tipos Primitivos:

let ligado:boolean = false;
let nome:string = "Neto";
let idade:number = 19;
let altura:number = 1.80;

//Tipos Especiais:

//null e undefined:

let nulo:null = null;
let indefinido:undefined = undefined;

//Tipos Abrangentes:

//any e void:

let retorno:void;
let retornoView:any = "Qualquer coisa";

//Objeto - Sem Previsibilidade:

let produto:object = {
    id: 1,
    nome: "Kit Copo",
    preco: 54.90,
    descricao: "Pra a amizade continuar"
};

//Objeto Tipado - Com Previsibilidade:

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
}

let meuProduto:ProdutoLoja = {
    nome: "Forninho Elétrico",
    preco: 250.00,
    unidades: 8
};

// Arrays:

let dados:string[] = ["Neto", "Helô", "Manoel"];
let dados2:Array<string> = ["Neto", "Helô", "Manoel"];

let infos:(string | number)[] = ["Neto", 19];

//Tuplas

let boleto:[string, number, number] = ["Água conta", 199.90, 242356744623]

//Datas

let aniversario:Date = new Date("2004-11-17 10:43")
// console.log(aniversario.toString());

//Funcões

function addNumber(x:number, y:number):number {
    return x + y;
}

let soma:number = addNumber(4, 7);
// console.log(soma);

function addToHello(name:string):string {
    return `Hello ${name}`;
}

let hello:string = addToHello("Neto");
// console.log(hello);

//Funções Multi Tipos

function callToPhone(phone:string | number){
    return phone;
}

//Funções Async

async function getDatabase(id:number):Promise<string> {
    return "Neto";
}

//Interfaces (type x interface)

type robot = { // Mais utilizado para tipar variáveis
    readonly id:number; // readonly faz com que a propriedade só seja lida mas não modificada
    name:string;
};

const bot:robot = {id: 1, name:"Wall-E"};

interface robot2 { // Mais utilizado para classes
    readonly id:number;
    name:string;
    sayHello():string;
}

class Robô implements robot2 {
    id: number;
    name: string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `${this.name} says hello!`;
    }
}

const walle = new Robô(1, "Wall-E");

// console.log(walle.sayHello());


//Classes

/* 
    DATA MODIFIERS:
    -public
    -private
    -protected
*/

class Character {
    protected readonly name:string;
    strength:number;
    skill:string[];

    constructor(name:string, strength:number, skill:string[]){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(strenghtSpent:number, skill:number): void {
        console.log(`Attack with ${strenghtSpent} points of strenght using ${this.skill[skill]}`);
        this.strength -= strenghtSpent;

        console.log(`Your current strength: ${this.strength}`);
    }
}

//Charactere: superclass
//Magician: subclasse

class Magician extends Character {
    magicPoints:number;

    constructor(name:string, strength:number, skill:string[], magicPoints:number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ozborn", 85, ["Super-Smash", "Club Attack", "Deafening Shout"]);

const p2 = new Magician("Ganfold", 56, ["Poisoning Spell", "Master Attack", "Magic Field"], 100);


//Generics

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Neto, Percy"], ["Annabeth", "Grover"]);

// console.log(numArray);
// console.log(stgArray);


//Ts Node Dev

let dado:string = "Neto";
// console.log(dado);


//Decorators

// function exibirNome(target:any) {
//     console.log(target);
// }

// @exibirNome
// class Funcionario {}

function apiVersion(version:string){
    return (target:any) => {
        Object.assign(target.prototype, {__version: version})
    }
}

// @apiVersion("1.10")
// class Api {}

// const api = new Api();

//Attribute Decorator

function minLength(length:number) {
    return (target:any, key:string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value:string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length} caracteres.`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}

class Api {
    @minLength(3)
    name:string;

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("produtos");
console.log(api.name);