const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const brazilHour = Number(form.inBrazilHour.value);

  let franceHour = brazilHour + 5;

  if (franceHour > 24) {
    franceHour = franceHour - 24;
  }

  resp.innerText = `Time in France: ${franceHour.toFixed(2)}`;
})

