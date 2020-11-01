
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;
var ground;
//var box;
var box1;
var box2;
var box3;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670,width,20);
	
	box1 = new Box(1000,610,10,200);
	box1.shapeColor="yellow";
	box2 = createSprite(1070,625,150,50);
	box2.shapeColor="yellow";
	box3 = new Box(1150,605,10,200);
	box3.shapeColor= "yellow";
	paper = new Paper(200,450,20,20);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
}

 function draw(){
  
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box3.display();
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}

