let a = parseFloat(prompt('Qual o primeiro valor?'))
let b = parseFloat(prompt('Qual o segundo valor?'))


while(b == 0){
    alert('Valor invalido')
    b = parseFloat(prompt('Qual o segundo valor?'))

}
let resultado = a / b
alert(`${a} divido por ${b} é igual a ${resultado}`)