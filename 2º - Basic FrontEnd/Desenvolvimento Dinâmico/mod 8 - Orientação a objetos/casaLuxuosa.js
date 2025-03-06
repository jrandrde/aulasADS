// Classe base "casa"
class casa {
  // Construtor define as propriedades da classe
  constructor(cor, numQuartos, temGaragem) {
    // Propriedades privadas utilizando convenção de underline
    this._cor = cor;
    this._numQuartos = numQuartos;
    this._temGaragem = temGaragem;
  }

  //Métodos getters e setters para acessar e modificar as propriedades
  get cor() {
    return this._cor;
  }

  set cor(novaCor) {
    this._cor = novaCor;
  }

  get numQuartos() {
    return this._numQuartos;
  }

  set numQuartos(novoNumQuatos) {
    this._numQuartos = novoNumQuatos;
  }

  get temGaragem() {
    return this._temGaragem;
  }

  set temGaragem(novoTemGaragem) {
    this._temGaragem = novoTemGaragem;
  }

  // Metódo para descrever a casa
  descrever() {
    let descricao = `Esta casa é de cor ${this._cor}, tem ${this._numQuartos} quarto(s)..`;
    if (this._temGaragem) {
      descricao += `e tem uma garagem.`;
    } else {
      descricao += `e não tem garagem.`;
    }
    return descricao;
  }
}

// Classe derivada "CasaLuxuosa" que herda de "casa"
class CasaLuxuosa extends casa {
  constructor(cor, numQuartos, temGaragem, temPiscina) {
    // Chama o construtor da classe base
    super(cor, numQuartos, temGaragem);

    // Propriedade adicional específica da classe derivada
    this._temPiscina = temPiscina;
  }

  // Getter e setter para a nova propriedade
  get temPiscina() {
    return this._temPiscina;
  }

  set temPiscina(novoTemPiscina) {
    this._temPiscina = novoTemPiscina;
  }

  //Sobrescrita do método descrever para incluir a piscina
  descrever() {
    let descricao = super.descrever(); // Chama o método descrever da classe base
    if (this._temPiscina) {
      descricao += " Também tem uma piscina.";
    } else {
      descricao += " Não tem piscina.";
    }
    return descricao;
  }
}

// Criação de objetos (instâncias da classe casa)
const minhaCasa = new casa("verde", 3, true);
const casaLuxuosa = new CasaLuxuosa("dourada", 7, true, true);

// Manipulação dos objetos e exibição
console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());
