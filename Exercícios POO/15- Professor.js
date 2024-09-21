class Professor {
    #nome
    #departamento
    #titulacao
    constructor(nome, departamento, titulacao) {
      this.#nome = nome;
      this.#departamento = departamento;
      this.#titulacao = titulacao;
    }

    get nome() {
      return this.#nome;
    }

    set nome(nome) {
      this.#nome = nome;
    }

    get departamento() {
      return this.#departamento;
    }

    set departamento(departamento) {
      this.#departamento = departamento;
    }

    get titulacao() {
      return this.#titulacao;
    }

    set titulacao(titulacao) {
      this.#titulacao = titulacao;
    }
    toString() {
      return `Nome: ${this.#nome}\nTitulacao: ${this.#titulacao}\nDepartamento: ${this.#departamento}`
    }
  }
const prof = new Professor('Vital Au Au', 'Matemática', 'Professor');
console.log(prof.toString())
 