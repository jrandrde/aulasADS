// Função que simula uma operação assíncrona de marcação da consulta
function verificarDisponibilidade(consulta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.5;
      if (sucesso) {
        consulta.status = "pendente";
        resolve(`🔄 Dr. ${consulta.medico} está disponível! ...`);
      } else {
        reject(`❌ Médico indisponível no momento. Consulta cancelada.`);
      }
    }, 2000);
  });
}

function confirmarConsulta(consulta) {
  return new Promise(resolve => {
    setTimeout(() => {
      consulta.status = "confirmada";
      resolve(`✅ Consulta com o Dr. ${consulta.medico} confirmada! `);
    }, 3000);
  });
}

function avaliarConsulta(consulta) {
  return new Promise(resolve => {
    setTimeout(() => {
      consulta.status = "concluída";
      resolve(
        `⭐ Paciente ${consulta.paciente} avaliou a consulta como 5 estrelas!`
      );
    }, 1000);
  });
}

class Consulta {
  constructor(id, paciente, medico, status) {
    this.id = id;
    this.paciente = paciente;
    this.medico = medico;
    this.status = "pendente";
  }

  iniciarProcesso() {
    verificarDisponibilidade(this)
      .then(resultado => {
        console.log(resultado);
        return confirmarConsulta(this);
      })
      .then(resultadoConfirmacao => {
        console.log(resultadoConfirmacao);
        return avaliarConsulta(this);
      })
      .then(resultadoAvaliacao => {
        console.log(resultadoAvaliacao);
      })
      .catch(erro => {
        console.error(`${erro}`);
      });
  }
}

const minhaConsulta = new Consulta(305, "Jr", "CR7");

minhaConsulta.iniciarProcesso();
