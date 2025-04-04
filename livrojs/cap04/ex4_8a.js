const prompt = require("prompt-sync")();
const number = Number(prompt("Tap a number:"));
const divided = number / 2;

const odd = Number.isInteger(divided) ? `${number} is even` : `${number} is odd`;
console.log(odd);