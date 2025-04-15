const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumber.value);
  let numDivisers = 0;
  let haveDivisor = 0;
  /*
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
  */

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      haveDivisor = 1;
      break;
    }
  }

  if (num > 1 && !haveDivisor) {
    resp.innerText = `${num} Is prime`;
  } else {
    resp.innerText = `${num} Is not prime`
  }


  frm.inNumber.value = "";
  frm.inNumber.focus();
})