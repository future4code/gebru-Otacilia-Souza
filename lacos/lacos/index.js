/* Exercícios de interpretação de código

1-O que o código abaixo esta fazendo? Qual o resultado  impresso no console?

Está associado um LOOP, que é uma estrutura que permite representar eventos que
 se repetem, faz um somatorio de 0 ate 4.
Logo o valor impreso sera 10.

2- Leia o codigo a baixo:
a) O que vai ser impresso no console?

Todos os numeros acima de 18, ou seja!
19, 21, 23, 25, 27, 30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
Se sim, o que poderia ser usado para fazer isso?

Não, para esses casos o para, ou mesmo o enquanto, são mais indicados.

3-Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

O resultado impresso é de 1 asterisco por linha vezes o número da linha, 
visto que o começo do para sempre volta a ser 0 a cada linha, ou seja!
 *, **, ***, ****,

 Exercícios de escrita de código

 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. */
    
 const bichosEstimacao = Number ( prompt ( 'Quantos bichinhos de estimação você tem?' ) )

  //  a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
  if ( bichosEstimacao === 0 ) {
    console . log ( "Que pena! Você pode adotar um animal de estimação!" )
    }
    

  //  b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
  i = 0
arrayNome = [ ]

while ( i < bichosEstimacao ) {
const nome = prompt ( 'Digite o nome dele (s)' )
i = i + 1
arrayNome . push ( nome )
}

        
    
 //   c) Por fim, imprima o array com os nomes dos bichinhos no console


console . log ( arrayNome )


/*2- Considere que você tenha acesso a um array  (chamado de 'array original') 
que é composto somente de números. Baseando-se nisso, crie uma função para 
cada um dos itens abaixo, realizando as operações pedidas:*/
const arrayOriginal = [ 20 , 35 , 40 , 55 , 60 ]


//a) Escreva um programa que imprime cada um dos valores do array original.

function arrayOriginal (){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    } ( deixe matriz de arrayOriginal ) {
    console.log ( arrayOriginal )
    }
    }
    
    imprimirArrayOriginal( )
  
    //b) Escreva um programa que imprime cada um dos valores do array original divididos por 10


function arrayOriginalDividoPor10 ( ) {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    } ( deixe divisão de matrizOriginal ) {
    
    console . log ( divisão / 10 )
    
    }
    
    }
    
    
    
    imprimirArrayOriginalDividoPor10 ( )
    
  // Escreva um programa que crie um novo array contendo, somente, os números pares do array
   //  original e imprima esse novo array


novoArray = [ ]

function imprimirNovoArray ( ) {

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} ( deixar novo de arrayOriginal ) {

if ( novo % 2 === 0 ) {

novoArray . push ( novo )

}

}

console . log ( novoArray )

}


imprimirNovoArray ( )

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: 
//"O elemento do índex i é: numero". Depois, imprima este novo array.

arrayStrings = [ ]

function imprimirStrings ( ) {
for ( deixe i = 0 ; i < arrayOriginal . comprimento ; i ++ ) {
const numero = arrayOriginal [ i ]
arrayStrings . push ( `O elemento do índex $ { i } é: $ { numero } ` )
}
console . log ( arrayStrings )
}

imprimirStrings ( )

//e) Escreva um programa que imprima no console o maior e o menor números
 //contidos no array original
