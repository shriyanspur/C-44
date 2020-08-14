var p1, p2;
var board, boardImg;
var dice, d1, d2, d3, d4, d5, d6;

function preload() {
  boardImg = loadImage("Board.jpg");
  
  d1 = loadImage("d1.png");
  d2 = loadImage("d2.png");
  d3 = loadImage("d3.png");
  d4 = loadImage("d4.png");
  d5 = loadImage("d5.png");
  d6 = loadImage("d6.png");
}

function setup() {
  createCanvas(600, 600);

  board = createSprite(300, 300);
  board.addImage(boardImg);
  board.scale = 0.299;

  p1 = createSprite(570, 590, 50, 25);
  p1.shapeColor = "blue";

  p2 = createSprite(570, 560, 50, 25);
  p2.shapeColor = "red";

  dice = createSprite(300, 300);
  dice.addImage(d6);
}

function draw() {
  background(0);

  drawSprites();
}