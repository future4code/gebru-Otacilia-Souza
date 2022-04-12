**#*Funções em JavaScript***



Função nada mais é que um bloco de código que pode ser invocado por meio de um nome.

para que a mesma possa funcionar precisa-se declarar a função por meio de uma "function" podendo ser declarado inicialmente ou não os ¹parâmetros desejados e dentro dela a operação a ser realizada ou seja o bloco de código que irá funcionar e que será invocado em seguida pelo nome passado no inicio seguido dos ²argumentos, que em seguida trara um retorno, este valor de retorno pode ser guardado dentro de uma variável, assim como também pode ser visualizada através do console.log. 

exemplo 1: guardado dentro da variavel:                                                                              

function calculaArea (altura, largura){                                                                                                     

const area = altura * largura                                                                							 					

return area																																				    	

  }	                                                                                                                                                                	}

​    exemplo 2:   evocado no console.log					



 function calculaArea (altura, largura){            

const areaCalculada = calculoArea(2,3)   

​	const area =  altura * largura           

   return area                                                                                                          

​	}

  console.log(area)      



**#*Tipos de declarações de funções***



Existem sintaxes diferentes para declaração de uma função a baixo veremos as duas mais utilizadas



*Declaração Simples*                                                                                             

let somaNumeros (num1. num2) {                                                              

return num1 + num2                                                                                           

}                                                                                                                              

const soma = somaNumeros( 1 + 2)                                                              





   *Declaração com arow function

 let somaNumeros  = (num1. num2) =>{

return num1 + num2

  }

 const soma = somaNumeros( 1 + 2)



**Obs:** ¹Parâmetros são valores de entrada, declarados na função.

​         ²Argumentos são os valores que retornara o resultado da função.





-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





**#*Objeto em JavaScript***



**#Definição: ** Objeto é uma  entidade independente que possui propriedades e tipos, assim como os objetos na vida real. 

Ex: Um lapís nada mais é que um objeto que possui inúmeras propriedades tais como, forma, tamanho, cor, forma, material de composição... e são estas propriedades que definem suas características, assim também ocorre no JavaScript.

**#Propriedades do objeto: **  Uma propriedade de um  objeto pode ser descrita com uma variavel que une-se ao objeto, assim como a variavel é para a  declaração de função ,o que destingue a variável da função ao objeto da função é que neste ultimo o objeto esta "ligada" ao Js, e suas propriedades são acessadas com o acréscimo de um ponto.

Exemplo: nomeDoObjeto.nomeDaPropriedade

​                                        lapis.cor

  

**Obs sintaxe:**O nome do objeto deve ser definida em uma variável .

​          O nome da propriedade difere entre maiusula e menuscula, ou seja, deve ser evocada sempre da mesma forma que foi declarada.

​          A propriedade é definida declarando uma chave e um um valor a si e esta declaração fica dentro das chaves.



Exemplo: 

const pessoa = {

nome: "otacilia";

idade: 34;

email: otacilias@ghmail.com

}

​         

Para se acessar o valor  declaramos uma variável na qual evocamos o nome do objeto + o valor do objeto como descrito anteriormente,



const nome#Funções em JavaScript

Função nada mais é que um bloco de código que pode ser invocado por meio de um nome.

para que a mesma possa funcionar precisa-se declarar a função por meio de uma "function" podendo ser declarado inicialmente ou não os ¹parâmetros desejados e dentro dela a operação a ser realizada ous eja o bloco de código que irá funcionar e que será invocado em seguida pelo nome passado no inicio segido dos ²argumentos, que em seguida trara um retorno, este valor de retorno pode ser guardado dentro de uma variável, assim como também pode ser visualizada por através do console.log. 

exemplo 1: guardado dentro da variavel:                                                                            

function calculaArea (altura, largura){                                                                                                

const area = altura * largura                                                                							 						

return area																																				

  }	                                                                                                                                                               

​																																							

const areaCalculada = calculoArea(2,3)    

 

