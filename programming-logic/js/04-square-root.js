const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = Number(form.inNumber.value);
  const square = Math.sqrt(number);

  if (Number.isInteger(square)) {
    resp.innerText = `Raiz: ${square}`;
  } else {
    resp.innerText = `Raiz: ${square}\nThere is no exact square root for ${number}`;
  }

})