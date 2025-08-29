//Questão 1 Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
console.log('1');
let name = 'Marcos';
let numero = 20;
let boleano = false;
console.log(typeof(name),typeof(numero),typeof(boleano));

//Questão 2 Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
console.log('2');
let primeiro_nome =  'Vinicius ';
let ultimo_nome =  'Silva';
let nome_completo = primeiro_nome + ' ' + ultimo_nome;
let nome_completo_template = `Meu nome é ${primeiro_nome}${ultimo_nome}`;
console.log(nome_completo);

//Questão 3 Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
console.log('3');
let idade = 20;
let text_idade = 'Minha idade é ';
let minha_idade = `${text_idade} ${idade}`
console.log(minha_idade);

//Questão 4 Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log('4');
let v1 = 1;
console.log(v1);
v1 = 2;
console.log(v1);

//Questão 5 Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
console.log('5');
let variavel2 = 2;
if (variavel2){
    var variavel3 = 3; //var funciona fora do escopo do if - let não;
    console.log(variavel2);
    console.log(variavel3);
}
console.log(variavel2);
console.log(variavel3);

//Questão 6 Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
console.log('6');
let chuva = true;
if (chuva){
    console.log('Está chovendo - Leve o guarda chuva')

}else{
    console.log('Não está chovendo - Não leve o guarda chuva')
}

