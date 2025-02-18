let calculation = '';

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

}

//Lesson 08 - Objects
const product = {
  name: 'socks',
  price: 1090
}

console.log(typeof product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

//Update Rock Paper Scissor

const score = {
  wins: 0,
  losses: 0,
  ties: 0
};

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


  console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins:${score.wins}. Losses ${score.losses}. Ties ${score.ties}!`)

}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}

const product2 = {
  name: 'shirt',
  // ['delivery - time']: '1 day'
  'delivery - time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    console.log('function inside object');
  }
}

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
// console.log(product2.delivery - time);
console.log(product2['delivery - time']);
console.log(product2.rating.count);
product2.fun();

console.log(typeof console);
console.log(typeof console.log);

//Convert to JSON
console.log(JSON.stringify(product2));//JSON do not suport function
console.log(typeof JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
//Convert to Javascript
JSON.parse(jsonString);
console.log(JSON.parse(jsonString));

//Local Storeg
