class Endereco {
   
  #rua
  #numero
  #complemento
  #bairro
  #cidade
  #estado
  #cep

    constructor(rua, numero, complemento, bairro, cidade, estado, cep) {
      this.#rua = rua;
      this.#numero = numero;
      this.#complemento = complemento;
      this.#bairro = bairro;
      this.#cidade = cidade;
      this.#estado = estado;
      this.#cep = cep;
    }
  
    get rua() {
      return this.#rua;
    }
  
    set rua(rua) {
      this.#rua = rua;
    }
  
    get numero() {
      return this.#numero;
    }
  
    set numero(numero) {
      this.#numero = numero;
    }
  
    get complemento() {
      return this.#complemento;
    }
  
    set complemento(complemento) {
      this.#complemento = complemento;
    }
  
    get bairro() {
      return this.#bairro;
    }
  
    set bairro(bairro) {
      this.#bairro = bairro;
    }
  
    get cidade() {
      return this.#cidade;
    }
  
    set cidade(cidade) {
      this.#cidade = cidade;
    }
  
    get estado() {
      return this.#estado;
    }
  
    set estado(estado) {
      this.#estado = estado;
    }
  
    get cep() {
      return this.#cep;
    }
  
    set cep(cep) {
      this.#cep = cep;
    }
     toString() {
      return `Rua: ${this.#rua}\nNúmero: ${this.#numero}\nComplemento: ${this.#complemento}\nBairro: ${this.bairro}\nCidade: ${this.cidade}\nEstado: ${this.estado}\nCep: ${this.cep}`
  }
}
  const endereco = new Endereco("Delmira Luna", 160, "Praça do Zumbi", "Zumbi do Pacheco", "Jaboatão", "PE", "10001");
  console.log(endereco.toString())

 