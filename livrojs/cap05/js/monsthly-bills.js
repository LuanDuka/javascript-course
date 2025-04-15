const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let response = "";
let numBill = 0;
let totalValue = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const descrition = frm.inDescrition.value;
  const value = Number(frm.inValue.value);

  numBill++;
  totalValue = totalValue + value;//totalValue+=value
  response = response + descrition + " - $:" + value.toFixed(2) + "\n";
  resp1.innerText = `${response}-------------------------------`;
  resp2.innerText = `${numBill} Bill(s) - Total $: ${totalValue.toFixed(2)}`;

  frm.inDescrition.value = "";
  frm.inValue.value = "";
  frm.inDescrition.focus();
})
