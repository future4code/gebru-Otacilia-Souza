//Exercícios de interpretação de código

//1- Questão

a- 10, 50
b- não apareceria nada

//2- questao

a - a função esta pedindo para o usuario inserir um texto, em seguida retornar em letras miusculas verificando se há a palavra cenoura. Neste caso ele convertera o texto em uma resposta de verdadeiro ou falso casao haja a paravra ordenada, guinorando a regra toLowerCase.

b- true, true, true;

//Exercícios de escrita de código

//1- Questão

 a- 
 
 function meuTexto() {
 const outroTexto = "Eu sou Otacilia, tenho 34 anos, moro em Belo Jardim e sou estudante e fisioterapeuta";
 return console.log(outroTexto);
 
 b-
 
 function dadosPessoais () {
    let nome = 'Otacilia';
    let idade = 34;
    let cidade = 'Belo Jardim';
    let profissão = 'fisioterapeuta';
    let frase = ` Eu sou ${nome},  tenho ${idade}, moro em ${cidade}, e sou ${profissão}`
    return frase
 
 
 2- Questão
 
 a-
 let number1 = 10;
let number2 = 30

function soma(a = 10, b = 10) {

    return a + b

}

b-
  
  function comp(a = 10, b = 20) {
    if (a >= b) {
        console.log('true');
    } else {
        console.log("false");
    }
}

console.log(comp());
  
c-

function par() {
    const number = 3;
    if (number % 2 === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

console.log(par());

d-

unction formatar() {
    let frase = " Eu amo a VIDA"
    format = frase.length + frase.toUpperCase()

    return format
}

console.log(formatar());

3-
  
  

 

