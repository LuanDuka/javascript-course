const prompt = require("prompt-sync")();

let num;

do {
  num = Number(prompt("Number: "));
  if (num == 0 || isNaN(num)) {
    console.log("Enter a valid number!");
  }
} while (num == 0 || isNaN(num));

let even = `Even numbers between 1 and ${num}: `;
for (let i = 2; i <= num; i += 2) {
  even += i + ", ";
}

// Remove the trailing comma and space
even = even.slice(0, -2);
console.log(even);