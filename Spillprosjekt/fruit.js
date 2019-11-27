class Fruit{
  constructor(){
    this.xSpawn;
    this.xPos;
    this.yPos;
    this.xFart = 5;
    this.yFart = -4;
    this.d = 20;
    this.spawn = true;
    this.gravity = 0.01;
    this.points = 0;
    this.upForce = -5;
    this.hp = 3;
    this.sec = 0;
    this.randomFruit;
    this.img;
  }
  draw(){
    if(this.spawn == true){
      this.randomFruit = Math.ceil(Math.random()*4);
      this.xSpawn = Math.ceil(Math.random()*2);
      this.yPosDif = Math.ceil(Math.random()*300) - Math.ceil(Math.random()*100);
      this.spawn = false;
      if (this.xSpawn == 1){
        this.xPos = 0;
        this.yPos = 100 + this.yPosDif;
      }
      else if
      (this.xSpawn == 2){
        this.xPos = windowWidth;
        this.yPos = 100 + this.yPosDif;
      }
      if (this.randomFruit == 1) {
        this.img = watermelon;
      }
      else if (this.randomFruit == 2) {
        this.img = strawberry;
      }
      else if (this.randomFruit == 3) {
        this.img = pomegranate;
      }
      else if (this.randomFruit == 4) {
        this.img = pineapple;
      }
    }
    fill("orange");
    image(this.img, this.xPos, this.yPos, 50, 50);
  }
  move(){
    if (this.xSpawn == 1){
      this.xPos += this.xFart;
      this.yPos = this.yPos + (this.yPos*this.gravity) + this.upForce;
      this.upForce += 0.1;
    }
    else if
    (this.xSpawn == 2){
      this.xPos -= this.xFart;
      this.yPos = this.yPos + (this.yPos*this.gravity) + this.upForce;
      this.upForce += 0.1;
    }
  }
  cut(){
    if(this.xPos+20 > ninja.xPos && this.xPos+20 < ninja.xPos + ninja.width && this.yPos+20 > ninja.yPos && this.yPos+20 < ninja.yPos + ninja.height){
      this.spawn = true;
      this.points += 1;
      this.upForce = -3 - (Math.random()*4);
    }
  }
  score(){
    noFill();
    stroke("black");
    rect(windowWidth-200,20,150,40);
    noStroke();
    fill("green");
    rect(windowWidth-200, 20, this.points*3.4090909090909090, 40);
    textSize(30);
    fill("yellow");
    text("⚡" + this.points, windowWidth-150, 50);
    fill("green");
    if (this.points > 43) {
      this.points = 44;
      textSize(200);
      text("You Won", windowWidth/6, windowHeight / 2);
      textSize(70);
      text("Press               to restart", 200, windowHeight/1.4);
      fill("red");
      text("*ENTER*", 380, windowHeight/1.4);
      this.spawn = false;
      this.xPos = -10;
      this.yPos = -10;
      if (keyCode === ENTER) {
        location.reload();
      }
    }else if (this.hp == 0) {
      textSize(200);
      text("You Lost", windowWidth/6, windowHeight / 2);
      textSize(70);
      text("Press               to restart", 200, windowHeight/1.4);
      fill("red");
      text("*ENTER*", 380, windowHeight/1.4);
      this.spawn = false;
      this.xPos = -100;
      this.yPos = -100;
      if (keyCode === ENTER) {
        location.reload();
      }
    }
  }
  healthpoints(){
    if (this.hp == 3) {
      fill("green");
    } else if (this.hp == 2) {
      fill("orange");
    }else if (this.hp == 1) {
      fill("red");
    }else{
      fill("black");
    }
    textSize(100);
    text(this.hp, 40, 100);
    if (this.yPos > windowHeight) {
      this.sec += 1;
      text("-1", this.xPos, this.yPos-100);
      this.upForce = -5;
    }
    if (this.sec == 60) {
      this.spawn = true;
      this.hp -= 1;
      this.sec = 0;
    }
  }
}
