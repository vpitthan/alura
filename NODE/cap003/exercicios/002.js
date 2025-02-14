// Criação da variável anoAtual com o ano atual
const anoAtual = new Date().getFullYear();

// Criação do objeto livro com as propriedades solicitadas
const livro = {
  titulo: 'O Grande Livro',
  autor: 'Autor Famoso',
  anoPublicacao: 2000,
  genero: 'Ficção',
};

// Adicionando a propriedade idadePublicacao ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// Criando a string mostrarDetalhes com as informações do livro
const mostrarDetalhes = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}\nIdade de Publicação: ${livro.idadePublicacao} anos`;

// Exibindo a string mostrarDetalhes no console
console.log(mostrarDetalhes);
