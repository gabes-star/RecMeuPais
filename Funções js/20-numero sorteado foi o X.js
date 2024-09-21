function sorteioDeNumero(input) {
    const escrevaUmNumero = Math.floor(Math.random() * 10) + 1
    if (input === escrevaUmNumero) {
      return `Eba! Você acertou o número!!! ${escrevaUmNumero}`
    } else {
      return `Que pena! Você errou o número, tenta a sorte em outro canto. ${escrevaUmNumero}`
    }
  }

console.log(sorteioDeNumero(1))
console.log(sorteioDeNumero(3))
console.log(sorteioDeNumero(5))