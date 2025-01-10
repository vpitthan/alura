let titulo = document.querySelector('h1');
titulo.innerHTML('Hora do Desafio.');
function verificarConsole(){
    console.log('O botão do console foi clicado!');
}
function alerta(){
    alert('Eu amo JS');
}
function Prompt(){
    let resposta=prompt('Fale uma cidade do brasil');
    alert(`Estive em ${resposta} e lembrei de você`);
}
function somar(){
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let resultado = numero1 + numero2;
    alert(`A soma entre ${numero1} e ${numero2} é igual a ${resultado}`);
}