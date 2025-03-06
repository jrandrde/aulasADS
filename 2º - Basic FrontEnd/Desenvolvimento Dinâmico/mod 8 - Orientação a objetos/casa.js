// Definição da classe 'casa'
class casa {
  // Construtor define as propriedades da classe
  constructor(cor, numQuartos, temGaragem) {
    this.cor = cor;
    this.numQuartos = numQuartos;
    this.temGaragem = temGaragem;
  }

  // Metódo para descrever a casa
  descrever() {
    let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuartos} quarto(s)..`;
    if (this.temGaragem) {
      descricao += `e tem uma garagem.`;
    } else {
      descricao += `e não tem garagem.`;
    }
    return descricao;
  }
}

// Criação de objetos (instâncias da classe casa)
const minhaCasa = new casa("verde", 3, true);
const suaCasa = new casa("amarela", 2, false);

// Manipulação dos objetos e exibição
console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());
