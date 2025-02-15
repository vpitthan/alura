const pessoa = {
    nome: "João Silva",
    idade: 28,
    solteiro: true,
    hobbies: ["futebol", "tocar guitarra", "viajar"]
};
function mostrarInfoPessoa(pessoa){
    console.log(typeof pessoa, pessoa);
    
    
    
}
mostrarInfoPessoa(pessoa);

pessoa.endereço = {
    rua: "Antonio meirelles",
    cidade: "Curitiba",
    estado: "Parana"
}
mostrarInfoPessoa(pessoa);