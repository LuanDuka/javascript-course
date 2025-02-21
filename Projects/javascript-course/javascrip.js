// Lesson 04
function addClicked() {
  console.log('Added');
}
function buyClicked() {
  console.log('Loading...');
  alert('Purchased')
}

console.log("Welcome!");

// Lesson Variables 05
let variable1 = 3;
console.log(variable1);

// const calculation = 2 + 2;
// console.log(calculation);
// console.log(calculation + 2);

// const result = calculation + 2;
// console.log(result);

const message = 'hello';
console.log(message);

variable1 = 5;
console.log(variable1);

variable1 = variable1 + 1;
console.log(variable1);

// Lesson Cart Quantity 05
let cartQuantity = 0;

function showQuantity() {
  console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart() {
  // cartQuantity = cartQuantity + 1;
  // cartQuantity += 1;
  cartQuantity++;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function RemoveFromCart() {
  // cartQuantity = cartQuantity + 1;
  // cartQuantity += 1;
  cartQuantity--;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function plusTwo() {
  // cartQuantity = cartQuantity + 2;
  cartQuantity += 2;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function minusTwo() {
  // cartQuantity = cartQuantity + 2;
  cartQuantity -= 2;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function plusThree() {
  // cartQuantity = cartQuantity + 3;
  cartQuantity += 3;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function minusThree() {
  // cartQuantity = cartQuantity + 3;
  cartQuantity -= 3;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function plusFour() {
  // cartQuantity = cartQuantity + 3;
  cartQuantity += 4;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function plusFive() {
  // cartQuantity = cartQuantity + 3;
  cartQuantity += 5;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function resetCart() {
  cartQuantity = 0;
  console.log('Cart was reset: ' + cartQuantity);
}


const variable2 = 3;
// variable2 = 5;
console.log(variable2);
var variable3 = 4;
console.log(variable3);

console.log(typeof message);

const name = 'Luan';
console.log('My name is: ' + name);

let coffee = 5;
let bagels = 3;
let soup = 9;
let tax = 0.1;

let cost = coffee + bagels + soup;
console.log(`Cost of food: $${cost}`);

let totalCost = cost + cost * tax;
console.log(`Tax(10 %): $${tax}`);
console.log(`Total cost: $${totalCost}`);

//Lesson 05 - Calculator project
let calculation = " ";

function numberOne() {
  //não pode ser um número
  //pq se não vai somar o número com a variável
  //e não digitar na frente da variável
  calculation += '1';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberTwo() {
  calculation += '2';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberThree() {
  calculation += '3';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberFour() {
  calculation += '4';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberFive() {
  calculation += '5';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberSix() {
  calculation += '6';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberSeven() {
  calculation += '7';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberEight() {
  calculation += '8';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberNine() {
  calculation += '9';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function numberZero() {
  calculation += '0';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}

function minusButton() {
  calculation = String(calculation); // Garantir que calculation é string
  if (!["/", "*", "-", "+", "."].some(op => calculation.endsWith(` ${op} `))) {
    calculation += ' - ';
    console.log(calculation);
    document.getElementById("texto").innerHTML = calculation;
  }
}

function plusButton() {
  calculation = String(calculation);
  if (!["/", "*", "-", "+", "."].some(op => calculation.endsWith(` ${op} `))) {
    calculation += ' + ';
    console.log(calculation);
    document.getElementById("texto").innerHTML = calculation;
  }
}

function timesButton() {
  calculation = String(calculation);
  if (!["/", "*", "-", "+", "."].some(op => calculation.endsWith(` ${op} `))) {
    calculation += ' * ';
    console.log(calculation);
    document.getElementById("texto").innerHTML = calculation;
  }
}

function dividedButton() {
  calculation = String(calculation);
  if (!["/", "*", "-", "+", "."].some(op => calculation.endsWith(` ${op} `))) {
    calculation += ' / ';
    console.log(calculation);
    document.getElementById("texto").innerHTML = calculation;
  }
}

function doteButton() {
  calculation = String(calculation).trim(); // Garantir que calculation é uma string e remover espaços extras
  const lastChar = calculation.slice(-1); // Último caractere da expressão

  // Lista de operadores
  const operators = ["/", "*", "-", "+"];

  // Se calculation estiver vazio ou o último caractere for um operador, adiciona "0."
  if (calculation === "" || operators.includes(lastChar)) {
    calculation += "0.";
  }
  // Verifica se já existe um ponto na última sequência numérica
  else {
    const lastNumber = calculation.split(/[\s/*\-+]/).pop(); // Captura o último número antes de um operador
    if (!lastNumber.includes(".")) { // Se ainda não tem um ponto, pode adicionar
      calculation += ".";
    }
  }

  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}

function equalButton() {
  eval(calculation);
  calculation = eval(calculation);
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function clearButton() {
  calculation = "";
  // console.log(calculation);
  document.getElementById("texto").innerHTML = "";
}

// Lesson 06
console.log(typeof true);
false

console.log(3 < 5);

console.log(5 === '5.00');

if (true) {
  console.log('hello');
} else {
  console.log('else');
}

const age = 14

if (age >= 16) {
  console.log('You can drive');
  console.log('Congrats');

} else if (age >= 14) {
  console.log('Almost there!');
} else {
  console.log("You can't drive");
}

// Rock Paper Scissors Lesson 06
/*
let winScore = 0;
let lossScore = 0;
let tieScore = 0;

document.getElementById('result').innerHTML = "Choose a move!"

document.getElementById('scorePoints').innerHTML = `Wins: ${winScore}.Losses ${lossScore}.Ties ${tieScore}`;

function choice(playerMove) {
  // Generate a random number
  const randomNumber = Math.random();
  let computerMove = '';
  //Define what choice the computer makes
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Scissor';
  } else {
    computerMove = 'Paper';
  }
  //Show the results
  let result = '';

  //Algorithm to define the results
  if (playerMove === computerMove) {
    result = 'Tie.';
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissor') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissor' && computerMove === 'Paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  // Shows result in the page
  document.getElementById('result').innerHTML = `You picked: ${playerMove}.Computer picked ${computerMove}.${result}`;

  //Score result
  if (result === 'Tie.') {
    tieScore++;
  } else if (result === 'You win!') {
    winScore++;
  } else {
    lossScore++;
  }
  // Display updated scores
  document.getElementById('scorePoints').innerHTML = `Wins: ${winScore}.Losses ${lossScore}.Ties ${tieScore}`;

}

//Reset score function
function resetScore() {
  winScore = 0;
  lossScore = 0;
  tieScore = 0;
  // Update the displayed scores
  document.getElementById('scorePoints').innerHTML = `Wins: ${winScore}.Losses ${lossScore}.Ties ${tieScore}`;

}
// document.getElementById('scorePoints').innerHTML = `Wins: ${ winScore }.Losses ${ lossScore }.Ties ${ tieScore }`; >> PARA NÃO INTERFERIR NO EXERCÍCIO 6a
*/

console.log(true || false); //or operator
console.log(!false);//not operator

//Truly and falsy value
const timeLimite = 5;

if (timeLimite) {
  console.log('still have time');
}

console.log(!0);

console.log('text' / 5);

let variable4;
console.log(variable4);

let shortCut = 0 ? 'truthy' : 'falsy';
console.log(shortCut);

shortCut = 5 ? 'truthy' : 'falsy';
console.log(shortCut);

true && console.log('hello');

const mssg = 5 && 'hello';
console.log(mssg);

const crrnc = undefined || 'USD';
console.log(crrnc);

//Exercises Lesson 6a to 6c
//get the current hour of the day
const currentHour = new Date().getHours();
console.log(currentHour);

let myName = 'Luan';
let greeting = "";

if (currentHour >= 6 && currentHour <= 12) {
  greeting = 'Good mornign';
} else if (currentHour >= 13 && currentHour <= 17) {
  greeting = 'Good afternoon';
} else {
  greeting = 'Good evening';
}

console.log(`${greeting}, ${myName}! It's exactly ${currentHour}.`);
// document.getElementById('exercise6a').innerHTML = `${greeting}, ${myName}! It's exactly ${currentHour}.`;

//Exercises Lesson 6d to 6e
const discountAge = 65;
const isHoliday = false;

if (!isHoliday && (discountAge <= 6 || discountAge >= 65)) {
  console.log('Congratulation, you recive a discount!');
  // document.getElementById('yourAge').innerHTML = 'Congratulation, you recive a discount!';
} else {
  console.log("Sorry, you can't receive a discount");
  // document.getElementById('yourAge').innerHTML = "Sorry, you can't receive a discount";
}

//Exercises Lesson 6f to 6j



function playGame(guess) {
  // Generate a random number
  const randomNumber = Math.random();
  let fliped = "";
  let resultCoin = "";
  //Define what choice the computer makes

  if (randomNumber < 0.5) {
    fliped = 'Heads';
  } else {
    fliped = 'Tails';
  }

  //Algorithm to define the results
  if (guess === fliped) {
    resultCoin = 'Win';
  } else {
    resultCoin = 'Loss';
  }
  document.getElementById('coinFlip').innerHTML = `You ${resultCoin}. The coin ${fliped}`;
}

//Challenge 6j Ternary Operators
/* MAKED BY MYSELF
const randomNumber = Math.random();
let flipCoin = '';
let coinResult = ''
let myGuess = 'Tails';

flipCoin = (randomNumber < 0.5) ? (coinResult = 'Heads') : (coinResult = 'Tails');
console.log(coinResult);

challenge = (coinResult === myGuess) ? "Right guess, it's a win!" : "Wrong guess, it's a loss!"
console.log(challenge);
*/

/* MAKED BY GPT, BUT I FIXED SOME BUGS TO RUN PROPERLY
let randomNumber = '';
let coinResult = '';
let textMessage = '';

function guess(myGuess) {
  // Gera um número aleatório entre 0 e 1
  randomNumber = Math.random();

  // Define o resultado da moeda baseado no número gerado
  coinResult = (randomNumber < 0.5) ? "Heads" : "Tails";

  // Verifica se a escolha do usuário está correta
  textMessage = (coinResult === myGuess)
    ? `🎉 Right guess! It's ${coinResult}!`
    : `❌ Wrong guess! It was ${coinResult}.`;

  // Exibe o resultado na página
  document.getElementById("coinFlip").innerHTML = textMessage;

  // Exibe no console também
  console.log(textMessage);
}
 */

//Challenge Exercise 6k
//Update Lesson 09
let cartItemQuantity = 0;
document.querySelector('.displayQuantity')
  .innerHTML = `Cart Quantity: ${cartItemQuantity}`;

function showItemQuantity() {
  // console.log(`Cart Quantity: ${cartItemQuantity}`);
  document.querySelector('.displayQuantity')
    .innerHTML = `Cart Quantity: ${cartItemQuantity}`;

};
function addItemToCart(itemAdd) {
  const operationCart = cartItemQuantity + itemAdd;
  if (operationCart > 10) {
    alert(`The cart is full. You can add just ${operationCart - itemAdd}`);
  } else {
    cartItemQuantity += itemAdd;
  }
  /*
  else if (itemAdd === 1) {
    cartItemQuantity++;
    console.log(`Cart Quantity: ${cartItemQuantity}`);
  } else if (itemAdd === 2) {
    cartItemQuantity += 2;
    console.log(`Cart Quantity: ${cartItemQuantity}`);
  } else if (itemAdd === 3) {
    cartItemQuantity += 3;
    console.log(`Cart Quantity: ${cartItemQuantity}`);
  } else if (itemAdd === 4) {
    cartItemQuantity += 4;
    console.log(`Cart Quantity: ${cartItemQuantity}`);
  } else if (itemAdd === 5) {
    cartItemQuantity += 5;
    console.log(`Cart Quantity: ${cartItemQuantity}`);
  }
    */
  console.log(`Cart Quantity: ${cartItemQuantity}`);
  document.querySelector('.displayQuantity').innerHTML = `Cart Quantity: ${cartItemQuantity}`;
}

//function to remove itens from the cart'
//when the number going to be negative, it turn zero
function removeItemFromCart(itemRemove) {
  if (cartItemQuantity - itemRemove < 0) {
    alert('Not enough items in the cart');
  } else {
    cartItemQuantity -= itemRemove;
  }
  console.log(`Cart Quantity: ${cartItemQuantity}`);
  document.querySelector('.displayQuantity').innerHTML = `Cart Quantity: ${cartItemQuantity}`;
}

function resetCartButton() {
  cartItemQuantity = 0;
  console.log(`Cart Quantity: ${cartItemQuantity}`);
  document.querySelector('.displayQuantity').innerHTML = `Cart Quantity: ${cartItemQuantity}`;
}

//Lesson 07 - Parameter
function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost * taxPercent);
}
calculateTax(2000, 0.2);
calculateTax(5000);
//7a - 7c
//(!name) to check if 'name' is undefined, instead of (name === undefined)
function greet(name) {
  if (!name) {
    console.log('Hi there!');
  } else {
    console.log('Hello ' + name + '!');
  }
}
greet();
//7d
function convertToFahrenheit(celsius) {
  return ((celsius * 9 / 5) + 32);
}
console.log(convertToFahrenheit(25));
//7e
function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9);
}
console.log(convertToCelsius(86));
//7f 
function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    const result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === 'F') {
    const result = convertToCelsius(degrees);
    return `${result}C`;
  }
}
console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));
//7g km or miles (1 mile is 1.6 km)
//   (1 mile = 5280 ft, 1 km = 3281 ft)
function convertLength(length, from, to) {
  if (from !== 'km' && from !== 'miles' && from !== 'ft') {
    return `Invalid unit: ${from}`;
  } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
    return `Invalid unit: ${from}`;
  }
  if (from === 'miles' && to === 'km') {
    const result = (length * 1.6);
    return `${result} km`;

  } else if (from === 'km' && to === 'miles') {
    const result = (length / 1.6);
    return `${result} miles`;

  }
  else if (from === 'miles' && to === 'ft') {
    const result = (length * 5280);
    return (`${result} ft`);

  } else if (from === 'ft' && to === 'miles') {
    const result = (length / 5280);
    return (`${result} miles`);

  } else if (from === 'km' && to === 'ft') {
    const result = (length * 3281);
    return (`${result} ft`);

  } else if (from === 'ft' && to === 'km') {
    const result = length / 3281;
    return (`${result} km`);
  }
  /* esse é o que eu fiz, pois não consegui fazer o from === to funcionar
   else if ((from == 'km' && to === 'km')) {
    const result = length;
    return (`${result} km`);
  } else if ((from == 'miles' && to === 'miles')) {
    const result = length;
    return (`${result} miles`);
  } else if ((from == 'ft' && to === 'ft')) {
    const result = length;
    return (`${result} ft`);
  } 
  */
  else if (from === to) {
    return `${length} ${to}`;
  }

}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(26400, 'ft', 'miles'));
console.log(convertLength(5, 'km', 'ft'));
console.log(convertLength(16405, 'ft', 'km'));
console.log(convertLength(16405, 'lbs', 'km'));


//Lesson 08 - Objects