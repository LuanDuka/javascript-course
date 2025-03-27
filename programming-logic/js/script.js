//Exemplo 2.3
const formBuffet = document.querySelector("form");
const totalPagar = document.querySelector("#totalPagar");

formBuffet.addEventListener("submit", (e) => {
  const priceQuilo = Number(formBuffet.inQuilos.value);
  const priceGrama = priceQuilo / 1000;
  const consumoCliente = Number(formBuffet.inConsumo.value);
  const custoConsumo = priceGrama * consumoCliente;
  totalPagar.innerText = `Valor a pagar R$:${custoConsumo}`;
  e.preventDefault();

})

//Exemplo 2.2
const form = document.querySelector("form");
const modelo = document.querySelector('.modeloCarro');
const condition = document.querySelector('.condition');

form.addEventListener("submit", (e) => {
  const titulo = form.inModelo.value;
  const price = Number(form.inPrice.value);
  const entrada = Math.floor(price * 0.5);
  const parcelas = (price - entrada) / 12;
  modelo.innerText = titulo;
  condition.innerText = `Entrada de $${entrada.toFixed(2)} e 12 parcelas de $${parcelas.toFixed(2)}`
  e.preventDefault();
});
// cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value      // obtém conteúdo dos campos
  const duracao = Number(frm.inDuracao.value)
  const horas = Math.floor(duracao / 60)  // arredonda para baixo resultado
  const minutos = duracao % 60           // obtém o resto da divisão
  resp1.innerText = titulo               // exibe as respostas
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
  e.preventDefault()                     // evita envio do form
})

//Exemplo 2.1
/*
// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3"); // primeiro elemento h3 da página
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // obtém o nome digitado no form
  resp.innerText = `Olá ${nome}!`; // exibe a resposta do programa
  e.preventDefault()  // evita envio do form
})


const cor = document.querySelector("#inCor")    // elemento com id=inCor
const lista = document.querySelector(".lista")  // elemento da class=lista
*/

/*
const nome = prompt("Qual é seu nome?");
alert(`Olá ${nome}`);
*/

//1.9 1.3
/*
const a = "20"
const b = a * 2    // b = 40
const c = a / 2    // c = 10
const d = a - 2    // d = 18
const e = Number(a) + 2    // e = 202 ???
console.log("e: " + e)   // exibe o valor de uma variável

const fruta = "Banana"
const preco = 3.50
const levar = true
let novoValor
console.log(typeof fruta)      // string
console.log(typeof preco)      // number
console.log(typeof levar)      // boolean
console.log(typeof novoValor)  // undefined
//inteiro ou decimal
console.log(Number.isInteger(12))    // true
console.log(Number.isInteger(3.50))  // false
*/
//1.10
/*
const numero = Number(prompt("Digite um número"));// lê dado de entrada e converte para número
const dobro = numero + numero;
console.log(`O dobro é ${dobro}`)
*/
//1.6
/*
const number1 = Number(prompt("First number:"));
const number2 = Number(prompt("Second number:"));
const plusNumbers = number1 + number2;
console.log(`The result is: ${plusNumbers}`);
*/
//1.7
/*
const dinnerValue = Number(prompt("Dinner cost:"));
const taxDinner = dinnerValue * 0.10;
const totalDinner = dinnerValue + taxDinner;
console.log(
  `Waiter tax $${taxDinner.toFixed(2)}\nTotal $${totalDinner.toFixed(2)}`
);
*/
//1.7 d
/*
const travelDays = Number(prompt("Dias de viagem:"));
const travelHours = Number(prompt("Horas de viagem"));
const totalHours = (travelDays * 24) + travelHours;
console.log(`Sua viagem vai durar ${totalHours}`);
*/
//vizinhos a
/*
const neiborNumber = Number(prompt("Número:"));
const anterior = neiborNumber - 1;
const posterior = neiborNumber + 1;
console.log(`São vizinhos ${anterior} e ${posterior}`);
*/
//clientes pagar b
/*
const totalPizza = Number(prompt("Pizza: $"));
const clientes = Number(prompt("Clientes:"));
const valorCliente = totalPizza / clientes;
console.log(`Valor por cliente $${valorCliente.toFixed(2)}`);
*/
//à vista ou parcelado
/*
const valor = Number(prompt("Valor produto:"));
const desconto = valor * 0.10;
const aVista = valor - desconto;
const parcelado = valor / 3;
console.log(`Preço $${valor}\nÀ vist $${aVista}\nOu 3x de $${parcelado.toFixed(2)}`);
*/
//