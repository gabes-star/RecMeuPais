const numberInput = document.getElementById('number-input');
const calculateBtn = document.getElementById('calculate-btn');
const resultsDiv = document.getElementById('results');


calculateBtn.addEventListener('click', () => {
  const number = parseFloat(numberInput.value);
  const abs = Math.abs(number);
  const int = Math.floor(number);
  const nearestInt = Math.round(number);
  const sqrt = Math.sqrt(number);
  const cbrt = Math.cbrt(number);
  const pow2 = Math.pow(number, 2);
  const pow3 = Math.pow(number, 3);


  resultsDiv.innerHTML = `
    <p>Valor absoluto é: ${abs}</p>
    <p>Parte inteira é: ${int}</p>
    <p>Inteiro mais próximo é: ${nearestInt}</p>
    <p>Raiz quadrada é: ${sqrt}</p>
    <p>Raiz cúbica é: ${cbrt}</p>
    <p>Potência de 2 é: ${pow2}</p>
    <p>Potência de 3 é: ${pow3}</p>
  `;
});