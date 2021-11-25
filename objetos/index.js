/* Exercicio de interpletação de codigo
 1- Questão/ o que vai ser impreso no console
Resposta:
 Matheus Nachtergaele
Virginia Cavendish
 canal: 'Globo', horario: '14h' 

 2-Questão/ a- o que vai ser impresso no console/b- o que faz a sintex dos tres pontoa antes de um objeto?

 a- { nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }

b-ele permite que haja multiplicação de expressao do conteudo de array,assim multiplos elementos são permitidos e esperados

3-  q   uestão/ a* o que vai ser impresso no console?/ b* explique o valor impresso no console. Voce sabe porque isso acontece?

a- false
undefined

b- foi solicitado o valo do objeto pessoa.backend, sendo que o mesmo ja tem o valor como falso. e quanto a pessoa.altura é um valor que não foi definodo na declaração.

Exercicio de escrita de codigo
1- Questão
a-Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe 
como entrada um objeto e imprime uma mensagem no modelo abaixo: */

const pessoa = {
    nome: "Otacilia",
    apelidos: ["tacy", "othy", "taciana"]

}

console.log(`Eu sou ${pessoa.nome}, mas podem mim chamar de: ${pessoa.apelidos} `)

/*b-Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada
 um objeto e imprime uma mensagem no modelo abaixo: */

pessoa.novosApelidos = ["tacila, nan, morena"]

console.log(`Eu sou ${pessoa.nome}, mas podem mim chamar de: ${pessoa.novosApelidos} `)

/*2-  Questão

a- Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */
let pessoa1 = {
    nome: = "Ana";
    idade = 34;
    profissao = "Psicologa";
}
let pessoa2 = {
        nome: "otacilia",
        idade: 34,
        profissao: "Fisio"

        /*Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
        1. O valor de `nome`
        2. O numero de caracteres do valor `nome`
        3. O valor de `idade`
        4. O valor de `profissão`
        5. O numero de caracteres do valor `profissão`*/

        function minhaFuncao(pessoa) {
            let qt_letras_nome = pessoa.nome.length;
            let qt_letras_profissao = pessoa.profissao.length;
            let retorno = [pessoa.nome, qt_letras_nome, pessoa.idade, pessoa.profissao, qt_letras_profissao];
            console.log(retorno);
            return retorno;
        }

        minhaFuncao(pessoa1)
        minhaFuncao(pessoa1)
        minhaFunção(pessoa2)