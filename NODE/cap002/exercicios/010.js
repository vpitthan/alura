// Função para criar uma matriz 3x3 com valores começando de 1 e aumentando
function criarMatriz() {
    let matriz = [];
    let valor = 1;

    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(valor);
            valor++;
        }
        matriz.push(linha);
    }

    return matriz;
}

// Lista bidimensional com 3 matrizes 3x3
let listaBidimensional = [];

for (let i = 0; i < 3; i++) {
    listaBidimensional.push(criarMatriz());
}

console.log(listaBidimensional);
