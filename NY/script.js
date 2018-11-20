const config = {
  text: "xd Nazarfa",
<<<<<<< HEAD
  gravity: 20
=======
  gravity: 25
>>>>>>> ef4299db463821b8b7a9b8cf33b8e7fd0121d65b
};

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let points;
let w, h;
let particles;
let planet;

function setup() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  window.addEventListener("resize", reset);
  canvas.addEventListener("mousemove", mousemove);
  reset();
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  drawText();
}

function drawText() {
  ctx.save();
<<<<<<< HEAD
  let fontSize = w * 0.1;
=======
  let fontSize = w * 0.15;
>>>>>>> ef4299db463821b8b7a9b8cf33b8e7fd0121d65b
  ctx.font = "bold " + fontSize + "px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"
  ctx.fillStyle = "#43ff00";
  ctx.shadowColor = "blue"
  ctx.shadowOffsetX = 18;
  ctx.shadowOffsetY = 30;
  ctx.shadowBlur = 10;
  ctx.fillText(config.text, w/2, h/2);
  ctx.restore();
  let image = ctx.getImageData(0, 0, w, h);
  let buffer32 = new Uint32Array(image.data.buffer);

  planet = new Planet(0, 0, config.gravity);
  particles = [];

  for(let x = 0; x < w; x++) {
    for(let y = 0; y < h; y++) {
      let index = y * w + x;
      let color = buffer32[index];
      if (color) {
        let particle = new Particle(x, y, x, y, color);
        particles.push(particle);
      }
    }
  }
  clear();
}

function mousemove(event) {
  let x = event.clientX;
  let y = event.clientY;
  planet.pos.x = x;
  planet.pos.y = y;
}


function clear() {
  ctx.clearRect(0, 0, w, h);
}


function draw() {
  clear();
  requestAnimationFrame(draw);

  let image = ctx.createImageData(w, h);
  let pixels = new Uint32Array(image.data.buffer);

  particles.forEach(p => {
    p.applyForceFromPlanet(planet);
    p.move();
    let x = Math.round(p.pos.x);
    let y = Math.round(p.pos.y);
    if(x >= 0 && x < w && y >= 0 && y < h) {
      pixels[x + w * y] = p.color;
    }
  });

  ctx.putImageData(image, 0, 0);
}

setup();
draw();
