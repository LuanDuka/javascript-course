const prompt = require("prompt-sync")();
const value = prompt("Total value to pay: ");
const num = prompt("Numbers of installments: ");
const valueNum = Math.floor(value / num);
const lastNum = valueNum + (value % num);

for (let i = 1; i < num; i++) {
  console.log(`${i}ª installment: $${valueNum.toFixed(2)}`);
}
console.log(`${num}ª installment: $${lastNum.toFixed(2)}`);
