const prompt = require("prompt-sync")()   // adiciona o pacote ao programa
const salario = Number(prompt("Salário R$: ")) // lê o salário
const tempoEmpresa = Number(prompt("Tempo de empresa:"))//tempo de empresa do funcionário
const qntQuadrienio = Math.floor(tempoEmpresa / 4);
const aumentoSalario = salario * (qntQuadrienio / 100);
const salarioFinal = salario + aumentoSalario;
console.log(`Funcionário trabalou ${qntQuadrienio} quadriênios`);
console.log(`Seu salário teve um aumento de $${aumentoSalario.toFixed(2)}, passando a $${salarioFinal.toFixed(2)}`);