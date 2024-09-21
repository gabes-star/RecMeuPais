class Livro {

  #titulo
  #autor
  #editora
  #anoDePublicacao

    constructor(titulo, autor, editora, anoDePublicacao) {
      this.#titulo = titulo;
      this.#autor = autor;
      this.#editora = editora;
      this.#anoDePublicacao = anoDePublicacao;
    }
  
    get titulo() {
      return this.#titulo;
    }
  
    set titulo(titulo) {
      this.#titulo = titulo;
    }
  
    get autor() {
      return this.#autor;
    }
  
    set autor(autor) {
      this.#autor = autor;
    }
  
    get editora() {
      return this.#editora;
    }
  
    set editora(editora) {
      this.#editora = editora;
    }
  
    get anoDePublicacao() {
      return this.#anoDePublicacao;
    }
  
    set anoDePublicacao(anoDePublicacao) {
      this.#anoDePublicacao = anoDePublicacao;
    }
  }
  
  let livro = new Livro("A seleção", "Kiera Cass", "Schwarcz", 2012);
  console.log(livro.titulo); 
  console.log(livro.autor);
  console.log(livro.editora); 
  console.log(livro.anoDePublicacao); 
  
