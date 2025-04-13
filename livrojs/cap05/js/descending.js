const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = Number(frm.inNumber.value);
  let resposta = `Entre ${number} e 1: `;
  /*
    for (let i = number; i > 1; i--) {
      resposta = resposta + i + " , ";
    }
  */
  let i = number;
  while (i > 1) {
    resposta = resposta + i + " , ";
    i--;
  }

  resp.innerText = resposta + "1.";
})