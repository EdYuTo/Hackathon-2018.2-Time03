$(document).ready(function () {
	/*Funções de direcionamento do menu, por enquanto, só há a mudança da tag <main> para a respectiva
	nova tela.
	Exemplo: Se foi clicado em "Home", todo o conteúdo entre a tag main será substituído.*/
    $("#gastosScreen").click(function () {
        $(".main").load("gastos.html");
    });

    $("#graficoScreen").click(function () {
        $(".main").load("grafico.html");
    });
});