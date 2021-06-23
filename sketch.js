var ISS,Spacecraft1,Spacecraft2,Spacecraft3,Spacecraft4
var hasDocked = false


function preload(){
  bg = loadImage('spacebg.jpg')
  spacecraft1 = loadImage('spacecraft1.png')
  spacecraft2 = loadImage('spacecraft2.png')
  spacecraft3 = loadImage('spacecraft3.png')
  spacecraft4 = loadImage('spacecraft4.png')
}



function setup() {
  createCanvas(800,400);
 Spacecraft1 = createSprite(400, 200, 50, 50);
 Spacecraft1.addImage(spacecraft1)
 Spacecraft1.scale = 0.3
 Spacecraft2 = createSprite(400, 200);
 Spacecraft2.addImage(spacecraft2)
 Spacecraft3 = createSprite(400, 200);
 Spacecraft3.addImage(spacecraft3)
 Spacecraft4 = createSprite(100, 200);
 Spacecraft4.addImage(spacecraft4)
}

function draw() {
  background(bg);  
  drawSprites();
}