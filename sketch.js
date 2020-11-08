var bullet, wall;

var weight, speed, thickness;

function setup() {
  createCanvas(800,400);
 
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(25,90);

  bullet = createSprite(50, 200, 25, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
 
  wall = createSprite(740, 200, thickness, height/2);
  wall.shapeColor = "white";
  
}

function draw() {
  background("purple"); 

  if ( wall.x-bullet.x < (bullet.width + wall.width)/2) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight *speed *speed/(wall.width * wall.width * wall.width);

    if (damage >= 10) {
      wall.shapeColor = "red";
    }

    if (damage <= 10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites(); 
}