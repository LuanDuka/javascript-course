const prompt=require("prompt-sync")()
console.log("Enter the withdrawal amounts or 0 to exit.")

const withdrawals =[]

do{

  const value = Number(prompt("Withdraw $: "))

  if(value==0){
    break
  }

  withdrawals.push(value)

  if(value%10==0){
    console.log("Withdrawal completed successfully.")
  }else{
    console.log("Error... Invalid amount (must be a multple of 10).")
  }

}while(true)

console.log("\nValid withdrawals")
console.log("-".repeat(40))

const validWithd=withdrawals.filter(withdrawal=>withdrawal%10==0)

for(const withdrawal of validWithd){
  console.log(withdrawal.toFixed(2))
}

console.log("-".repeat(40))

const totalWithdrawal=validWithd.reduce((total,withdrawal)=>total+withdrawal,0)
console.log(`Total withdrawals: $ ${totalWithdrawal.toFixed(2)}`)

const invaldWithd=withdrawals.length -validWithd.length
console.log(`\nNº of withdrawal attempts (invalid withdrawals): ${invaldWithd}`)