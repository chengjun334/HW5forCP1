function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill()

  for (var i = 10; i <= 390; i = i + 10) {
    circle(200, 200, i);

  }
}
