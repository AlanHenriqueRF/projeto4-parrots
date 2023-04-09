let num_cartas = Number(prompt('Você deseja jogar com quantas cartas ? '));

while (!(Number.isInteger(num_cartas)) || (num_cartas < 4) || (num_cartas > 14) || (num_cartas % 2 != 0) ){
    num_cartas = Number(prompt('Você deseja jogar com quantas cartas ? Digite um número par, entre 4 e 14!!'));
};

let lista_cartas = document.querySelector('ul');
//lista_cartas.innerHTML += '<li class="carta"></li>';
for (let i =0;num_cartas >i;i++){
    lista_cartas.innerHTML += '<li class="carta" onclick =""><img src="./Arquivos uteis - Projeto 04 - Parrot Card Game/back.png"></li>';
};

