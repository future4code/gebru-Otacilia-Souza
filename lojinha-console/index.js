var produtos_alimento = [];
var produtos_brinquedo = [];


function novoAlimento(nome, volume, preco, validade, quantidade){

    produtos_alimento.forEach(objeto => {
        if(objeto.nome === nome){
            objeto.quantidade = quantidade;

            return true;
        }
    });


    let alimento = {
        nome: nome,
        volume: volume,
        preco: preco,
        validade: validade,
        quantidade: quantidade,
    }

    produtos_alimento.push(alimento);

    return true;
}

function novoBrinquedo(nome, preco, classificacao_indicativa, quantidade){

    produtos_brinquedo.forEach(objeto => {
        if(objeto.nome === nome){
            objeto.quantidade = quantidade;

            return true;
        }
    });

    let brinquedo = {
        nome: nome,
        preco: preco,
        classificacao_indicativa: classificacao_indicativa,
        quantidade: quantidade,
    }

    produtos_brinquedo.push(brinquedo);

    return true;
}


function abrirLoja(){

    novoAlimento("disqueti mini ovos","500","17,50","10","10/06/2022");
    novoAlimento("ovo de pascoa chocolate ao leite","500","40,00","25","25/07/2022");

    novoBrinquedo("coelho dançante", "50,00", "10 anos","50");
    novoBrinquedo("agarradinho no ovo","20,00","2 anos","80");

    menu();
}


function menu(){
    let opcao = prompt("1 - Vitrine \n2 - Compra \n3 - Zerar estoque");

    if(opcao === '1'){
       menuVitrine();
    }
}

function menuVitrine(){
    let tipo_produto = prompt("1 - Alimentos \n2 - Brinquedos");
    let mensagem = '';

    if(tipo_produto === '1'){
        produtos_alimento.forEach((objeto,index) => {
            mensagem += "-> nome: "+objeto.nome+"\n";             
        });
    }else if(tipo_produto === '2'){
        produtos_brinquedo.forEach((objeto,index) => {
            mensagem += "-> nome: "+objeto.nome+"\n";             
        });
    }else{
        alert('Tipo de produto indisponível');
        return false;
    }

    mensagem += "\n\nDeseja visualizar outros produtos?";

    let produto_selecionado = confirm(mensagem);

    if(produto_selecionado){
        menuVitrine();        
    }else{
        alert("Loja encerrada");

        return false
    }

}

abrirLoja();

