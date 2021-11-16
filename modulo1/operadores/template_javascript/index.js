/*Exercícios de interpretação de código

Primeira questão
false
false
true
boolen

Segunda Questão

Sera impreso apenas os numeros digitados"requeridos" e não a soma deles!

Terceira Questão

Para que seja impresso a somatotia dos numeros é necessario adicionar o comando Number*/


let primeiroNumero = prompt("Digite primeiro numero!")
let segundoNumero = prompt("Digite segundo numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

/* Exercícios de escrita de código

Primeira questão*/

a- let primeiraIdade = prompt("Digite sua idade!")
b- let segundaIdade = prompt("Digite a idade de sua amiga")
c-console.log("Sua idade é maior do que a do seu melhor amigo?"+(primeiraIdade > segundaIdade));
d-

// Segunda Questão

a-let numeroPar = parseInt(prompt("Digite um numero par!"));
b-console.log(numeroPar%2);
c- sempre que o segundo numero for pa r e divisivel ele sera divisivel e seu resto 0
d- quando adicionado numero impar o seu resto é sempre 1

//Terceira Questão

let idade = parseInt(prompt ("qual a sua idade em anos."));

let meses = 12;
let diasAno = 365;
let horasDia = 24;

let idadeMeses = meses*idade;
let idadeDias = diasAno*idade;
let idadeHoras = horasDia*diasAno*idade;

console.log("Idade em meses: "+idadeMeses);
console.log("Idade em dias: "+idadeDias);
console.log("Idade em horas: "+idadeHoras);

// Quarta Questão

console.log(
"O primeiro numero é igual ao segundo?" +
(primeiroNumero === segundoNumero)
)

console.log(
"O primeiro numero é divisível pelo segundo?" +
((primeiroNumero % segundoNumero) == 0)
)

console.log(
"O segundo numero é divisível pelo primeiro?" +
((segundoNumero % primeiroNumero) == 0)
)


