$(document).ready(function () {
    $(".main").load("main.html");
	/*Funções de direcionamento do menu, por enquanto, só há a mudança da tag <main> para a respectiva
	nova tela.
	Exemplo: Se foi clicado em "Home", todo o conteúdo entre a tag main será substituído.*/
    $("#gastosScreen").click(function () {
        $(".main").load("gastos.html");
    });

    $("#trusp").click(function () {
        $(".main").load("main.html");
    });

    $("#graficoScreen").click(function () {
        $(".main").load("grafico.html");
    });

    $("#addScreen").click(function () {
        $(".main").load("adicionar.html");
    });

    $("#inScreen").click(function () {
        $(".main").load("entrada.html");
    });
});