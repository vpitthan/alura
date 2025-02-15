const pessoa = {
    nome: "João Silva",
    idade: 28,
    solteiro: true,
    hobbies: ["futebol", "tocar guitarra", "viajar"]
};
function mostrarInfoPessoa(pessoa){
    console.log(typeof pessoa.nome, pessoa.nome);
    console.log(typeof pessoa.idade, pessoa.idade);
    console.log(typeof pessoa.solteiro, pessoa.solteiro);
    console.log(typeof pessoa.hobbies, pessoa.hobbies);
    
}
mostrarInfoPessoa(pessoa);