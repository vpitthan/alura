let valorUm = parseFloat(prompt('Qual primeiro valor?'));
let valorDois = parseFloat(prompt('Qual segundo valor?'));
let valorTres = parseFloat(prompt('Qual terceiro valor?'));



if(valorUm > valorDois && valorUm > valorTres){
    alert(`${valorUm} é maior que ${valorDois} e ${valorTres}`);
}else if (valorDois > valorUm && valorDois > valorTres){
    alert(`${valorDois} é maior que ${valorUm} e ${valorTres}`);
}else{
    alert(`${valorTres} é maior que ${valorUm} e ${valorDois}`);
}