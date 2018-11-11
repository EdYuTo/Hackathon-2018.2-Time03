$(document).ready(function () {
    $("#buttonGasta").click(function () {
        var name = $("#Item").val();
        var valor = $("#Preco").val();
        var quant = $("#Quantidade").val();

        maxReceita -= (valor * quant)

        nomes.push(name) 
        quantidadeUsado.push(quant)
        valorUnitarioUsado.push(quant)
        valorToUsado.push(valor * quant)

        valorUnitarioMedio.push(valor)
        quantidadeMedio.push(quant)
        valorTotMedio.push(valor * quant)
        
        tipoAdd.push("gasto")
        $(".main").load("gastos.html");
    });
});