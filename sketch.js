
var gameState = 0;


var ball,Crying_ball;
var ball_animation
var enemy;
var ball_Img;
var boss;
var obstacle;
var background,startImg;
var ground;
var control_right;
var control_left;
var control_jump;
var button_play;
var start;
var level_1,level_2,level_3,levelImg;
var level_1Img,level_2Img,level3_Img;
var wall_1,wall_2,wall_3,wall_4,wall_5,wall_6,wall_7,wall_8,wall_9,wall_10,wall_11,wall_12,wall_13,wall_14,wall_15;
var wall_16,wall_17,wall_18,wall_19,wall_10,wall_21,wall_22,wall_23,wall_24,wall_25,wall_26,wall_27,wall_28; 
var wall_29,wall_30,wall_31,wall_32;
var level_1_maze,level_2_maze,level_3_maze;
var win,win_Img,win2,win2_Img,win_Image,win2_Image;

function preload(){
  startImg = loadImage("RunBall.jpg");
  ball_Img = loadImage("Player_01.png")
  ball_animation = loadAnimation("Player_01.png","Player_02.png");
  level_1Img = loadImage("level_1.png");
  level_3Img = loadImage("level_3.png");
  level_2Img = loadImage("level_2.png")
  button_play = loadImage("start.png");
  levelImg = loadImage("levelbg.jpg");
  level_1_maze = loadImage("level_1_maze.png");
  level_2_maze = loadImage("level_2_maze.png");
  win_Img = loadImage("Trophy.png");
  win2_Img =loadImage("Win_bg.jpg");
  win_Image = loadImage("Win2.png");
}


function setup() {
  createCanvas(1000,800);
  
  start = createSprite(500,400);
  start.scale = 0.5;
  start.addImage(button_play);
  start.visible = true;
  
  level_1 = createSprite(200,250);
  level_1.addImage(level_1Img);
  level_1.scale = 1;
  
  level_2 = createSprite(500,250);
  level_2.addImage(level_2Img);
  level_2.scale = 1;
  
  level_3 = createSprite(800,250);
  level_3.addImage(level_3Img);
  level_3.scale = 1;
  
  wall_1 = createSprite(54,390,22,650);
  wall_2 = createSprite(570,109,880,28);
  wall_3 = createSprite(450,690,830,29);
  wall_4 = createSprite(950,390,22,650);
  wall_5 = createSprite(320,220,22,250);
  wall_6 = createSprite(195,233,100,28);
  wall_7 = createSprite(144,286,22,150);
  wall_8 = createSprite(265,343,270,28);
  wall_9 = createSprite(100,466,100,28);
  wall_10 = createSprite(410,405,22,150);
  wall_11 = createSprite(230,410,22,120);
  wall_12 = createSprite(360,460,100,28);
  wall_13 = createSprite(320,530,22,120);
  wall_14 = createSprite(230,570,200,28);
  wall_15 = createSprite(410,620,22,100);
  wall_16 = createSprite(590,567,200,28);
  wall_17 = createSprite(590,620,22,100);
  wall_18 = createSprite(500,505,22,100);
  wall_19 = createSprite(680,470,200,28);
  wall_20 = createSprite(590,395,22,130);
  wall_21 = createSprite(545,350,100,28);
  wall_22 = createSprite(500,280,22,120);
  wall_23 = createSprite(460,230,100,20);
  wall_24 = createSprite(870,580,180,28);
  wall_25 = createSprite(765,340,22,270);
  wall_26 = createSprite(770,230,200,28);
  wall_27 = createSprite(680,280,22,120); 
  wall_28 = createSprite(590,170,22,120);
  wall_29 = createSprite(910,345,100,28);
  wall_30 = createSprite(860,405,22,130);
  wall_31 = createSprite(683,515,22,130);
  wall_32 = createSprite(592,562,200,28);
  
  ball = createSprite(100,160,40,40);
  ball.addImage(ball_Img);
  ball.scale = 0.8;
  
  win = createSprite(910,750,50,50);
  win.addImage(win_Img);
  win.scale = 0.19;
  
  win2_Image = createSprite(450,400);
}

