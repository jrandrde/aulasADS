// Exemplo de uso de var, let e const em Javascript

const externo = "Olá, eu sou uma constante global";

// Declaração de uma variável
function exemploVar() {
  if (true) {
    var mensagem = "vai toma no cu ";
  }
  console.log(mensagem);
}

// Chamando a função exemploVar
exemploVar();

// Exemplo de erro e correção
var mensagem1 = "Vai toma no cu Descomplica! Escopo externo!";
console.log(mensagem1);

// Declaração de uma variável usando let
function exemploLet() {
  if (true) {
    let mensagem = "Vai toma no cu Descomplica! Eu sou uma let";
    console.log(mensagem);
  }
}

// Chamando a função exemploLet
exemploLet();

// Exemplo de erro e correção
let mensagem = "Vai Corinthians!";
console.log(mensagem);

// Declaração de uma variável usando const
function exemploConstante() {
  const mensagem = "Vai se fude porra!";
  console.log(mensagem);
}

// Chamando a função exemploConst
exemploConstante();

// Exemplo externo de const
console.log(externo);

// Exemplo externo tentar alterar constante global

// Demonstrando o escopo global de var

// Demonstrando o escopo global de let

// Exemplo de escopo inacessível
