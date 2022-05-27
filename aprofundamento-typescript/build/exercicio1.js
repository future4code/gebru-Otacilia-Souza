const pessoa1 = {
    nome: "Otacilia",
    idade: 35,
    corFavorita: "Azul"
};
const pessoa2 = {
    nome: "Lais",
    idade: 30,
    corFavorita: "Verde"
};
const pessoa3 = {
    nome: "Viviam",
    idade: 35,
    corFavorita: "Rosa"
};
var corArcoiris;
(function (corArcoiris) {
    corArcoiris["aZUL"] = "azul";
    corArcoiris["Amarelo"] = "amarelo";
    corArcoiris["Laranja"] = "laranja";
    corArcoiris["Vermelho"] = "vermelho";
    corArcoiris["Verde"] = "verde";
    corArcoiris["Violeta"] = "violeta";
})(corArcoiris || (corArcoiris = {}));
const pessoa4 = {
    nome: "Cristyan",
    idade: 30,
    corFavorita: corArcoiris.Violeta
};
console.log(pessoa4);
//# sourceMappingURL=exercicio1.js.map