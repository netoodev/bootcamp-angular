
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 138;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(`Você rodou ${distanciaEmKm}Km e consumiu ${litrosConsumidos}L isso equivale a R$${valorGasto.toFixed(2)} de gasolina.`);
