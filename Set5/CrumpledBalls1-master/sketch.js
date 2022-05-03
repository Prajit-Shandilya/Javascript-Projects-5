const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, dustBin;

function setup() {
    createCanvas(1200, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, 370, width, 20);
    ball = new Paperball(200, 150, 20);
    dustBin = new Dustbin(1000, 350);

    Engine.run(engine);

}


function draw() {

    background(0);

    Engine.update(engine);
    ground.display();
    ball.display();
    dustBin.display();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 19, y: -19 });
    }
}