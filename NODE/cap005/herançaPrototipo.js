const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
    console.log(this.nome, this.email);
    },
};
const admin={
    nome: "vinicius",
    email: "vini.com",
    nascimento: "22/11/2004",
    role: "admin",
    ativo: true,
    criarCursos: function(){
        console.log("Curso criado");
        
    }
};
