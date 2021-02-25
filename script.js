let canvas = document.getElementById("snake"); // esta pegando o elemento canvas
let context = canvas.getContext("2d"); // ele redensira o desenho do canvas
let box = 32; // define que o jogo vai ser de 32 px

// essa funcion vai criar nosso backgrand 
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);// vai desenha o campo do jogo
}

criarBG();