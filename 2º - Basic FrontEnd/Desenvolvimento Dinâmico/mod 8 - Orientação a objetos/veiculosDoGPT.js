class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  informacoes() {
    throw new Error("Este método deve ser implementado por subclasses");
  }
}

class carro extends Veiculo {
  constructor(marca, modelo, ano, numPortas) {
    super(marca, modelo, ano);
    this.numPortas = numPortas;
  }

  informacoes() {
    let descricao = `Carro muito conservado da marca ${this.marca} ! Esse ${this.modelo} com ${this.numPortas} portas ano ${this.ano} é muito confortável.`;
    return descricao;
  }
}

class moto extends Veiculo {
  constructor(marca, modelo, ano, tipoDePartida) {
    super(marca, modelo, ano);
    this.tipoDePartida = tipoDePartida;
  }

  informacoes() {
    let descricao = `Essa é uma ${this.marca} ${this.modelo} ano ${this.ano} com partida ${this.tipoDePartida}`;
    return descricao;
  }
}

function mostrarInformacoesVeiculo(veiculo) {
  console.log(veiculo.informacoes());
}

const meuCarro = new carro("citroen", "C3", 2009, 4);
const minhaMoto = new moto("honda", "CG 160", 2020, "elétrica");

mostrarInformacoesVeiculo(meuCarro);
mostrarInformacoesVeiculo(minhaMoto);
