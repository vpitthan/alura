const pessoas = [
    {
      nome: "João Silva",
      idade: 28,
      cidade: "São Paulo"
    },
    {
      nome: "Maria Oliveira",
      idade: 34,
      cidade: "Rio de Janeiro"
    },
    {
      nome: "Carlos Souza",
      idade: 22,
      cidade: "Belo Horizonte"
    }
  ];
  
  function mostrarListaPessoas(pessoas) {
    pessoas.forEach(pessoa => {
      console.log(`Nome: ${pessoa.nome}`);
      console.log(`Idade: ${pessoa.idade}`);
      console.log(`Cidade: ${pessoa.cidade}`);
      console.log('---');
    });
}
pessoas.push({
    nome:"Vinicius",
    idade: 21,
    cidade: "Curitiba"
})
mostrarListaPessoas(pessoas);
function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
  }

  const pessoasNaCuritiba = filtrarPorCidade(pessoas, "Curitiba");
  console.log(pessoasNaCuritiba);