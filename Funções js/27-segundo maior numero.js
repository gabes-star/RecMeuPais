function acharOSegundoMaior(arr) {
    if (arr.length < 2) {
      return null
    }
  
    let max = -Infinity
    let segundoMaior = -Infinity
  
    for (let num of arr) {
      if (num > max) {
        segundoMaior = max
        max = num
      } else if (num > segundoMaior && num !== max) {
        segundoMaior = num
      }
    }
  
    return segundoMaior
  }

console.log(acharOSegundoMaior([3, 5, 0, 7, 10, 9]))