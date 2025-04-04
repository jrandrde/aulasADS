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

  // Método para validação de dados (encapsulamento de exceções)
  validar() {
    if (!this.endereco || !this.tamanho) {
      throw new Error("Dados inválidos para o imóvel.");
    }
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
    try {
      this.validar();
      let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos, de tamanho ${this.tamanho}m²`;

      // Operador ternário (substitui o if else)
      descricao += this.temGaragem
        ? " e possui garagem."
        : " e não possui garagem.";

      return descricao;
    } catch (error) {
      throw new Error(`Erro ao descrever a casa: ${error.message}`);
    }
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
    try {
      this.validar();

      let descricao = `Apartamento localizado em ${this.endereco}, ${this.numeroDoAndar}º andar, de tamanho ${this.tamanho}m²`;

      descricao += this.possuiElevador
        ? " e possui elevador."
        : " e não possui elevador.";

      return descricao;
    } catch (error) {
      throw new Error(`Erro ao descrever a casa: ${error.message}`);
    }
  }
}

// Função para descrever um imóvel (polimorfismo)
function descreverImovel(Imovel) {
  try {
    console.log(Imovel.descrever());
  } catch (error) {
    console.log(error.message);
  }
}

// Criação de objetos (instâncias das classes)
const minhaCasa = new Casa("Rua A, 123", 120, "azul", 3, true);
const meuApartamento = new Apartamento("Avenida B, 456", 85, 7, false);
// Criação de um objeto com dados inválidos para demonstrar o encapsulamento de exceções
const casaInvalida = new Casa("", 0, "verde", 2, false);
const apInvalido = new Apartamento("", 0, "vai corinthians", true);

// Manipulação dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);
descreverImovel(casaInvalida);
descreverImovel(apInvalido);
