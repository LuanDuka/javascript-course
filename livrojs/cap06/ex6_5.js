const prompt = require("prompt-sync")();

const cars = [];
cars.push({
  model: "Sandero",
  price: 46500
})
cars.push({
  model: "Palio",
  price: 37800
})

const model = "Fiesta";
const price = 46800;
cars.push({ model, price });

for (const car of cars) {
  console.log(`${car.model} $:${car.price}`)
}
