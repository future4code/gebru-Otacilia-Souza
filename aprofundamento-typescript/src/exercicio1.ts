

// Resposta A

// const minhaString : string = 13; ERRO

// Resposta B


// const minhaString : string = 13; ERRO


// Resposta C


type pessoa ={
nome: string,
idade: number,
 corFavorita: string

}

const pessoa1: pessoa = {

    nome: "Otacilia",
    idade: 35,
    corFavorita: "Azul"
}

const pessoa2: pessoa = {

    nome: "Lais",
    idade: 30,
    corFavorita: "Verde"
}

const pessoa3: pessoa = {

    nome: "Viviam",
    idade: 35,
    corFavorita: "Rosa"
}

enum corArcoiris { 
    aZUL = "azul",
    Amarelo = "amarelo",
    Laranja = "laranja",
    Vermelho = "vermelho",
    Verde = "verde",
    Violeta = "violeta",

}

const pessoa4: pessoa = {

    nome: "Cristyan",
    idade: 30,
    corFavorita: corArcoiris.Violeta
}

console.log(pessoa4)