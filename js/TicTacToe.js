var grid = new Array(9);
var maximoDeRodadas = 9;
var rodadaAtual = 1;
var jaAcabou = false;
$(document).ready(function(){
	$("#jogadorAtual").html(rodadaAtual % 2 == 1? "	X" : " O");

	$(".grid").click(function(){

		if(!jaAcabou){
			if(rodadaAtual <= 9){
				if(grid[this.id - 1] == undefined){
					var jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
					grid[this.id - 1] = jogadorAtual;
					$(this).html(jogadorAtual);
					rodadaAtual++;
					$("#jogadorAtual").html(rodadaAtual % 2 == 1? " X" : " O");		
				}
				else{
					alert("Posição ja ocupada");
				}
			}
			if(rodadaAtual > 9){
				$("#jogadorAtual").html("Fim de jogo");	
				jaAcabou = true;
			}
		}
		else{
			
			alert("Jogo acabou");
		}	
	});
});
