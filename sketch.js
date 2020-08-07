
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin;
var ground,paper;

function setup() {
  createCanvas(900, 500);

  engine = Engine.create();
  
	world = engine.world;

	ground1 = new Ground(600,470,1200,20);
	dustbin1 = new Dustbin(640.3,408,20,105);
  dustbin2 = new Dustbin(740,453,180,20);
  dustbin3 = new Dustbin(839,407,20,105);	
  
  paper = new Paper(100,200,20)

  


}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  paper.display();
  
  
  
  
  drawSprites();
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x:66,y:-66});

  }
}

