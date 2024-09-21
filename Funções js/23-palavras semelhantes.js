function semelhantes(palavras, arrayDePalavras) {
    return arrayDePalavras.filter(w => w.toLowerCase().includes(palavras.toLowerCase()))
  }
  
console.log(semelhantes("fo", ["fome", "folheto", "formiga", "filomena"]))