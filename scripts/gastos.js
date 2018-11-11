$(document).ready(function () {
    var aux = maxReceita
    $("#gastoTot").append(maxReceita)
    aux -= (1173 + 1466.88 + 5178.24 + 1218.78)
    $("#atual").append(aux)
    $("#transa").append(nomes.length)

    var k = 0

    for(i = 0; i < nomes.length; i++){
        if (tipoAdd[i] == "gasto"){
            $(".insumos").append(
                "<ul>" + nomes[i] + ", quantidade: " + quantidadeMedio[i] +
                "<ul>" + "Valor unitário médio: " + valorUnitarioMedio[i] + "</ul>" +
                "<ul>" + "Valor médio total: " + valorTotMedio[i] + "</ul>" +
                "<ul>" + "Valor unitário comprado: " + valorUnitarioUsado[i] + "</ul>" +
                "<ul>" + "Valor unitário total: " + valorToUsado[i] + "</ul>" +
                "</ul>" + "<hr>"

            )
        }else{
            $(".insumos").append(
                "<ul>" + "Entrada de dinheiro por: " + nomes[i] + "<ul>" +  
                "<ul>" + "Valor: " + quantEntrada[k] + "<ul>" +
                "<hr>"

            )    
            k++;
        }
    }
});