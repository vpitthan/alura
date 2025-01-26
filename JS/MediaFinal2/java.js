let notaUm = Number(prompt('Qual a primeira nota?'))
let notaDois = Number(prompt('Qual a segunda nota?'))

let mediaFinal = (notaUm + notaDois) /2

if(mediaFinal >= 7){
    alert(`Sua nota final é ${mediaFinal}, Aprovado`)
}else{
    alert(`Sua nota final é ${mediaFinal}, Reprovado`)
}