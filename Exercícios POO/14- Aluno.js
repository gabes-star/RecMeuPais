class Estudante{
 
  #nome
  #matricula
  #curso

    constructor(nome, matricula, curso) {
      this.#nome = nome;
      this.#matricula = matricula;
      this.#curso = curso;
    }
  
    get nome() {
      return this.#nome;
    }
  
    set nome(nome) {
      this.#nome = nome;
    }
  
    get matricula() {
      return this.#matricula;
    }
  
    set matricula(matricula) {
      this.#matricula = matricula;
    }
  
    get curso() {
      return this.#curso;
    }
  
    set curso(curso) {
      this.#curso = curso;
    }
    toString() {
      return `Nome: ${this.#nome}\nMatrícula: ${this.#matricula}\nCurso: ${this.#curso}`
    }
  }

  const estudante = new Estudante('Joyciellen', '123456', 'Informática para Internet');
  console.log(estudante.toString())