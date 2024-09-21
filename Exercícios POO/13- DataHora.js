class Hora {
    #hora
    constructor(hora) {
        this.#hora = hora;
    }

    getHora() {
        return this.#hora;
    }

    setHora(hora) {
        this.#hora = hora;
    }
}

class DataHora {
    #data
    #hora
    constructor(data, hora) {
        this.#data = data;
        this.#hora = new Hora(hora);
    }

    getData() {
        return this.#data;
    }

    setData(data) {
        this.#data = data;
    }

    getHora() {
        return this.#hora.getHora();
    }

    setHora(hora) {
        this.#hora.setHora(hora);
    }
    toString() {
        return `Data: ${this.#data}\nHora: ${this.#hora.getHora()}`
    }
}
const dataHora = new DataHora ('12-5-2022', '10:55')
console.log(dataHora.toString())