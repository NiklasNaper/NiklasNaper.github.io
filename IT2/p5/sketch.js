function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

let color = {
  r: 0,
  g: 0,
  b: 0
}

let size = 20;


let img = loadImage(Elusivebackground.png);

function draw() {
  fill("grey");
  rect(0,0,width,60);
  fill("blue");
  stroke("lightgrey");
  rect(40,20,20,20);
  fill(0,255,0);
  rect(80,20,20,20);
  fill(255,0,0);
  rect(120,20,20,20);
  fill(255,255,0);
  rect(160,20,20,20);
  fill(0,255,255);
  rect(200,20,20,20);
  fill(255,0,255);
  rect(240,20,20,20);
  fill("white");
  rect(1000,20,40,20);
  ellipse(900,30,15);
  ellipse(940,30,30);

  if (size<3) {
    size = 3;
  } else if(size>40){
    size = 40;
  }

  if(mouseIsPressed){
    noStroke();
    if(mouseX<60 && mouseX>40 && mouseY<40 && mouseY>20){
      color.r = 0;
      color.g = 0;
      color.b = 255;
      size = 20;
    } else if (mouseX<100 && mouseX>80 && mouseY<40 && mouseY>20){
      color.r = 0;
      color.g = 255;
      color.b = 0;
      size = 20;
    }
    else if (mouseX<140 && mouseX>120 && mouseY<40 && mouseY>20){
      color.r = 255;
      color.g = 0;
      color.b = 0;
      size = 20;
    }
    else if (mouseX<180 && mouseX>160 && mouseY<40 && mouseY>20){
      color.r = 255;
      color.g = 255;
      color.b = 0;
      size = 20;
    }
    else if (mouseX<220 && mouseX>200 && mouseY<40 && mouseY>20){
      color.r = 0;
      color.g = 255;
      color.b = 255;
      size = 20;
    }
    else if (mouseX<260 && mouseX>240 && mouseY<40 && mouseY>20){
      color.r = 255;
      color.g = 0;
      color.b = 255;
      size = 20;
    }
    else if (mouseX<1040 && mouseX>1000 && mouseY<40 && mouseY>20){
      color.r = 255;
      color.g = 255;
      color.b = 255;
      size = 10000000;
    }
    else if (mouseX<910 && mouseX>890 && mouseY<35 && mouseY>25){
      size = size - 1;
    }
    else if (mouseX<955 && mouseX>925 && mouseY<45 && mouseY>15){
      size = size + 1;
    }
    fill(color.r, color.g, color.b);
    circle(mouseX, mouseY, size);
  }

}
