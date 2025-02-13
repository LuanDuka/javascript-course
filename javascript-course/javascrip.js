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
}
function numberTwo() {
  calculation += '2';
  console.log(calculation);
}
function numberThree() {
  calculation += '3';
  console.log(calculation);
}
function numbnumberFourerOne() {
  calculation += '4';
  console.log(calculation);
}
function numberFive() {
  calculation += '5';
  console.log(calculation);
}
function numberSix() {
  calculation += '6';
  console.log(calculation);
}
function numberSeven() {
  calculation += '7';
  console.log(calculation);
}
function numberEight() {
  calculation += '8';
  console.log(calculation);
}
function numberNine() {
  calculation += '9';
  console.log(calculation);
}
function numberZero() {
  calculation += '0';
  console.log(calculation);
}
function minusButton() {
  calculation += ' + ';
  console.log(calculation);
}
function plusButton() {
  calculation += ' - ';
  console.log(calculation);
}
function timesButton() {
  calculation += ' * ';
  console.log(calculation);
}
function dividedButton() {
  calculation += ' / ';
  console.log(calculation);
}
function doteButton() {
  calculation += '.';
  console.log(calculation);
}
function equalButton() {
  eval(calculation);
  calculation = eval(calculation);
  console.log(calculation);
}
function clearButton() {
  calculation = "";
  console.log(calculation);
}

