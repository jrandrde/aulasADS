// Função regular básica
function saudacao() {
  console.log("Olá, mundo!");
}

saudacao();

// Passando parâmetros para a função
function novaSaudacao(nome) {
  console.log("Olá, " + nome + "! Espero que esteja bem.");
  return nome;
}

novaSaudacao("Lindemar");
novaSaudacao("Junior");

// Criando uma função para somar
function somar(a, b, c) {
  return a + b + c;
}

let resultado = somar(2, 4, 6);
console.log("O resultado da soma é = " + resultado);
