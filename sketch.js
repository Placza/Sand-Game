let myShader;
let x = -1.0;
let y = -1.0;
let size = 0.05;
let prev, next;

function preload() {
  font = loadFont('assets/Inconsolata.otf');
  myShader = loadShader('sand.vert', 'sand.frag');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  prev = createFramebuffer({format: FLOAT});
  next = createFramebuffer({format: FLOAT});
  noStroke();

  prev.begin();
  background(255);
  prev.end();
}

function draw() {
  if (mouseIsPressed) {
    x = mouseX / width;
    y = mouseY / height;
  }
  [prev, next] = [next, prev];
  next.begin();
  shader(myShader);
  myShader.setUniform('mouseCoordX', x);
  myShader.setUniform('mouseCoordY', y);
  myShader.setUniform('pixelSizeX', 1 / width);
  myShader.setUniform('pixelSizeY', 1 / height);
  myShader.setUniform('size', size);
  myShader.setUniform('prevFrame', prev.color);
  rect(0, 0, width, height);
  next.end();

  image(next.color, -width / 2, -height / 2, width, height);
}
