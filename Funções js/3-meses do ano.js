function mesesDoAno(numeroDoMes) {
    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];

    if (numeroDoMes < 1 || numeroDoMes > 12 ){
        return "Número do mês inválido."
    }

    return meses[numeroDoMes -1]
}

console.log(mesesDoAno(8))