function draw() {
  background(0);
  if(gameState === 0){
    background(startImg);
     level_Selector();
    start.visible = true;
    win.visible=false;
    win2_Image.visible = false;

  if(mousePressedOver(start)){
    gameState = 1;
    win.visible=false;
    win2_Image.visible = false;
  }
  }
  
  if(gameState === 1){
    background(levelImg);
    start.visible = false;
    level_1.visible = true;
    level_2.visible = true;
    level_3.visible = true;
    win2_Image.visible = false;
    
  if(mousePressedOver(level_1)){
    gameState = 2;
  } 
    
  if(mousePressedOver(level_2)){
    gameState = 3;
  }
    
  if(mousePressedOver(level_3)){
    gameState = 4;
  }}
  
  if(gameState === 2){
    background(level_1_maze);
    level_Selector();
    level1_sprites();
    win.visible=true;
    win2_Image.visible = false;
    textSize(25);
    fill("black");
    stroke("Orange");
    text("ʀᴇᴀᴄʜ ᴛʜᴇ ᴛʀᴏᴘʜʏ ʙᴇꜰᴏʀᴇ ᴛʜᴇ ᴛɪᴍᴇ ɪꜱ ᴜᴘ ʏᴏᴜ ʜᴀᴠᴇ 60 ꜱᴇᴄᴏɴᴅꜱ",150,50);

  if(ball.isTouching(win)){
     gameState = 5;
  }}
  
  if(gameState === 3){
    background(level_2_maze);
    level_Selector();
    level2_sprites();
    win.visible=true;
    win2_Image.visible = false;
    textSize(25);
    fill("Purple");
    stroke("Black");
    text("ʀᴇᴀᴄʜ ᴛʜᴇ ᴛʀᴏᴘʜʏ ʙᴇꜰᴏʀᴇ ᴛʜᴇ ᴛɪᴍᴇ ɪꜱ ᴜᴘ ʏᴏᴜ ʜᴀᴠᴇ 40 ꜱᴇᴄᴏɴᴅꜱ",150,50);
     
  if(ball.isTouching(win)){
     gameState = 5;
  }}
  
  if(gameState === 4){
    background(level_2_maze)
    level_Selector();
    level3_sprites();
    win.visible=true;
    win2_Image.visible = false;
    textSize(30);
    fill("Orange");
    stroke("Black");
    text("ʀᴇᴀᴄʜ ᴛʜᴇ ᴛʀᴏᴘʜʏ ʙᴇꜰᴏʀᴇ ᴛʜᴇ ᴛɪᴍᴇ ɪꜱ ᴜᴘ ʏᴏᴜ ʜᴀᴠᴇ 30 ꜱᴇᴄᴏɴᴅꜱ",150,50);
    
  if(ball.isTouching(win)){
     gameState = 5;
  }
  }
  
  if(gameState === 5){
    background(win2_Img);
    win2_Image.visible = true;
    win2_Image.addImage(win_Image);
    
    textSize(25);
    fill("Orange");
    stroke("black");
    text("ʏᴏᴜ ᴡɪʟʟ ʙᴇ ꜱᴇɴᴛ ᴛᴏ ʟᴇᴠᴇʟ ꜱᴇʟᴇᴄᴛᴏʀ ᴘᴀɢᴇ ɪɴ ꜰᴇᴡ ꜱᴇᴄᴏɴᴅꜱ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ",150,500);
    
    ball.visible = false;
    win.visible =false;
  }
 
  if(keyWentDown("RIGHT_ARROW")){
    ball.velocityX = 4;
    ball.addAnimation("Ball_moving",ball_animation);
  }   
  
  if(keyWentUp("RIGHT_ARROW")){
    ball.velocityX = 0;
    ball.addImage(ball_Img);
  }
  
  if(keyWentDown("LEFT_ARROW")){
    ball.velocityX = -4;
    ball.addAnimation("Ball_moving",ball_animation);
  }   
  
  if(keyWentUp("LEFT_ARROW")){
    ball.velocityX = 0;
    ball.addImage(ball_Img);
  }

  if(keyWentDown("UP_ARROW")){
    ball.velocityY = -4;
    ball.addAnimation("Ball_moving",ball_animation);
  }   
  
  if(keyWentUp("UP_ARROW")){
    ball.velocityY = 0;
    ball.addImage(ball_Img);
  }
  
  if(keyWentDown("DOWN_ARROW")){
    ball.velocityY = 4;
    ball.addAnimation("Ball_moving",ball_animation);
  }   
  
  if(keyWentUp("DOWN_ARROW")){
    ball.velocityY = 0;
    ball.addImage(ball_Img);
  }
  
  ball.bounceOff(wall_1);
  ball.bounceOff(wall_2);
  ball.bounceOff(wall_3);
  ball.bounceOff(wall_4);
  ball.bounceOff(wall_5);
  ball.bounceOff(wall_6);
  ball.bounceOff(wall_7);
  ball.bounceOff(wall_8);
  ball.bounceOff(wall_9);
  ball.bounceOff(wall_10);
  ball.bounceOff(wall_11);
  ball.bounceOff(wall_12);
  ball.bounceOff(wall_13);
  ball.bounceOff(wall_14);
  ball.bounceOff(wall_15);
  ball.bounceOff(wall_16);
  ball.bounceOff(wall_17);
  ball.bounceOff(wall_18);
  ball.bounceOff(wall_19);
  ball.bounceOff(wall_20);
  ball.bounceOff(wall_21);
  ball.bounceOff(wall_22);
  ball.bounceOff(wall_23);
  ball.bounceOff(wall_24);
  ball.bounceOff(wall_25);
  ball.bounceOff(wall_26);
  ball.bounceOff(wall_27);
  ball.bounceOff(wall_28);
  ball.bounceOff(wall_29);
  ball.bounceOff(wall_20);
  ball.bounceOff(wall_31);
  ball.bounceOff(wall_32);

drawSprites();
}

