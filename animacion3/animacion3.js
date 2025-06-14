let t = 0;
function setup() {
  createCanvas(400, 400);
  stroke(255, 150);
  noFill();
}
function draw() {
  background(10);
  translate(width / 2, height / 2);
  t += 0.02;
  beginShape();
  for (let i = 0; i < 500; i++) {
    let a = i * 0.1;
    let r = i * 0.3 + sin(t + i * 0.02) * 20;
    let x = cos(a + t) * r;
    let y = sin(a + t) * r;
    vertex(x, y);
  }
  endShape();
}
