


**#*Praticando JavaScript***
___
**#*Exercicio 1***

Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.

Resposta

```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

  const salarioFixo = 2000;
    const comissaoCarro = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05);
    const salarioFinal = salarioFixo + comissaoCarro;

    return salarioFinal;

}
```
___


**#*Exercicio 2***

As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

Resposta 

```
function calculaPrecoTotal(quantidade) {
 if ( quantidade >=12) return quantidade*1.0;
 else return quantidade*1.3;
}
```
___

**#*Exercicio 3***

Você foi contratado/a para fazer o sistema de cálculo de notas de uma escola. Crie uma função que receba 3 parâmetros: nota da primeira prova (`p1`), nota da segunda prova (`p2`) e nota dos exercícios (`ex`).

Seus sistema deve calcular a média ponderada desses três valores, onde os exercícios tem peso 1, a primeira prova tem peso 2 e a segunda prova tem peso 3.

Ao final, você deve retornar um conceito (A, B, C, D):

Se a média for maior ou igual a 9, retorne o conceito A
Se a média for menor que nove e maior ou igual a 7.5, retorne B
Se a média for menor que 7.5 e maior ou igual a 6, retorne C
Se a média for menor que 6, retorne D


Resposta 

```
function calculaNota(ex, p1, p2) {
  
let media = (ex+p1+p2)/3;
  
if(media >=9)return "A";
else if (media >= 7.5) return "B";
else if ( media >= 6) return "C";
else return "D";

}


```
___

**#*Exercicio 4***

Crie uma função que recebe um array de números e um número escolhido. A função deve retornar quantas vezes este número aparece no array.

Ex: se o array for [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] e o número escolhido for 4, sua função deve dizer: O número 4 aparece 3x

Para o mesmo array, se o número escolhido for 3, sua função deve retornar: Número não encontrado

Resposta
```

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let numeroRepete = 0
  let mensagem;
  
  for (let i=0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      numeroRepete ++
    }
  } 
  
    if (numeroRepete > 0){
      mensagem = `O número ${numeroEscolhido} aparece ${numeroRepete}x`
    } else {
      mensagem = "Número não encontrado"
    }
    
    return  mensagem;
}

```
___


**#*Exercicio 5***


Temos um array de animais diversos, onde cada bichinho é um objeto com as propriedades: nome e classificacao. A classificacao tem três valores possíveis: peixe, ave ou mamífero

Crie um novo array que tenha apenas os nomes dos animais, no formato de strings.

Observação: não altere o array de animais! Apenas o utilize para criar seu novo array utilizando a função map.

Resposta


```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

var nomes = animais.map(function(animal) { 
return animal.nome;

});
return nomes;

}

 
```

**#*Exercicio 6***

Temos um array de tarefas, onde cada tarefa é um objeto com as propriedades: titulo, status e tempo. O status tem três valores possíveis: todo (tarefa não iniciada), doing (tarefa em progresso) e done (tarefa terminada).

Crie um novo array que tenha apenas o nome das atividades terminadas

Observação: não altere o array de tarefas! Apenas o utilize para criar seu novo array utilizando as funnções filter e map.

Resposta


```
function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]
let tarefa = tarefas.filter( tarefa => (tarefa.status == "done"));
return tarefa.map(function(objeto) {
return objeto.titulo;  
});

return nomes;
}

```
