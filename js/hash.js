var grid = new Array(9);

var position = ["#1","#2","#3","#4","#5","#6","#7","#8","#9"];
var numeroDeRodadas = 9;
var rodadaAtual = 1;

$(document).ready(function(){

	$(".grid").click(function(){
		var jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$(this).html(jogadorAtual);
		rodadaAtual++;
	});
});
