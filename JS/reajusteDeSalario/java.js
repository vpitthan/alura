let salario = parseInt(prompt('Qual salario atual?'))
let percentual = parseInt(prompt('Qual percentual de reajuste?'))

let aumento = percentual * salario/100
let saldoNovo = salario + aumento

alert(`O valor do salario com reajuste é de ${saldoNovo}.`)

