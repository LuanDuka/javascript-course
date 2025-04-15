const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumber.value);
  let numDivisers = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      numDivisers++;
    }
  }
  if (numDivisers == 2) {
    resp.innerText = `${num} Is prime`;
  } else {
    resp.innerText = `${num} Is not prime`
  }
})