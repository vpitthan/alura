import User from "./User.js"
import Admin from "./admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Juliana", "j@j.com", "2024-01-01")
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Vinicius', 'Viniciuspitthan74@gmail.com', '22/11/2004')
console.log(novoAdmin.exibirInfos());

