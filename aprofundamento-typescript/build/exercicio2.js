let dadosCompletos = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros) => {
        const numerosOrdenados = numeros.sort((a, b) => a - b);
        let soma = 0;
        for (let num of numeros) {
            soma += num;
        }
        ;
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        };
        return estatisticas;
    }
};
console.log(dadosCompletos.obterEstatisticas([5, 4, 8, 1]));
console.log(dadosCompletos);
//# sourceMappingURL=exercicio2.js.map