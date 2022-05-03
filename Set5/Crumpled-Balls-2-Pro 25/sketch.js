const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var binImg, binSupport;

function preload() {
    binImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    ball = new Paper();

    binSupport = createSprite(964, 520, 20, 20);
    binSupport.addImage(binImg);
    binSupport.scale = 0.45;

    dustBin1 = new Dustbin(902, 505, 10, 120);
    dustBin2 = new Dustbin(962, 565, 130, 10);
    dustBin3 = new Dustbin(1024, 505, 10, 120);
}

function draw() {
    background(0);
    Engine.update(engine);

    ground.display();
    ball.display();
    dustBin1.display();
    dustBin2.display();
    dustBin3.display();

    drawSprites();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 73, y: -75 });
    }
}