const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const children = []; //declare global array test

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent send the form

  const name = frm.inName.value; //get field content
  const age = Number(frm.inAge.value);

  children.push({ name, age }); //add data to the array
  frm.reset(); //clean form fields
  frm.inName.focus(); //go to form field
  frm.btList.dispatchEvent(new Event("click")); //make the click event
})

frm.btList.addEventListener("click", () => {
  if (children.length == 0) { //if empity shows an alert
    alert("There're no children on the list");
    return;
  }

  let list = ""; //to concatenate children list
  for (const child of children) {
    const { name, age } = child; //destructure the object
    list += name + " - " + age + " years\n";
  }
  resp.innerText = list; // show the list
})

frm.btSummarize.addEventListener("click", () => {
  if (children == 0) {
    alert("There're no children on the list");
  }
  const copy = [...children]; //create a copy of children array
  copy.sort((a, b) => a.age - b.age); //order by age

  let resume = ""; //to concatenate output
  let aux = copy[0].age; //lowest age from the array
  let names = []; //to insert names of each age

  for (const child of copy) { //loop through children copy array
    const { name, age } = child;

    if (age == aux) { //if same age
      names.push(name) //add to names array

    } else { //if is not, makes a summarize to each age
      resume += aux + " year(s):" + names.length + "child(ren) - "
      resume += ((names.length / copy.length) * 100).toFixed(2) + "%\n"
      resume += "(" + names.join(", ") + ")\n\n"

      aux = age; //gets the new age in order
      names = []; //clean array names
      names.push(name) //adds the first of the new age
    }
  }
  //add last child
  resume += aux + " year(s):" + names.length + "child(ren) - "
  resume += ((names.length / copy.length) * 100).toFixed(2) + "%\n"
  resume += "(" + names.join(", ") + ")\n\n"

  resp.innerText = resume;

})