
const precoGasolina = 5.79;
const precoEtanol = 4.53;
const kmPorLitros = 12;
const distanciaEmKm = 138;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {

    const valorGasto = litrosConsumidos * precoGasolina;

    console.log(`Você rodou ${distanciaEmKm}Km e consumiu ${litrosConsumidos}L de ${tipoCombustivel}. Isso equivale a R$${valorGasto.toFixed(2)} de ${tipoCombustivel}.`);

} else if (tipoCombustivel === 'Etanol') {

    let valorGasto = litrosConsumidos * precoEtanol;

    console.log(`Você rodou ${distanciaEmKm}Km e consumiu ${litrosConsumidos}L de ${tipoCombustivel}. Isso equivale a R$${valorGasto.toFixed(2)} de ${tipoCombustivel}.`);

} else {
    console.log("Por favor, revise o tipo de combustível.");
    return 1;
}
