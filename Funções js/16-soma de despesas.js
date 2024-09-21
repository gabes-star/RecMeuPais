function totalDeDespesas(produto) {
    let total = 0
    produtos.forEach(produto => {
      total += produto.valor
    })
    return total
  }
  const produtos = [
    { nome: "salgadinho", categoria: "comida", valor: 6.00 },
    { nome: "blusa", categoria: "Vestimenta", valor: 29.90 },
    { nome: "passagem do vem", categoria: "transporte", valor: 100.00 }
  ]
  const totalExpenses = totalDeDespesas(produtos)
  
  console.log(totalDeDespesas())