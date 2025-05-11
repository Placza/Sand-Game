var size = 1;
var grid;
var font;
var fps;
let myShader;

function preload() {
  font = loadFont('assets/Inconsolata.otf');
  myShader = loadShader('sand.vert', 'sand.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(255, 255, 255);
  shader(myShader);  
  rect(0, 0, 20, 20);
}

