// Define the Animal class
class Animal {
     #nome
     #tipo
    constructor(nome, tipo) {
      this.#nome = nome;
      this.#tipo = tipo;
    }
  
    emitSound() {
      throw new Error("O método 'emitSound' deve ser implementado.");
    }

    getNome() {
      return this.#nome;
    }
 
    setNome(nome) {
      this.#nome = nome;
    }
 
    getTipo() {
      return this.#tipo;
    }
  
    setTipo(tipo) {
      this.#tipo = tipo;
    }
  }
  
  class Cachorro extends Animal {
    emitSound() {
      console.log("Woof!");
    }
  }
  
  const meuCachorro = new Cachorro("Max", "Golden Retriever");
  console.log(meuCachorro.getNome()); 
  console.log(meuCachorro.getTipo());
  meuCachorro.emitSound();