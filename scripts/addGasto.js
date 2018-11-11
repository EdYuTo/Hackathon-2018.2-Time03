$(document).ready(function () {
    $("#buttonGasta").click(function () {
        var name = $("#nameGasto").val();
        var valor = $("#valorGasto").val();
        var quant = $("#quantGasto").val();
        var data = $("#dataGasto").val();

        maxReceita -= valor
        nomes.push(name) 
        quantidadeUsado.push(quant)
        valorUnitarioUsado.push(quant/valor)
        valorToUsado.push(valor)
        data.push(data)
    });
});