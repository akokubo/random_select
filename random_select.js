const candidates = [
  "未選択",
  "G186008",
  "G186024",
  "G186025",
  "G186040",
  "G186047",
  "G186058",
  "G186062"
];

let number = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60);
  textAlign(CENTER, CENTER);
  fill(0);
}

function draw() {
  background(204);
  text(candidates[number], width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function deviceTurned() {
  windowResized();
}

function mousePressed() {
  number = randomSelect();
}

function randomSelect() {
  return Math.floor(Math.random() * (candidates.length - 1)) + 1;
}
