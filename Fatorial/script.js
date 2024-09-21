document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        var number = parseInt(document.getElementById('numberInput').value);
        if (number < 1 || number > 21) {
            alert("Por favor, escolha um número entre 1 e 21.");
            return;
        }
        var result = factorial(number);
        document.getElementById('result').innerText = 'O fatorial é ' + result;
    });
});


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial (n - 1);
    }
}