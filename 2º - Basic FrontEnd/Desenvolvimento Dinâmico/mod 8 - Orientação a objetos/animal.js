class animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`O ${this.nome} faz um som.`);
  }
}

class Cachorro extends animal {
  constructor(nome) {
    super(nome);
  }

  fazerSom() {
    console.log(`${this.nome} faz: au au!`);
  }
}

class Gata extends animal {
  constructor(nome) {
    super(nome);
  }

  fazerSom() {
    console.log(`${this.nome} faz: miau!`);
  }
}

const meuCachorro = new Cachorro("Luno");
const minhaGata = new Gata("Luna");

meuCachorro.fazerSom();
minhaGata.fazerSom();
