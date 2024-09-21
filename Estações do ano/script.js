document.getElementById('seasonButton').addEventListener('click', function() {
    var monthNumber = prompt("Digite o número do mês (1-12) ou o nome do mês:");
    var monthName = getMonthName(monthNumber);
    var result = getSeason(monthName);
    document.getElementById('result').innerText = 'A estação do ano no hemisfério sul é: ' + result + '\nA estação do ano no hemisfério norte é: ' + getSeasonInNorthernHemisphere(monthName);
});


function getMonthName(month) {
    var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (typeof month === "string") {
        month = month.toLowerCase();
        for (var i = 0; i < monthNames.length; i++) {
            if (monthNames[i].toLowerCase() === month) {
                return monthNames[i];
            }
        }
        return "Mês inválido. Por favor, digite um número entre 1 e 12 ou o nome do mês.";
    } else {
        if (month < 1 || month > 12) {
            return "Mês inválido. Por favor, digite um número entre 1 e 12 ou o nome do mês.";
        }
        return monthNames[month - 1];
    }
}


function getSeason(month) {
    var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var monthNumber = monthNames.indexOf(month) + 1;
    var season;
    if (monthNumber >= 3 && monthNumber <= 5) {
        season = "Outono";
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        season = "Inverno";
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        season = "Primavera";
    } else {
        season = "Verão";
    }
    return season;
}


function getSeasonInNorthernHemisphere(month) {
    var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var monthNumber = monthNames.indexOf(month) + 1;
    var season;
    if (monthNumber >= 9 && monthNumber <= 11) {
        season = "Outono";
    } else if (monthNumber >= 12 || monthNumber <= 2) {
        season = "Inverno";
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        season = "Primavera";
    } else {
        season = "Verão";
    }
    return season;
}