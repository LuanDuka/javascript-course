const prompt = require("prompt-sync")();
const depositCoin = Number(prompt("Value $:"));
let change = 0;
let time;

if (depositCoin < 1) {
  change = depositCoin;
  console.log("Deposit a valid amount: $1, $1,75,$3");
  return;
}

if (depositCoin >= 1 && depositCoin < 1.75) {
  change = depositCoin % 1;
  time = 30;
} else if (depositCoin >= 1.75 && depositCoin < 3) {
  change = depositCoin % 1.75;
  time = 60;
} else if (depositCoin >= 3) {
  change = depositCoin - 3;
  time = 120;
}

console.log(`Time: ${time}
Change $: ${change}`);