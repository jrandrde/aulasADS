class livro {
  constructor(autor, titulo, anoPublicacao, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
  }

  descrever() {
    let descricao = `Esse livro do autor ${this.autor} se chama ${this.titulo} e foi publicado em ${this.anoPublicacao} e se enquadra no genero ${this.genero}`;
    return descricao;
  }
}

const livro1 = new livro(
  "Giuseppe Camole",
  "As longas tranças do rei careca",
  2025,
  "comédia"
);
const livro2 = new livro(
  "Carlo Lanchelotti",
  "Ta chovendo hámburguer",
  2023,
  "Ficção científica"
);

console.log(livro1.descrever());
console.log(livro2.descrever());
