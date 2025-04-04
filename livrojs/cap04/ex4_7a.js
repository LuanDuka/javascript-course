const prompt = require("prompt-sync")();

const familyNumber = Number(prompt("Family nº:"));
const catchedFish = Number(prompt("Fish nº:"));
const extraFish = catchedFish - familyNumber;
const entry = 2000;
const fishery = 1200;
let extraFishCost = 0;

if (catchedFish > familyNumber) {
  extraFishCost = extraFish * fishery;
}

const familyCost = (familyNumber * entry + extraFishCost) / 100;

console.log(`Your family have to pay: $${familyCost.toFixed(2)}
You take ${extraFish} more fish`);
