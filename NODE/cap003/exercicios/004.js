const livro = {
    titulo: 'O Mistério do Tempo',
    autor: 'Jane Doe',
    anoPublicacao: 2010,
    genero: 'Mistério',
    idadePublicacao: new Date().getFullYear() - 2010,  
  };

livro.avaliacao = 10;
if(livro.avaliacao === null){
    console.log('Livro sem avaliação.');
    
}else{
    console.log(`Livro com a avaliação: ${livro.avaliacao}`);
    
}