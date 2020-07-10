var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,600,40);
	bobObject2 = new Bob(300,600,40);
	bobObject3 = new Bob(400,600,40);
	bobObject4 = new Bob(500,600,40);
	bobObject5 = new Bob(600,600,40);

	/*roofObject1 = new Roof(200,100,100,50);
	roofObject2 = new Roof(300,100,100,50);
	roofObject3 = new Roof(400,100,100,50);
	roofObject4 = new Roof(500,100,100,50);
	roofObject5 = new Roof(600,100,100,50);*/
	roofObject6 = new Roof(400,100,600,50);

	rope1 = new Rope(bobObject1.body, 200, 100)
	rope2 = new Rope(bobObject2.body, 300, 100)
	rope3 = new Rope(bobObject3.body, 400, 100)
	rope4 = new Rope(bobObject4.body, 500, 100)
	rope5 = new Rope(bobObject5.body, 600, 100)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  /*roofObject1.display();
  roofObject2.display();
  roofObject3.display();
  roofObject4.display();
  roofObject5.display();*/
  roofObject6.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-75, y:-75});
	}
}

