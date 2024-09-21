class Cachorro {
    #nome 
    #raca
    #idade 
    constructor(nome, raca, idade) {
      this.#nome = nome;
      this.#raca = raca;
      this.#idade = idade;
    }
  
    bark() {
      return "Au Au!";
    }

    get nome() {
      return this.#nome;
    }

    set nome(nome) {
      this.#nome = nome;
    }
 
    get raca() {
      return this.#raca;
    }
  
    set raca(raça) {
      this.#raca = raça;
    }

    get idade() {
      return this.#idade;
    }

    set idade(idade) {
      this.#idade = idade;
    }
  }
  
  let meuCachorro = new Cachorro("Buddy", "Golden Retriever", 3);
  console.log(meuCachorro.nome); 
  console.log(meuCachorro.raca);  
  console.log(meuCachorro.idade);  
  console.log(meuCachorro.bark()); 
  
  