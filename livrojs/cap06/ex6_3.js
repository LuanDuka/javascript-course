const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const cars = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const model = frm.inModel.value;
  const price = Number(frm.inPrice.value);
  cars.push({ model, price });
  frm.inModel.value = "";
  frm.inPrice.value = "";
  inModel.focus();

  frm.btList.dispatchEvent(new Event("click"))
})

frm.btList.addEventListener("click", () => {
  if (cars.length == 0) {
    alert("There're no cars in the list");
    return;

  }
  const list = cars.reduce((acumulator, car) =>
    acumulator + car.model + " $ " + car.price.toFixed(2) + "\n", "")
  resp.innerText = `List of Registered Cars\n${"-".repeat(40)}\n${list}`
})

frm.btFilter.addEventListener("click", () => {
  const max = Number(prompt(
    "What is the maximum amount the customer is willing to pay?"));
  if (max == 0 || isNaN(max)) {
    return;
  }

  const carsFilter = cars.filter(car => car.price <= max);
  if (carsFilter.length == 0) {
    alert("There are no cars with a price lower or equal to the one requested");
    return;

  }
  let list = "";
  for (const car of carsFilter) {
    list += `${car.model} - $: ${car.price.toFixed(2)}\n`
  }
  resp.innerText = `Cars up to $: ${max.toFixed(2)}\n${"-".repeat(40)}\n${list}`
})

frm.btSimulate.addEventListener("click", () => {
  const discount = Number(prompt("Discount percentage: "))
  if (discount == 0 || isNaN(discount)) {
    return;

  }
  const carsDisc = cars.map(aux => ({
    model: aux.model,
    price: aux.price - (aux.price * discount / 100)
  }))
  let list = "";
  for (const car of carsDisc) {
    list += `${car.model} - $: ${car.price.toFixed(2)}\n`
  }
  resp.innerText = `Discounted cars: ${discount}%\n${"-".repeat(40)}\n${list}`
})