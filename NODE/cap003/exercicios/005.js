const livro = {
    titulo: 'O Mistério do Tempo',      
    autor: 'Jane Doe',                  
    anoPublicacao: 2010,               
    genero: 'Mistério',                 
    idadePublicacao: 2025 - 2010        
  };
  console.log(livro.genero);
livro.genero = 'Aventura';
console.log(livro.genero);
