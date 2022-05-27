// Exercício 1 

// Crie um função que receba uma string com o nome e outra string com uma data de nascimento
//  (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
//  "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const birthInfo  = (name : string, bday: string) : string => {
    const arrBday : string[] = bday.split("/");
    return `Olá me chamo ${name}, nasci no dia ${arrBday[0]} do mês de ${arrBday[1]} do ano de ${arrBday[2]}`;
}

console.log(birthInfo("Otacília", "20/04/1987"));


// Exercício 2

// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.
// input: várias possibilidades
// output: nenhuma

const verifyType = (param : any) : string => typeof param;

console.log(verifyType(0));

const exercicio2ReturnVoid = (varivelqualquer: any): void => {

	const tipo = typeof (varivelqualquer)

	console.log(`Exercicio 2 retorno void : Esta varivel é do tipo : ${tipo} `)
}

// Exercício 3 

// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 
// 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
// Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

// Considerando todas estas informações, crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas 
// em um`type`
// input: string, number, ENUM, number(opcional)
// output: type

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type InfoFilme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

const infosFilmeEscolhido = (nome : string, ano : number, genero : GENERO,
pontuacao? : number) : InfoFilme=> {

    if (!pontuacao) {
        const filme : InfoFilme = {
            nome: nome,
            ano: ano,
            genero: genero
        }
        return filme;
    } else{
        const filme : InfoFilme = {
            nome: nome,
            ano: ano,
            genero: genero,
            pontuacao: pontuacao
        }
        return filme;
    };
};

console.log(infosFilmeEscolhido("No Limite do Amanhã", 2014, GENERO.ACAO, 90));
console.log(infosFilmeEscolhido("No Limite do Amanhã", 2014, GENERO.ACAO));

// Exercício 4 

// O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:
// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]

// Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas
//  as pessoas do setor de marketing que trabalham presencialmente. 

enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
};

type PessoaColaboradora = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean
};

const filtrarMarketing = (listaColaboradores : PessoaColaboradora[]) : PessoaColaboradora[] => {
    const listaMarketing : PessoaColaboradora[] = listaColaboradores.filter((pessoa) => {
        return pessoa.setor === "marketing";
    });
    return listaMarketing;
};

console.table(filtrarMarketing([
	{ nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
]));


// Exercício 5 

// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 
// [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

type Users = {
    name: string,
    email: string,
    role: "user" | "admin"
};

const emailsAdmin = (listaUsers : Users[]) : string[] => {
    const emails : string[] = listaUsers
    .filter((user) => {
        return user.role === "admin";
    })
    .map((user) => {
        return user.email;
    });

    return emails;
};

console.log(emailsAdmin(
    [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ] 
));


// Exercício 6 

// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes.
//  Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente.Exemplo:

//  // entrada
// [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]
// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, 
// atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const listaNegativados = (listaTodosClientes : Cliente[]) : Cliente[] => {
    const listaSaldoAtualizado = listaTodosClientes.map((cliente) => {
        let novoSaldo : number = cliente.saldoTotal;
        for (let debito of cliente.debitos) {
            novoSaldo = novoSaldo - debito;
        }
        return {...cliente, saldoTotal: novoSaldo, debitos: []}
    })

    const listaNegativados : Cliente[] = listaSaldoAtualizado.filter((cliente) => {
        return cliente.saldoTotal < 0;
    });
    
    return listaNegativados;
};

console.table(listaNegativados(
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
));

// Exercício 7 

// Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa. 
// A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:
// const ajustaPreco = (preco :number): string => {
// 	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
// 	return "R$ "+valorAjustado
// }
// O seguinte array traz o estoque atual da empresa:
// [
// 	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
// 	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
// 	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
// 	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
// 	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
// 	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
// 	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
// ]
// Aproveitando a função já feita, faça uma nova função que receba o arrayde estoque como parâmetro, use a função ajustaPreco para corrigir os preços e retorne a lista de estoque 
// ordenada pela quantidade de cada produto. 

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',');
	return "R$ "+valorAjustado;
};

