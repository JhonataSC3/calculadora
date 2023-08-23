
let number = 0;
let option;

while(number != 5) {
  number = Number(prompt(`
  olá usuário! Digite o número da operação desejada
  1. soma
  2. subtração
  3. multiplicação
  4. divisão
  5. finalizar.`));

  if(number < 5) {
  let numberOne = Number(prompt(`
  Digite o valor do primeiro número!`));
  let numberTwo = Number(prompt(`
  Digite o valor do segundo número!`));
  

function sum() {
  result = numberOne + numberTwo
  window.alert(result)
}

function min() {
  result = numberOne - numberTwo
  window.alert(result)
}

function mult() {
  result = numberOne * numberTwo
  window.alert(result)
}

function div() {
  result = numberOne / numberTwo
  window.alert(result)
}


switch(number) {
  case 1: 
    sum()
    break;
  case 2: 
    min()
    break;
  case 3:
    mult()
    break;
  case 4:
    div()
    break;
}
}
}


