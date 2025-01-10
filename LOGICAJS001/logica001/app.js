alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log = numeroSecreto;
let numeroSecreto2 = prompt('Escolha um número entre 1 e 10'); 

if (numeroSecreto == numeroSecreto2 ){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else{
    alert('Você errou :(');
}