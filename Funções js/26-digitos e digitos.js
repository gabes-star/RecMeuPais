function escolherDigitos(arr, digitos) {
    return arr.filter(num => {
        return Math.abs(num).toString().length === digitos
    })
}

console.log(escolherDigitos([1, 12, 123, 1234, 19], 2))
console.log(escolherDigitos([-1, -12, -183, -123, -12345], 3))
console.log(escolherDigitos([1, 12, 1253, 1234, 12345], 4))