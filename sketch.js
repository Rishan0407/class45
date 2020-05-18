const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var canvas;
var pre;
var gameState=0;
var pre1;
var engine,world;
var distancing;
function setup() {
 engine= Engine.create();
  world=engine.world;
 canvas= createCanvas(displayWidth,displayHeight);
  pre=new namePage();
pre1=new Precaution();
img1=createSprite(10,175);
img2=createSprite(displayWidth-30,175);
img1.velocityX=6;
img2.velocityX=-6;
img1.visible=false;
img2.visible=false;
bodya=Bodies.rectangle(150,325,50,50);
bodyb=Bodies.rectangle(displayWidth-20,325,50,50);
distancing=new Const(bodya,bodyb)
}

function draw() {
  Engine.update(engine);
  background("yellow");  
  pre.display();
  if(gameState === 1){
    pre.hide();
    pre1.display();
    img1.visible=true;
   img2.visible=true;
   if(img1.collide(img2)){
     img1.destroy();
     img2.destroy();
     img3=createSprite(displayWidth/2,125);
   };
   distancing.display();
   rectMode("CENTER");
   rect(bodya.position.x,bodya.position.y,bodya.width,bodya.height);
   rect(bodyb.position.x,bodyb.position.y,bodyb.width,bodyb.height);
  };
  if(gameState === 2){
    pre.hide();
  };
  if(gameState === 3){
    pre.hide();
  };
  if(gameState === 4){
    pre.hide();
  };
  if(gameState === 5){
    pre.hide();
  };
  if(gameState === 6){
    pre.hide();
  };
  if(gameState === 7){
    pre.hide();
  };
  if(gameState === 8){
    pre.hide();
  };

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bodya,{x:mouseX,y:mouseY});
}