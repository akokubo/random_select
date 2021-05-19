const candidates = [
  "G186008",
  "G186024",
  "G186025",
  "G186040",
  "G186047",
  "G186058",
  "G186062"
];

class Queue {
  constructor(candidates) {
    this.elements = Array();
    this.shuffle(candidates);
  }
  shuffle(candidates) {
    let tmpArray = candidates.slice();
    while (tmpArray.length > 0) {
      let random_number = Math.floor(Math.random() * tmpArray.length);
      this.elements.push(tmpArray[random_number]);
      tmpArray.splice(random_number, 1);
    }
  }
  dequeue() {
    if (this.elements.length <= 0) {
      this.shuffle(candidates);
    }
    return this.elements.shift();
  }
}

let number = '未選択';
let queue = new Queue(candidates);

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60);
  textAlign(CENTER, CENTER);
  fill(0);
}

function draw() {
  background(204);
  text(number, width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function deviceTurned() {
  windowResized();
}

function mousePressed() {
  number = queue.dequeue();
}
