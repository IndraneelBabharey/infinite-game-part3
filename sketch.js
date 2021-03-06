var gameState = "play"


var score;


var ground
var ninja, ninja_img, ninja_anima
var bg, bg_img
var star,star_anima,starGroup
var restart,restart_img
var gameover,gameover_img


function preload(){
  ninja_img = loadImage("ninja.png")
  bg_img = loadImage("bg.png")
  restart_img = loadImage("restart.png")
  gameover_img = loadImage("gameover.png")
  star_img = loadImage("star1.png")
  star_anima = loadAnimation("star2.png","star3.png")
  
}


function setup(){
  
  createCanvas(600,300)
  
  ground = createSprite(285,290,600,5)
  ground.visible = false
  
  
  ninja = createSprite(100,200,5,5)
  ninja.scale = 0.3
  ninja.addImage(ninja_img)
  
  starGroup = createGroup()
  
  score = 0
  
}


function draw(){
  
  background(bg_img)
  
  
  
  
  if(gameState === "play"){
   
    createStar()
    
    //gameover.visible = false;
 // restart.visible = false;
    
    if(keyDown("space")){
   ninja.velocityY=-5
    
  }
    
    ninja.velocityY = ninja.velocityY +0.8
    
    
    
    if(starGroup.isTouching(ninja)){
      gameState = "end"
    }
  
    
    
    
  
    
    
  }else if(gameState === "end"){
    
     ninja.velocityY = 0
    gameover = createSprite(300,100,10,10)
    
    gameover.addImage(gameover_img)
    gameover.scale = 0.5
    
    restart = createSprite(300,170,5,5)
    restart.addImage(restart_img)
    restart.scale = 0.2
    
    if(mousePressedOver(restart)){
      reset()
    }
    
  }
  
  
  
  
  
  
  
  
  ninja.collide(ground)
  
  
  
  drawSprites()
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
 fill("white")
  textSize(20)
  text("score : "+ score,420,30);



}


function createStar(){
  
  if(frameCount%150 === 0){
    
  star = createSprite(557,152,10,10)
  star.addAnimation("spinning",star_anima)
  star.y = Math.round(random(60,250))
  star.scale = 0.3
  star.velocityX = -1
    
    
    starGroup.add(star)
    
  
  }
 
  
}



function reset(){
  gameState = "play"
  gameover.visible = false;
  restart.visible = false;
  starGroup.destroyEach()
  score= 0
  
}











