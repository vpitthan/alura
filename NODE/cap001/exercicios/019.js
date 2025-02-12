const verificarPalindromo = (palavra) =>{
    let palavraInvertida = palavra.split('').reverse().join(''); 
    if(palavraInvertida.toLowerCase() === palavra.toLowerCase()){
        return 'Palindromo'
    }else{
        return 'Não é um Palindromo'
    }
}
console.log(verificarPalindromo('Non'))