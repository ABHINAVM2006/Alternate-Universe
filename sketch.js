var sun,planet;
var sunImage;
function setup() {
  createCanvas(400,400);
  sun = createSprite(200,200,50,50);
  //sun = loadImage("u.jpg");
  planet = createSprite(100,100,50,50);
  planet2 = createSprite(300,100,50,50);
  planet2 = createSprite(300,350,50,50);
  rectMode(CENTER);
}

function draw() {
  background(0); 
  //sun = setImage("sunImage");
  if(World.frameCount % 15=== 0) {
    sun.scale = sun.scale+0.1;
  }
  if(sun.collide(planet)) {
    planet.distroy();
  }
  if(sun.collide(planet2)) {
    planet.distroy();
  }
  drawSprites();
}
