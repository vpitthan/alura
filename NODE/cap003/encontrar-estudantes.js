const estudantes = require('./estudantes.json');

function buscarInformacao(lista,chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor));
}
const estudanteEncontrado = buscarInformacao(estudantes,'nome', 'Juliet');
console.log(estudanteEncontrado);
const telefoneEstudante = buscarInformacao(estudantes,'telefone', '4733865848');
console.log(telefoneEstudante);

