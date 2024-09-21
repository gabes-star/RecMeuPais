document.getElementById('gerarBtn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var resultList = document.getElementById('Resultado');
    var listItem = document.createElement('li');
    listItem.innerText = 'Estou pensando no número ' + randomNumber;
    resultList.appendChild(listItem);
});


document.getElementById('limparBtn').addEventListener('click', function() {
    var resultList = document.getElementById('Resultado');
    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
    }
});