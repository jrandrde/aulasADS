class Humano {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  descrever() {
    throw new Error("Este método deve ser implementado por subclasses");
  }

  validar() {
    if (!this.idade) {
      throw new Error("Idade inválida, seu animal.");
    }
  }
}

class Crianca extends Humano {
  constructor(nome, idade, altura, corDeCabelo) {
    super(nome, idade, altura);
    this.corDeCabelo = corDeCabelo;
  }

  descrever() {
    try {
      this.validar();

      let descricao = `Oi, sou o ${this.nome}, tenho ${this.idade} anos e ${this.altura}cm, meu cabelo é ${this.corDeCabelo}`;
      return descricao;
    } catch (error) {
      throw new Error(`Você não sabe sua idade? ${error.message}`);
    }
  }
}

function descreverHumano(humano) {
  try {
    console.log(humano.descrever());
  } catch (error) {
    console.log(error.message);
  }
}

const criancaBurra = new Crianca("Theo", "", 130, "Loiro");
const criancaEsperta = new Crianca("Jr", 11, 150, "moreno");

descreverHumano(criancaBurra);
descreverHumano(criancaEsperta);
