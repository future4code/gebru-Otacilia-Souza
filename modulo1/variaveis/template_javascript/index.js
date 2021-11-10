// exercicio de interpretação de codigo
//exercicio de interpretação de codigos
let a = 10 
let b = 10 
/* valor de a = 10/ valor de b = 10*/

console.log(b)
/* imprima o valor de b
logo o valor a ser impresso 
é apenas o de b ou seja 10*/

// exercicio 2
let a = 10
let b = 20
c = a
b = c
a = b
/* valor de a = 10
valor de b = 20
c = a
b = c
a = b*/
console.log(a, b, c)
/* imprima o valor de a, b, c
os valores de ambos serão 10,
pois apesar de inicialmente o valor declarado em b
ter sido 20, o seu valor foi alterado quando declarou que
b = c e este tinha o valor de 10. logo os valores a ser impresso serão
10 10 10

// exercicio 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
// as variaveis (p) e (t) obterão a resposta do usuario
/* seria melhor se as variaveis (p) e (t)tivessem descrição
compativeis com a pergunta como (horasTrabalhadas/valorRecebido)
alert(`Voce recebe ${t/p} por hora`)
// o usuario tera um retorno do valor das variavei (p) e (t)


 // exercicio de ecrita de codigo

a- let nome; 

b- let idade; 

c- console.log (typeof nome);
   console.log (typeof idade);

d- /*  resultado indefinido, isso ocorre por não ter sido atribuido valor a variavel*/


e- nome = prompt (" q ual o seu nome?")
   idade = prompt ("Qual sua idade?")


f- //foi apresentado o tipo string, são dados representados em forma de texto


g- console.log ("ola!", "meu nome é", "meu nome é",  nome, "e tenho", idade, "anos")

// exercicio 2

a- 
let pergunta1;
let pergunta2;
let pergunta3;

pergunta1 = "voce gosta de gatos?"
pergunta2 = "voce gosta de cachorro?"
pergunta3 = "voce gosta de criança?"

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)


b-
console.log (pergunta1+" - "+ resposta1)
console.log (pergunta2+" - "+ resposta2)
console.log (pergunta3+" - "+ resposta3)


// exercicio 3


let a = 10;
let b = 25;

let c = a;
a = b;
b = c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10





