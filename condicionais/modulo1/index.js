/* exercicio de interpletação de codigo

1- leia o codigo abaixo:
a- Explique o que o codigo faz. Qual o teste que ele realiza?

o exercico pede para que seja sugerido um valor pelo usuario do console
 em seguida é feito uma divisão do numero inteiro por dois e uma 
 vamparação se o memso tem valor e tpos iguais.

b- Para que tipo de numeros ele imprime no console "passou no teste?"
 
sera impresso que passou no teste se os numeros forem pares

c- para que tipos de numeros a imagem é "não passou no teste" 

 não sera divisivel se os numeros forem impares.

2 -O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:

a - Para que serve o codigo ?

    Este codigo permite o controle do fuxo de comandos, permitindo assim que
    codigos diferentes sejam executados em mais de uma condição, logo ao declarar
o
default o valor considerado verdadeiro para todas as declarações anteriores
são 5, independente do valor declarado anteriormente.

b - Qual sera o valor impresso no console se o valor da fruta
for maça ?

    O valor declarado é 5

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem
impressa no console se retirássemos o `break`
que está logo acima do `default`
  
Apresentaria um erro e não seria impresso NamedNodeMap, pois o breack é o comando de laço
 de repeticão que liga a fruta aos valores declarados anteriormente. Ou seja, haveria uma 
 interrupção no comando levando a um erro no codigo.


3   Questão: Leia o código!
    
  a) O que a primeira linha está fazendo?
  
  ESta pedindo ara o usuario digitar um numero.

  b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
  
  não sera impresso nenhum valor  pois este não foi declarado na solicitação.
  
  c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

  sim, 


  Exercicio de escrita do codigo

  1-    QUestão: Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela 
  pode dirigir (apenas maiores de idade).

  a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
//let idade = prompt("Qual a sua idade?")
  
b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

  c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
  Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/

//const idade = prompt(" Qual a sua idade?");*/


let idade = (Number(prompt("Qual sua idade")))
console.log(idade)

if (idade >= 18) {
    console.log("Voce pode dirigir")
} else {
    console.log("Voce Não pode dirigir")
}

//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turno = prompt("Qual o  turmo em que voce estuda? digite  (M), para matutino, (V) para vespertino ou (N) para noturno")
console.log(turno)

if (turno === 'M') {
    console.log("Bom dia!")
}
if (turno === "V") {
    console.log("Boa tarde!")

}
if (turno === "N") {
    console.log("Boa noite!")
}

/*3 - Repita o exercício anterior, mas utilizando a estrutura de
switch case agora.*/



const turnoO = prompt("Qual o turno em que voce estuda? Digite M para manha,v para vespertino e N para noturno")

switch (turnoO) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default:
        console.log(turnoO)
}

/*4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o
 gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai 
 topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima 
 `"Escolha outro filme :("`*/

const genero = prompt("Digite o genero do filme");
const preco = prompt("Digite o preço do filme");

if (genero === 'fantasia' && preco < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme.");
}