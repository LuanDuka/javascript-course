let calculation = '';

function updateCalculation(value) {
  if (value === '=') {
    eval(calculation);
    calculation = eval(calculation);
    console.log(calculation);

  } else if (value === 'clean') {
    calculation = '';
    console.log(calculation);

  }
  else if (calculation += value) {
    console.log(calculation);

  }

}