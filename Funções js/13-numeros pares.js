function numerosPares(arr) {
  return arr.filter((num) => num % 2 === 0)
}

console.log(numerosPares([0, 2, 3, 4, 5, 6, 12, 36, 97, 51]))