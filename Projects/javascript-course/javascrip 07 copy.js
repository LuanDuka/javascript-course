let calculation = JSON.parse(localStorage.getItem('calculation'));



function updateCalculation(value) {
  if (value === '=') {
    eval(calculation);
    calculation = eval(calculation);
    console.log(calculation);

  } else if (value === 'clean') {
    calculation = '';
    console.log(calculation);

  }
  else if (calculation += value) {
    console.log(calculation);

  }

  localStorage.setItem('calculation', JSON.stringify(calculation));
  // console.log(JSON.stringify(calculation));
}

//Lesson 08 - Objects
const product = {
  name: 'socks',
  price: 1090
}

console.log(typeof product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';//to change the value of the property
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

//Update Rock Paper Scissor

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
}
//Get the value out and input default value after ||
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

//quando atualiza a página após resestar, score é igual a null
//ou usar (!score) é igual a (score === null)
/*
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

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

  if (result === 'You win!') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }
  //Saving the score, only store string
  localStorage.setItem('score', JSON.stringify(score));

  console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins:${score.wins}. Losses ${score.losses}. Ties ${score.ties}!`)

}



const product2 = {
  name: 'shirt',
  // ['delivery - time']: '1 day'
  'delivery - time': '1 day',
  rating: {//Nested Object: an object inside other object
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    //A function is another type of value
    //Function inside object = Method > Like console[object].log[function]() and Math.random()
    console.log('function inside object');
  }
}

console.log(product2);
console.log(product2.name);//Dot Notation
console.log(product2['name']);//Bracket Notation: lets us use properties that don't work with dot notation
//In Bracket Notation we can use variable and calculation
// console.log(product2.delivery - time); << in this exemplo javascript thinks that dash "-" is igual minus trying to do math
// and give us a error
console.log(product2['delivery - time']);
console.log(product2.rating.count);
product2.fun();

console.log(typeof console);
console.log(typeof console.log);

//Built-in JSON Object
//Use JSON when we send data between computers or store data
//Convert to JSON
console.log(JSON.stringify(product2));//JSON do not suport function
console.log(typeof JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
//Convert back to Javascript
JSON.parse(jsonString);
console.log(JSON.parse(jsonString));

//Local Storeg: localStorage use to save values more permanently
//variables are temporary, if refresh or close the page, they are deleted

//Falsy Values > false   0   ''   NaN   undefined   null
//null=intentinally want something to be empty

//Auto-Boxing: don't work with 'null.property' or 'undefined.method()'
console.log('hello'.length);
console.log('hello'.toUpperCase()); //'hello' scpecial object

//Objects are references: the actual value is created in computer's memory
//This variable gets the reference that points to location in the computer memory
const object1 = {
  message: 'hello'
};
//Don't make a copy off the object, just copy the reference
//Copy by Reference
const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

//We can't compare objects directly
const object3 = {
  message: 'Good job!'
};
//Compares the references, not the value inside
console.log(object3 === object1);
//They point to the same references
console.log(object2 === object1);

//Shortcuts for Objects
const object4 = {
  message: 'Good job!',
  price: 799
};
//If the variable name and property name are the same, we have a Shortcuts for this
/*const message = object4.message;*/

//Destructuring: to use a shortcuts
//Easier way to take properties out of an object
//This will take the messagem property out of object4
//and save it in a variable
const { message, price } = object4;
//Both make the same thing

console.log(message);
console.log(price);

//Shorthand Property
const object5 = {
  //message: message
  message
};
console.log(object5);

//Shorthand Method
const object6 = {
  message,
  // method: function function2() {
  //   console.log('method');
  // }
  method() {
    console.log('method');
  }
};
console.log(object6);
object6.method();

//Exercises - Objects 8a
const productAmazon = {
  name: 'basketball',
  price: 2095
};
console.log(productAmazon);
productAmazon.price += 500;//8b
console.log(productAmazon);
productAmazon['delivery-time'] = '3 days';//8c add property with minus sign
console.log(productAmazon);



//Takes 2 products and return the less expensive product
function comparePrice(product1a, product1b) {
  if (product1a.price < product1b.price) {//define the property needed > price
    return product1a;//the result after calculation
  } else {
    return product1b;
  }
}

const product1a = {
  name: 'basketball',
  price: 2095
};
const product1b = {
  name: 'sucks',
  price: 1090
};

console.log(comparePrice(product1a, product1b));

//8e
/* I maded
function isSameProduct(product2a, product2b) {
  if (product2a.name === product2b.name && product2a.price === product2b.price) {
    return true;
  } else {
    return false;
  }
}
*/
// Here is an alternative solution that uses less code.
function isSameProduct(product2a, product2b) {
  return (
    product2a.name === product2b.name &&
    product2a.price === product2b.price
  );
}

const product2a = {
  name: 'gloves',
  price: 2095
}

const product2b = {
  name: 'gloves',
  price: 2095
}

const product2c = {
  name: 'basketball',
  price: 2095
}

console.log(isSameProduct(product2a, product2b));
console.log(isSameProduct(product2a, product2c));

//8f
console.log('Hello'.toLowerCase());

//8g
console.log('Hello'.repeat(5));

//8h

