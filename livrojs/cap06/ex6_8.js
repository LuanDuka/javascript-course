const number = [10, 13, 20, 8, 15];
const double = number.map(num => num * 2);

console.log(double.join(", "))

const evens = number.filter(num => num % 2 == 0);
console.log(evens.join(", "));

const sum = number.reduce((acumulator, num) => acumulator + num, 0);
console.log(`${sum}`)

const bigger = number.reduce((a, b) => Math.max(a, b), 0)
console.log(`Bigger: ${bigger}`)

const friends = [
  { name: "Ana", age: 20 },
  { name: "Bruno", age: 17 },
  { name: "Cátia", age: 25 }
]

const friends2 = friends.map(aux => ({ name: aux.name, birth: 2022 - aux.age }));

for (const friend of friends2) {
  console.log(`${friend.name} - Birth year: ${friend.birth}`);
}

const friends3 = friends.filter(aux => aux.age >= 21 || aux.name.includes("B"));

for (const friend of friends3) {
  if (friends3.length == 0) {
    console.log("There is no friends in this condition")
  } else {
    console.log(`${friend.name} - Age: ${friend.age} years old`);
  }
}

const soma = friends.reduce((acumulator, friend) => acumulator + friend.age, 0);
const every = friends.reduce((acumulator, friend) => acumulator + friend.name + " ", "");

console.log(`Soma: ${soma}`);
console.log(`Every: ${every}`);