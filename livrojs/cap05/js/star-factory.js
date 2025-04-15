const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumber.value);
  let stars = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      stars += "*";
    } else {
      stars += "-";
    }
  }
  resp.innerText = stars;

  frm.inNumber.value = "";
  frm.inNumber.focus();
})