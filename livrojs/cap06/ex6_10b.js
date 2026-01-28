const prompt=require("prompt-sync")()
console.log("Enter the costumers in order of arrival or type 'End' int he name field to exit.")
const clients =[]
do{
  const name = prompt("Name: ")
  if(name =="End"){
    break
  }
  const age=Number(prompt("Age: "))
  clients.push({name,age})
  console.log("Ok! Customer added to the queue…")
  }while(true)
    console.log("\nPriority Queue")
    console.log("-".repeat(40))
    const prioQueue=clients.filter(client=>client.age>=60)
    prioQueue.forEach((queue,i)=>{
      console.log(`${i+1}.${queue.name}`)
    })
    console.log("\nRegular Queue")
    console.log("-".repeat(40))
    const regularQueue=clients.filter(client=>client.age<60)
    regularQueue.forEach((queue,i)=>{
      console.log(`${i+1}.${queue.name}`)
    })
