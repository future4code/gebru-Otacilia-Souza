const birthInfo = (name, bday) => {
    const arrBday = bday.split("/");
    return `Olá me chamo ${name}, nasci no dia ${arrBday[0]} do mês de ${arrBday[1]} do ano de ${arrBday[2]}`;
};
console.log(birthInfo("Otacília", "20/04/1987"));
const verifyType = (param) => typeof param;
console.log(verifyType(0));
const exercicio2ReturnVoid = (varivelqualquer) => {
    const tipo = typeof (varivelqualquer);
    console.log(`Exercicio 2 retorno void : Esta varivel é do tipo : ${tipo} `);
};
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const infosFilmeEscolhido = (nome, ano, genero, pontuacao) => {
    if (!pontuacao) {
        const filme = {
            nome: nome,
            ano: ano,
            genero: genero
        };
        return filme;
    }
    else {
        const filme = {
            nome: nome,
            ano: ano,
            genero: genero,
            pontuacao: pontuacao
        };
        return filme;
    }
    ;
};
console.log(infosFilmeEscolhido("No Limite do Amanhã", 2014, GENERO.ACAO, 90));
console.log(infosFilmeEscolhido("No Limite do Amanhã", 2014, GENERO.ACAO));
var SETORES;
(function (SETORES) {
    SETORES["MARKETING"] = "marketing";
    SETORES["VENDAS"] = "vendas";
    SETORES["FINANCEIRO"] = "financeiro";
})(SETORES || (SETORES = {}));
;
const filtrarMarketing = (listaColaboradores) => {
    const listaMarketing = listaColaboradores.filter((pessoa) => {
        return pessoa.setor === "marketing";
    });
    return listaMarketing;
};
console.table(filtrarMarketing([
    { nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETORES.MARKETING, presencial: true }
]));
const emailsAdmin = (listaUsers) => {
    const emails = listaUsers
        .filter((user) => {
        return user.role === "admin";
    })
        .map((user) => {
        return user.email;
    });
    return emails;
};
console.log(emailsAdmin([
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]));
const listaNegativados = (listaTodosClientes) => {
    const listaSaldoAtualizado = listaTodosClientes.map((cliente) => {
        let novoSaldo = cliente.saldoTotal;
        for (let debito of cliente.debitos) {
            novoSaldo = novoSaldo - debito;
        }
        return Object.assign(Object.assign({}, cliente), { saldoTotal: novoSaldo, debitos: [] });
    });
    const listaNegativados = listaSaldoAtualizado.filter((cliente) => {
        return cliente.saldoTotal < 0;
    });
    return listaNegativados;
};
console.table(listaNegativados([
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]));
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
const listaPrecoAjustado = (listaEstoque) => {
    const listaEstoqueAjustado = listaEstoque.map((produto) => {
        const precoReal = ajustaPreco(produto.valorUnitario);
        return Object.assign(Object.assign({}, produto), { valorUnitario: precoReal });
    });
    return listaEstoqueAjustado.sort((atual, proximo) => atual.quantidade - proximo.quantidade);
};
console.table(listaPrecoAjustado([
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]));
const renovarCarteira = (nascimento, emissao) => {
    const agora = Date.now();
    const cincoAnos = new Date(198, 0, 1).getTime();
    const dezAnos = new Date(1985, 0, 1).getTime();
    const quinzeAnos = new Date(1980, 0, 1).getTime();
    const vinteAnos = new Date(1995, 0, 1).getTime();
    const cinquentaAnos = new Date(2020, 0, 1).getTime();
    const splitNascimento = nascimento.split("/");
    const splitEmissao = emissao.split("/");
    const nascimentoTimeStamp = new Date(Number(splitNascimento[2]), Number(splitNascimento[1]) - 1, Number(splitNascimento[0])).getTime();
    const emissaoTimeStamp = new Date(Number(splitEmissao[2]), Number(splitEmissao[1]) - 1, Number(splitEmissao[0])).getTime();
    const idadeTimeStamp = agora - nascimentoTimeStamp;
    const carteiraTimeStamp = agora - emissaoTimeStamp;
    if (idadeTimeStamp <= vinteAnos && carteiraTimeStamp >= cincoAnos) {
        return true;
    }
    else if (idadeTimeStamp > vinteAnos && idadeTimeStamp <= cinquentaAnos && carteiraTimeStamp >= dezAnos) {
        return true;
    }
    else if (idadeTimeStamp > cinquentaAnos && carteiraTimeStamp > quinzeAnos) {
        return true;
    }
    else {
        return false;
    }
};
console.log(renovarCarteira("28/12/1995", "07/01/2021"));
const quantidadeAnagramas = (palavra) => {
    let quantidadeAnag = 1;
    let numerosLetras = palavra.length;
    let i = numerosLetras;
    if (numerosLetras > 1) {
        while (i > 1) {
            quantidadeAnag = quantidadeAnag * i;
            i--;
        }
    }
    else {
        return 1;
    }
    return quantidadeAnag;
};
console.log(quantidadeAnagramas("mesa"));
//# sourceMappingURL=ListaTypescript.js.map