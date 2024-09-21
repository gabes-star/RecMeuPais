class pessoa {

  #nome
  #idade
  #altura
  
    construtor(nome, idade, altura) {
      this.#nome = nome;
      this.#idade = idade;
      this.#altura = altura;
    }
  
    toString() {
      return `Nome: ${this.#nome}
  Idade: ${this.#idade} anos
  Altura: ${this.#altura} m`;
    }
  }

  const luísa = new pessoa("Luísa", 18, 1.62);
  
console.log(luísa.toString());
