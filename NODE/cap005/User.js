export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudante"
        this.ativo = ativo
    }
    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}
const novoUser = new User('VINICIUS', 'VINICIUSPITTHAN74@GMAIL.COM', '22/11/2003')
console.log(novoUser.exibirInfos());
console.log(novoUser);
console.log(User.prototype.isPrototypeOf(novoUser));
