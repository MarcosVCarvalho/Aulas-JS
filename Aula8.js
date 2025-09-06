class User {
    #nome
    #email
    #role
    #ativo
    constructor(nome,email,role = 'Estudante', ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#role = role || null;
        this.#ativo = ativo;
    }
    exibirInfos() {
        return `${this.#nome} ${this.#email} ${this.#role}`
    }
    setNome(nome){
        this.#nome = nome
    }
    exibirInfosParent() {
        return 'Static'
    }
}
const c1 = new User('marcos','mv@gmail.com')
c1.setNome("maria")
console.log(c1.exibirInfos())
console.log(c1.exibirInfosParent())