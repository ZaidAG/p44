const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var groundBelow,globby
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  groundBelow=new Ground(400,670,900,40);
  globby=new Glob(0,540,40);
  evilMinions=new miniEvil(60,90,20,20);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  groundBelow.display();
  globby.display();
  evilMinions.display();
  drawSprites();
}