let n1 = parseFloat(prompt('Qual valor um'));
let n2 = parseFloat(prompt('Qual valor dois'));

let n3;

while (true) {
    n3 = prompt('Você quer somar, menos, dividir ou multiplicar? (ou digite "sair" para encerrar)');

    if (n3 == 'somar' || n3 == 'soma') {
        alert(n1 + n2);
        break; // Encerra o loop após realizar a operação
    } else if (n3 == 'menos' || n3 == 'diminuir') {
        alert(n1 - n2);
        break;
    } else if (n3 == 'dividir' || n3 == 'divisao' || n3 == 'divida') {
        alert(n1 / n2);
        break;
    } else if (n3 == 'multiplicar' || n3 == 'multiplicação') {
        alert(n1 * n2);
        break;
    } else if (n3 == 'sair') {
        alert('Encerrando...');
        break; // Encerra o loop se o usuário digitar "sair"
    } else {
        alert('Opção inválida! Tente novamente.');
    }
}
