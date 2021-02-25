let canvas = document.getElementById("snake"); // esta pegando o elemento canvas
let context = canvas.getContext("2d"); // ele redensira o desenho do canvas
let box = 32; // define que o jogo vai ser de 32 px

// olha minha cobra ;-------;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// direçoes
let direction = "right";

// essa funcion vai criar nosso backgrand 
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);// vai desenha o campo do jogo
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -=box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    snake.pop();

    let newHeadr = {
        x: snakeX,
        Y: snakeY
    }

    snake.unshift(newHeadr, 100);

}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

let jogo = setInterval(iniciarJogo, 100);