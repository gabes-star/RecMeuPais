class Calculadora {
    soma(a, b) {
      return a + b;
    }

    subtracao(a, b) {
      return a - b;
    }

    multiplicacao(a, b) {
      return a * b;
    }

    divisao(a, b) {
      if (b === 0) {
        throw new Error("Não é possível dividir por zero!");
      }
      return a / b;
    }
  }

const calculadora = new Calculadora();
console.log(calculadora.soma(2, 3)); 
console.log(calculadora.subtracao(5, 2)); 
console.log(calculadora.multiplicacao(4, 5)); 
console.log(calculadora.divisao(10, 2)); 