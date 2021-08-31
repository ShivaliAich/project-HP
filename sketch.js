
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var hp1,hp1IMG,slytherin,gryffindor,ravenclaw,hufflepuff, gryf, raven, slyther, huffle, bg, bgImg, hp2, hp3, hp4, hp2IMG, hp3IMG, hp4IMG, hogwarts
var dragon1, dragon2, dragon3, dragon4,dragon5,unicorn, phoenix
var playerCount, form,database,player,game, gameState =0
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10




function preload(){ 
  hogwarts= loadImage("images/hogwarts.png");
 bgImg = loadAnimation("images/bg.jpeg");
 hp1IMG = loadAnimation("images/luna.png");
 hp2IMG = loadAnimation("images/cedric.png");
 hp3IMG = loadAnimation("images/draco.png");
 hp4IMG = loadAnimation("images/harry.png");
 gryf = loadImage("images/gryff.png");
 raven = loadImage("images/raven.jpeg");
 slyther = loadImage("images/slyther.jpeg");
 huffle = loadImage("images/huffle.png");
 
  unicorn = loadImage("images/unicorns.png");
  phoenix = loadImage("images/phoenix.png");
}
function setup() {
  createCanvas(1450,750);
  engine = Engine.create();
    world = engine.world;

    database = firebase.database();
  bg = createSprite(725,375,1450,750);
  bg.addAnimation("background",bgImg);
  bg.scale = 3;
  hp1 = createSprite(400, 200, 50, 50);
  hp1.addAnimation("PC",hp1IMG);
  hp1.scale = 0.3;

  hp3 = createSprite(400, 500, 100, 100);
  hp3.addAnimation("PC",hp3IMG);
  hp3.scale = 0.35;
  
  hp4 = createSprite(1100, 200, 50, 50);
  hp4.addAnimation("PC",hp4IMG);
  hp4.scale = 0.35;

  hp2 = createSprite(1100, 500, 100, 100);
  hp2.addAnimation("PC",hp2IMG);
  hp2.scale = 0.7;

  slytherin = createSprite(50,50,50,50);
  slytherin.addAnimation("green door",slyther);
  slytherin.scale = 0.3;
  gryffindor = createSprite(1400,700,50,80);
  gryffindor.addAnimation("red door",gryf);
  gryffindor.scale = 0.3;
  ravenclaw = createSprite(50,700,50,70);
  ravenclaw.addAnimation("blue door",raven);
  ravenclaw.scale = 0.2;
  hufflepuff = createSprite(1400,50,70,70);
  hufflepuff.addAnimation("yellow door",huffle);
  hufflepuff.scale = 0.4;


  //creating the bad non-playing characters
 dragon1 = new Dragon(400,400,20,20); 
 
 

//game = new Game();
//game.readGameState(); 
//game.start();
}

function draw() {

    Engine.update(engine);
  //background(rgb(193,112,65));  
  
  
  if(playerCount ===4){
    game.updateGameState(1);
  }
  if(gameState ===1){
    game.play();
  }
  
  dragon1.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    hp1.y =hp1.y-10;
    console.log(hp1.y);
    hp2.y-=10;
    hp3.y-=10;
    hp4.y-=10;
  }
}
