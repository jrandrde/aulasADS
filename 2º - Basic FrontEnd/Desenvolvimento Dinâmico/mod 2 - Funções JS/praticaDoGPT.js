// 1- Função simples para multiplicar 2 números
function multiplicar(a, b) {
  return a * b;
}

console.log("O resultado é = " + multiplicar(6, 5));

// 2- Função sem retorno para exbir uma mensagem
function saudacao(nome) {
  console.log("Olá, " + nome + "! Espero que esteja bem.");
}

saudacao("Lindemar");

// 3- Conversão para Arrow function
let calcularAreaRatangulo = (base, altura) => {
  return base * altura;
};

console.log("Área do retângulo é = " + calcularAreaRatangulo(6, 8));

// 4- Função anônima
let dobrarNumero = function (n1) {
  return n1 * 2;
};

console.log(`Resultado = ${dobrarNumero(20)}`);

// 5- Trabalhando arrays e funções utilizando o map()
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(n => n * 2);

console.log(numerosDobrados);

// 6- manipulando o 'This'
let carro = {
  marca: "Toyota",
  mostrarMarca: function () {
    console.log("Toyota");
  },
};

carro.mostrarMarca();

// 7- Função que retorna outra função
function criarSaudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
let saudacaoJoao = criarSaudacao("João");
