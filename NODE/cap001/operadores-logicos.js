const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if(notaFinal < 7 && faltas > 4){
    console.log('Reprovado, boas festas.')
}else{
    console.log('Nao foi reprovada por falta.')
}
if(faltas >= 2 && !advertencias){
    console.log('Recebeu o bonus')
}else{
    console.log('Não recebeu o bonus')
}   