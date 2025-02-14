const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((num) => {
    console.log(num * 3);  // Multiplica cada número por 3 e exibe o resultado
});

const indice = numeros.findIndex(num => num === 18);

console.log(`Índice do número 18: ${indice}`);
console.log(typeof indice);
