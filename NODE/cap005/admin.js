import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

const novoAdmin = new Admin("VINICIUS", "VINICIUSPITTHAN74@GMAIL.COM", "22/11/2004");

console.log(novoAdmin);
console.log(novoAdmin.criarCurso('javaScript', 40 ));

