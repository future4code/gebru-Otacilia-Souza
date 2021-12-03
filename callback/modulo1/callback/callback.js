/*Exercico de interpretação de texto
1- Leia o código abaixo
a- O que vai ser impresso no console?

{ nome: "Amanda Rangel", apelido: "Mandi" } 0
{ nome: "Laís Petra", apelido: "Laura" } 1
{ nome: "Letícia Chijo", apelido: "Chijo" } 2

2-Leia o código abaixo?
a- O que vai ser impresso no console?

 ["Amanda Rangel",  "Laís Petra", "Letícia Chijo"]

3- Leia o codigo a baixo
a- o que vai ser impresso no console?

{ nome: "Amanda Rangel", apelido: "Mandi" }
 { nome: "Laís Petra", apelido: "Laura" }
 
 Exercico de escrita de codigo
 1-Dado o seguinte array de cachorrinhos que são 
 clientes de um pet shop, realize as operações pedidas
nos itens abaixo utilizando as funções de array map e filter:

a-Crie um novo array que contenha apenas o nome dos doguinhos*/
const arrayNomesPets = pets.map(nomePets);

//b) Crie um novo array apenas com os cachorros salsicha

const arrayPetsSalsicha = pets.filter((parametro) => {
    return parametro.raca === "Salsicha";
  });
  
  console.log(arrayPetsSalsicha);

 // c) Crie um novo array que possuirá mensagens para enviar para 
  //todos os clientes que são poodles. A mensagem deve ser: "Você 
  //ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

  const descontoPetsPoodle = (parametro) => {
    return parametro.raca === "Poodle";
  };
  
  const nomeDescontoPoodle = pets.filter(descontoPetsPoodle).map(nomePets);
  
  const fraseDesconto = nomeDescontoPoodle.map((parametro) => {
    return `Você ganhou um cupom de desconto de 30% para tosar o/a ${parametro}!`;
  });
  
  console.log(fraseDesconto);

 //2- Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
  //utilizando as funções de array map e filter:
  //a- Crie um novo array que contenha apenas o nome de cada item

  const nomeProdutos = produtos.map((parametro) => {
    return parametro.nome;
  });
  
  
 // b- Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% 
  //de desconto em todos eles


const descontoProdutos = produtos.map((parametro) => {
  const nomeProdutos = parametro.nome;
  const desconto = parametro.preco * 0.05;
  const precoProdutos = (parametro.preco - desconto).toFixed(2);

  return { nome: nomeProdutos, preco: precoProdutos };
});

console.log(descontoProdutos);

//c- Crie um novo array que contenha apenas os objetos da categoria Bebidas

const produtosBebidas = produtos.filter((parametro) => {
    return parametro.categoria === "Bebidas";
  });
  
  console.log(produtosBebidas);
// d- Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosYpe = produtos.filter((parametro) => {
    return parametro.nome.includes("Ypê");
  });
  
  console.log(produtosYpe);

// e- Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
  //Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

  const fraseCompraYpe = produtosYpe.map((parametro) => {
    const nomeProdutosYpe = parametro.nome;
    const precoProdutosYpe = parametro.preco.toFixed(2);
    return [`Compre ${nomeProdutosYpe} por ${precoProdutosYpe}`];
  });
  
  console.log(fraseCompraYpe);

  //--------------Desafios-----------------------------

  // 1- Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
 //a- Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
    
 const nomePokemons = pokemons.map((parametro) => {
    return parametro.nome;
  });
  
  console.log(nomePokemons.sort());
    
//b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
    
const tiposPokemons = pokemons.map((parametro) => {
    return parametro.tipo;
  });
  
  const simplificarTiposPokemons = tiposPokemons.filter((pokemon, tipo, array) => {
    return array.indexOf(pokemon) === tipo;
  });
  
  console.log(simplificarTiposPokemons);
