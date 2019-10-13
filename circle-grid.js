function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (var x = 20; x < width; x += 20) {
    for (var y = 20; y < height; y += 20) {
      circle(x, y, 15)
    }
  }
}
