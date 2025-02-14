const numeros = [10, 20, 30, 40, 50];  // Array de números
const numeroProcurado = 30;  // Número que queremos procurar

// Usando indexOf para encontrar o índice do número procurado
const indice = numeros.indexOf(numeroProcurado);

// Verificando se o número foi encontrado
if (indice !== -1) {
    console.log(`O número ${numeroProcurado} está na posição ${indice}.`);
} else {
    console.log("-1");
}



