function somaDeArray(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(somaDeArray([2, 6, 10, 10]))