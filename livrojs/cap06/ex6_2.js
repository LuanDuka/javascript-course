const frm = document.querySelector("form");
const respErrors = document.querySelector("#outErrors");
const respChances = document.querySelector("#outChances");
const respTip = document.querySelector("#outTip");

const errors = [];//array with numbers already bet
const raffled = Math.floor(Math.random() * 100) + 1//random number 1-100
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = Number(frm.inNumber.value);

  if (number == raffled) {
    respTip.innerText = `Congratulations!! Right number: ${raffled}`;
    frm.btSubmit.disable = true;//change button status
    frm.btNew.className = "exibe";

  } else {
    if (errors.includes(number)) {//if number exist in array: had bet
      alert(`You already had bet the number ${number}. Try another...`);

    } else {
      errors.push(number)//add number to array
      const numErrors = errors.length //get array size
      const numChances = CHANCES - numErrors //calculates number of chances
      //shows nº errors, array content and nº of chances
      respErrors.innerText = `${numErrors} (${errors.join(", ")})`;
      respChances.innerText = numChances;

      if (numChances == 0) {
        alert("Your chances are over...");
        frm.btSubmit.disabled = true;
        frm.btNew.className = "exibe";
        respTip.innerText = `Game Over!! Lucky Number: ${raffled}`

      } else {
        //use ternary operator for hint message
        const tip = number < raffled ? "greater" : "smaller";
        respTip.innerText = `Tip: Try a ${tip} than ${number} number`
      }
    }
  }
  frm.inNumber.value = "";
  frm.inNumber.focus();
})