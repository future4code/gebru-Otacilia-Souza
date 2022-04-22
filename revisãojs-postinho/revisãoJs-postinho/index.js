
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entr
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    
        return  `NO comparador de igualdade ${a} ===${b} é ${a === b}`
        }
        console.log(checarIgualdade(358,65));


// c-)Faça uma função chamada "verificaSeEMaior"

function verificarSeMaior(a, b){



    if(a >b){
        return " numero a, true"
    }
  
  else {
    return " b,  true"
  }
  }
  
  console.log(verificarSeMaior(321, 2156));
  
  


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'=true
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    var usuario = {
        'nome': null,
        'anoNascimento': null,
        'senha': null,
        'nacionalidade': null,
    };
    
    const anoAtual = (new Date()).getFullYear();
    
    
    usuario.nome = prompt('Digite o nome do usuário:');
    usuario.anoNascimento = prompt('Digite o ano de nascimento do usuário:');
    
    if((parseInt(usuario.anoNascimento) + 18) <= anoAtual){
    
        usuario.senha = prompt('Digite a senha do usuário com no maximo 6 caracteres:');
        while(usuario.senha.length > 6){
            usuario.senha = prompt('Digite a senha do usuário com no maximo 6 caracteres:');
        }
    
        if(confirm("Essa é sua senha: '"+usuario.senha+"' ?")){
            usuario.nacionalidade = prompt('Digite a nascionalidade do usuário:');
    
            if(usuario.nacionalidade.toUpperCase() === 'BRASILEIRA' || usuario.nacionalidade.toUpperCase() === 'BRASILEIRO'){
                alert('Cadastro concluído com sucesso!');
            }else{
                alert('Cadastro permitido apenas para brasileiros');
            }
        }else{
            alert('Reinicie o cadastro!');
        }
    }else{
        alert('O cadastro só é permitido para maiores de 18 anos.');
    }
  
  
    return Object.keys(usuario).map((key) => usuario[key]);
  }
  
  
  console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------
const login = () => {

    const login="labenu"
    const senhaUsuario = prompt("Digite sua senha")
    if(senhaUsuario === login){
      console.log("usuario logado")
    } else{ console.log("senha invalida")
  };
    
    return "login"
    
    }
    
    console.log(login());
  
    
// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => [
       { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]



}
console.log(segundaDose("Barbara"));  
   

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for(let i = 0; i< usuarios.length; i++){
      if(usuarios[i].imunizacao =="incompleta"){
        console.log (`ola ${usuarios[i].nome} Suua imunização esta ${usuarios[i].imunizacao}
        por favor volte ao posto para tomar a segunda dose`)
      }
    }
  }
  console.log(avisoAosAtrasados());
  

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());