const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = Number(frm.inNumber.value);
  let resposta = `Entre ${number} e 1: ${number}, `;

  for (let i = number - 1; i > 1; i--) {
    resposta = resposta + i + " , ";
  }
  resp.innerText = resposta + "1.";
})