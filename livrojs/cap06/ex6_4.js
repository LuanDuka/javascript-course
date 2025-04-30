const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const children = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = frm.inName.value;
  const age = Number(frm.inAge.value);

  children.push({ name, age });
  frm.reset(); //clean form fields
  frm.inName.focus();
  frm.btList.dispatchEvent(new Event("click"));
})

frm.btList.addEventListener("click", () => {
  if (children.length == 0) {
    alert("There're no children on the list");
    return;
  }

  let list = "";
  for (const child of children) {
    const { name, age } = child;
    list += name + " - " + age + " years\n";
  }
  resp.innerText = list;
})

frm.btSummarize.addEventListener("click", () => {
  if (children == 0) {
    alert("There're no children on the list");
  }
  const copy = [...children];
  copy.sort((a, b) => a.age - b.age);

  let resume = ""; //to concatenate output
  let aux = copy[0].age;
  let names = [];

  for (const child of copy) {
    const { name, age } = child;

    if (age == aux) {
      names.push(name)
    } else {
      resume += aux + " year(s):" + names.length + "child(ren) - "
      resume += ((names.length / copy.length) * 100).toFixed(2) + "%\n"
      resume += "(" + names.join(", ") + ")\n\n"

      aux = age;
      names = [];
      names.push(name)
    }
  }
  resume += aux + " year(s):" + names.length + "child(ren) - "
  resume += ((names.length / copy.length) * 100).toFixed(2) + "%\n"
  resume += "(" + names.join(", ") + ")\n\n"

  resp.innerText = resume;

})