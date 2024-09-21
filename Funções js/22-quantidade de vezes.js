function quantidade(char, str) {
    let contar = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        contar++
      }
    }
    return contar
  }

console.log(quantidade('L', 'loide Forger'))  
console.log(quantidade('o', 'Yor Forger'))  
console.log(quantidade('Y', 'Anya Forger'))  
console.log(quantidade('B', 'Bond Forger'))
console.log(quantidade('a', 'Rainha das lágrimas'))
