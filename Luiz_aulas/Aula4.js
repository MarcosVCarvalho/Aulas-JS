const notas = [10, 6, 7.4, 9];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`medias das notas ${notas} : ${media}`)

notas.push(7); //push = apend
console.log(notas)
notas.pop() //pop remove o ultimo elemento
console.log(notas)

//Questão 1 Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
console.log('')
console.log("at 1")
const esparso = [];
esparso[1] = 2;
esparso[3] = 4;
esparso[7] = 8;
console.log(esparso)

//Questão 2 Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
console.log('')
console.log("at 2")
let array = [0,1,2,3,4];
console.log(`Array original: ${array}`)
array[0] = 5;
console.log(`Array Nova: ${array}`)

//Questão 3 Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
console.log('')
console.log("at 3")
let meuArray = [100,40,2];
console.log(meuArray);
meuArray[0] = (meuArray[0] * 2);
console.log(meuArray);

//Questão 4 Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
console.log('')
console.log("at 4")
function geradorArrays(nuTermos) {
    let arrayAleatoria = []
    for (let index = 0; index <  nuTermos; index++) {
        let n = Math.floor(Math.random() * 100) + 1
        arrayAleatoria.push(n)
    }
    return arrayAleatoria;
}
console.log(`Array gerada: ${geradorArrays(3)}`)

//Questão 5 Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
console.log('')
console.log("at 5")
var fila = [];
for (let animais = 0; animais < 3; animais++) {
    fila.push(animais)
}
console.log(`Fila: ${fila}`)

while (fila.length > 0) {
   fila.shift();
   console.log(fila);
}
console.log('Fila vazia')

console.log('')
console.log("at 6")
let alunos = ['marcos', 'davi', 'pedro', 'miguel', 'luis', 'cristo'];
const p1 = alunos.slice(0,(alunos.length/2));
const p2 = alunos.slice(alunos.length / 2);
console.log(p1);
console.log(p2);

console.log('')
console.log("at 7")
const alunosRemovidos = alunos.splice(1,2, 'magão') //começãndo do casa[1] delete 2 itens e depois add dois nomes
console.log(alunos)

console.log('')
console.log("at 8")
const salapy = ['davi', 'thiago'];
const salajava = ['mv', 'miguel'];
console.log(salajava.concat(salapy));

console.log('')
console.log("at 9")
let notas1 = [10,5,3,6,10];
const listaseila = [alunos,notas1]
console.log(listaseila)

console.log('')
console.log("at 10")
function procurandolista(str) {
    if (alunos.includes(str)) {
        return `A media do ${str} é ${notas1[alunos.indexOf(str)]}`
    } 
    return "não encontrado"

}
console.log(procurandolista('luis'))

console.log('')
console.log("at 11")
for (let index = 0; index < alunos.length; index++) {
    console.log(`Aluno: ${alunos[index]} numero: ${index}`)
}

console.log('')
console.log("at 12")
let media1 = somaMedias = 0;
for (const i of notas1) {
    somaMedias += notas[i]
}
media1 = somaMedias / notas1.length;
console.log(media1)

console.log('')
console.log("at 13")
function somaArray(array) {
    let soma
    for (const elemento of array) {
        soma = array[elemento]
    }
    return soma
}
console.log(somaArray(notas1))




