function consoantes(str) {
    let vogais = 'aeiouAEIOU'
    let letras = ''
    
    for (let i = 0; i < str.length; i++) {
      if (!vogais.includes(str[i])) {
        letras += str[i]
      }
    }
    
    return letras;
  }
  
  console.log(consoantes("fome"))
  console.log(consoantes("java script é muito chato"))  
  console.log(consoantes("fome"))
  