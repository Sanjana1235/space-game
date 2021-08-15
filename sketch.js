
var mainspacecraftimg, spacecraft1img, spacecraft2img,mainspacecraft, spacecraft1, spacecraft2;
var bullets,bulletsimg
var bulletsG,spacecraft1G,spacecraft2G
var gamestate = "mainscreen"
var restart, restartimg, gameover, gameoverimg, play, playimg
var space, spaceimg
var title, titleimg
var sign, signimg
var score = 0, highscore = 0

function preload() {


spaceimg = loadImage("1410357.png") 
mainspacecraftimg = loadImage("mainspaceship.png") 
titleimg = loadImage("Screen Shot 2021-06-01 at 3.47.37 PM-1.png")
spacecraft1img = loadImage("spaceship1.png")
spacecraft2img = loadImage("spaceship2.png")
bulletsimg = loadImage("bullets.png")
restartimg = loadImage("restarticon.png")
gameoverimg = loadImage("Gameover.png")
playimg = loadImage("images.png")
signimg = loadImage("Screen Shot 2021-06-01 at 3.55.24 PM.png")
//whole = loadSound("mixkit-negative-gutar-tone-2324.wave") 
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  
  mainspacecraft = createSprite(windowWidth/2,windowHeight-50);
  mainspacecraft.addImage(mainspacecraftimg)
  mainspacecraft.scale = 0.15
  mainspacecraft.visible = false
  
  title = createSprite(windowWidth/2+400,windowHeight/2.5,20,20)
  title.addImage(titleimg)
  title.visible = false 
  //title.debug = true
  title.setCollider("rectangle",-350,-10,700,100)
  
    restart = createSprite(windowWidth/2,windowHeight/2,20,20)
    restart.addImage(restartimg)
    restart.scale = 0.3
    gameover = createSprite(windowWidth*0.5,windowHeight/3,20,20)
    gameover.addImage(gameoverimg)
    gameover.scale = 0.7
    gameover.visible = false
    restart.visible = false
    play = createSprite(windowWidth/2,windowHeight/2,20,20)
    play.addImage(playimg)
    play.visible = false
    play.scale = 0.5
  
    sign = createSprite(windowWidth - 20,windowHeight - 7,20,20)
    sign.addImage(signimg)
    sign.scale = 0.6
    sign.visible = false
    //sign.debug = true
    //sign.setCollider("rectangle",-450,-10,700,100)
  
  spacecraft1G = createGroup();
  spacecraft2G = createGroup();
  spacecraft3G = createGroup();
  
  spacecraft4G = createGroup();
  spacecraft5G = createGroup();
  spacecraft6G = createGroup();
  bulletsG = createGroup();
  
  x=1
}

function draw() {
background(spaceimg);
if (gamestate == "mainscreen"){
    fill("yellow")
    //whole.play();

 
  play.visible = true
  sign.visible = true
  title.visible = true
  textSize(50)
  text.color = "white"
  text("Click play to start playing",windowWidth * 0.25,windowHeight/3)
  if(mousePressedOver(play)){
    gamestate = "play"
  }


  
} 
if(gamestate == "play"){
  fill("white");
  textSize(20);
  text("Score: " + score, windowWidth/2 + 400,100) 
  text("High Score: " + highscore, windowWidth/2 + 370,150) 
  mainspacecraft.visible = true
  mainspacecraft.x = mouseX
  play.visible = false
  sign.visible = false
  title.visible = false
 
 
  if(frameCount%20 == 0){
    if (x == 1){
      Spacecraft1();
      x=2
   
    }
    else if (x==2) {
     Spacecraft2();
      x=3
    }
    else if (x==3) {
     Spacecraft3();

      x=4
    }
    else if (x==4) {
     Spacecraft4();
      x=5
    }
    else if (x==5) {
     Spacecraft5();
      x=6
    }
    else if (x==6) {
     Spacecraft6();
      x=1
    }
   
  }
  
  if (keyWentDown("space")){
    createBullets();
  }
   if (bulletsG.isTouching(spacecraft1G)){
     spacecraft1G.destroyEach();
     bulletsG.destroyEach();
     score = score + 1
     
   }
     if (bulletsG.isTouching(spacecraft2G)){
     spacecraft2G.destroyEach();
     bulletsG.destroyEach();
     score = score + 1  
     
   }
  if (bulletsG.isTouching(spacecraft3G)){
   
     spacecraft3G.destroyEach();
         bulletsG.destroyEach();
    score = score + 1
     
   }
     if (bulletsG.isTouching(spacecraft4G)){
        
     spacecraft4G.destroyEach();
          bulletsG.destroyEach();
      score = score + 1
   }
  if (bulletsG.isTouching(spacecraft5G)){
   
     spacecraft5G.destroyEach();
          bulletsG.destroyEach();
      score = score + 1
   }
     if (bulletsG.isTouching(spacecraft6G)){
        
     spacecraft6G.destroyEach();
          bulletsG.destroyEach();
      score = score + 1
   }
    
     if(spacecraft1G.isTouching(mainspacecraft)||spacecraft2G.isTouching(mainspacecraft)||spacecraft3G.isTouching(mainspacecraft)||spacecraft4G.isTouching(mainspacecraft)||spacecraft5G.isTouching(mainspacecraft)||spacecraft6G.isTouching(mainspacecraft)|| spacecraft1G.y > windowHeight||spacecraft2G.y > windowHeight||spacecraft3G.y > windowHeight||spacecraft4G.y > windowHeight||spacecraft5G.y > windowHeight||spacecraft6G.y > windowHeight){
       gamestate = "end"
       
     }
   }  
  
  if (gamestate == "end"){
    gameover.visible = true
    restart.visible = true
    fill ("white");
    textSize(25);
    text("Score: " + score, 400,100) 
    text("High Score: " + highscore, 400,150) 
    spacecraft1G.destroyEach();
     spacecraft2G.destroyEach();
     spacecraft3G.destroyEach();
     spacecraft4G.destroyEach();
     spacecraft5G.destroyEach();
     spacecraft6G.destroyEach();
     mainspacecraft.visible = false
    bulletsG.destroyEach();
   
    textSize(20)
    text("Click restart to play again.", 190,500)
    if(mousePressedOver(restart)) {
      
      if(highscore<score){
        highscore = score;

      }
      score = 0;
      reset();
    }
    
  }
  

  drawSprites();
  
  
}

