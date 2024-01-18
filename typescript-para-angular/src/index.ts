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