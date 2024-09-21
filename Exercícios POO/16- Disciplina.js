class Disciplina {
    
  #nome
  #codigo
  #cargaHoraria

    constructor(nome, codigo, cargaHoraria) {
      this.#nome = nome;
      this.#codigo = codigo;
      this.#cargaHoraria = cargaHoraria;
    }
  
    get nome() {
      return this.#nome;
    }
  
    set nome(nome) {
      this.#nome = nome;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    get cargaHoraria() {
      return this.#cargaHoraria;
    }
  
    set cargaHoraria(cargaHoraria) {
      this.#cargaHoraria = cargaHoraria;
    }
  }
  
  let disciplina = new Disciplina("Matemática", "MAT101", 60);
  console.log(disciplina.nome); 
  console.log(disciplina.codigo); 
  console.log(disciplina.cargaHoraria);
  
