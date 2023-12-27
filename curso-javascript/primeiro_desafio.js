
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(`Você rodou ${distanciaEmKm}Km e consumiu ${litrosConsumidos}L isso equivale a R$${valorGasto} de gasolina.`);
