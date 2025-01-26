let qtdMin = 0
let qtdMax = 1000
let qtdAtual = prompt('Qual quantidade atual de estoque')
let qtdMedia = (qtdMin + qtdMax)/2

if(qtdAtual >= qtdMedia){
    alert(`Não efetuar compra, estoque (${qtdAtual})`)
}else{
    alert(`Estoque baixo, temos (${qtdAtual}) em estoque`)
}
