var canvasWidth = 800;
var canvasHeight = 600;
var size = 3;
var grid;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255, 255, 255);
  grid = new Grid(canvasWidth / size, canvasHeight / size, size);
  //grid.drawGrid();
}

function draw() {
  grid.update();

  let fps = frameRate();
  console.log(fps);
} 

function mouseDragged() {
  grid.addCell(round(mouseX / size), round(mouseY / size));
}