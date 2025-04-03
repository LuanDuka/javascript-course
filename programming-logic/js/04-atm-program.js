const form = document.querySelector("form");
const notes = document.querySelector("h2");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const withdrawl = Number(form.inNumber.value);
  let notes100 = 0;
  let notes50 = 0;
  let notes10 = 0;

  if (withdrawl % 10 != 0) {
    alert('Invalid value for available notes ($ 10, 50, 100)');
    form.inNumber.focus();
    return;
  }

  notes100 = Math.floor(withdrawl / 100);
  notes50 = Math.floor((withdrawl % 100) / 50);
  notes10 = ((withdrawl % 100) % 50) / 10;

  let show100 = (notes100 > 0) ? `Notes $100: ${notes100}\n` : "";
  let show50 = (notes50 > 0) ? `Notes $50: ${notes50}\n` : "";
  let show10 = (notes10 > 0) ? `Notes $10: ${notes10}` : "";

  notes.innerText = `${show100}${show50}${show10}`;
})