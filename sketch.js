const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var ground_option = {isStatic: true};

  ground = Bodies.rectangle(400, 390, 800, 20, ground_option);
  World.add(world, ground);

  var bouncyBall = {restitution: 0.5, isStatic: true};

  ball = Bodies.circle(400, 20, 30, bouncyBall);
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background(0);

Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);  

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  
}

function mousePressed() {
   Matter.Body.setStatic(ball, false);
}