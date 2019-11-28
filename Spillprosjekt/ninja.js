class Ninja{
  constructor(){

//Definerer variablene jeg trenger

     this.width = 27;
     this.height = 144;
     this.xPos;
     this.yPos;

//Dette er fra da jeg prøvde på lage animasjon av at sverdet gikk fra side til side men det ble for komplisert (gjelder alt i grått under)

    /* this.dx;
     this.rotate = 0;
     */
  }
  make(){
    this.xPos = mouseX - 12;
    this.yPos = mouseY - 133;

    //rotate(this.rotate);
    image(katana, this.xPos, this.yPos, this.width, this.height);
    //rotate(-this.rotate);
  }
  animation(){
    /*  this.dx = mouseX;
    if(this.dx - mouseX > 15) {
      this.rotate = 50;
    } else if (this.dx - mouseX < -15) {
      this.rotate = -50;
    }
    */
    if (fruits.points > 99) {
      this.width = 54;
      this.height = 288;
    }
  }
}
