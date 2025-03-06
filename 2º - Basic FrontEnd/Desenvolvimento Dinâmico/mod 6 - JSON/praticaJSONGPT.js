//1- Crie um objeto JavaScript chamado livro que contenha as seguintes propriedades:
let livro = {
  titulo: "JavaScript para Iniciantes",
  autor: "John Doe",
  ano: 2020,
  disponibilidade: true,
};

console.log(livro);

//2- Acesse os dados
console.log("\nDados dentro do JSON: ");
console.log("Título: " + livro.titulo);
console.log("Autor: " + livro.autor);
console.log("Ano de publicação: " + livro.ano);
console.log("Disponibilidade: " + livro.disponibilidade);

//3- Adicione dados
console.log("Dados adicionados ao objeto 'livro': ");
livro.avaliacao = 8.5;
livro.traducao = "PT-BR";
console.log("\nObejto com novos dados: ");
console.log(livro);

//4- Converta o objeto para uma string JSON
console.log("\nConvertendo de e para JSON");
let jsonLivro = JSON.stringify(livro); //transformando JSON para String (.stringfy)
console.log(jsonLivro);

let objetoLivro = JSON.parse(jsonLivro); //tranformando string em JSON (.parse)
console.log(objetoLivro);

//5- Altere dados
console.log("\nAlterando dados: ");
livro.autor = "João 123 da Silva 4";
livro.titulo = "Pelo ronco do motor esse cu já sentiu dor";
console.log(livro);

//6- Remova dados
console.log("\nRemovendo dados do objeto:");
delete livro.ano;
console.log(livro);

//7- Operações com array
console.log("\nOperações com Array: ");
livro.genero = ["comedia", "ação"];
console.log(livro.genero[1]);
livro.genero.push("Sexo");
console.log(livro.genero);

//8- Iterar sobre propriedades do objeto sem precisar usar um console.log pra cada propriedade
console.log("\nIterando cobre as propriedades");
for (let chave in livro) {
  console.log(chave + ": " + livro[chave]);
}
