class Gato {
  #nome
  #raca
  #idade

  constructor(nome, raca, idade) {
      this.#nome = nome;
      this.#raca = raca;
      this.#idade = idade;
  }

  meow() {
      return "Miau!";
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

  set raca(raca) {
      this.#raca = raca;
  }

  get idade() {
      return this.#idade;
  }

  set idade(idade) {
      this.#idade = idade;
  }
}

const meuGato = new Gato("Rubi", "Siamese", 3);
console.log(meuGato.meow()); 
console.log(meuGato.nome); 
console.log(meuGato.raca); 
console.log(meuGato.idade); 