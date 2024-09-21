function areaDoTriangulo(base, altura) {
    let area = (base * altura) / 2
    return Math.round(area * 100) / 100
}

console.log(areaDoTriangulo(4, 5))
console.log(areaDoTriangulo(3, 9)) 