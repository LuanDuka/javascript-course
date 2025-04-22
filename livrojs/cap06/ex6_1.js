const frm = document.querySelector("form");
const respName = document.querySelector("span");
const respList = document.querySelector("pre");

const patients = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = frm.inPatient.value;
  patients.push(name);
  let list = "";
  for (let i = 0; i < patients.length; i++) {
    list += `${i + 1}.${patients[i]}\n`
  }
  respList.innerText = list;//show patient list
  frm.inPatient.value = "";//clean form's input
  frm.inPatient.focus();//put cursor on input
})

frm.btUrgency.addEventListener("click", () => {
  //check if form's validation is ok
  if (!frm.checkValidity()) {
    alert("Please provide the name of the patient to be treated urgently.");
    frm.inPatient.focus();
    return;

  }
  const name = frm.inPatient.value;
  patients.unshift(name);
  let list = "";

  patients.forEach((patient, i) => (
    list += `${i + 1}.${patient}\n`));
  respList.innerText = list;
  frm.inPatient.value = "";
  frm.inPatient.focus();
})

frm.btAttend.addEventListener("click", () => {
  //check if array is = 0
  if (patients.length == 0) {
    alert("There are no patients on the waiting list");
    frm.inPatient.focus();
    return;
  }
  const attend = patients.shift()//remove from top of list
  respName.innerText = attend;
  let list = "";
  patients.forEach((patient, i) => (list += `${i + 1}.${patient}\n`));
  respList.innerText = list;
})





/*
const cidades = ["Pelotas"]  // declara e define conteúdo inicial do vetor
cidades.push("São Lourenço")  // adiciona cidade ao final do vetor
console.log(cidades)          // ['Pelotas', 'São Lourenço']
cidades.unshift("Porto Alegre")  // adiciona ao início e desloca as demais
console.log(cidades)   // ['Porto Alegre', 'Pelotas', 'São Lourenço']

for (const cidade of cidades) {
  console.log(cidade)
}

cidades.forEach((cidade, i) => {
  console.log(`${i + 1}ª Cidade: ${cidade}`)
})

const ultima = cidades.pop()  // remove a última cidade do vetor
console.log(cidades)          // ['Porto Alegre', 'Pelotas']
const primeira = cidades.shift()  // remove a primeira e "sobe" as demais
console.log(cidades)              // ['Pelotas']

const letras = ["A", "B", "C", "D"]  // declara e define conteúdo inicial do vetor
const letras2 = letras.slice(-2)     // obtém 2 últimas letras
const letras3 = letras.slice(0, -1)  // obtém do início até final, exceto a última
console.log(letras)                  // ['A', 'B', 'C', 'D']
console.log(letras2)                 // ['C', 'D']
console.log(letras3)                 // ['A', 'B', 'C']
const retira = letras.splice(2, 1)   // remove a partir da posição 2, 1 elemento
console.log(letras)                  // ['A', 'B', 'D']
console.log(retira)                  // ['C']

for (const cidade of cidades) {
  console.log(cidade)
}

cidades.forEach((cidade, i) => {
  console.log(`${i + 1}ª Cidade: ${cidade}`)
})
  */