exemplo 2: evocado no console.log

  function calculaArea (altura, largura){       

const area = altura * largura  

 return area	

 console.log(area)        



​                           

#Tipos de declarações de funções

Existem sintaxes diferentes para declaração de uma função a baixo veremos as duas mais utilizadas

Declaração Simples                                                                                           

let somaNumeros (num1. num2) {                                                             

return num1 + num2                                                                                          

}                                                                                                                           

const soma = somaNumeros( 1 + 2)            





​    *Declaração com arow function

 let somaNumeros  = (num1. num2) =>{

   return num1 + num2

   }

 const soma = somaNumeros( 1 + 2)





Obs: ¹Parametros são valores de entrada, declarados na função.

​          ²Argumentos são os valores  que retornam o resultado da função.



_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________-



Objeto em JavaScript

#Definição:  Objeto é uma  entidade independente que possui propriedades e tipos, assim como os objetos na vida real. 

Ex: Um lapis nada mais é que um pbjeto que possui inumeras propriedades tais como, forma, tamanho, cor, forma, material de composição... e são estas propriedades que definem suas caracteristicas, assim tambem ocorre no JavaScript.

#Propriedades do objeto:   Uma propriedade de um  objeto pode ser descrita com uma variavel que une-se ao objeto, assim como a variavel é para a  declaração de função ,o que destingue a variavel da função ao objeto da função é que neste ultimo o objeto esta "ligada" ao Js, e suas propriedades são acessadas com o acrescimo de um ponto.

Exemplo: nomeDoObjeto.nomeDaPropriedade

                                        lapis.cor

  





Obs sintaxe:O nome do objeto deve ser definida em uma variavel .

          O nome da propriedade difere entre maiuscula e minuscula, ou seja, deve ser evocada sempre da mesma forma que foi declarada.
    
          A propriedade é definida declarando uma chave e um um valor a si e esta declaração fica dentro das chaves.

Exemplo: 

const pessoa = {

nome: "otacilia";

idade: 34;

email: otaciDaPessoa = pessoa.nome

console.log)nomeDaInstrutora



Da mesma forma com os demais valores declarados, logo o codigo ficaria :



const  pessoa = {

nome: "otacilia";

idade: 34;

email: otacilias@ghmail.com

}

const nomeDaPessoa = pessoa.nome

console.log)nomeDaInstrutora



Toda declaração de objeto pode ser mutavel e para isso utiliza-se o **spread operator**  ou utilizando  notação de colchetese altera-se o valor desejado.



Exemplo 1:

const  pessoa = {                                                                                     

nome: "otacilia";                                                                                 

idade: 34;                                                                                           

email: otacilias@ghmail.com                                                          

}

Exemplo 2:

const  novaPessoa= {     

​    ... pessoa   

  nome: "Taciana";    

   Sobrenome: " tarara"



Exemplo 3:

const  pessoa = {         

nome: [otacilia] = "Flavia"  

 idade: [34] = 20

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



**#*Arrays***

Os arrays são objetos do tipo listas como qualquer outra lista que criamos no dia a dia e para agrupar os itens utiliza-se colchetes sendo separados por virgulas entre cada um , ou seja, ele armazena uma coleção objetos em uma única variaáel, sua estrutura contem um índice numérico e um elemento representado pelo índice numérico. este pode ser de qualquer tipo primitivo de dados e ate mesmo de um outro array.

pode ser declarado de diferentes formas 

exemplo:

var frutas =[ ]

neste exemplo o array é criado por meio de um array vazio, mas também pode conter elementos dentro de sua declaração com o o exemplo a baixo.



var frutas =[ḿaçã, banana, uva]



O acesso de cada item se faz de acordo com a posição do item, em js o seu index começa sempre pelo numero zero.



**#*Propriedades e métodos***



**#Propriedades **

length => mostra a quantidade de itens na lista.

exemplo:

var frutas =[ḿaçã, banana, uva]                                                     

console.log(fruta.length)

**Obs:** mostrara o valor 3





**#Metodos **

push ( )=> adiciona itens ao final da lista, ex:

var adicionar = frutas.push(ĺaranja);



pop ( )=> retira o ultimo item da lista, ex:

var ultimo = frutas.pop( ); 



shift ( )=> = remove item do inicio do array, ex:

var primeiro = frutas.shift ( )





  unshift ( )=> = adiciona item ao inicio do array, ex:

var primeiro = frutas.unshift ( morango)



indexof ( )=> = mostra o índice dentro do array, ex:

var indice = frutas. indexof ("morango")



incluides ( )=> mostra se existe o item (true) ou nao(false)ex:

var indice = frutas.incluides







**#*Map***



O map faz parte dos métodos de objetos do tipo array e funciona como uma estrutura de repetição, executando a ação solicitada e retornando um conteúdo novo.

o método map( ) é acionado por meio de um array utilizando uma função callback como argumento como no exemplo abaixo, o método map não faz alterações no conteúdo original, mas os elementos do array podem ser alterados por meio da função callback.

exemplo:

const listaDeFrutas = [ "maçã", "uva","banana"];

const listaEmMaiuscula = listDeFrutas.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){ 

return elemento.chaeAt(0).toUpperCase( )+elemento.slice(1)

}



**Obs:** a função charAt( ) le os caracteres de uma string, para pegar sua posição inicial



**#*Filter***

O filter ( ) usa estruturas de repetição para encontrar um elemento especifico dentro de um array, ou seja, ele filtra o conteúdo de um array em busca de um valor que foi determinado na função callback co mo veremos no exemplo a baixo:



exemplo 1:                                                                                                                              

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];                                                                                 

