class Cliente {
#name
#CPF
#birthDate
#address
#email
#occupation
#annualIncome
#educationlevel
  
constructor(name, CPF, birthDate, address, email, occupation, annualIncome, educationlevel) {
  this.#name = name;
  this.#CPF = CPF;
  this.#birthDate = birthDate;
  this.#address = address;
  this.#email = email;
  this.#occupation = occupation;
  this.#annualIncome = annualIncome;
  this.#educationlevel = educationlevel;
}

getRelatorio() {
  return `Nome: ${this.#name}\nCPF: ${this.#CPF}\nData de nascimento: ${this.#birthDate}\nEndereço: ${this.#address}\nE-mail: ${this.#email}\nOcupação: ${this.#occupation}\nRenda anual: ${this.#annualIncome}\nNível de educação: ${this.#educationlevel}`
}

get name() {
  return this.#name
}
set name(name) {
  this.#name = name
}
get CPF () {
  return this.#CPF
}
set CPF(CPF) {
  this.#CPF = CPF
}
get birthDate() {
  return this.#birthDate
}
set birthDate(birthDate) {
  this.#birthDate = birthDate
}
get address() {
  return this.#address
}
set address(address) {
  this.#address = address
}
get email() {
  return this.#email
}
set email(email) {
  this.#email = email
}
get occupation() {
  return this.#occupation
}
set occupation(occupation) {
  this.#occupation = occupation
}
get annualIncome() {
  return this.#annualIncome
}
set annualIncome(annualIncome) {
  this.#annualIncome = annualIncome
}
get educationlevel() {
  return this.#educationlevel
}
set educationlevel(educationlevel) {
  this.#educationlevel = educationlevel
}
}

let cliente = new Cliente('Joyciellen', 12345678934, '03/2','Delmira Luna', 'joyciellen.barbosa@aluno.senai.br', 'médica', '50.000', 'doutorado')
console.log(cliente.getRelatorio())
