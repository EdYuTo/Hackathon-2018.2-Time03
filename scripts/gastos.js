$(document).ready(function () {
    var nomes = [];
    var quantidadeMedio = []
    var valorUnitarioMedio = []
    var valorTotMedio = []

    var quantidadeUsado = []
    var valorUnitarioUsado = []
    var valorToUsado = []


    nomes.push("Guarda napo de papel")
    nomes.push("Papel higiênico")
    nomes.push("Papel toalha")
    nomes.push("Água sanitária")

    quantidadeMedio.push(720)
    quantidadeMedio.push(1768)
    quantidadeMedio.push(576)
    quantidadeMedio.push(666)

    valorUnitarioMedio.push(2.19)
    valorUnitarioMedio.push(2.78)
    valorUnitarioMedio.push(9.43)
    valorUnitarioMedio.push(1.54)

    valorTotMedio.push(1576.80)
    valorTotMedio.push(2135.04)
    valorTotMedio.push(5431.68)
    valorTotMedio.push(1025.64)

    //Mais coisa 
    quantidadeUsado.push(720)
    quantidadeUsado.push(1768)
    quantidadeUsado.push(576)
    quantidadeUsado.push(666)

    valorUnitarioUsado.push(1.63)
    valorUnitarioUsado.push(1.91)
    valorUnitarioUsado.push(8.99)
    valorUnitarioUsado.push(1.83)

    valorToUsado.push(1173.60)
    valorToUsado.push(1466.88)
    valorToUsado.push(5178.24)
    valorToUsado.push(1218.78)

    for(i = 0; i < nomes.length; i++){
        $(".insumos").append(
            "<p>" + nomes[i] + "</p>" + 
            "<p>" + quantidadeMedio[i] + "</p>" + 
            "<p>" + valorUnitarioMedio[i] + "</p>" + 
            "<p>" + valorTotMedio[i] + "</p>" + 
            "<p>" + quantidadeUsado[i] + "</p>" + 
            "<p>" + valorUnitarioUsado[i] + "</p>" + 
            "<p>" + valorToUsado[i] + "</p>"
        )
    }
});
