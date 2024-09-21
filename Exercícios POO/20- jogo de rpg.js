class Personagem {
    #nome
    #pontosDeVida
    #forca
    #nivel
    #experiencia
    #subirNivel
    constructor(nome, pontosDeVida, forca) {
        if (this.constructor === Personagem) {
            throw new Error("Classe abstrata não pode ser instanciada.");
        }
        this.#nome = nome;
        this.#pontosDeVida = pontosDeVida;
        this.#forca = forca;
        this.#nivel = 1;
        this.#experiencia = 0;
    }

    atacar(inimigo) {
        throw new Error("Método abstrato 'atacar' deve ser implementado.");
    }

    defender(dano) {
        this.#pontosDeVida -= dano;
    }

    ganharExperiencia(exp) {
        this.#experiencia += exp;
        if (this.#experiencia >= this.#nivel * 10) {
            this.#subirNivel();
        }
    }

    subirNivel() {
        this.#nivel++;
        this.#forca += 5;
        this.#pontosDeVida += 10;
        this.#experiencia = 0;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getPontosDeVida() {
        return this.#pontosDeVida;
    }

    setPontosDeVida(pontosDeVida) {
        this.#pontosDeVida = pontosDeVida;
    }

    getForca() {
        return this.#forca;
    }

    setForca(forca) {
        this.#forca = forca;
    }

    getNivel() {
        return this.#nivel;
    }

    setNivel(nivel) {
        this.#nivel = nivel;
    }

    getExperiencia() {
        return this.#experiencia;
    }

    setExperiencia(experiencia) {
        this.#experiencia = experiencia;
    }
}

class Guerreiro extends Personagem {
    #forca
    #nivel
    constructor(nome, pontosDeVida, forca) {
        super(nome, pontosDeVida, forca);
    }

    atacar(inimigo) {
        const dano = this.#forca * this.#nivel;
        inimigo.defender(dano);
        this.ganharExperiencia(5);
    }
}

class Mago extends Personagem {
    #forca
    #nivel
    #mana
    constructor(nome, pontosDeVida, forca, mana) {
        super(nome, pontosDeVida, forca);
        this.#mana = mana;
    }

    atacar(inimigo) {
        if (this.#mana > 0) {
            const dano = this.#forca * this.#nivel * 1.5;
            inimigo.defender(dano);
            this.#mana -= 10;
            this.ganharExperiencia(5);
        }
    }

    getMana() {
        return this.#mana;
    }

    setMana(mana) {
        this.#mana = mana;
    }
}

class Item {
    #nome
    #efeito
    constructor(nome, efeito) {
        this.#nome = nome;
        this.#efeito = efeito;
    }

    usar(personagem) {
        if (this.#efeito === "cura") {
            personagem.setPontosDeVida(personagem.getPontosDeVida() + 20);
        } else if (this.#efeito === "forca") {
            personagem.setForca(personagem.getForca() + 5);
        }
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getEfeito() {
        return this.#efeito;
    }

    setEfeito(efeito) {
        this.#efeito = efeito;
    }
}

class Batalha {
    #personagem1
    #personagem2
    constructor(personagem1, personagem2) {
        this.#personagem1 = personagem1;
        this.#personagem2 = personagem2;
    }

    iniciar() {
        let turno = 0;
        while (this.#personagem1.getPontosDeVida() > 0 && this.#personagem2.getPontosDeVida() > 0) {
            turno % 2 === 0
                ? this.#personagem1.atacar(this.#personagem2)
                : this.#personagem2.atacar(this.#personagem1);
            turno++;
        }

        if (this.#personagem1.getPontosDeVida() > 0) {
            console.log(`${this.#personagem1.getNome()} venceu a batalha!`);
        } else {
            console.log(`${this.#personagem2.getNome()} venceu a batalha!`);
        }
    }
}

let guerreiro = new Guerreiro ('Ri Jeong-hyeok',100, 15)
let mago = new Mago ('Jang Uk',80, 8, 40)
let pocao = new Item ('Poção', 'cura')

guerreiro.atacar(mago)
mago.atacar(guerreiro)

pocao.usar(guerreiro)

let batalha = new Batalha(guerreiro, mago)
batalha.iniciar()