var grid = new Array(9);
var maximoDeRodadas = 9;
var rodadaAtual = 1;
var jaAcabou = false;
$(document).ready(function(){
	$("#jogadorAtual").html("Jogador atual: "+ "X");

		$(".grid").click(function(){
				if(rodadaAtual <= 9){
					if(grid[this.id - 1] == undefined){
						var jogadorAtual = rodadaAtual % 2 == 1? "X" : "O";
						grid[this.id - 1] = jogadorAtual;
						$(this).html(grid[this.id - 1]);
						vencer(jogadorAtual);
						rodadaAtual++;
						$("#jogadorAtual").html("Jogador atual: "+ (rodadaAtual % 2 == 1? "X" : "O"));					
					}
					else{
						alert("Posição ja ocupada");
					}
				}
				if(rodadaAtual > 9){
					$("#jogadorAtual").html("Fim de jogo");	
					alert("Fim de jogo");
				}
		});
});


function vencer(jogadorAtual){
	var jogadorAtual;
	if(grid[0] == jogadorAtual && grid[1] == jogadorAtual && grid[2] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}
	if(grid[3] == jogadorAtual && grid[4] == jogadorAtual && grid[5] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}
	if(grid[6] == jogadorAtual && grid[7] == jogadorAtual && grid[8] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}


	if(grid[0] == jogadorAtual && grid[3] == jogadorAtual && grid[6] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}
	if(grid[1] == jogadorAtual && grid[4] == jogadorAtual && grid[7] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}
	if(grid[2] == jogadorAtual && grid[5] == jogadorAtual && grid[8] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}

	if(grid[0] == jogadorAtual && grid[4] == jogadorAtual && grid[8] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}
	if(grid[2] == jogadorAtual && grid[4] == jogadorAtual && grid[6] == jogadorAtual){
		alert(jogadorAtual+ " - venceu essa partida");
	}
}

function resetarJogo(){
	window.location.reload();
}