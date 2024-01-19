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
}
const bot2:robot2 = {id: 2, name:"Sprout"};