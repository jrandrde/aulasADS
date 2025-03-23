// Função que simula uma operação assíncrona de preparo do pedido
function prepararPedido(pedido) {
  return new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona que leva 2 segundos para ser concluída
    setTimeout(() => {
      const sucesso = Math.random() > 0.5; // Simulando sucesso ou falha de forma aleatória
      if (sucesso) {
        pedido.status = "preparando";
        resolve(
          `O pedido nº${pedido.id} do ${pedido.cliente} está sendo preparado...`
        );
      } else {
        reject(
          `Erro ao processar o pedido nº${pedido.id} do ${pedido.cliente}: Problemas na cozinha!`
        );
      }
    }, 2000);
  });
}

// Função que simula uma operação assíncrona de finalização do pedido
function finalizarPedido(pedido) {
  return new Promise(resolve => {
    // Simulando uma operação assíncrona que leva 3 segundos para ser concluída
    setTimeout(() => {
      pedido.status = "pronto";
      resolve(
        `O pedido nº${pedido.id} do ${pedido.cliente} está pronto para entrega!`
      );
    }, 3000);
  });
}

// Função que simula uma operação assíncrona de entrega do pedido
function entregarPedido(pedido) {
  return new Promise(resolve => {
    // Simulando uma operação assíncrona que leva 3 segundos para ser concluída
    setTimeout(() => {
      pedido.status = "entregue";
      resolve(
        `O pedido nº${pedido.id} do ${pedido.cliente} foi entregue com sucesso!`
      );
    }, 1000);
  });
}

class Pedido {
  constructor(id, cliente, prato) {
    this.id = id;
    this.cliente = cliente;
    this.prato = prato;
    this.status = "pendente";
  }

  // Método para descrever o pedido
  descricaoPedido() {
    let statusDescricao = "";
    switch (this.status) {
      case "pendente":
        statusDescricao = "está pendente.";
        break;
      case "preparando":
        statusDescricao = "está sendo preparado.";
        break;
      case "pronto":
        statusDescricao = "está pronto para entrega.";
        break;
      case "entregue":
        statusDescricao = "foi entregue.";
        break;
      default:
        statusDescricao = "está com status desconhecido.";
    }
    return `O ${this.cliente} pediu um ${this.prato}. Nº do pedido: ${this.id}. Status: ${statusDescricao}`;
  }

  // Método para verificar o status do pedido
  processarPedido() {
    console.log(
      `🔄 Processando pedido nº${this.id} do cliente ${this.cliente} ...`
    );

    prepararPedido(this)
      .then(resultado => {
        console.log(resultado);
        return finalizarPedido(this);
      })
      .then(resultadoFinalizacao => {
        console.log(resultadoFinalizacao);
        return entregarPedido(this);
      })
      .then(resultadoEntrega => {
        console.log(resultadoEntrega);
      })
      .catch(erro => {
        console.error(`${erro}`);
      });
  }
}

// Criação de um objeto (instância da classe Pedido)
const meuPedido = new Pedido(13, "João", "X-cabelo");

// Manipulação do objeto e exibição da descrição
console.log(meuPedido.descricaoPedido());

// Verificação do status do pedido utilizando a promessa encadeada
meuPedido.processarPedido();