type InfoProduto = {
    nome: string,
    quantidade: number,
    valorUnitario: number
};

type InfoProdutoAjustado = {
    nome: string,
    quantidade: number,
    valorUnitario: string
};

const listaPrecoAjustado = (listaEstoque : InfoProduto[]) : InfoProdutoAjustado[] => {
    const listaEstoqueAjustado : InfoProdutoAjustado[] = listaEstoque.map((produto) => {
        const precoReal : string = ajustaPreco(produto.valorUnitario);
        return {...produto, valorUnitario: precoReal};
    })


    return listaEstoqueAjustado.sort( (atual, proximo) => atual.quantidade - proximo.quantidade);
};

console.table(listaPrecoAjustado(
    [
        { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
        { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
        { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
        { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
        { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
        { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
        { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
    ]
));


// Exercício 8 

// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”).
//  A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
const renovarCarteira = (nascimento : string, emissao : string) : boolean => {
    const agora : number = Date.now();

    const cincoAnos : number = new Date(198, 0, 1).getTime();
    const dezAnos : number = new Date(1985, 0, 1).getTime();
    const quinzeAnos : number = new Date(1980, 0, 1).getTime();
    const vinteAnos : number = new Date(1995, 0, 1).getTime();
    const cinquentaAnos : number = new Date(2020, 0, 1).getTime();

    const splitNascimento = nascimento.split("/");
    const splitEmissao = emissao.split("/");
    
    const nascimentoTimeStamp : number = new Date(Number(splitNascimento[2]), Number(splitNascimento[1]) -1, Number(splitNascimento[0])).getTime(); 
    const emissaoTimeStamp : number = new Date(Number(splitEmissao[2]), Number(splitEmissao[1]) -1, Number(splitEmissao[0])).getTime();
    
    const idadeTimeStamp : number = agora - nascimentoTimeStamp;
    const carteiraTimeStamp : number = agora - emissaoTimeStamp;
    
    if (idadeTimeStamp <= vinteAnos && carteiraTimeStamp >= cincoAnos) {
        return true;
    } else if (idadeTimeStamp > vinteAnos && idadeTimeStamp <= cinquentaAnos && carteiraTimeStamp >= dezAnos) {
        return true;
    } else if (idadeTimeStamp > cinquentaAnos && carteiraTimeStamp > quinzeAnos) {
        return true;
    } else {
        return false
    }
};

console.log(renovarCarteira("28/12/1995", "07/01/2021"));

// Exercício 9

// Uma operação matemática bastante utilizada em probabilidade e estatística é o **fatorial**, representado por um **!** (ponto de exclamação). 
// Ele consiste em realizar a multiplicação de todos os números (a partir de 1) até aquele colocado na operação. Veja os exemplos abaixo:

// - `3! = 3*2*1 = 6`
// - `4! = 4*3*2*1 = 24`
// - `5! = 5*4*3*2*1 = 120`
// - `6! = 6*5*4*3*2*1 = 720`

// Isso vale para todos os números inteiros não negativos (também chamados de "números naturais"). Dois valores para se tomar cuidado são:  `1! = 1` e `0! = 1` 
// (uma exceção da regra!).Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) 
// com as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra `mesa` são: `ames`, `maes`, `meas`, `emsa`, `smea` e muitos outros.

// A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para `mesa`, a quantidade é `4! = 24`

// Considerando tudo o que foi mencionado, escreva uma função que receba uma `palavra` (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

const quantidadeAnagramas = (palavra : string) : number => {
    let quantidadeAnag : number = 1;
    let numerosLetras : number = palavra.length;
    let i :number = numerosLetras;

    if (numerosLetras > 1) {
        while ( i > 1 ) {
            quantidadeAnag = quantidadeAnag * i;
            i--;
        }
    } else {
        return 1;
    }
    return quantidadeAnag;
};

console.log(quantidadeAnagramas("mesa"));