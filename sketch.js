var movingRect, fixedRect;


function setup() {
  createCanvas(1000,600);
  fixedRect=createSprite(200, 300, 80, 70);
  fixedRect.shapeColor="red";
  movingRect=createSprite(400, 240, 70, 50);
  movingRect.shapeColor="red";
}

function draw() {
  background(0);  
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ) {
      fixedRect.shapeColor="blue";
      movingRect.shapeColor="blue";
  }else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  
  drawSprites();
}