function Spacecraft1(){
  spacecraft1 = createSprite(random(50,windowWidth-50),20);
  spacecraft1.addImage(spacecraft1img)
  spacecraft1.scale = 0.5
  spacecraft1.velocityY = 4
  spacecraft1G.add(spacecraft1)
  spacecraft1.debug = false
  spacecraft1.setCollider("rectangle",0,0,100,100);
  spacecraft1.lifetime = 250
}
function Spacecraft2(){
  spacecraft2 = createSprite(random(50,windowWidth-50),20);
  spacecraft2.addImage(spacecraft2img)
  spacecraft2.scale = 0.1
  spacecraft2.velocityY = 4
  spacecraft2G.add(spacecraft2)
  spacecraft2.debug = true
  spacecraft2.setCollider("rectangle",0,0,500,500);
  spacecraft2.lifetime = 250
}
function Spacecraft3(){
  spacecraft3 = createSprite(random(50,windowWidth-50),20);
  spacecraft3.addImage(spacecraft1img)
  spacecraft3.scale = 0.5
  spacecraft3.velocityY = 4
  spacecraft3G.add(spacecraft3)
  spacecraft3.debug = true
  spacecraft3.setCollider("rectangle",0,0,100,100);
  spacecraft3.lifetime = 250
}
function Spacecraft4(){
  spacecraft4 = createSprite(random(50,windowWidth-50),20);
  spacecraft4.addImage(spacecraft2img)
  spacecraft4.scale = 0.1
  spacecraft4.velocityY = 4
  spacecraft4G.add(spacecraft4)
  spacecraft4.setCollider("rectangle",0,0,500,500);
  spacecraft4.lifetime = 250
}
function Spacecraft5(){
  spacecraft5 = createSprite(random(50,windowWidth-50),20);
  spacecraft5.addImage(spacecraft1img)
  spacecraft5.scale = 0.5
  spacecraft5.velocityY = 4
  spacecraft5G.add(spacecraft5)
  spacecraft5.setCollider("rectangle",0,0,100,100);
  spacecraft5.debug = true
  spacecraft5.lifetime = 250
}
function Spacecraft6(){
  spacecraft6 = createSprite(random(50,windowWidth-50),20);
  spacecraft6.addImage(spacecraft2img)
  spacecraft6.scale = 0.1
  spacecraft6.velocityY = 4
  spacecraft6G.add(spacecraft6)
  spacecraft6.setCollider("rectangle",0,0,500,500);
  spacecraft6.lifetime = 250
}

function createBullets(){
  bullets = createSprite(300,500,10,10)
  bullets.addImage(bulletsimg)
  bullets.velocityY = -15;
  bullets.x = mainspacecraft.x
  bullets.y = mainspacecraft.y
  bullets.scale = 0.02
  bulletsG.add(bullets)
  bullets.debug = false
}
function reset(){
  gamestate = "play"
  gameover.visible = false
  restart.visible = false
  mainspacecraft.visible = true 
}