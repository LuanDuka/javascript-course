const names = ["Pedro", "Ana", "João"];

names.sort();
console.log(names.join(", "))

names.reverse();
console.log(names.join(", "))


const numbers = [50, 100, 2, -1, -30, -4];

numbers.sort();
console.log(numbers.join(", "));

numbers.sort((a, b) => a - b)
console.log(numbers.join(", "));
