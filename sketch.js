
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  obstacle1 = new Obstacles(400,650,700,8);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  obstacle1.display();
  
  drawSprites();
 
}



