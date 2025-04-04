const prompt = require("prompt-sync")();
const sideA = Number(prompt("Side A:"));
const sideB = Number(prompt("Side B:"));
const sideC = Number(prompt("Side C:"));
let triangle = "";
let type = "";

if (sideA > (sideB + sideC) || sideB > (sideA + sideC) || sideC > (sideA + sideB)) {
  triangle = "Cannot form a triangle";
  console.log(`${triangle}`);
  return;
} else {
  triangle = "Sides can form a triangle";
}

if (sideA == sideB && sideB == sideC) {
  type = "Equilateral";
} else if (sideA == sideB || sideA == sideC || sideB == sideC) {
  type = "Isosceles"
} else if (sideA != sideB && sideA != sideC && sideB != sideC) {
  type = "Scalene";
}

console.log(`${triangle}
Type: ${type}`);