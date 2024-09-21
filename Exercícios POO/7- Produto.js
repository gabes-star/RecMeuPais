class Produto {
    #nome 
    #preço
    #quantia
    constructor(nome, preço, quantia) {
      this.#nome = nome;
      this.#preço = preço;
      this.#quantia = quantia;
    }

    calculateTotal() {
      return this.#preço * this.#quantia;
    }

    get nome() {
      return this.#nome;
    }
 
    set nome(nome) {
      this.#nome = nome;
    }
  
    get preço() {
      return this.#preço;
    }
 
    set preço(preço) {
      this.#preço = preço;
    }
  

    get quantia() {
      return this.#quantia;
    }

    set quantia(quantia) {
      this.#quantia = quantia;
    }
  }
  
  let produto = new Produto("Apple", 1.99, 5);
  console.log(produto.nome); 
  console.log(produto.preço); 
  console.log(produto.quantia); 
  console.log(produto.calculateTotal()); 
  
