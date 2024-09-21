function mediaDeNumeros(numeros) {
    if (!numeros || numeros.length === 0) {
      return 0
    }
  
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i]
    }
  
    return soma / numeros.length
  }

console.log(mediaDeNumeros([2, 2, 2, 2, 2]))