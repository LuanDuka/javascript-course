const prompt = require("prompt-sync")();
let chinch;
let years;
let prevision = "";
let numChinchillas = 0;
let numYears = 0;

console.log("Chinchilla's Breeding Program!");
console.log("----------------------------");

do {
  chinch = Number(prompt("Nº Chinchillas: "));

  if (chinch < 2 || isNaN(chinch)) {
    console.log("Minimum 02 chinchillas!");
  }
} while (chinch < 2 || isNaN(chinch))

do {
  years = Number(prompt("Nº Years: "));

  if (years <= 0 || isNaN(years)) {
    console.log("Enter a valid number!");
  }
} while (years <= 0 || isNaN(years))

for (let i = 1; i <= years; i++) {
  if (i == 1) {
    prevision = `1º Year: ${chinch} Chinchillas\n`;
    numYears++;
  } else {
    chinch = chinch * 3;
    numYears++;
    prevision = prevision + `${numYears}º Year: ${chinch} Chinchillas\n`
  }
}

console.log(prevision);
