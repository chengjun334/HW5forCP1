function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);


  noFill()
  rectMode(CENTER);
  for (var i = 20; i <= 80; i += 20) {
    for (var x = 50; x <= 400; x += 100) {
      rect(x, 200, i, i)
    }
  }
}
