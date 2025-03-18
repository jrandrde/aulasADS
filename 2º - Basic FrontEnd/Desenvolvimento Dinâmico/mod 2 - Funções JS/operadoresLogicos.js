// Exemplo de operadores lógicos em JavaScript

// Operador E lógico (&&)
const a = true;
const b = false;

const resultadoE1 = a && b; // false
const resultadoE2 = a && true; // true

console.log(`true && false: ${resultadoE1}`); // saída: false
console.log(`true && true: ${resultadoE2}`); // saída: true

// Operador OU lógico (||)

const resultadoOU1 = a || b; // true
const resultadoOU2 = a || false; // true

console.log(`true || false: ${resultadoOU1}`); // saída: true
console.log(`false || false: ${resultadoOU2}`);

// Operador NÂO lógico (!)

const resultadoNao1 = !a; // saída: false
const resultadoNao2 = !b; // saída: true

console.log(`!true: ${resultadoNao1}`); // saída: false
console.log(`!false: ${resultadoNao2}`); // saída: true

// Combinações de operadores lógicos

const resultadoComb1 = (a || b) && !b;
const resultadoComb2 = (a && b) || a;

console.log(`(true || false) && !false: ${resultadoComb1}`); // saída: true
console.log(`(true && false) || true: ${resultadoComb2}`); // saída: true
