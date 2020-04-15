const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg;
var constrainedLog; 
var length = 1; grid = 20;
var cols = 20;
var rows = 20;
var gameState = "Play";
var foodPos;
var snake;
var timer = 250;
var score = 0;
var snakearr = [];
function preload() {
  

}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    
    frameRate(5);
    world = engine.world;
    snake = new Snake(1,1);
    pickLocation();
}
function pickLocation(){
  foodPos = {
    x:20*(round(random(0,19))),
    y:20*(round(random(0,19))),
  };
}
function draw(){
    background(50);
       
    Engine.update(engine);
   // console.log(snake.x);
   // console.log(snake.y);
   // console.log(dist(foodPos.x,foodPos.y,snake.x,snake.y));
    //console.log(dist(snake.x,snake.y,snake.snake[i].x/2,snake.snake[i].y/2)) 
    console.log(key);
   fill(255,0,100);
   if(timer === 0){
    gameState = "Over";
  }
    if(snake.eat(foodPos.x,foodPos.y)){
      pickLocation();
    }
    fill("lightblue");
  textSize(20);
  textAlign(CENTER,CENTER);
  textFont("Ebrima");
  textStyle(BOLD);
  if(gameState == "Play"){
    text("Time: " + timer, 350,18);
  text("Score: " + score, 350,382);
  }
  
    console.log(gameState);
    console.log(timer);
    if(gameState === "Play" && timer > 0){
      timer --;
    }
    
    if(gameState === "Over"){
        fill("white");
        textSize(120);
        textAlign(CENTER);
        snake.dir(0,0);
        textFont("Arial");
        textStyle(NORMAL);      
        text(score,200,200);
        textSize(18);
        text("Refresh this page to Play Again")
    }
    fill(255,0,100);
    stroke(50);
    rect(foodPos.x, foodPos.y,grid,grid);
    if(gameState = "Play"){
      snake.over();
      snake.move();
      snake.display();
    }
}


function keyPressed(){
    if(keyCode === UP_ARROW && gameState==="Play"){
      snake.dir(0,-1);
    }
    if(keyCode === DOWN_ARROW && gameState==="Play"){
      snake.dir(0,1);
    }
    if(keyCode === RIGHT_ARROW && gameState==="Play"){
      snake.dir(1,0);
    }
    if(keyCode === LEFT_ARROW && gameState==="Play"){
      snake.dir(-1,0);
    }
    
  }
