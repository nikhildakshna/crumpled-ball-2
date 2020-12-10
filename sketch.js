
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var bin1, bin2, bin3, base;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ball = new paper(200,680,20);
	bin1 = new bin(600,680,200,PI/2);
	bin2 = new bin(bin1.x - 100,680,100,PI);
	bin3 = new bin(bin1.x + 100,680,100,PI);
    base = new ground(700);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

ball.display();
bin1.display();
bin2.display();
bin3.display();
base.display();


}

function keyPressed(){
if(keyCode === UP_ARROW){
ball.applyForce(paperObject.body,paperObject.body.position,{x: 85, y: -85});
}
}

