const gato = {
    nome: "Bolinha",
    nascimento: "25/02/2022",
    pelagem: "Branco",
    status: {
        castrado: true,
        vacinado: false,
        vermificado: true
    },
    miar: function(){
        console.log(`${this.nome} está miando`)
    }
}


console.log(gato2.miar())