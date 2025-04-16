const prompt = require("prompt-sync")();
console.log("Year of World Cup Program. Tap 0 to quit");
console.log("----------------------------------------");

do {
  const num = Number(prompt("Number: "));
  const firstCup = 1930;
  const othersCup = 4;
  const withoutCup = [1942, 1946];
  let haveCup = 0;

  if (num == 0 || isNaN(num)) {
    const quit = prompt("Exit? (s/n): ").toLowerCase();
    if (quit === "s" || quit === "sim" || quit === "y" || quit === "yes") {
      break;
    } else {
      continue;
    }
  } else if (num === 1942 || num === 1946) {
    console.log(`The year of ${num} don't were World Cup (Seconde World War)`);
  } else if (num >= 1930 && num % 4 == 2) {
    console.log(`Yes, ${num} were World Cup!`)
  } else if (num >= 2026) {
    console.log(`Hold on, we don't get ${num} yet`)
  } else {
    console.log(`No...${num} is not year of World Cup.`)
  }

} while (true)
console.log("Bye, bye...")