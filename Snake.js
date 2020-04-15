class Snake{
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      'gravity':10
    }
    this.x = 0;
    this.y = 0;
    this.xMove = 0;
    this.xMoving = false;
    this.yMove = 0;
    this.yMoving = false;
    this.length = 0;
    this.snake = [];
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  move(){
    if(this.length === this.snake.length){
      for(var i = 0; i<this.snake.length-1; i++){
        if(gameState == "Play"){
          this.snake[i] = this.snake[i+1];
        }
      }
    }
    if(gameState == "Play"){
      this.snake[this.length-1] = [this.x,this.y];
    }
    

    if(this.x<190 && this.x>=0 && this.xMove>=0){
      this.x = this.x + this.xMove;
    } else if(this.x<200 && this.x>=10 && this.xMove<=0){
      this.x = this.x + this.xMove;
    }
    if(this.y<190 && this.y>=0 && this.yMove>=0){
      this.y = this.y + this.yMove;
    } else if(this.y<200 && this.y>=10 && this.yMove<=0){
      this.y = this.y + this.yMove;
    }
  }
  dir(x,y){
    this.xMove = x*10;
    this.yMove = y*10;
  }
  over(){
    for(var i = 0; i< this.snake.length; i++){
      var pos = this.snake[i];
      if(this.x-pos.x/2<1 && this.y-pos.y/2<1){
        this.length = 0;
        this.snake = [];
         
      } 
      //console.log(dist(this.x,this.y,pos.x/2,pos.y/2));
      
    }
    
  }
  eat(x,y){
    if(dist(this.x,this.y,x/2,y/2)<1){
      this.length++;
      score=score+round(random(1,2));
      return true;
    } else {
      return false;
    }
  }
  display() {
      push();
      fill("blue")
      stroke(50);
      for(var i = 0; i<this.snake.length; i++){
        rect(this.snake[i][0]*2, this.snake[i][1]*2, grid,grid);
      }
      translate(this.x, this.y);
        rect(this.x, this.y, grid,grid);
      
      
  }
}
