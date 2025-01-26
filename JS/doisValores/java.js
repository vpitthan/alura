let numeroUm = Number(prompt('Qual o primeiro valor?'));  
let numeroDois = Number(prompt('Qual o segundo valor?'));  

if (numeroUm > numeroDois) {
    alert(`${numeroUm} é maior que ${numeroDois}.`);
} else if (numeroUm === numeroDois) {  
    alert(`${numeroUm} é igual ao ${numeroDois}`);
} else {
    alert(`${numeroDois} é maior que ${numeroUm}`);
}
