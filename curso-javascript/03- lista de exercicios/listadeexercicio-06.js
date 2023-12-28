/* 
1- Débito
2- Dinheiro ou PIX
3- Dividido 2x
4- Dividido em mais de 2x
*/


function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}


const precoEtiqueta = 100;
const formaDePagamento = 4;


if (formaDePagamento === 1) {

    console.log(`Você escolheu pagar à vista com Débito e ganhou 10% de desconto.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: R$${aplicarDesconto(precoEtiqueta, 10).toFixed(2)}`);

} else if (formaDePagamento === 2) {

    console.log(`Você escolheu pagar à vista com Dinheiro ou PIX e ganhou 15% de desconto.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: R$${aplicarDesconto(precoEtiqueta, 15).toFixed(2)}`);
    
} else if (formaDePagamento === 3) {
    
    console.log(`Você escolheu dividir em 2x sem juros.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: 2X de R$${(precoEtiqueta / 2).toFixed(2)}`);
    
} else if (formaDePagamento === 4) {
    
    console.log(`Você escolheu dividir em  mais de 2x e pagará com juros.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: R$${aplicarJuros(precoEtiqueta, 10).toFixed(2)}`);

} else {
    console.log('Forma de pagamento inválida.');
}