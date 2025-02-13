const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos,medias];


function exibirNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaAluno}`);
    }else{
        console.log('Aluno não encontrado.');
        
    }
}
exibirNomeENota('João');
exibirNomeENota('Vini');
