class User {
    constructor(nome,email,role = 'Estudante', ativo = true){
        this.nome = nome;
        this.email = email;
        this.role = role;
        this.ativo = ativo;
    }
    exibirInfos() {
        return `${this.nome} ${this.email} ${this.role}`
    }
}

const admin = {
    nome: "Ana Salsicha",
    email: "adm@gmail",
    nascimento: new Date(),
    role: "Admin",
    ativo: true,
    criarPerfil: function(){
    },
    criarCurso: function(){ console.log("criando curso")
    },
    excluirCurso: function(){
    },
    desativarPerfil: function(){
    },
}
const docente = {
    criarPerfil: function(){
    },
    aprovarAluno: function(){
    },
}

const c1 = new User("Marcos Vinicius",'estudante@gmail');
console.log(c1.exibirInfos())
console.log(c1)
