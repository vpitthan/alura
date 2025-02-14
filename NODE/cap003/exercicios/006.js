// Criando o objeto livro com as propriedades solicitadas
const livro = {
    titulo: 'O Mistério do Tempo',       // Título do livro
    autor: 'Jane Doe',                   // Autor do livro
    anoPublicacao: 2010,                 // Ano de publicação
    genero: 'Mistério',                  // Gênero do livro
    idadePublicacao: 2025 - 2010,         // Idade de publicação (ano atual - ano de publicação)
    avaliacao: 4.5                       // Avaliação (propriedade que será excluída)
  };
  
  // Excluindo a propriedade 'avaliacao' do objeto livro
  delete livro.avaliacao;
  
  // Exibindo os detalhes do livro no console
  console.log(livro);
  