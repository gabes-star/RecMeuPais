function contadorDePalavras(str) {
    if (str.trim() === "") {
      return 0
    } else {
      return str.split(" ").length
    }
  }

console.log(contadorDePalavras("gabi é legal"))
console.log(contadorDePalavras("informática é chato"))
console.log(contadorDePalavras("brenda é pequena demais, meu Jesus!")) 
console.log(contadorDePalavras("joyce e celina são camaradas"))
console.log(contadorDePalavras("pra sempre brendam_8!"))