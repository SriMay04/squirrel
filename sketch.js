var squirrelImg,lampImg,bgImg;
var canvas;
var squirrel;
var squ;
function preload(){
squirrelImg=loadAnimation("squirrel1.png", "squirrel2.png","squirrel3.png");
bgImg=loadImage("bg.png");
lampImg=loadImage("lamppost.png");
squImg=loadImage("squirrel2.png");

}

function setup(){
canvas=createCanvas(1500,500);
squirrel=createSprite(200, 200, 60, 60);
squirrel.addAnimation("jumping", squImg);
squirrel.scale=0.51

}

function draw(){
background(bgImg);

if(keyDown("UP_ARROW")){

  squirrel.velocityY=-6
  squirrel.velocityX=4
}

drawSprites();

}

function LampPosts(){


}

