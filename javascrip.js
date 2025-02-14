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
console.log(`Tax (10%): $${tax}`);
console.log(`Total cost: $${totalCost}`);

let calculation = "";
function numberOne() {
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
  calculation += ' - ';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function plusButton() {
  calculation += ' + ';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function timesButton() {
  calculation += ' * ';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function dividedButton() {
  calculation += ' / ';
  console.log(calculation);
  document.getElementById("texto").innerHTML = calculation;
}
function doteButton() {
  calculation += '.';
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

// Rock Paper Scissors

let winScore = 0;
let lossScore = 0;
let tieScore = 0;

function choice(playerMove) {
  // Gera a jogada do computador
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Scissor';
  } else {
    computerMove = 'Paper';
  }

  let result = '';

  // Lógica para determinar o resultado

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
  document.getElementById('result').innerHTML = `You picked: ${playerMove}. Computer picked ${computerMove}. ${result}`;

  //Score result

  if (result === 'Tie.') {
    tieScore++;
  } else if (result === 'You win!') {
    winScore++;
  } else {
    lossScore++;
  }
  // Display updated scores
  document.getElementById('scorePoints').innerHTML = `Wins: ${winScore}. Losses ${lossScore}. Ties ${tieScore}`;

}

//Reset score function
function resetScore() {
  winScore = 0;
  lossScore = 0;
  tieScore = 0;
  // Update the displayed scores
  document.getElementById('scorePoints').innerHTML = `Wins: ${winScore}. Losses ${lossScore}. Ties ${tieScore}`;

}
// document.getElementById('scorePoints').innerHTML = `Wins: ${winScore}. Losses ${lossScore}. Ties ${tieScore}`; >> PARA NÃO INTERFERIR NO EXERCÍCIO 6a


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

false && console.log('hello');

const mssg = 5 && 'hello';
console.log(mssg);

const crrnc = undefined || 'USD';
console.log(crrnc);

//Exercises Lesson 6
const hour = new Date();
document.getElementById('exercise6a').innerHTML = hour;