var retorno = numeros.filter(pares => (pares %2)== 0);                                            

   console.log(retorno);        

​                                                                                                                  

​    exemplo 2:                                                                                                                                                                                                                            

 var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio    Grande do Norte", "Santa Catarina", "Acre"]; 

var retorno= estados.filter( estadosComS  =>     (estadosComS.charAt(0) == "S"));    

​    console.log(resultado);                                                                                                                                            



no primeiro exemplo foi declarado um variavel com sequencia de array numerica e por meio do filter solicitamos o retorno dos numeros pares. no segundo foi declaradio uma variavel com sequencia de estados e por meio do filter, foi solicitado o retorno dos estados que inicia com a letra s.



**#*Diferenças entre Map e Filter***

Apesar de serem semelhantes, ambos possuem diferenças entre si, pois o apesar do map( ) não fazer alterações no array original ele retorna um novo array com as solicitadas como vimos a cima, quando foi solicitado a alteração das letras minusculas para maiúsculas. o filter ( ) também retorna um novo array, mas apenas com os elementos solicitados.





**#*Diferença entre os métodos push e pop e como usá-los***



Pop( ): este método remove o ultimo elemento dentro de um array, retornando-o como resposta. exemplo:

 var minhasFrutas = [ "banana", "uva", "melão"];

console.log (minhasFrutas)

var minhasFrutas = minhasFrutas.pop( )

console.log (minhasFrutaspop)



**obs:** o valor final  retornado sera melão



push( ): ao contrario do pop() este método adiciona elementos ao final de um array retornando-o acrescidos destes como no exemplo a baixo:

  

```
 var minhasFrutas = [ "banana", "uva", "melão"];
 minhasFrutas.push("manga","jacá");

console.log(fminhasFrutas); 

sera retornado um novo array com os seguintes itens: [ "banana", "uva", "melão""manga","jacá"]


```

**#*Método slice do array***



Este método não altera o array original mas retorna um copia deste com os objetos solicitados, ou seja retorna um apenas uma parte do array original como no exemplo a baixo:

var minhasFrutas = [ "banana", "uva", "melão", "Laranja'', "Limão"];

var citricos = minhasFrutas.slice[3, 4];

o resultado final sera um array que contem [ laranja e limão]

**#*Método splice do array***



Este método é utilizado tanto para inserir novos elementos como também, para excluir elementos já existentes. 

Para deletar um elemento dentro de um array são necessários passar dois argumentos que indicam a posição do primeiro objeto a ser excluído e o numero de objetos que serão excluídos no final. Assim o splice ( ) altera o array original retornando apenas os itens excluídos.

Exemplo:

var frutas = ["banana", "uva", "melão", "Laranja'', "Limão"];

var deletFrutas = frutas.splice( 0,3);

no exemplo a cima o splice retornar=a um array com os seguintes elementos [ "banana", "uva", "melão"]

Ma este método também pode inserir um ou mais elementos a um array existente, neste caso o splice ( ) altera o array original. exemplo:

var frutas = ["banana", "uva", "melão", "Laranja'', "Limão"];

var adicionarFrutas = frutas.splice( 2, 0, "melância",);

no exemplo descrito o array tera mais um elemento que sera inserido na segunda posição retornando o seguinte resultado:



console.log: [ "banana", "uva", "melancia","melão", "Laranja'', "Limão"]

