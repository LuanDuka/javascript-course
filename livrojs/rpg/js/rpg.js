const frm = document.querySelector("form");
const resp = document.querySelector("pre") ;

const character = {};

frm.addEventListener("submit" ,(e) =>{
  e.preventDefault();
  const name = frm.characterName.value;
  character.name = name;
  frm.className="oculta";
  resp.innerText=`Welcome to a new adventure, ${character.name}!`;

})

