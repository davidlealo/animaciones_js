let t = 0;
function setup() {
  createCanvas(400, 400);
  stroke(255, 180);
  noFill();
}
function draw() {
  background(10);
  translate(width/2, height/2);
  t += 0.02;
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let r = 100 + 50 * sin(6 * a + t);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
