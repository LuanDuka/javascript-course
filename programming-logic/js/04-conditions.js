const formNotes = document.querySelector("form");
const gradeAverage = document.querySelector("#gradeAverage");
const message = document.querySelector("#message")

formNotes.addEventListener("submit", (e) => {
  const name = formNotes.inStudentName.value;
  const firstGrade = Number(formNotes.inFirstGrade.value);
  const secondGrade = Number(formNotes.inSecondGrade.value);
  const average = (firstGrade + secondGrade) / 2;
  const cutoffGrade = 7;

  gradeAverage.innerText = `Média das Notas ${average.toFixed(2)}`

  if (average >= cutoffGrade) {
    message.innerText = `Parabéns ${name}! Você foi aprovado(a)`
    message.style.color = "blue"
  } else if (average >= 4) {
    message.innerText = `Atenção ${name}. Você está de exame`
    message.style.color = "orange"
  } else {
    message.innerText = `Ops ${name}! Você foi reprovado(a)`
    message.style.color = "red"
  }
  e.preventDefault();
})