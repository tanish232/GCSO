var car;
var wall;
var speed;
var weight;
  function setup() {
  createCanvas(1600,400);
  speed=random(5,9);
  weight=random(400,1500);
  car= createSprite(50,200,50,50);
 
  wall= createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("white");  
  car.velocityX = speed;
  if(wall.x-car.x< car.width/2+wall.width/2) {
    car.velocityX=0;
    var deformation= 0.5*weight*speed*speed/22509
    if(deformation>180) {
    car.shapeColor="green";
    }
    if(deformation<180 && deformation>100) {
    car.shapeColor="yellow";
    }
    if(deformation<180) {
    car.shapeColor="red";
    }
    }
  drawSprites();
}