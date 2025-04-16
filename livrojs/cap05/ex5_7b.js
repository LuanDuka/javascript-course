const prompt = require("prompt-sync")();
const productName = prompt("Product name: ");
const labelQuantity = prompt("Nº of labels: ");

for (let i = 1; i <= labelQuantity / 2; i++) {
  //create a repeating loop until /2, because print two labels
  console.log(`${productName.padEnd(30)} ${productName.padEnd(30)}`);
}
if (labelQuantity % 2 == 1) {//if odd quantity, print one more
  console.log(productName);
}
