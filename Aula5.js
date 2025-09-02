console.log('')
console.log("at 1")
const notas =[
    8,
    5,
    7,
    10
]

let soma = 0;
notas.forEach(function(nota){
    soma += nota
})
let media = soma / notas.length
console.log(media)

console.log('')
console.log("at 2")
const notasAtualizadas = notas.map(function(item) {
    nota = item + 1
    return (nota > 10) ? 10 : nota;
});

console.log(notasAtualizadas);