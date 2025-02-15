// Criação do objeto carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata",
    quilometragem: 15000, // quilometragem em km
    tipo: "Sedan", // tipo do carro
    combustivel: "Gasolina", // tipo de combustível
    possuiArCondicionado: true // se possui ar condicionado
};

// Loop for...in para percorrer as propriedades do objeto carro
console.log("Propriedades do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Adicionando mais propriedades ao objeto carro
carro.transmissao = "Automática"; // tipo de transmissão
carro.numeroDePortas = 4; // número de portas
carro.potencia = 150; // potência em cv

// Loop for...in para percorrer as propriedades atualizadas do objeto carro
console.log("\nPropriedades do carro atualizadas:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}