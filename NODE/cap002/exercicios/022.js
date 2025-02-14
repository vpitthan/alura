function unirArrays(...arrays) {
    // Usando o Spread Operator para combinar todos os arrays
    return [].concat(...arrays);
}

// Exemplo de uso
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = unirArrays(array1, array2, array3);

console.log(resultado);
