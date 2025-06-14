let t = 0;
let a = (x, y, d = mag(k = (4 + sin(y * 2 - t) * 3) * cos(x / 29), e = y / 8 - 13)) =>
  point(
    (q = 3 * sin(k * 2) + 0.3 / k + sin(y / 25) * k * (9 + 4 * sin(e * 9 - d * 3 + t * 2))) + 30 * cos(c = d - t) + 200,
    q * sin(c) + d * 39 - 220
  );

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(9);
  stroke(400, 96);
  t += PI / 240;
  for (let i = 10000; i--; )
    a(i, i / 235);
}
