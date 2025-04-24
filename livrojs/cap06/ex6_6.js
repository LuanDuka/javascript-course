let patients = ["Ana", "Carlos", "João", "Sofia"];
const [a, b, c] = patients;

console.log(a)  // Ana
console.log(b)  // Carlos
console.log(c)  // João

const [attend, next, ...others] = patients;// ...Rest operator
console.log(attend)
console.log(next)
console.log(others)

const car = {
  model: "Corsa",
  price: 59500
}
const car2 = {
  ...car,
  year: 2020
}
console.log(car2);

patients = ["Duda", ...patients]//add in the begining
patients = [...patients, "Leo"] //add in the end

console.log(patients)

const patients2 = [...patients]// or patients.slice()
console.log(patients2)
