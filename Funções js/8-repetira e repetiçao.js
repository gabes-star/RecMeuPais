function repetira(elemento, vezes) {
    let resultado = []
    for (let i = 0; i < vezes; i++){
        resultado.push(elemento)
    }
    return resultado
}

console.log(repetira("estou com fome", 8500000))
