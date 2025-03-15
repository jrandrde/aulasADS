class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  calcularBonus() {
    throw new Error("Este método deve ser implementado por subclasses");
  }
}

class Gerente extends Funcionario {
  constructor(nome, cargo, salario, equipe) {
    super(nome, cargo, salario);
    this.equipe = equipe;
  }

  calcularBonus() {
    let bonus = this.salario * 0.2;
    return `${this.nome} é ${this.cargo} da equipe de ${this.equipe} e ganha ${this.salario}. seu bônus esse mês é de : R$ ${bonus}`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, cargo, salario, linguagemDeProgramacao) {
    super(nome, cargo, salario);
    this.linguagemDeProgramacao = linguagemDeProgramacao;
  }

  calcularBonus() {
    let bonus = this.salario * 0.1;
    return `${this.nome} é ${this.cargo} especializando em ${this.linguagemDeProgramacao} e ganha ${this.salario}. seu bônus esse mês é de : R$ ${bonus}`;
  }
}

function mostrarInformacoes(funcionario) {
  console.log(funcionario.calcularBonus());
}

const GerenteDeCompras = new Gerente(
  "João",
  "gerente de compras",
  10000,
  "engenharia"
);
const Dev = new Desenvolvedor("José", "Front-End pleno", 8000, "JavaScript");

mostrarInformacoes(GerenteDeCompras);
mostrarInformacoes(Dev);
