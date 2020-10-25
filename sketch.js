var mercury,venus,earth,mars;
var angle=0;
var angleSpeed=0.2;
var sunradius;
var mercuryimg,venusimg,earthimg,marsimg;
function preload(){
mercuryimg=loadImage("mercury.png")
venusimg=loadImage("venus.png");
earthimg=loadImage("earth (1).png");
marsimg=loadImage("m.png");
jupimg=loadImage("jupiter.png");
satimg=loadImage("saturn.png");
urimg=loadImage("uranus.png");
sunimg=loadImage("sun (1).png");
nepimg=loadImage("neptune.png");

}
function setup() {
  createCanvas(1800,900);
  //createSprite(400, 200, 50, 50)
 mercury=createSprite(0,0);
 mercury.addImage("mercury",mercuryimg);
 mercury.scale=0.2;
 venus=createSprite(-40,120);
 venus.addImage("venus",venusimg);
 venus.scale=0.1;
 earth=createSprite(-200,180);
 earth.addImage("earth",earthimg);
 earth.scale=0.2;
 mars =createSprite(-400,120);
 mars.addImage("mars",marsimg);
 mars.scale=0.3;
 jup=createSprite(-400,0);
 jup.addImage("jupiter",jupimg);
 jup.scale=0.3;
 sat =createSprite(-350,-170);
 sat.addImage("saturn",satimg);
 sat.scale=0.3;
 ur =createSprite(-40,-120);
 ur.addImage("uranus",urimg);
 ur.scale=0.4;
 nep=createSprite(-200,-200);
 nep.addImage("neptune",nepimg);
 nep.scale=0.4;
 sun=createSprite(-200,0);
 sun.addImage("venus",sunimg);
}
function draw() {
  background(45,34,193);  
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);

  if (sun.collide(mercury)) {
      mercury.destroy();
  }
  if (sun.collide(venus)) {
    venus.destroy();
}
if (sun.collide(earth)) {
  earth.destroy();
}
if (sun.collide(mars)) {
  mars.destroy();
}
if (sun.collide(jup)) {
  jup.destroy();
}
if (sun.collide(sat)) {
  sat.destroy();
}
if (sun.collide(ur)) {
  ur.destroy();
}
if (sun.collide(nep)) {
  nep.destroy();
}

if (frameCount % 30 === 0) {
      sun.scale = sun.scale + 0.01;
  }
  drawSprites();
}