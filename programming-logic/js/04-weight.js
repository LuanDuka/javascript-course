const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.inName.value;
  const male = form.inMale.checked;
  const height = Number(form.inHeight.value);
  /*
    let weitgh;
    if (male) {
      weitgh = 22 * Math.pow(height, 2);
    } else {
      weitgh = 21 * Math.pow(height, 2);
    }
  */

  const weight = male ? weitgh = 22 * Math.pow(height, 2) : weitgh = 21 * Math.pow(height, 2);

  resp.innerText = `${name}: You ideal weight is ${weitgh.toFixed(3)} kg`;
})

form.addEventListener("reset", () => {
  resp.innerText = "";
})

const bairro = prompt("Bairro de Entrega: ")
let taxaEntrega
switch (bairro) {
  case "Centro":
    taxaEntrega = 5.00
    break
  case "Fragata":
  case "Três Vendas":
    taxaEntrega = 7.00
    break
  case "Laranjal":
    taxaEntrega = 10.00
    break
  default:
    taxaEntrega = 8.00
}
alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`)