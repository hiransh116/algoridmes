var movingRect,fixedRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,400);

  movingRect= createSprite(200,200,30,100);
  fixedRect = createSprite(150,130,50,100);
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="green";
  movingRect.debug= true;
  fixedRect.debug=true;

  rect1=createSprite(300,150,30,100);
  rect2=createSprite(590,150,50,100);
  rect1.shapeColor="blue";
  rect2.shapeColor="grey";
  rect1.debug=true;
  rect2.debug=true;
  rect2.velocityX=-4;
  rect1.velocityX=4;

 
}


function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
 if(movingRect.x-fixedRect.x<fixedRect.width/2+ movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";  
 } else{movingRect.shapeColor="yellow"
        fixedRect.shapeColor="green"}
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2){
   rect1.velocityX=rect1.velocityX*(-1);
   rect2.velocityX=rect2.velocityX*(-1);

  }
  if(rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect1.velocityY=rect1.velocityY*(-1);
    rect2.velocityY=rect2.velocityY*(-1);
 
  }
 
   
 drawSprites();
}