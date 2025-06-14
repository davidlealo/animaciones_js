let t = 0;
function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255, 100);
}
function draw() {
  background(10);
  translate(width/2, height/2);
  t += 0.01;
  for (let r = 50; r < 200; r += 10) {
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let x = r * cos(a);
      let y = r * sin(a);
      let offset = noise(x * 0.01, y * 0.01, t) * 20;
      vertex((r+offset)*cos(a), (r+offset)*sin(a));
    }
    endShape(CLOSE);
  }
}
