let a = parseFloat(prompt('Qual a primeira medida'))
let b = parseFloat(prompt('Qual a segunda medida'))
let c = parseFloat(prompt('Qual a terceira medida'))

if(a + b > c && a + c > b && b + c > a ){
    alert('Os valores podem formar um triângulo!')
}else{
    alert('Não pode formar um triangulo')
}

