//1- criando um objeto chamado 'filme'
let filme = {
  título: "A volta dos que não se foram",
  diretor: "Silvester Está Longe",
  ano: 2025,
  disponibilidade: true,
};
console.log(filme);

//2- Acessando os dados
console.log("\nDados dentro do JSON: ");
console.log("título do filme: " + filme.título);
console.log("Diretor do filme: " + filme.diretor);
console.log("Ano de lançamento: " + filme.ano);
console.log("Está disponível?" + filme.disponibilidade);

//3- Adicionando dados dentro do JSON
console.log("\nDados adicionados: ");
filme.avaliacao = 8.5;
filme.idioma = "inglês";
console.log("\nAvialiação no IMDB: " + filme["avaliação"]);
console.log("Idioma: " + filme.idioma);
console.log(filme);

//4- Convertendo para String
let objetoFilme = JSON.stringify(filme);
console.log(objetoFilme);

//5- Convertando para JSON
let jsonFilme = JSON.parse(objetoFilme);
console.log(jsonFilme);
