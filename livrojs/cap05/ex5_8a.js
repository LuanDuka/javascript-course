const prompt = require("prompt-sync")();
const fruit = prompt("Fruit: ");
const number = prompt("Number: ");

let repeatFruit = "";

for (let i = 1; i <= number; i++) {
  if (i == 1) {
    repeatFruit += `${fruit}`;
  } else {
    repeatFruit += ` * ${fruit}`
  }
}
console.log(repeatFruit);