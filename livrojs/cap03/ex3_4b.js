const prompt = require("prompt-sync")();   // adiciona o pacote ao programa
const pesoRacao = Number(prompt("Peso da ração:"));
const consumoGato = Number(prompt("Consumo do gato:"));
const duracaoRacao = Math.floor((pesoRacao * 1000) / consumoGato);
const sobraRacao = (pesoRacao * 1000) % consumoGato;
console.log(`A ração dura ${duracaoRacao} dias`);
console.log(`Sobra ${sobraRacao} gramas de ração`)