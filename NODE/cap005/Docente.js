import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovarEstudante(estudante,curso){
        return `estudante ${estudante} passou no curso de ${curso}, responsavel ${this.nome}`
    }
}
const novoDocente = new Docente("VINICIUS", "VINICIUSPITTHAN74@GMAIL.COM", "22/11/2004")
console.log(novoDocente.aprovarEstudante('Juliana', 'JavaScript'));
