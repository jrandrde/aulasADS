// Classe base "Imóvel"
class Imovel {
  constructor(endereco, tamanho) {
    this.endereco = endereco;
    this.tamanho = tamanho;
  }

  // Método abstrato para descrever o imóvel (deve ser implementado nas subclasses)
  descrever() {
    throw new Error("Este método deve ser implementado por subclasses");
  }
}

// Classe derivada "Casa" que herda de "Imovel"
class Casa extends Imovel {
  constructor(endereco, tamanho, cor, numeroDeQuartos, temGaragem) {
    super(endereco, tamanho);
    this.cor = cor;
    this.numeroDeQuartos = numeroDeQuartos;
    this.temGaragem = temGaragem;
  }

  // Implementação do metódo descrever
  descrever() {
    let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos, de tamanho ${this.tamanho}m²`;

    // Operador ternário (substitui o if else)
    descricao += this.temGaragem
      ? " e possui garagem."
      : " e não possui garagem.";

    return descricao;
  }
}

// Classe derivada "Apartamento" que herda de "Imovel"
class Apartamento extends Imovel {
  constructor(endereco, tamanho, numeroDoAndar, possuiElevador) {
    super(endereco, tamanho);
    this.numeroDoAndar = numeroDoAndar;
    this.possuiElevador = possuiElevador;
  }

  // Implementação do metódo para descrever
  descrever() {
    let descricao = `Apartamento localizado em ${this.endereco}, ${this.numeroDoAndar}º andar, de tamanho ${this.tamanho}m²`;

    descricao += this.possuiElevador
      ? " e possui elevador."
      : " e não possui elevador.";

    return descricao;
  }
}

// Função para descrever um imóvel (polimorfismo)
function descreverImovel(Imovel) {
  console.log(Imovel.descrever());
}

// Criação de objetos (instâncias das classes)
const minhaCasa = new Casa("Rua A, 123", 120, "azul", 3, true);
const meuApartamento = new Apartamento("Avenida B, 456", 85, 7, false);

// Manipulação dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);
