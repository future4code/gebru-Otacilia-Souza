/* Exercícios de interpretação de código
 1 Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.*/
 
let array
console.log('a. ', array)

//Indefinido

array = null
console.log('b. ', array)

//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

// 11

let i = 0
console.log('d. ', array[i])

// 3

array[i+1] = 19
console.log('e. ', array)
//11
const valor = array[i+6]
console.log('f. ', valor)

//2 Leia o código a baixo com atenção

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


/*Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?*/

/*SUBI NUM ONIBUS EM MIRROCOS
26
*/


/***Exercícios de escrita de código**
    1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
        
        O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/
        
  const emailDoUsuario = prompt("digite seu email")
console.log(`o email Do Usuario foi cadastrado com sucesso, seja bem vindo ${ emailDoUsuario }`);
       
            
    /*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:*/
        
      //  a) Imprima no console o array completo
        
const frase = prompt("Essas são as minhas comidas preferidas)
const comida1 = "Macarrão"
const comida2 = "Panquecas"
const comida3 = "Guizado"
const comida4 = "Melancia"
const comida5 = "Feijão"
const array = [comida1, comida2, comida3, comida4, comida5]

       // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
        
console.log(frase, array)


        
     //   c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
        
        
const comidaPreferida = prompt("Qual sua comida favorita")
const novaFrase = comidaPreferida.replaceAll(comida2)
console.log(comida2)

        
   // 3. Faça um programa, seguindo os passos:
        
      //  a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
      
      const listaDeTarefas = []
        
    //    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
        
const tarefa1 = prompt('Digite uma tarefa que voce vai fazerhoje');
listaDeTarefas.push(tarefa1);
const tarefa2 = prompt('Digite uma tarefa que voce precisa fazer hoje');
listaDeTarefas.push(tarefa2);
const tarefa3 = prompt('Digite uma tarefa que voce pretende fez');
listaDeTarefas.push(tarefa3);

   //     c) Imprima o array no console
   
   console.log(listaDeTarefas)
        
  //      d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
  
  const tarefaFeita = prompt('Digite o índice da tarefa realizada');
        
  //      e) Remova da lista o item de índice que o usuário escolheu.
  
  const retirar = parseFloat(tarefaFeita)-1;
        
  //      f) Imprima o array no console
        
 listaDeTarefas.splice(retirar, 1)
console.log(listaDeTarefas);
        
  /* Desafios
  1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços*/
  
  const frase = prompt("digite uma frase")
console.log([frase])

/*2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array*/


 let list = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(list.indexOf("Abacaxi"))
  
        
