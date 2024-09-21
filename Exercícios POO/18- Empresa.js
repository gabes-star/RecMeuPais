  class Empresa {
    #nome 
    #cnpj

    constructor(nome, cnpj) {
      this.#nome = nome;
      this.#cnpj = cnpj;
    }
  
    get nome() {
      return this.#nome;
    }
  
    set nome(nome) {
      this.#nome = nome;
    }
  
    get cnpj() {
      return this.#cnpj;
    }
  
    set cnpj(cnpj) {
      this.#cnpj = cnpj;
    }

    toString() {
        return `Nome: ${this.#nome}\nCnpj: ${this.#cnpj}`
    }
  }

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

          class Data {
            #dia
            #mes
            #ano
           constructor(dia, mes, ano) {
             this.#dia = dia;
             this.#mes = mes;
             this.#ano = ano;
           }
         
           getDia() {
             return this.#dia;
           }
       
           setDia(dia) {
             this.#dia = dia;
           }
       
           getMes() {
             return this.#mes;
           }
       
           setMes(mes) {
             this.#mes = mes;
           }
       
           getAno() {
             return this.#ano;
           }
       
           setAno(ano) {
             this.#ano = ano;
           }

        toString() {
            return `Data de Criação: ${this.#dia}/${this.#mes}/${this.#ano}`;
        }

    }

    const endereco = new Endereco("Delmira Luna", 160, "Praça do Zumbi", "Zumbi do Pacheco", "Jaboatão", "PE", "10001");
    console.log(endereco.toString())
        
    const data = new Data(12, 5, 2022);
    console.log(data.toString()); 

    const empresa = new Empresa("RECmeuPAÍS", "00000");
    console.log(empresa.toString()); 
