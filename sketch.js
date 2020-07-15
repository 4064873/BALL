var paper,Bin1,Bin2,ground;
var Bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1438, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper = new Paper(50,670,10);
  
  ground = new Ground(719,690,1438,10)

  Bin1 = new DustBin(1200,675,200,20,PI);
  Bin2 = new DustBin(1100,635,20,100,PI/2);
  Bin3 = new DustBin(1300,635,20,100,PI/2);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  Bin1.display();
  Bin2.display();
  Bin3.display();
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:23,y:-23});
}
}

