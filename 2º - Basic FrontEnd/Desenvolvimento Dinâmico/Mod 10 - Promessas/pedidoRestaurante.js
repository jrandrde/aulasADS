// Função que simula uma operação assíncrona de verificação do status do pedido
function prepararPedido(pedido) {
  return new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona que leva 3 segundos para ser concluída
    setTimeout(() => {
      const sucesso = Math.random() > 0.5; // Simulando sucesso ou falha de forma aleatória
      if (sucesso) {
        resolve(`O pedido do cliente ${pedido.cliente} está pronto!`);
      } else {
        reject(`O cliente ${pedido.cliente} vai dormir com fome!`);
      }
    }, 3000);
  });
}

// Criação da calsse 'Pedido'
class Pedido {
  constructor(cliente, prato, valor) {
    this.cliente = cliente;
    this.prato = prato;
    this.valor = valor;
    this.preparado = false;
  }

  // Metódo para descrever esse pedido
  descrever() {
    let descricao = `O ${this.prato} do ${this.cliente} no valor de R$${this.valor}`;

    descricao += this.preparado
      ? " está quente e delicioso!"
      : " está quase pronto!";

    return descricao;
  }

  // Metódo para verificar se o pedido foi feito ou não
  verificarStatus() {
    prepararPedido(this)
      .then(resultado => {
        console.log(resultado);
      })
      .catch(erro => {
        console.log(erro);
      });
  }
}

// Criação de um objeto (instância da classe Pedido)
const meuPedido = new Pedido("Jr", "X-bacon", 35.0, true);

// Manipulação do objeto e exibição da descrição
console.log(meuPedido.descrever());

// Verificação do status da casa utilizando a promessa
meuPedido.verificarStatus();
