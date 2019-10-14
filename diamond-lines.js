function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var y = 10; y <= 200; y = y + 10) {
      line(width/2-y, y, width/2 + y ,y)
       line(y, y+200, width-y ,y+200);
 }
}
