const pessoa = {
    nome: "Maria",
    notas: [8, 7.5, 9, 6.5, 10],

    calcularMediaNotas: function() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / this.notas.length;
        return media;
    },

    classificarDesempenho: function() {
        const media = this.calcularMediaNotas();
        if (media >= 9) {
            return 'A';
        } else if (media >= 7) {
            return 'B';
        } else if (media >= 5) {
            return 'C';
        } else {
            return 'D';
        }
    }
};

// Exemplo de uso
console.log(`Nome: ${pessoa.nome}`);
console.log(`Média das notas: ${pessoa.calcularMediaNotas()}`);
console.log(`Classificação de desempenho: ${pessoa.classificarDesempenho()}`);