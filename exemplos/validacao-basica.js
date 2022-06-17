let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button = document.getElementById('button');

function somar(numero1, numero2) {
  if (numero1 === 'number' && numero2 === 'number') {
    return numero1 + numero2;
  } else {
    return Number(numero1) + Number(numero2);
  }
}

button.addEventListener('click', () => {
  console.log(somar(input1.value, input2.value))
});