function level_Selector(){
  start.visible = false;
  ball.visible = false;
  level_1.visible = false;
  level_2.visible = false;
  level_3.visible = false;
  wall_1.visible = false;
  wall_2.visible = false;
  wall_3.visible = false;
  wall_4.visible = false;
  wall_5.visible = false;
  wall_6.visible = false;
  wall_7.visible = false;
  wall_8.visible = false;
  wall_9.visible = false;
  wall_10.visible = false;
  wall_11.visible = false;
  wall_12.visible = false;
  wall_13.visible = false;
  wall_14.visible = false;
  wall_15.visible = false;
  wall_16.visible = false;
  wall_17.visible = false;
  wall_18.visible = false;
  wall_19.visible = false;
  wall_20.visible = false;
  wall_21.visible = false;
  wall_22.visible = false;
  wall_23.visible = false;
  wall_24.visible = false;
  wall_25.visible = false;
  wall_26.visible = false;
  wall_27.visible = false;
  wall_28.visible = false;
  wall_29.visible = false;
  wall_30.visible = false;
  wall_31.visible = false;
  wall_32.visible = false;
}

function level1_sprites(){
  background(levelImg);
  background(level_1_maze);
  ball.visible = true;
  setTimeout(level1_sprites_invisible, 60000);  
}

function level2_sprites(){
  background(levelImg)
  background(level_1_maze)
  ball.visible = true;
  setTimeout(level1_sprites_invisible, 40000);  
}

function level3_sprites(){
  background(levelImg)
  background(level_1_maze)
  ball.visible = true;
  setTimeout(level1_sprites_invisible, 30000); 
}

function level1_sprites_invisible(){
  ball.visible = false;
  wall_1.visible = false;
  wall_2.visible = false;
  wall_3.visible = false;
  wall_4.visible = false;
  wall_5.visible = false;
  wall_6.visible = false;
  wall_7.visible = false;
  wall_8.visible = false;
  wall_9.visible = false;
  wall_10.visible = false;
  wall_11.visible = false;
  wall_12.visible = false;
  wall_13.visible = false;
  wall_14.visible = false;
  wall_15.visible = false;
  wall_16.visible = false;
  wall_17.visible = false;
  wall_18.visible = false;
  wall_19.visible = false;
  wall_20.visible = false;
  wall_21.visible = false;
  wall_22.visible = false;
  wall_23.visible = false;
  wall_24.visible = false;
  wall_25.visible = false;
  wall_26.visible = false;
  wall_27.visible = false;
  wall_27.visible = false;
  wall_29.visible = false;
  wall_30.visible = false;
  gameState=1;
}

function trophy(){
  win.visible = false;
}