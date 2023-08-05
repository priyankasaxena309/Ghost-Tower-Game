var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Player;
var enemiesGroup, enemy1, enemy2, enemy3;
var cloudsGroup, cloud;
var backGroundImg;
var invisibleGround;

var score = 0;

var gameOver, restart;

function preload() {
    PlayerImg = loadImage("Images/Player.png");
    enemy1Img = loadImage("Images/Enemy 1.png");
    enemy2Img = loadImage("Images/Enemy 2.jpg");
    enemy3Img = loadImage("Images/Enemy 3.png");
    backGroundImg = loadImage("Images/Background Image.avif");
    cloud = loadImage("Images/Cloud.png");
}

function setup() {
    createCanvas(200, 600);
    Player = createSprite(200, 600);
    Player.addImage("playing",PlayerImg);
    Player.scale = 0.08;
}
function draw(){
    background(125);
    drawSprites();
}

