var fixedRect, movingRect;
var object1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(20, 800,80,30);
  object1.shapeColor = "green";
  object1.debug = true;
  object1.velocityY = +5;



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);  
  
  drawSprites();



}


