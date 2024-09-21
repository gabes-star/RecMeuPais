const numberInput = document.getElementById('numberInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultsDiv = document.getElementById('results');


calculateBtn.addEventListener('click', () => {
  
  const number = parseInt(numberInput.value);

  if (isNaN(number)) {
    resultsDiv.innerHTML = 'Please enter a valid number!';
    return;
  }

  let tableHtml = '';
  for (let i = 1; i <= 10; i++) {
    tableHtml += `${number} x ${i} = ${number * i}<br>`;
  }

  resultsDiv.innerHTML = tableHtml;
});