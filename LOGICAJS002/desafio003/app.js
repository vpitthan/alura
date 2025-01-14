function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10+1 );
}
let numeroSecreto = gerarNumeroAleatorio();
let soma = numeroSecreto * 2
let resulta = (`O dobro de ${numeroSecreto} é ${soma}`)
console.log(`${resulta}`)