const prompt = require("prompt-sync")();

let number;
let divSum = 0;
let divisors = "";
let check = "";
let result = "";

do {
  number = Number(prompt("Number: "));
  if (number == 0 || isNaN(number)) {
    console.log("Enter a valid number!");
  }
} while (number == 0 || isNaN(number));

for (let i = 1; i <= number / 2; i++) {
  if (number % i == 0) {
    divSum = divSum + i;
    divisors = divisors + ", " + i;
  }
}
if (divSum !== number) {
  check = "Is not";
} else {
  check = "Is";
}

result = `Divisors by ${number}: ${divisors} (Sum: ${divSum})\n${number} ${check} a Perfect Number`
console.log(result);