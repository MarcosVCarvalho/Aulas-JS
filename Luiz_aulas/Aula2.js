const nota1 = 8;
const nota2 = 8.5;
const nota3 = 10;
const nota4 = Number.parseInt('5');

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media.toFixed(2)) //tofixed arredonda o resultado

const estudante = "Carolina";
const professor = 'Ana';
const fala1 = "Nosso lema é 'estudar bastante'";
const fala2 = `Ju disse: "nosso lema é estudar bastante"`;
const fala3 = `A melhor forma de ficar louco é ${fala1}`;
console.log(fala3.toUpperCase());

let nome;
console.log(typeof(nome));