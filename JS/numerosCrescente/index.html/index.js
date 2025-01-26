let valorUm = parseFloat(prompt('Qual primeiro valor?'));
let valorDois = parseFloat(prompt('Qual segundo valor?'));
let valorTres = parseFloat(prompt('Qual terceiro valor?'));
if (valorUm <= valorDois && valorDois <= valorTres) {
    alert(`${valorUm}, ${valorDois}, ${valorTres}.`);
} else if (valorUm <= valorTres && valorTres <= valorDois) {
    alert(`${valorUm}, ${valorTres}, ${valorDois}.`);
} else if (valorDois <= valorUm && valorUm <= valorTres) {
    alert(`${valorDois}, ${valorUm}, ${valorTres}.`);
} else if (valorDois <= valorTres && valorTres <= valorUm) {
    alert(`${valorDois}, ${valorTres}, ${valorUm}.`);
} else if (valorTres <= valorUm && valorUm <= valorDois) {
    alert(`${valorTres}, ${valorUm}, ${valorDois}.`);
} else {
    alert(`${valorTres}, ${valorDois}, ${valorUm}.`);
}