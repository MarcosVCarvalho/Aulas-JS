const nota1 = 8;
const nota2 = 8.5;
const nota3 = 10;
const nota4 = 5;
const faltas = 3;

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media)
if (media >= 7){
    media += (media * 0.1);
}


if (media < 7 || faltas > 4){
    console.log("Reprovado por media ou falta")
} else if (media => 7 || falta < 4) {
    console.log("Aprovado por media")
} else if (media > 8 && faltas <4) {
    console.log("Aprovado com louvor")
}

//Questão 1 Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
console.log('')
console.log("at 1")


//Questão 2  uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console
console.log('')
console.log("at 2")
let numerica = 12;
let resultado = (numerica % 2) == 0 ? "par" : "impar";
console.log(resultado);

//Questão 3 Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
console.log('');
console.log("at 3");
let frase = "marcos";
let frase2 = "ana";
function palindromo(str = String){
    let texto = str
    let textoInvertido = texto.split('').reverse().join('');
    return textoInvertido === texto;
}
console.log(`${frase} é palindromo: `,palindromo(frase))
console.log(`${frase2} é palindromo: `,palindromo(frase2))

//Questão 4 Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
console.log('')
console.log("at 4")
let n1 = 4;
let n2 = 34;
let n3 = 2;
function maiorNumero(num1,num2,num3) {
    let maior;
    if (num1 > num2 && num1 > num3) {
        maior = num1;
    } else if (num2 > num1 && num2 > num3) {
        maior = num2
    } else {
        maior = num3
    }
    return maior
}
console.log(`O maior numero entre ${n1}, ${n2},${n3} é: ${maiorNumero(n1,n2,n3)}`)


//Questão 5 crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
console.log('')
console.log("at 5")
const calculaPotencia = (base, expoente) => {return base**expoente};
console.log(`${n1} elevado a ${n3} = ${calculaPotencia(n1,n3)}`)
