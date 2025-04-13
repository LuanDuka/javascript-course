const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = Number(frm.inNumber.value);
  let resposta = `Entre ${number} e 1: `;

  for (let i = number; i > 0; i--) {
    resposta = resposta + i + " , ";
  }
  resp.innerText = resposta;
})