class ContaCorrente {

  #numeroDaConta
  #saldo
  
  constructor(numeroDaConta, saldo) {
    this.#numeroDaConta = numeroDaConta;
    this.#saldo = saldo;
  }
  
  get saldo() {
    return this.#saldo;
  }
  
  set saldo(saldo) {
    this.#saldo = saldo;
  }
  
  deposito(quantia) {
    this.#saldo += quantia;
    }

  saque(quantia) {
    if (quantia> 0 && quantia <= this.#saldo) {
      this.#saldo -= quantia;
    } else if (quantia<= 0) {
      throw new Error("O saque deve ser maior que zero");
    } else {
      throw new Error("Saldo insuficiente");
    }
  }
  toString() {
    return `Conta: ${this.#numeroDaConta}\nSaldo: R$ ${this.#saldo.toFixed(2)}`;
  }}

let conta = new ContaCorrente(12345, 1000.0);
console.log(conta.toString());

conta.deposito(500.0);
console.log(conta.toString());

conta.saque(200.0);
console.log(conta.toString());