const precoEtiqueta = 100;
const formaDePagamento = 1;

/* 
1- Débito
2- Dinheiro ou PIX
3- Dividido 2x
4- Dividido em mais de 2x
*/

if (formaDePagamento === 1) {

    console.log(`Você escolheu pagar à vista com Débito e ganhou 10% de desconto.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: R$${(precoEtiqueta - (precoEtiqueta * 0.1)).toFixed(2)}`);

} else if (formaDePagamento === 2) {

    console.log(`Você escolheu pagar à vista com Dinheiro ou PIX e ganhou 15% de desconto.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: R$${(precoEtiqueta - (precoEtiqueta * 0.15)).toFixed(2)}`);
    
} else if (formaDePagamento === 3) {
    
    console.log(`Você escolheu dividir em 2x sem juros.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: 2X de R$${(precoEtiqueta / 2).toFixed(2)}`);
    
} else if (formaDePagamento === 4) {
    
    console.log(`Você escolheu dividir em  mais de 2x e pagará com juros.\nValor do produto: R$${precoEtiqueta.toFixed(2)}\nTotal a ser pago: R$${(precoEtiqueta + (precoEtiqueta * 0.1)).toFixed(2)}`);

} else {
    console.log('Forma de pagamento inválida.');
}