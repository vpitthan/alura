
let votosValidos  = parseInt(prompt('Quantos votos validos?'))
let votosBrancos = parseInt(prompt('Quantos votos em branco?'))
let votosNulos = parseInt(prompt('Quantos votos foram nulos?'))
let total = votosBrancos + votosNulos + votosValidos

let percentualValidos = votosValidos * 100/total
let percentualBranco = votosBrancos * 100/total
let percentualNulos = votosNulos * 100/total

alert(`Total de votos validos é de ${percentualValidos} %`)
alert(`Total de votos nulos é de ${percentualNulos} %`)
alert(`Total de votos brancos é de ${percentualBranco} %`)