class Veiculo {

    #placa
    #modelo
    #capacidade
    #passageirosAtuais
  
    constructor(placa, modelo, capacidade) {
      this.#placa = placa;
      this.#modelo = modelo;
      this.#capacidade = capacidade;
      this.#passageirosAtuais = 0;
    }
  
    get placa() {
      return this.#placa;
    }
  
    set placa(placa) {
      this.#placa = placa;
    }
  
    get modelo() {
      return this.#modelo;
    }
  
    set modelo(modelo) {
      this.#modelo = modelo;
    }
  
    get capacidade() {
      return this.#capacidade;
    }
  
    set capacidade(capacidade) {
      this.#capacidade = capacidade;
    }
  
    get passageirosAtuais() {
      return this.#passageirosAtuais;
    }
  
    adicionarPassageiro() {
      if (this.#passageirosAtuais < this.#capacidade) {
        this.#passageirosAtuais++;
      } else {
        throw new Error("Capacidade do veículo excedida!");
      }
    }
  
    removerPassageiro() {
      if (this.#passageirosAtuais > 0) {
        this.#passageirosAtuais--;
      } else {
        throw new Error("Não há passageiros no veículo!");
      }
    }
  }
  
  class Onibus extends Veiculo {
    #linha
  
    constructor(placa, modelo, capacidade, linha) {
      super(placa, modelo, capacidade);
      this.#linha = linha;
    }
  
    get linha() {
      return this.#linha;
    }
  
    set linha(linha) {
      this.#linha = linha;
    }
  }
  
  class Metro extends Veiculo {
    #numeroDeVagoes
  
    constructor(placa, modelo, capacidade, numeroDeVagoes) {
      super(placa, modelo, capacidade);
      this.#numeroDeVagoes = numeroDeVagoes;
    }
  
    get numeroDeVagoes() {
        return this.#numeroDeVagoes
    } 
}

const onibus = new Onibus('QYZ2103', 'Mercedes', 48, 'Linha 1');
console.log(onibus.placa); 
console.log(onibus.modelo); 
console.log(onibus.capacidade);
console.log(onibus.linha); 

onibus.adicionarPassageiro();
console.log(onibus.passageirosAtuais); 

const metro = new Metro('CJA3000','Trem', 100, 3);
console.log(metro.placa); 
console.log(metro.modelo); 
console.log(metro.capacidade); 
console.log(metro.numeroDeVagoes); 