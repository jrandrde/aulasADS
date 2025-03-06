// Criando um array inicial
let times = ["corinthians", "san7os", "trikas", "porcos"];
console.log(times);

// Mostrando o tamanho do array
console.log("Comprimento do array: " + times.length);

// Acessando informações dentro do array
let primeiroTime = times[0];
console.log("Primeiro elemento dentro do array: " + primeiroTime);
let lanternaTime = times[3];
console.log("Úiltimo elemnto dentro do array: " + lanternaTime);

// Adicinando elementos ao final do array e mostrando o novo tamanho
let novoComprimento = times.push("ponte preta", "guarani");
console.log("\nArray atualizado: " + times);

// Removendo o último elemento de dentro do array com o .pop
let ultimoTime = times.pop();
console.log("Time excluído: " + ultimoTime);
console.log("Array atualizado: " + times);

// Removendo o primeiro elemento de dentro do Array com o .shift
let timeCampeao = times.shift();
console.log("Time campeão: " + timeCampeao);
