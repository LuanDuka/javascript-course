const prompt = require("prompt-sync")();
let n = 1;
let soma = 0;

while (n <= 10) {
  const x = Number(prompt("Digite um número:"))
  soma = soma + x;
  n = n + 1;
}

console.log(`Soma: ${soma}`);