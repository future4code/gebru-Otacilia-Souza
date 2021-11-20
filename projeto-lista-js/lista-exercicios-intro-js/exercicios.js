// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
function calculoArea() {
    const base = prompt("digite a altura")
    const altura = prompt("digite a largura")
    return base * altura;
}
console.log(calculoArea())
}

// EXERCÍCIO 02
function imprimeIdade() {
 const anoAtual = prompt("digite sua idade atual")
const anoNascimento = prompt("digite seu ano de nascimento")
const idade = anoAtual - anoNascimento
console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  function calculoImc() {
    const peso = 90;
    const altura = 170;

    return (peso / (altura * altura))
}
console.log(calculoImc());

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
function informacoes() {
    const nome = prompt("Digite seu nome");
    const idade = prompt("Digite sua idade");
    const email = prompt("Digite seu e-mail")
    return ` Meu nome é ${nome}, tenho ${idade} anos, e meu email é ${email}.`
}

console.log(informacoes());

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  function favoriteColors() {
    const color1 = prompt("Quais suas cor favorita")
    const color2 = prompt("Qual sua segunda cor favorita")
    const color3 = prompt(" Qual sua terceira cor favorita")
    return [color1, color2, color3]
}

console.log(favoriteColors());

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
    const string = 'oi'
    return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula());
// EXERCÍCIO 07
function calculaIngressosEspetaculo() {
    const custo = 3000;
    const valorIngresso = 100;
    return custo / valorIngresso

}

console.log(calculaIngressosEspetaculo());

// EXERCÍCIO 08
function checaStringsMesmoTamanho() {
    const string1 = 'ola';
    const string2 = 'abc';
    if (string1.length === string2.length) {
        console.log("true");
    } else {
        console.log("false");
    }
    return

}

console.log(checaStringsMesmoTamanho());

// EXERCÍCIO 09
function retornaPrimeiroElemento() {
    let frases = ["estudar", "aprender", "trabalhar", "sucesso"]
    return frases[0];
}

console.log(retornaPrimeiroElemento())

// EXERCÍCIO 10
function retornaUltimoElemento() {
    let frases = ["estudar", "aprender", "trabalhar", "sucesso"]
    return frases[3];
}

console.log(retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    const frutas = ["banana", "maça", "laranja"];
    return frutas.reverse()

}

console.log(trocaPrimeiroEUltimo());

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
