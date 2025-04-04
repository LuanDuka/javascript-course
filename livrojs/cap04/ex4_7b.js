const prompt = require("prompt-sync")();

const totalShopping = Number(prompt("Total shopping $:"));
const parcelMinValue = 20;
const parcelMaxQuantity = 6;

let parcelQuantity = 0;
let parcelCost = 0;

let parcel = Math.floor(totalShopping / parcelMinValue);//number of parcel without conditions
/*
if (totalShopping % parcelMinValue != 0) {
  parcelQuantity++;
}

if (parcelQuantity > parcelMaxQuantity) {
  parcelQuantity = 6;
}
*/
parcelQuantity = parcel == 0 ? 1 :
  parcelQuantity > parcelMaxQuantity ? parcelMaxQuantity : parcel;

parcelCost = totalShopping / parcelQuantity;

console.log(`Pacel Max Quantity: ${parcelQuantity}
Pacel Value: $${parcelCost.toFixed(2)}`);