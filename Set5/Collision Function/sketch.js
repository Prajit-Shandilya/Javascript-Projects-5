var Frect,Mrect;

function setup() {
  createCanvas(800,400);
  Frect=createSprite(200,200,20,20);
  Frect.shapeColor="blue";
  Mrect=createSprite(386,200,20,20); 
  Mrect.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  Mrect.x=World.mouseX;
  Mrect.y=World.mouseY;
  
  if(Mrect.x-Frect.x<Mrect.width/2+Frect.width/2
    &&Frect.x-Mrect.x<Mrect.width/2+Frect.width/2
    &&Mrect.y-Frect.y<Mrect.height/2+Frect.height/2
    &&Frect.y-Mrect.y<Mrect.height/2+Frect.height/2){
      Mrect.shapeColor="red";
      Frect.shapeColor="red";
    }else{Mrect.shapeColor="blue"
    Frect.shapeColor="blue"}

  drawSprites();
}