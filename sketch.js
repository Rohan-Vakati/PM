
var zombies, zombieImg
var shooter, shooterImg
var bullet
var bg, bgImg
function preload(){
  shooterImg = loadImage("shooter_2.png", "shooter_1.png", "shooter_3.png") 
  zombieImg = loadImage("zombie.png")
  bgImg = loadImage("bg.jpeg") 

}

function setup() {

bg = createSprite(displayWidth/2 -20, displayHeight/2 - 40, 20, 20 )
bg.addImage("bg", bgImg)
bg.scale = 1.1
  
shooter = createSprite(400, 500, 20, 40)
shooter.addImage("shooter", shooterImg)
shooter.scale = .5

zombies = createSprite(800, 500, 20, 40)
zombies.addImage("zombie", zombieImg)
zombies.scale = .25


  createCanvas(windowWidth,windowHeight);



}

function draw() {
  background(0); 



drawSprites()





}
