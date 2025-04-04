const prompt = require("prompt-sync")()      // adiciona pacote para entrada de dados
const hundred = Number(prompt("Tap a hundred:"));

if (hundred < 100 || hundred > 1000) {
  console.log("Wrong number, must to be between 100 and 1000");
  return;
}

const hundreds = Math.floor(hundred / 100);
const over = hundred % 100;
const tens = Math.floor(over / 10);
const units = over % 10;

console.log(`Your numbers inverted: ${units} ${tens} ${hundreds}`);