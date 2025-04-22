
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