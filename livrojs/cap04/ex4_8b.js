const prompt = require("prompt-sync")();
const allowSpeed = Number(prompt("Allow speed:"));
const driverSpeed = Number(prompt("Driver speed:"));
const speed20 = allowSpeed * 1.2;

const situation = driverSpeed > allowSpeed ?
  driverSpeed > speed20 ?
    `Serious fine` : `Light fine` :
  `Without traffic fine`;
console.log(situation);
