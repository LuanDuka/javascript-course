const ages = [12, 16, 15, 17, 14];
let older = false;
for (const age of ages) {
  if (age > 18) {
    console.log(age);
    older = true;
  }
}
if (!older) {
  console.log("There are no ages over 18 on the list")
}