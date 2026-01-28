const prompt=require("prompt-sync")()
console.log("Enter the students. Then, type ‘End’ in the name field to exit.")
const students=[] // declare vector
do{
  const name = prompt("Name: ") // read name
  if(name=="End"){ // before reading the grade, check
    break // exit the repeat
  }
  const grade=Number(prompt("Grade:")) // read grade
  students.push({name,grade}) // add date to the object vector
  console.log("Ok! Student registered...") 
}while(true)
  console.log("-".repeat(40)) // display 40
  const higher = students.reduce((a,b)=> Math.max(a,b.grade),0) // gets the highest note
  console.log(`Highest grade: ${higher}`) 
  if(higher >=7){
    const highlights=students.filter(student => student.grade == higher)
    for(const highlight of highlights){
console.log(`-${highlight.name}`)
    }
  }else{
    console.log("There are no hightlight students in the class")
  }