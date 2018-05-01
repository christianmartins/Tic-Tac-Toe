var grid = new Array(9);
var numeroDeRodadas = 9;
var rodadaAtual = 1;
var jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";

$(document).ready(function(){
	$("#1").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#1").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#2").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#2").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#3").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#3").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#4").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#4").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#5").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#5").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#6").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#6").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#7").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#7").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#8").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#8").html(jogadorAtual);
		rodadaAtual++;
	});
	$("#9").click(function(){
		jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
		$("#9").html(jogadorAtual);
		rodadaAtual++;
	});
});
