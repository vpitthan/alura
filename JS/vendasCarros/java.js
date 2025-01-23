let carrosVendidos = parseInt(prompt('Qual o total de carros vendidos?'))
let comissaoCarros = parseInt(prompt('Qual a comissão por carro?'))
let totalDeVendas = carrosVendidos * comissaoCarros

let salarioFixo = parseInt(prompt('Qual salario fixo?'))
let salarioDoMes = salarioFixo + totalDeVendas

alert(`Salario desse mês é de ${salarioDoMes}`)
