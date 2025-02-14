// Criando o objeto livro com as propriedades solicitadas
const livro = {
    titulo: 'O Mistério do Tempo',
    autor: 'Jane Doe',
    anoPublicacao: 2010,
    genero: 'Mistério',
    idadePublicacao: new Date().getFullYear() - 2010,  // Calculando a idade de publicação
  };
  
  // Acessando as propriedades do objeto livro usando colchetes e imprimindo no console
  console.log('Título: ' + livro['titulo']);
  console.log('Autor: ' + livro['autor']);
  console.log('Ano de Publicação: ' + livro['anoPublicacao']);
  console.log('Gênero: ' + livro['genero']);
  console.log('Idade de Publicação: ' + livro['idadePublicacao'] + ' anos');
  