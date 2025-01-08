alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 6;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10')
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;

    }
}
// se chute for igual ao número secreto
