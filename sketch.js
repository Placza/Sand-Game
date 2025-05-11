var size = 1;
var grid;

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = new Grid(windowWidth, windowHeight, size);
  //grid.drawGrid();
}

function draw() {
  background(255, 255, 255);
  grid.update();

  if (mouseIsPressed === true) {
    let x = Math.round(mouseX / size) * size;
    let y = Math.round(mouseY / size) * size;
    grid.addParticle(x, y);
  }

  let fps = frameRate();
  fill('black');
  text(fps, 50, 50);
} 
