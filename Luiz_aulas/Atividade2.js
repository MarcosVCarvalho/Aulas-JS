//Questão 1 Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
console.log("at 1")
let frase = "Luis The Magão";
console.log(frase);
console.log(frase.toUpperCase());

//Questão 2 Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
console.log("at 2")
let v1 = null;
let v2;
console.log(v1)
console.log(v2)

//Questão 3 Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
console.log("at 3")
let vSting = 'Eu';
let vNumber = 20;
let vBoolean = true;
let vcombinado = `${vSting} ${vNumber} ${vBoolean}` 
console.log(vcombinado)

//Questão 4 Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
console.log("at 4")
let numero = 142;
let textoNumero =  '141';
numero = numero.toString();
textoNumero = Number(textoNumero);
console.log(typeof(numero));
console.log(typeof(textoNumero));

//Questão 5 Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
console.log("at 5")
let frase5 = "Luis The Magão do php";
console.log(frase5.toUpperCase());
console.log(frase5.split());
console.log(frase5.toLocaleLowerCase());




