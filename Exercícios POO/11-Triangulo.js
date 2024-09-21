class Triangulo {

    #sideA
    #sideB
    #sideC
    
    constructor(sideA, sideB, sideC) {
      this.#sideA = sideA;
      this.#sideB = sideB;
      this.#sideC = sideC;
    }
  
    calculateArea() {
      const semiPerimeter = (this.#sideA + this.#sideB + this.#sideC) / 2;
      const area = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.sideA) *
          (semiPerimeter - this.sideB) *
          (semiPerimeter - this.sideC)
      );
      return area;
    }
  
    calculatePerimeter() {
      return this.#sideA + this.#sideB + this.#sideC;
    }
  
    get sideA() {
      return this.#sideA;
    }
  
    set sideA(value) {
      this.#sideA = value;
    }
  
    get sideB() {
      return this.#sideB;
    }
  
    set sideB(value) {
      this.#sideB = value;
    }
  
    get sideC() {
      return this.#sideC;
    }
  
    set sideC(value) {
      this.#sideC = value;
    }
  }

  const triangulo = new Triangulo(2, 1, 2);
console.log(triangulo.calculateArea());
console.log(triangulo.calculatePerimeter()); 

triangulo.sideA = 7;
console.log(triangulo.sideA); 