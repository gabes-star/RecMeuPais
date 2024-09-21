
class Retangulo { 
#base 
#altura 

    constructor(base, altura) {
      this.#base = base;
      this.#altura = altura;
    }

    getBase() {
      return this.#base;
    }

    setBase(base) {
      this.#base = base;
    }
 
    getAltura() {
      return this.#altura;
    }
     
    setAltura(altura) {
      this.#altura = altura;
    }
  
    calculateArea() {
      return this.#base * this.#altura;
    }
 
    calculatePerimetro() {
      return 2 * (this.#base + this.#altura);
    }
  }
  
  let retangulo = new Retangulo(5, 10);
  console.log(`Base: ${retangulo.getBase()}`);
  console.log(`Altura: ${retangulo.getAltura()}`);
  console.log(`Area: ${retangulo.calculateArea()}`);
  console.log(`Perimetro: ${retangulo.calculatePerimetro()}`);

  retangulo.setBase(7);
  retangulo.setAltura(12);
  console.log(`Nova Base: ${retangulo.getBase()}`);
  console.log(`Nova Altura: ${retangulo.getAltura()}`);
  console.log(`Nova Area: ${retangulo.calculateArea()}`);
  console.log(`Novo Perimetro: ${retangulo.calculatePerimetro()}`);
  


