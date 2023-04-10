let num_cartas = Number(prompt('Você deseja jogar com quantas cartas ? '));
const gifs = ['bobrossparrot.gif','metalparrot.gif','fiestaparrot.gif','explodyparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];
let gif_utilizado = [];
let contagem_back = 0;

while (gif_utilizado.length < num_cartas/2) {
    const indice_aleatorio = Math.floor(Math.random() * gifs.length);
    if (!gif_utilizado.includes(gifs[indice_aleatorio])){
        gif_utilizado.push(gifs[indice_aleatorio])
    }
}
gif_utilizado = gif_utilizado.concat(gif_utilizado)
gif_utilizado.sort(() => Math.random() - 0.5)


while (!(Number.isInteger(num_cartas)) || (num_cartas < 4) || (num_cartas > 14) || (num_cartas % 2 != 0) ){
    num_cartas = Number(prompt('Você deseja jogar com quantas cartas ? Digite um número par, entre 4 e 14!!'));
};

let lista_cartas = document.querySelector('ul');

for (let i =0;num_cartas >i;i++){
    lista_cartas.innerHTML += `<li><div class = "carta" onclick="viralado(this)"><div class ="face carta1"><img src="./Arquivos uteis - Projeto 04 - Parrot Card Game/back.png"></div><div class="face back-face carta2"><img src="./Arquivos uteis - Projeto 04 - Parrot Card Game/${gif_utilizado[i]}"></div></div></li>`;//'<li class="carta front-face face"><img src="./Arquivos uteis - Projeto 04 - Parrot Card Game/back.png"></li><li class="carta back-face face"><img src="./Arquivos uteis - Projeto 04 - Parrot Card Game/back.png"></li>`;
};
let cont = 0;
let contagem_cartas_achasdas = 0;


function viralado(carta){
    cont++;
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");

    contagem_back = document.querySelectorAll('.back').length;
    if (contagem_back >= 2 ){
        contagem_back =0;
        verificacartas()
    }
}


function vira_de_volta(){
    const back = document.querySelectorAll('.back')
    const front = document.querySelectorAll(".front");
    for (let j = 0; j <= 1;j++){
        back[j].classList.remove("back");
        front[j].classList.remove("front");
    }  
    
}

function verificacartas(){
    const array_imagens = document.querySelectorAll('.back');
    const frente = document.querySelectorAll(".front");
    // console.log(array_imagens)
    if (array_imagens[0].innerHTML !== array_imagens[1].innerHTML){
        setTimeout(vira_de_volta, 1000);
    }
    else {
        contagem_cartas_achasdas ++;
        for (let k = 0; k < 2;k ++){
            array_imagens[k].classList.remove('back')
            frente[k].classList.remove('front')
            array_imagens[k].classList.add('back1')
            frente[k].classList.add('front1')
        }
        if (contagem_cartas_achasdas === num_cartas/2){
            setTimeout(fim_de_jogo,1000)
        }
        
    }}
function fim_de_jogo(){
    alert(`Você ganhou em ${cont} jogadas!`)
}





