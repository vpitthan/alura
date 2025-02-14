const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

const turmaCompleta = nomesTurmaA.concat(nomesTurmaB)

const alunoProcurado = 'vini';

const aluno = turmaCompleta.find(nome => nome === alunoProcurado)

if (aluno) {
    console.log(`Aluno encontrado: ${aluno}`);
} else {
    console.log('Aluno não encontrado');
}



