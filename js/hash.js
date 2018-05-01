var grid = new Array(9);
var maximoDeRodadas = 9;
var rodadaAtual = 1;

$(document).ready(function(){

	$(".grid").click(function(){

		if(rodadaAtual <= maximoDeRodadas){
			
			if(grid[this.id - 1] == undefined){
				var jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
				grid[this.id - 1] = jogadorAtual;
				$(this).html(jogadorAtual;);
				rodadaAtual++;
			}
			else{
				alert("Posição ja ocupada");
			}
			
		}
		else{
			alert("Jogo acabou");
		}	
	});
});
