$(document).ready(function () {
    $("#buttonEntrada").click(function () {
        var name = $("#nameEntrada").val();
        var valor = $("#quantidadeEntrada").val();

        maxReceita += valor
        nomes.push(name)
        quantEntrada.push(valor)
        tipoAdd.push("entrada")

        $(".main").load("gastos.html");
    });
});