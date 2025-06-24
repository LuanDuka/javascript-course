const prompt = require("prompt-sync")();
const message = `Tap 0 to quit`;

do {
  const num = Number(prompt("Number: "));
  if (num == 0 || isNaN(num)) {
    //confirm() only works in browsers
    const quit = prompt("Confirm exit? (s/n): ").toLowerCase();
    if (quit === "s" || quit === "sim" || quit === "y" || quit === "yes") {
      break;
    } else {
      continue;
    }
  }
  if (num % 2 == 0) {
    console.log(`The double of ${num} is: ${num * 2}`)
  } else {
    console.log(`The triple of ${num} is: ${num * 3}`)
  }

  console.log(message);

} while (true)
console.log("Bye, bye...")

/* To use on browser
 alert("Digite 0 para sair")
  do {
    const num = Number(prompt("Número: "))    // lê o número
    if (num == 0 || isNaN(num)) {             // se num=0 ou inválido
      const sair = confirm("Confirma saída?")   // solicita confirmação do usuário
      if (sair) {
        break   // sai da repetição
      } else {
        continue    // volta ao início do laço
      }
    }
    if (num % 2 == 0) {                          // se par,
      alert(`O dobro de ${num} é: ${num * 2}`)   // mostra o dobro
    } else {                                     // senão,
      alert(`O triplo de ${num} é: ${num * 3}`)  // mostra o triplo
    }
  } while (true)    // enquanto verdade (só sai do laço, pelo break)
  alert("Bye, bye...")
  */