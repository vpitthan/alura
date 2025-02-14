function fun(num){
    return num*2
}
function executaOperacaoEmArray(arr, fun) {
    return arr.map(fun);
}
const array = [1, 2, 3, 4, 5];

const resultado = executaOperacaoEmArray(array, fun);
console.log(resultado);