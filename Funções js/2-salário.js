function salario(hora, valor) {
    const total = hora * valor 
    return "Salário igual a R$" + total
}

console.log(salario(100, 10))